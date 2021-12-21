# common-utils
常用工具类

## 使用示例

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


