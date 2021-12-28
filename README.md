# common-utils
常用工具类

## 1. Functions

### ArrayUtils

#### arrayCheck(`arg`)

检查参数是否为数组。如果是则原样返回，否则返回空数组。

参数说明：

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- | ---- |
| arg      | any      |      |

返回：

Array\<any\>

---

### StringUtils

#### convertToStr(`arg`)

参数类型转换，将number、null、undefined、object类型的参数转换成字符串类型，其它类型不做转换。

参数说明：

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- | ---- |
| arg      | any      |      |

返回：

如果参数是number、null、undefined、object类型则返回字符串类型，如果是其它类型的参数则原样返回。



---

#### strIsEqual(`arg1`, `arg2`)

参数调用`convertToStr()`方法转换后，比较是否严格相等。

参数说明：

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- | ---- |
| arg1     | any      |      |
| arg2     | any      |      |

返回：

`true`或`false`


---

### NumberUtils

#### Options类

参数转换配置类

| 属性名称      | 属性值类型 | 属性说明                                                     |
| ------------- | ---------- | ------------------------------------------------------------ |
| transformFlag | boolean    | 属性值为true，则在后续检查中判断参数的布尔值是否为false，若为false，则将其转换为数字0 |

---

#### numberCheck(`arg`[, `options`])

number数字检查，如果不是正数、负数、小数，则报 TypeError 。

参数说明：

| 参数名  | 参数类型                        | 参数说明 |
| ------- | ------------------------------- | -------- |
| arg     | any                             |          |
| options | [Options](README.md/#Options类) | 可选     |

返回：

number

---

#### add(`arg1`, `arg2`[, `options`])

两数求和

参数说明：

| 参数名  | 参数类型                        | 参数说明 |
| ------- | ------------------------------- | -------- |
| arg1     | any                             |          |
| arg2     | any                             |          |
| options | [Options](README.md/#Options类) | 可选     |

返回值：

number

---

#### calcAdd(args,  options)

数组元素求和，数组元素会调用`numberCheck()`方法进行转换。

参数说明：

| 参数名  | 参数类型                        | 参数说明 |
| ------- | ------------------------------- | -------- |
| args     | any[]                             |          |
| options | [Options](README.md/#Options类) | 可选     |

返回：

number，数组中所有元素的和。

---

#### calcSub(`arg1`, `arg2`[, `options`])

两数求差

参数说明：

| 参数名  | 参数类型                        | 参数说明 |
| ------- | ------------------------------- | -------- |
| arg1     | any                             |          |
| arg2     | any                             |          |
| options | [Options](README.md/#Options类) | 可选     |

返回值：

number，arg1-arg2的差值。

---

#### calcMul(`arg1`, `arg2`[, `options`])

两数求乘积

参数说明：

| 参数名  | 参数类型                        | 参数说明 |
| ------- | ------------------------------- | -------- |
| arg1     | any                             |          |
| arg2     | any                             |          |
| options | [Options](README.md/#Options类) | 可选     |

返回值：

number，arg1和arg2的乘积。

---

#### calcDiv(`arg1`, `arg2`[, `options`])

两数求商

参数说明：

| 参数名  | 参数类型                        | 参数说明 |
| ------- | ------------------------------- | -------- |
| arg1     | any                             |          |
| arg2     | any                             |          |
| options | [Options](README.md/#Options类) | 可选     |

返回值：

number，arg1除以arg2的值。

---

### DateUtils

#### getDateOfInterval(`interval`[, `baseDate`])

获取基础日期的间隔日期

参数说明：

| 参数名   | 参数类型     | 参数说明                                                     |
| -------- | ------------ | ------------------------------------------------------------ |
| interval | number       | 必填，间隔天数，正数则返回基础日期之后的日期，负数则返回基础日期之前的日期 |
| baseDate | Date \| null | 可选，基础日期，如果不传或者传null，则默认为今天             |

返回值：

与基础日期间隔N天的新的`Date`对象。

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

---

更新日期：2021年12月28日
