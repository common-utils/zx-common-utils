# common-utils
常用工具类

## 1. 可使用的方法

### ArrayUtils

- arrayCheck(arg)

检查参数是否为数组。如果是则原样返回，否则返回空数组。

---

### StringUtils

- strIsEqual(arg1, arg2)

将参数转换成字符串后，比较是否严格相等。



---

### NumberUtils

- numberCheck(arg, options)

number数字检查，如果不是正数、负数、小数，则报TypeError。

- add(arg1, arg2, options)

两数求和

- calcAdd(args,  options)

数组求和



... 待列举



---
## 2. 使用示例

支持直接使用方法名称调用对应方法
```
import { arrayCheck, strIsEqual } from '@zhg-x/common-utils';

console.log(arrayCheck(undefined));     // []
console.log(arrayCheck([]));            // []
console.log(strIsEqual(1, '1'));        // true
console.log(strIsEqual(1, 2));          // false
```
也可以使用类名.方法名调用
```
import { ArrayUtils, StringUtils } from '@zhg-x/common-utils';

console.log('strIsEqual ==? ', StringUtils.strIsEqual(1, '1'));     // true
console.log('strIsEqual ==? ', StringUtils.strIsEqual(null, '1'));  // false
console.log('arrayCheck ==? ', ArrayUtils.arrayCheck(undefined));   // []
console.log('arrayCheck ==? ', ArrayUtils.arrayCheck([1, 2, 3]));   // [1, 2, 3]

```

