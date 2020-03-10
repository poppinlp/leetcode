# JS 中原生错误类型总结

Hi 大家好，我是张小猪。这次我们来聊聊 JS 中的那些原生错误类型。

可能会有小伙伴好奇，为什么小猪要写这么一篇文章呢？这件事情说来话长了。

小猪的从业时间并不长，四舍五入也就刚毕业（哈哈哈，永远 22 岁）。不过坦白说，之前在一些不同的地方，小猪时常见到一些明明可以给出更明确的错误类型，不过都不管三七二十一通通 `throw new Error("xxxx")` 或者 `throw "xxxx"` 这样的代码。就像江南皮革厂的那些通通 20 块一样，印象深刻的刻进了 DNA 里（不要什么奇怪的东西都往 DNA 里刻啊喂

而且，这也让我想到了另外一个时不时就遇见的状况，那就是不管四七二十八，所有 API 通通返回 200 OK。反正先 200 了再说，然后 body 里再给个鉴权失败的消息。什么？还有除了 200 以外的状态码？不存在的！

每次遇到这样的 API，小猪都是黑人问号脸...EXM？王德发？不过那都是另外一个故事了。我们还是说回今天的主题吧，JS 中原生的错误类型。

## 原生错误类型

如上文提到，在 JS 中存在着一个全局对象 `Error`。由于它是继承自 `Function`，所以小伙伴们的那些对于函数的骚操作都可以对它使用。不过它更常见的还是用作构造函数，产生错误实例，例如：

```js
try {
  throw new Error('小猪才是最萌哒！')
} catch (e) {
  console.error('本题正解：' + e.message)
}
```

在错误实例中，我们经常访问的通用属性有 `name` 和 `message`，其中 `name` 表示这个错误类型的名字，而 `message` 则是错误信息。除此之外，还有诸如 `fileName`、`lineNumber`、`columnNumber`、`stack` 这些常见的也很容易理解的属性。还有就是一些，不同浏览器自己实现的属性，这里就不做过多的介绍啦。下面举个简单的栗子：

```js
try {
  throw new Error('你猜')
} catch (e) {
  console.error(`错误类型名称：${e.name} 错误信息：${e.message}`)
}
```

最后需要说的一点是，我们接下来要介绍的几种原生的错误类型，其实都是来自于 `Error` 这个基类。那么，我们就按照字母序来逐个说明吧。

### EvalError

一上来就遇到一个不常见的错误类型。不过不用担心，其实我们可以忽略这个类型。

`EvalError` 这个错误类型本来的作用是用来表示在全局 `eval` 函数中产生的错误，不过现在的 JS 引擎都不会再抛出这个错误了。在 ECMAScript 规范里，也说明了保留这个对象只是为了向前兼容而已。

### RangeError

`RangeError` 这个错误类型本身是表示一个值超出了它可以被允许的范围。这个值有可能是一个枚举值，超出了集合范围；也有可能是一个数值，超出了有效范围。这里针对以上两种情况分别举一个栗子：

```js
try {
  String.prototype.normalize.call('\u0061', 'HELLO')
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // RangeError: The normalization form should be one of NFC, NFD, NFKC, NFKD.
}

try {
  const arr = new Uint8Array(233 ** 33)
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // RangeError: Invalid typed array length: 1.3266164977310088e+78
}
```

当然，我们也可以根据实际需求，自行抛出这个错误。例如这里例子中用一个 `checkNum` 方法来检测数字是否在我们需要的范围内：

```js
function checkNum(num) {
  if (num < -500 || num > 500) {
    throw new RangeError("The argument must be between -500 and 500.")
  }
  // Your logic
}

try {
  check(2000)
} catch(e) {
  if (e instanceof RangeError) {
    // Handle the error
  }
}
```

### ReferenceError

`ReferenceError` 这个错误类型本身表示检测到了一个无效的引用，最常见的情况就是尝试访问一个不存在的变量。例如：

```js
try {
  const value = undefinedVariable
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // ReferenceError: undefinedVariable is not defined
}
```

不过这里需要注意的是，一个变量的值是 `undefined` 与这个变量不存在是不一样的。我们可以看下面这个栗子：

```js
try {
  const undefinedVariable = undefined;
  const value = undefinedVariable;
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // Won't occur
}
```

这里背后具体的原因会和我们 JS 标准中的两个概念有关，一个是执行上下文（Execution Context），一个是环境记录（Environment Record）。这里小猪并不打算展开来说这两个概念，只是先做一个简单的比喻便于理解。

```js
function intro() {
  const name = '张小猪'
  console.log(name)
}
intro()
```

当我们执行上面这样的代码的时候，我们可以想象为在 `intro` 函数里面有一个我们看不见的对象，它用键值对的形式记录着我们申明的变量。当前它的状态可能是：

```json
{
  "name": "张小猪"
}
```

所以我们接下来访问 `name` 变量的时候可以正常的找到它的值。然后我们把代码再变为下面这样：

```js
function intro() {
  const name = '张小猪'
  const age = undefined
  console.log(name, age)
  console.log(hobbies)
}
try {
  intro()
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
}
```

这时候我们的这个看不见的对象可以想象为：

```json
{
  "name": "张小猪",
  "age": undefined
}
```

由于并没有一个名叫 `hobbies` 的键，所以我们会得到下面这个结果：

```shell
张小猪 undefined
ReferenceError: hobbies is not defined
```

### SyntaxError

`SyntaxError` 这个错误类型本身表示 JS 引擎在处理代码的时候遇见了非法的 JS 代码。为了更容易的能够明白这个场景，我们先简单的描述一下 JS 引擎的解析处理过程吧。

大体上看，这个过程可以分成 3 个部分：

1. 词法分析
2. 语法分析
3. 解释执行

#### 词法分析

其中第一个过程 - 词法分析，简单的说就是把我们输入的代码字符串转换为一个个的 token，得到的结果以供下一步语法分析使用。这里一个个的 token 可以理解为就是一个个的小单元，我们还是结合一个具体的栗子吧。

例如对于 `a = (2 + b` 这个字符串，我们可以得到这样一些小单元：

- 标识符 `a`
- 赋值运算符
- 开括号
- 数字 2
- 加法运算符
- 标识符 `b`

这里其实可以注意到，我们如果人为的看这串代码，会明显的发现缺少了闭合括号。不过在进行词法分析的时候，只是按照规则拆分和标记 token，并不会做语法相关的处理。

#### 语法分析

第二个过程 - 语法分析，简单的说就是基于上一步得到的 token，按照 JS 的语法规则进行判断和分析，并生成抽象语法树（AST）之类的东西。如果看回上面的那个栗子的话，由于缺少闭合括号，所以是不符合 JS 的语法规范的。这时候 JS 引擎就会抛出一个 `SyntaxError` 的实例了。至于什么是 AST，我们等到以后的相关专题再来聊吧，这里就不展开啦。

#### 解释执行

这个过程简单的理解就是让我们的代码跑起来。不过由于 JS 是解释型语言，所以这一步会需要借助解释器来不停的解释我们的代码，并翻译成字节码以供后续执行。当然这中间还存在着比较复杂的过程并伴随着大量的优化。

#### 报错举例

简单介绍完这 3 个过程后，我们可以发现，`SyntaxError` 通常会来自于前两个过程。那么我们还是举几个报错的栗子吧：

```js
try {
  const a b = 3
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // Uncaught SyntaxError: Missing initializer in const declaration
}
```

```js
try {
  const a = 1 * % 2
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // Uncaught SyntaxError: Unexpected token '%'
}
```

### TypeError

`TypeError` 这个错误类型本身表示因为一个变量或者参数并不是合法的或者符合期望的类型，从而导致我们的操作行为无法成功的完成。通常可能会有以下几种情况：

- 我们给一个函数或者一个操作符传递了一个不符合预期类型的值
- 尝试修改一个不可更改的变量
- 尝试对一个值做一些不符合它类型的事情

这里还是举几个栗子更直观一点：

```js
try {
  const a = 1
  a = 2
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // TypeError: Assignment to constant variable.
}
```

```js
try {
  const a = 1;
  a();
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // TypeError: a is not a function
}
```

### URIError

`URIError` 这个错误类型本身表示全局的 URI 处理函数在使用中产生了问题。例如当我们传入了一些非法参数的时候，就会抛出这个错误。这里列举几个我们常用的全局 URI 处理函数：

- `encodeURI`
- `decodeURI`
- `encodeURIComponent`
- `decodeURIComponent`

同样我们举个会报错的栗子：

```js
try {
  decodeURI('abc%abc')
} catch (e) {
  console.error(`${e.name}: ${e.message}`)
  // URIError: URI malformed
}
```

## 自定义错误类型

上面我介绍了各种原生的错误类型它们本身的含义。当然，在具体开发的时候，我们也可以根据自行的实际需求抛出这些错误。不过它们终究还是无法代表所有的错误，难道对于其它的错误我们都只可以用基础的 `Error` 类型了么？

当然不是的，我们其实可以按照自身的需求创建一些自定义的错误类型。这里我们就基于 ES2015+ 的 `class` 语法来做一个实现吧：

```js
class SoundError extends Error {
  constructor(yell = 'bark', vol = 10, ...params) {
    super(...params);
    this.name = 'SoundError';
    this.voice = yell;
    this.volume = vol;
  }
}

try {
  throw new SoundError('嘤嘤嘤', 1, '小拳拳锤你胸口');
} catch (e) {
  console.error(`${e.name}: ${e.voice} at volume ${e.volume} since ${e.message}`);
  // SoundError: 嘤嘤嘤 at volume 1 since 小拳拳锤你胸口
}
```

## 应用

错误信息的应用场景，自然是需要抛出错误的地方啦（不要打我...

不过小猪个人感觉是，对于需要给其他人使用或者维护的代码，如果我们能把报错信息做的比较清楚易懂，对于使用者和维护者都是很舒服的事情。除了这种体验上的感受外，在另外一些具体的场景，小猪也经常使用到各种错误类型。

首先是，本身在我们自己的代码中，涉及到捕获错误的地方，就可以根据错误类型来做针对的逻辑处理。

再比如，自动化测试。一方面是，在测试用例中，我们可能需要根据不同的错误类型进行针对的判断和处理；另一方面，我们也可以方便的维护一份公用的错误信息，用以同时给代码中的断言、测试用例中的判断等需要的地方来使用。

又或者，我们如果做一些错误上报收集之类的事情，也可以根据不同错误的类型进行对应的数据获取、序列化与反序列化、展示等等。

## 总结

上面依次介绍了 JS 中的原生错误类型，以及我们如何自定义错误类型。其中 `ReferenceError` 和 `SyntaxError` 稍微做了一点小扩展。

最后，小小的说了一下应用场景。当然，我也只是举了几个栗子，核心还是那句话，需要抛出错误的地方，尽量抛出相对准确和清晰的错误就好啦。

希望能帮助到有需要的小伙伴。如果你觉得不错的话，不要忘记三连支持小猪哦。小猪爱你们哟~

## 相关链接

- [ECMAScript Error Objects](https://tc39.es/ecma262/#sec-error-objects)
- [我的 Github](https://github.com/poppinlp)
- [我的 segmentfault 专栏](https://segmentfault.com/blog/zxzfbz)
- [我的知乎专栏](https://zhuanlan.zhihu.com/zxzfbz)
