---
sidebarDepth: 2
---

# 官方插件

## koishi-plugin-common <Badge text="内置插件"/>

koishi-plugin-common 包含了一些基本插件，它们在你使用 `koishi` 库时是默认安装的。尽管如此，你仍然可以在 `koishi.config.js` 中显式地配置或禁用其中的一些功能：

```js
module.exports = {
  pluginConfig: {
    // 禁用此功能
    repeater: false,
    // 配置应答器
    replies: [{
      match: /^(.+)一时爽$/,
      reply: (_, str) => `一直${str}一直爽`,
    }],
  },
}
```

下面将介绍每个插件的功能。

### 插件：repeater

repeater 插件会自动监测聊天记录，并根据你的配置做出反应。可能的反应包括复读、打断复读、检测重复复读、检测打断复读。你还可以配置每个行为触发的条件和对应的输出文本。repeater 的完整配置如下：

```ts
type SessionSwitch = boolean | ((repeated: boolean, times: number) => boolean)
type SessionText = string | ((userId: number, message: string) => string)

interface RepeaterOptions {
  repeat: SessionSwitch
  interrupt: SessionSwitch
  repeatCheck: SessionSwitch
  interruptCheck: SessionSwitch
  interruptText: SessionText
  repeatCheckText: SessionText
  interruptCheckText: SessionText
}
```

例如，如果你想让你的 Bot 在一条信息已经复读过 5 次以上，且自己也已经复读过后，对任何打断复读的人以 50% 的概率出警，你可以这样配置：

```js
module.exports = {
  pluginConfig: {
    repeater: {
      repeatCheck: (repeated, times) => repeated && times >= 5 && Math.random() > 0.5,
      repeatCheckText: (userId) => `[CQ:at,qq=${userId}] 在？为什么打断复读？`,
    },
  },
}
```

::: tip 提示
这个插件的默认行为已经包含了复读、检测重复复读和检测打断复读，但是不包含打断复读。如果希望修改这种行为，你需要手动覆盖这其中的部分配置。
:::

### 插件：replies

replies 插件允许设置一套内置问答，就像这样：

```js
module.exports = {
  pluginConfig: {
    replies: [{
      match: 'awsl',
      reply: '爱我苏联',
    }, {
      match: /^(.+)一时爽$/,
      reply: (_, str) => `一直${str}一直爽`,
    }],
  },
}
```

其中 `match` 可以是一个字符串或正则表达式，用来表示要匹配的内容；`reply` 可以是一个字符串或传入字符串的函数，用来表示输出的结果。`replies` 数组会按照从上到下的顺序进行匹配。

如果想要加入更高级和用户可定义的问答系统，可以参见 [koishi-plugin-teach](#koishi-plugin-teach)。

### 插件：welcome

welcome 插件用于欢迎群中的新人。欢迎信息默认是“欢迎新大佬 @XXX！”。你也可以手动设置欢迎信息的内容：

```js
module.exports = {
  pluginConfig: {
    welcome: (userId) => `欢迎新大佬 [CQ:at,qq=${userId}]！群地位-1`,
  },
}
```

### 插件：requestHandler

requestHandler 插件用于处理好友和群申请。默认情况下 Koishi 会通过所有 1 级以上用户的好友申请，拒绝所有群申请。你可以手动设置拒绝和通过的函数：

```js
module.exports = {
  pluginConfig: {
    requestHandler: {
      requestFriend: (meta) => false, // 拒绝所有好友申请
      requestGroup: (meta) => true, // 通过所有群邀请
    },
  },
}
```

### 指令：help

help 指令用于输出全部或特定指令的使用方法。你可以这样调用它：

```sh
help                      # 打印一级指令列表
help -s                   # 打印快捷方式列表
help command-name         # 显示指令的使用方法，同时会打印该指令下一级指令列表
```

### 指令：echo

echo 指令用于发送一段文本。你可以这样调用它：

```sh
echo foo bar              # 向你发送 foo bar
echo -u 123 foo bar       # 向用户 123 私聊发送 foo bar
echo -g 456,789 foo bar   # 向群 456 和 789 同时发送 foo bar
```

### 指令：broadcast

broadcast 指令用于向所有 Bot 所在的群发送一段文本。你可以这样调用它：

```sh
broadcast foo bar baz     # 向所有群发送 foo bar baz
```

这看起来只是 echo 的一个简写版本，但实际上这两个指令有下面的差别：

- 对于多个 App 实例同时运行的情况，echo 只会让收到调用的 Bot 发送信息，broadcast 会同时控制所有 Bot 发送信息
- echo 的发送信息是几乎同时的，而 broadcast 会让每个要发送信息的 Bot 按照一定的时间间隔发送，这个时间间隔可以显式地设置：

```js
module.exports = {
  pluginConfig: {
    broadcast: {
      broadcastInterval: 1000, // 默认值为 1s
    },
  },
}
```

### 指令：contextify

contextify 指令可以让你临时切换上下文调用指令。例如这样（假设你在私聊上下文）：

```sh
teach foo bar                       # 无效，因为 teach 指令只对群上下文生效
contextify -g 456 -- teach foo bar  # 有效，相当于在群 456 调用 teach foo bar
```

尽管切换了调用上下文，但 contextify 指令的输出仍然产生在原上下文中。这在你想调用群指令的时候是很有用的。

### 指令：likeme

likeme 指令用于让四季酱为你点赞。点赞的次数可以自行配置（但不能超过 10 次）：

```js
module.exports = {
  pluginConfig: {
    likeme: {
      userFields: [/* 所需字段 */],
      likeCount (user) {
        return // 点赞次数
      },
    },
  },
}
```

::: warn 注意
由于 CoolQ 的限制，本功能只能对四季酱的好友使用。
:::

### 指令：callme

callme 指令用于修改四季酱对你的称呼。可以自行配置禁止使用的名称和响应的回复信息：

```js
module.exports = {
  pluginConfig: {
    callme: {
      validateName (name) {
        if (name.includes('[CQ:face')) return '称呼中禁止使用表情。'
      },
    },
  },
}
```

### 指令：admin

admin 指令可以直接修改数据库中的数据。你可以这样调用它：

```sh
admin show-usage teach          # 输出你今天 teach 指令的调用次数
admin -u 123 set-auth 2         # 将用户 123 的权限更改为 2 级
admin -g                        # 输出可用于群的操作列表
admin -g 456 set-flag no-emit   # 设置群 456 不主动发送任何信息
```

一般的调用格式为 `admin [target] [action <...args>]`，其中：

- `target` 用于指定针对目标，`-u <id>` 表示要修改的是用户，`-g <id>` 表示要修改的是群，缺省表示要修改的是自己
- `action` 用于指定要做的操作，对用户和群是不同的；缺省则会输出可用的操作列表
- `args` 是执行操作所需的参数，由 `action` 决定

如果你是插件开发者，你也可以为这个指令添加可用的操作：

```js
const { registerUserAction } = require('koishi-plugin-common')

registerUserAction('my-action', (meta, user, ...args) => {
  user.foo = 'bar'
  user._update()
  return meta.$send('用户信息已成功修改！')
}, ['foo'])
```

### 指令：rank

rank 指令可以输出用户排行。你可以这样调用它：

```sh
rank talkativeness        # 输出聊天排行
聊天排行                  # 输出聊天排行
rank wealth -g            # 输出全服财富排行
全服财富排行              # 输出全服财富排行
```

如你所见，rank 指令注册了一个中间件，因此你通常不需要直接调用这个指令，只需输入“XX 排行”即可。全服排行可以通过加前缀“全服”来实现。当然，所有的这些都是可以自定义的：

```ts
interface Rank {
  names: string[]
  options?: any
  groupOnly?: boolean
  title?: (meta: Meta, options: any) => string
  value: (user: UserData, meta: Meta, options: any) => number
  fields: UserField[]
  reverse?: boolean
  format?: (value: number) => string
  limit?: number
}

function registerRank (name: string, rank: Rank)
```

例如，上面的“财富排行”可以这样实现：

```js
const { registerRank } = require('koishi-plugin-common')

registerRank('wealth', {
  names: ['财富'],
  fields: ['money'],
  value: user => user.money,
  format: value => value + '￥',
  limit: 100,
})
```

## koishi-plugin-teach

## koishi-plugin-tools

## koishi-plugin-games

## koishi-plugin-monitor

## koishi-plugin-schedule

## koishi-plugin-webhook