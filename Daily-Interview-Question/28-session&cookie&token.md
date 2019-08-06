# session，cookie，token
> cookie 和 token 都存放在 header 中，为什么不会劫持 token？

1. 首先token不是防止XSS的，而是为了防止CSRF的；
2. CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token

- [彻底弄懂session，cookie，token](https://segmentfault.com/a/1190000017831088)
- [彻底理解cookie、session、token](https://mp.weixin.qq.com/s/PAjRcwH5RE-aEn4xIJzbeQ)


### Tokens的优势

- 无状态、可扩展
> 在客户端存储的Tokens是无状态的，并且能够被扩展。基于这种无状态和不存储Session信息，负载负载均衡器能够将用户信息从一个服务传到其他服务器上。

- 安全性

> 请求中发送token而不再是发送cookie能够防止CSRF(跨站请求伪造)。不将信息存储在Session中，让我们减少了对session操作。token是有时效的，一段时间之后用户需要重新验证。token有撤回的操作，通过token revocataion可以使一个特定的token或是一组有相同认证的token无效。

- 可扩展性

> Tokens能够创建与其它程序共享权限的程序。

- 多平台跨域

> 我们提前先来谈论一下CORS(跨域资源共享)，对应用程序和服务进行扩展的时候，需要介入各种各种的设备和应用程序。只要用户有一个通过了验证的token，数据和资源就能够在任何域上被请求到。



###  XSS 攻击

- [Web 安全漏洞之 XSS 攻击](https://mp.weixin.qq.com/s/llvJpjTLCyO7bUbL48CWOg)

> XSS（Cross-Site Scripting）又称跨站脚本，XSS的重点不在于跨站点，而是在于脚本的执行。XSS是一种经常出现在 Web 应用程序中的计算机安全漏洞，是由于 Web 应用程序对用户的输入过滤不足而产生的。

**防御方法**

- 1、XSS 防御之 HTML 编码。
  - 应用范围：将不可信数据放入到 HTML 标签内（例如div、span等）的时候进行HTML编码。
  - 编码规则：将 & < > " ' / 转义为实体字符（或者十进制、十六进制）。
- 2、XSS 防御之 HTML Attribute 编码
  - 应用范围：将不可信数据放入 HTML 属性时（不含src、href、style 和事件处理属性），进行 HTML Attribute 编码
  - 编码规则：除了字母数字字符以外，使用 HH;(或者可用的命名实体)格式来转义ASCII值小于256所有的字符
- 3、XSS 防御之 JavaScript 编码
  - 作用范围：将不可信数据放入事件处理属性、JavaScirpt值时进行 JavaScript 编码
  - 编码规则：除字母数字字符外，请使用xHH格式转义ASCII码小于256的所有字符
- 4、XSS 防御之 URL 编码
  - 作用范围：将不可信数据作为 URL 参数值时需要对参数进行 URL 编码
  - 编码规则：将参数值进行 encodeURIComponent 编码
- 5、XSS 防御之 CSS 编码
  - 作用范围：将不可信数据作为 CSS 时进行 CSS 编码
  - 编码规则：除了字母数字字符以外，使用XXXXXX格式来转义ASCII值小于256的所有字符


### CSRF

> CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装成受信任用户的请求来利用受信任的网站。与XSS攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比XSS更具危险性。