---
sidebarDepth: 1
noOutboundLinks: true
# replace: \(#(\d+)\) -> ([#$1](https://github.com/koishijs/koishi/pull/$1))
# replace: \(([0-9a-f]{7})([0-9a-f]{33})\) -> ([$1](https://github.com/koishijs/koishi/commit/$1$2))
---

# koishi-test-utils 更新日志

本页面包括 koishi-test-utils 的更新日志。

## 1.1.0

koishi-test-utils 1.1.0 对应的 koishi 版本为 1.2.0。

### Features

- `testDatabase()` 第二个参数改为必选
- 新增 `createHttpServer()` 和 `createWsServer()`，用于模拟 CQHTTP 服务器
- 新增类 `MemoryDatabase`，用于在内存中模拟数据库
- 新增类 `MockedApp`，用于在无网络环境下测试

### Dependencies

- 将 jest 和 koishi-core 设为同版本依赖
- 新增了 get-port 依赖，移除了 express 依赖
- axios 版本从 0.19.0 更新至 0.19.1