# nodejs 多进程

## 题目

nodejs 如何开启一个进程，进程之间如何通讯

## 进程 process 和线程 thread

进程，是操作系统进行资源调度和分配的基本单位，每个进程都拥有自己独立的内存区域（参考“堆栈模型”）。
一个进程无法直接访问另一个进程的内存数据，除非通过合法的进程通讯。

执行一个 nodejs 文件，即开启了一个进程，可以通过 `process.pid` 查看进程 id 。

线程，是操作系统进行运算调度的最小单位，线程是附属于进程的。一个进程可以包含多个线程（至少一个），多线程之间可共用进程的内存数据。<br>
如操作系统是一个工厂，进程就是一个车间，线程就是一个一个的工人。

JS 是单线程的，即执行 JS 时启动一个进程（如 JS 引擎，nodejs 等），然后其中再开启一个线程来执行。<br>
虽然单线程，JS 是基于事件驱动的，它不会阻塞执行，适合高并发的场景。

## 为何需要多进程

现代服务器都是多核 CPU ，适合同时处理多进程。即，一个进程无法充分利用 CPU 性能，进程数要等于 CPU 核数。

服务器一般内存比较大，但操作系统对于一个进程的内存分配是有上限的（2G），所以多进程才能充分利用服务器内存。

## nodejs 开启多进程

`child_process.fork` 可开启子进程执行单独的计算（源码参考 process-fork.js）

- `fork('xxx.js')` 开启一个子进程
- 使用 `send` 发送信息，使用 `on` 接收信息

`cluster.fork` 可针对当前代码，开启多个进程来执行（源码参考 cluster.js）

## 答案

- 可使用 `child_process.fork` 和 `cluster.fork` 开启子进程
- 使用 `send` `on` 传递消息

## 扩展：使用 PM2

nodejs 服务开启多进程、进程守护，可使用 [pm2](https://www.npmjs.com/package/pm2) ，不需要自己写。代码参考 koa2-code

- 全局安装 pm2 `yarn global add pm2`
- 增加 pm2 配置文件
- 修改 package.json scripts
