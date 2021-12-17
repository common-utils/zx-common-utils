# common-utils
常用工具类

## 使用示例

```
import { ArrayUtils, StringUtils } from '@zhg-x/common-utils';

console.log('strIsEqual ==? ', StringUtils.strIsEqual(1, '1'));     // true
console.log('strIsEqual ==? ', StringUtils.strIsEqual(null, '1'));  // false
console.log('arrayCheck ==? ', ArrayUtils.arrayCheck(undefined));   // []
console.log('arrayCheck ==? ', ArrayUtils.arrayCheck([1, 2, 3]));   // [1, 2, 3]

```


