(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{285:function(t,a,s){"use strict";s.r(a);var o=s(0),c=Object(o.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"用户信息管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户信息管理"}},[t._v("#")]),t._v(" 用户信息管理")]),t._v(" "),s("h2",{attrs:{id:"查看用户信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看用户信息"}},[t._v("#")]),t._v(" 查看用户信息")]),t._v(" "),s("p",[t._v("info 指令可以用于查看用户的信息：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("info                    ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 查看自己的用户信息")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("info qq                 ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 查看其他用户的信息")])])])]),s("p",[t._v("你将得到这样的结果：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",[s("code",[t._v("xxx，您的权限为 3 级。\n123456789 的权限为 2 级。\n")])])]),s("p",[t._v("与许多指令不同的是，info 指令查看个人信息所需的最低权限等级为 0 级，而查看他人信息默认需要 3 级权限。")]),t._v(" "),s("h3",{attrs:{id:"扩展要显示的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展要显示的信息"}},[t._v("#")]),t._v(" 扩展要显示的信息")]),t._v(" "),s("p",[t._v("我们也可以为这个指令添加其他输出结果。假设现在我们向用户数据添加了 money 字段表示用户余额，那么我们可以这样写：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { commonPlugin } ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),s("span",{staticStyle:{color:"#75715E"}},[t._v("// registerUserInfo 传入两个参数")]),t._v("\n"),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 第一个参数是回调函数，传入用户数据，返回输出结果")]),t._v("\n"),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 第二个参数是需要用到的字段列表（可选）")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("commonPlugin.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("registerUserInfo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("user")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("`余额：${user.money}￥`")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", [")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'money'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("])")])])])]),s("p",[t._v("再次运行程序，你会发现输出变成了：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",[s("code",[t._v("xxx，您的权限为 3 级。\n余额：100￥\n")])])]),s("h3",{attrs:{id:"显式获取用户名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显式获取用户名"}},[t._v("#")]),t._v(" 显式获取用户名 "),s("Badge",{attrs:{text:"1.5.0+"}})],1),t._v(" "),s("p",[t._v("默认情况下，info 指令会依次尝试使用 "),s("code",[t._v("meta.sender.card")]),t._v(", "),s("code",[t._v("meta.sender.nickname")]),t._v(" 作为你的称呼。换言之，你在不同的上下文中可能得到不同的称呼，同时查看他人信息时将只能使用 QQ 号来称呼。如果想要显示设置获取用户名的方法，你可以使用 "),s("code",[t._v("getUserName")]),t._v(" 配置项：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:"koishi.config.js"}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  plugins: [[")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'common'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("getUserName")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("user")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 这里展示的正是默认的行为")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 这个函数返回的值将作为该用户的称呼")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 如果没有任何输出则会使用 QQ 号")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (meta.userId ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" user.id ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("&&")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.sender) {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("        ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.sender.card ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("||")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.sender.nickname")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      }")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    },")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }]],")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),s("h2",{attrs:{id:"修改用户数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改用户数据"}},[t._v("#")]),t._v(" 修改用户数据")]),t._v(" "),s("p",[t._v("admin 指令可以直接修改数据库中的数据：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("admin show-usage teach          ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 输出你今天 teach 指令的调用次数")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("admin -u 123 set-auth 2         ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 将用户 123 的权限更改为 2 级")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("admin -g                        ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 输出可用于群的操作列表")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("admin -g 456 set-flag no-emit   ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("# 设置群 456 不主动发送任何信息")])])])]),s("p",[t._v("一般的调用格式为 "),s("code",[t._v("admin [target] [action <...args>]")]),t._v("，其中：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("target")]),t._v(" 用于指定针对目标，"),s("code",[t._v("-u <id>")]),t._v(" 表示要修改的是用户，"),s("code",[t._v("-g <id>")]),t._v(" 表示要修改的是群，"),s("code",[t._v("-G")]),t._v(" 表示要修改的是本群，缺省表示要修改的是自己")]),t._v(" "),s("li",[s("code",[t._v("action")]),t._v(" 用于指定要做的操作，对用户和群是不同的；缺省则会输出可用的操作列表")]),t._v(" "),s("li",[s("code",[t._v("args")]),t._v(" 是执行操作所需的参数，由 "),s("code",[t._v("action")]),t._v(" 决定")])]),t._v(" "),s("p",[t._v("调用 admin 指令所需的最低权限为 4 级，同时如果目标为用户，则目标用户的等级必须低于调用者。")]),t._v(" "),s("h3",{attrs:{id:"修改用户和群数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改用户和群数据"}},[t._v("#")]),t._v(" 修改用户和群数据")]),t._v(" "),s("p",[t._v("下面展示了所有内置的用于修改用户数据的操作：")]),t._v(" "),s("h4",{attrs:{id:"set-auth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-auth"}},[t._v("#")]),t._v(" set-auth")]),t._v(" "),s("ul",[s("li",[t._v("语法："),s("code",[t._v("admin -u <id> set-auth <auth>")])]),t._v(" "),s("li",[t._v("功能：修改用户权限，其中 auth 必须小于调用者自身的权限等级")])]),t._v(" "),s("h4",{attrs:{id:"set-flag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-flag"}},[t._v("#")]),t._v(" set-flag")]),t._v(" "),s("ul",[s("li",[t._v("语法："),s("code",[t._v("admin -u <id> set-flag <...flags>")])]),t._v(" "),s("li",[t._v("功能：设置用户的状态标签，所有写在 flags 中的状态标签会被设置为真；如果缺省则会显示可用的状态标签列表")])]),t._v(" "),s("h4",{attrs:{id:"unset-flag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unset-flag"}},[t._v("#")]),t._v(" unset-flag")]),t._v(" "),s("ul",[s("li",[t._v("语法："),s("code",[t._v("admin -u <id> unset-flag <...flags>")])]),t._v(" "),s("li",[t._v("功能：取消用户的状态标签，所有写在 flags 中的状态标签会被设置为假；如果缺省则会显示可用的状态标签列表")])]),t._v(" "),s("h4",{attrs:{id:"show-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-usage"}},[t._v("#")]),t._v(" show-usage")]),t._v(" "),s("ul",[s("li",[t._v("语法："),s("code",[t._v("admin -u <id> show-usage <...commands>")])]),t._v(" "),s("li",[t._v("功能：查看用户的 commands 指令调用情况；缺省则会显示全部以使用指令的调用情况")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果指令本身不带有 "),s("code",[t._v("maxUsage")]),t._v(", "),s("code",[t._v("minInterval")]),t._v(" 等配置，则不会对调用次数计数，因此也无法查看这类指令的调用情况。")])]),t._v(" "),s("h4",{attrs:{id:"clear-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear-usage"}},[t._v("#")]),t._v(" clear-usage")]),t._v(" "),s("ul",[s("li",[t._v("语法："),s("code",[t._v("admin -u <id> clear-usage <...commands>")])]),t._v(" "),s("li",[t._v("功能：清空用户的 commands 指令调用次数；缺省则会清空全部指令的调用次数")])]),t._v(" "),s("h3",{attrs:{id:"修改群数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改群数据"}},[t._v("#")]),t._v(" 修改群数据")]),t._v(" "),s("p",[t._v("下面展示了所有内置的用于修改群数据的操作：")]),t._v(" "),s("h4",{attrs:{id:"set-flag-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-flag-2"}},[t._v("#")]),t._v(" set-flag")]),t._v(" "),s("ul",[s("li",[t._v("语法："),s("code",[t._v("admin -g <id> set-flag <...flags>")])]),t._v(" "),s("li",[t._v("功能：设置群的状态标签，所有写在 flags 中的状态标签会被设置为真；如果缺省则会显示可用的状态标签列表")])]),t._v(" "),s("h4",{attrs:{id:"unset-flag-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unset-flag-2"}},[t._v("#")]),t._v(" unset-flag")]),t._v(" "),s("ul",[s("li",[t._v("语法："),s("code",[t._v("admin -g <id> unset-flag <...flags>")])]),t._v(" "),s("li",[t._v("功能：取消群的状态标签，所有写在 flags 中的状态标签会被设置为假；如果缺省则会显示可用的状态标签列表")])]),t._v(" "),s("h3",{attrs:{id:"添加可用操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加可用操作"}},[t._v("#")]),t._v(" 添加可用操作")]),t._v(" "),s("p",[t._v("我们也可以为这个指令添加可用的操作。还是以上面的 money 为例，我们可以添加一个 set-money 操作，就像这样：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { commonPlugin } ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("commonPlugin.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("registerUserAction")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'set-money'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("meta")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("user")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("value")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  user.money ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("+")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("value   ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 注意这里的 value 原来是字符串")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  user.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("_update")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()        ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 如果目标不是自己，则数据不会自动更新，因此这里手动更新了数据")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" meta.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'余额已更新！'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}, [")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'money'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("])")])])])]),s("h2",{attrs:{id:"初始化权限等级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化权限等级"}},[t._v("#")]),t._v(" 初始化权限等级")]),t._v(" "),s("p",[t._v("尽管机器人的管理者可以利用 admin 指令方便地在运行时控制他人的权限等级和其他数据，但是当机器人刚刚加群的时候想要批量给群友权限仍然是一件麻烦的事情。因此，koishi-plugin-common 提供了另一项技术用于在机器人初始化时批量初始化权限等级。")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:"koishi.config.js"}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  plugins: [[")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'common'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    authorizeUser: {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 设置玩家最低权限")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      123456789: 3,")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    },")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    authorizeGroup: {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 设置全群玩家最低权限为 2 级")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      111222333: 2,")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 分别设置每类成员的最低权限")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("      777888999: { member: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("1")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", admin: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("2")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", owner: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" },")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    },")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }]],")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),s("p",[t._v("启动你的机器人，插件会在启动后一段时间内完成对上述成员的权限等级初始化。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这个插件的功能是设置最低权限等级，因此如果出现账号已经存在，或者多项配置冲突的情况（例如加了多个群），插件会自动选择"),s("strong",[t._v("最高的权限值")]),t._v("进行设置。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("由于 CoolQ 的机制问题，机器人刚加某个群时可能无法获取成员列表，从而导致插件无法运行。遇到这种情况一般等待 1-2 天即可恢复正常。")])])],1)}),[],!1,null,null,null);a.default=c.exports}}]);