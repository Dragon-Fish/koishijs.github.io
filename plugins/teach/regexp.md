---
sidebarDepth: 2
---

# 正则匹配

::: warning
正则匹配功能的最低使用权限为 3 级。你可以通过配置 [authority.regExp](./config.md#authority) 修改这个行为。
:::

## 基本用法

如果你希望匹配问题中的某些特征而不是问题整体，你可以使用 `-x` 进行正则表达式匹配。下面是一个例子：

<panel-view title="聊天记录">
<chat-message nickname="Alice" color="#cc0066"># ^(.+)一时爽$ 一直%1一直爽 -x</chat-message>
<chat-message nickname="Koishi" avatar="/koishi.png">问答已添加，编号为 1001。</chat-message>
<chat-message nickname="Alice" color="#cc0066">挖坑一时爽</chat-message>
<chat-message nickname="Koishi" avatar="/koishi.png">一直挖坑一直爽</chat-message>
</panel-view>

在这个例子中，`^` 和 `$` 分别匹配问答的起始和结尾，`.+` 匹配若干个非换行字符，`%1` 表示第一个括号内的文本。这样的语法极大地提升了问答捕获的自由度。

对于已有的问答，我们也可以使用 `-X` 来取消使用正则表达式匹配。

此外，我们约定在实际触发时，如果一个问题同时能够触发正则匹配和非正则匹配的回答，会优先触发非正则匹配的问答。因此不必担心正则匹配的教学会影响已有问答的触发效果。

## 支持的语法

下面是教学功能所支持的正则表达式语法：

- `\`：对后面的字符进行转义
- `.`：匹配除换行以外的任意字符
- `^`, `$`：匹配开头 / 结尾位置
- `[abx-z]`, `[^abx-z]`：匹配正值 / 负值字符集合
- `*`：匹配前面的子式任意次
- `+`：匹配前面的子式至少 1 次
- `?`：匹配前面的子式 0 次或 1 次
- `{n}`：匹配前面的子式 n 次
- `{m,n}`：匹配前面的子式至少 m 最多 n 次
- `x|y`：匹配 x 或 y
- `(patt)`：匹配 patt 并捕获

::: danger 警告
MySQL 5.7 使用的正则表达式规范是 POSIX 1003.2，这是一个很落后的版本。因此，如果你使用 koishi-plugin-mysql，下面的语法都是**不被支持**的：

- `\d`, `\D`：转义字符集
- `\b`, `\B`：单词边界
- `+?`, `*?`：非贪婪匹配
- `(?:`, `(?=`：非捕获组
:::

## 正则表达式与称呼匹配问答

TODO

## 搜索中的正则匹配

默认情况下，使用搜索功能的效果与实际触发时类似。换言之，当你使用问答搜索时，无论正则匹配还是非正则匹配到的问答都会被显示。但在一些情况下，我们可能会有其他不同的需求。

最常见的情况就是我们希望用正则表达式来搜索问答原文（这听起来与普通的搜索有点类似，但实际上这里的匹配关系是相反的）。对于这种情况，只需在搜索时附带一个 `-x` 即可。而此时的搜索结果也会显示完整的问题和回答（如果不使用正则匹配，由于你已经提供了完整的问题或回答，则不会重复显示）：

<panel-view title="聊天记录">
<chat-message nickname="Alice" color="#cc0066">## 一时 -x</chat-message>
<chat-message nickname="Koishi" avatar="/koishi.png">问题正则表达式“一时”的搜索结果如下：<br/>1001. 正则：^(.+)一时爽$，回答：一直$1一直爽</chat-message>
</panel-view>

另一种情况则是我们希望只显示那些非正则匹配到的结果。此时只需在搜索时附带一个 `-X` 即可。我们来对比一下搜索结果：

<panel-view title="聊天记录">
<chat-message nickname="Alice" color="#cc0066">## 挖坑一时爽</chat-message>
<chat-message nickname="Koishi" avatar="/koishi.png">问题“挖坑一时爽”的回答如下：<br/>1001. [正则] 一直$1一直爽</chat-message>
<chat-message nickname="Alice" color="#cc0066">## 挖坑一时爽 -X</chat-message>
<chat-message nickname="Koishi" avatar="/koishi.png">没有搜索到问题“挖坑一时爽”。</chat-message>
</panel-view>