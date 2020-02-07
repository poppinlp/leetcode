# 除了 User Agent 我们还需要 Client Hints

Hi 大家好，我是张小猪。今天我们来聊聊一个具体的技术点 -- User Agent 和 Client Hints。

相信小伙伴们在做用户信息的收集和统计的时候，很可能会见过这样一个名字 User Agent。它的作用和使用方式相信可能小伙伴们已经很熟悉啦，那么 Client Hints 又是什么呢？别急，且听小猪慢慢哼唧。

## User Agent 是什么

广义的说，User Agent 就是指的一切代理用户行为的计算机程序。例如在我们平时上网的时候，浏览器就是我们的 User Agent，它负责把网络上的内容接收并渲染给我们，并且帮助我们实现和网络内容之间的交互行为。

当然，我们这里并不是要说这个广义的意思，而是另一个更特定的意思，就是 `User-Agent` 这个 HTTP header。这个 header 字段包含了发起请求的客户端的很多信息，例如浏览器版本、渲染引擎版本、操作系统信息等等。主要作用就是向服务端提供出客户端自身的信息，以供服务端根据情况去更好的决定返回的内容。例如下面是我的 Chrome 浏览器发出的 `User-Agent` header 字段：

```shell
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
```

关于这个字段的详细内容以及如何处理等等，这里并不打算展开来聊。因为相信很多小伙伴们已经很熟悉了。我们在浏览器中也可以通过 JS 方便的获取到这个值 `navigator.userAgent`。如果有小伙伴对于详细的规范感兴趣，可以去看看 [RFC7231 里的这个 SECTION](https://tools.ietf.org/html/rfc7231#section-5.5.3) 有详细的介绍。

## User Agent 有什么问题

TODO

## User Agent 和 Client Hints 发生了什么

其实这也是小猪写这篇文章的起因。就在不久前，Google 宣布了一个计划，要逐步淘汰 `User-Agent` 字符串在 Chrome 浏览器中的重要性。具体的方法就是，在 Chrome 中不再继续更新 User Agent 字段，并且长期来看会把这个字段的值都统一为一个不会包含太多用户信息的通用值。

这里提到的不再继续更新 User Agent 字段，指的就是以后再出现新的平台、操作系统、设备等等，都不会在这个字段中有所反映了。并且 Google 还给出了这个弃用计划的时间表：

版本 | 日期 | 行动
-- | --  | --
Chrome 81 | 2020 年 3 月中旬 | Google 计划对于还在读取 User Agent 字符串的网页，在 Chrome 的 console 中显示警告信息。
Chrome 83 | 2020 年 6 月上旬 | Google 将会在 Chrome 浏览器中冻结 User Agent 字符串中的浏览器版本信息，并统一操作系统版本信息。
Chrome 85 | 2020 年 9 月中旬 | Google 将会把桌面端 Chrome 浏览器的 User Agent 字符串统一为一个通用值。对于移动端的 Chrome 浏览器，User Agent 字符串也会被统一成一个类似的值。

面对着这么迫在眉睫的时间表，不知道小伙伴们有没有顿时觉得虎躯一震？反正小猪是觉得，一下子猪肚子都变大了呢（才不是过年吃东西吃的...哼

更关键的是，Apple（Safari）、Microsoft（Edge）、Mozilla（Firefox）都对 Google 的这个冻结并逐渐弃用 User Agent 字符串的提案表示支持。

那么在这个背后，Google 给出的新的解决方案是什么呢？当当当当，就是去年提出的 Privacy Sandbox 项目。而其中用来代替 User Agent 字符串的就是 Client Hints 啦。

## Client Hints 是什么

TODO

## Client Hints 字段含义

TODO

## Client Hints 如何使用

TODO

- fastify plugin
- express middleware
- koa middleware

## 相关链接

- [User-Agent header 字段定义](https://tools.ietf.org/html/rfc7231#section-5.5.3)
- [User-Agent Client Hints Specification](https://wicg.github.io/ua-client-hints/)
- [我的 segmentfault 专栏](https://segmentfault.com/blog/zxzfbz)
- [我的知乎专栏](https://zhuanlan.zhihu.com/zxzfbz)

![我的微信公众号：张小猪粉鼻子](../resources/qrcode_green.jpeg)
