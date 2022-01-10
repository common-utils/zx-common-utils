"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = exports.NumberUtils = exports.calcDiv = exports.calcMul = exports.calcSub = exports.calcAdd = exports.add = exports.numberCheck = void 0;
/**
 * number 数字检查
 * @Description 1. 如果options.transformFlag值为true且参数值为null、undefined、空字符串时，则将参数值转换为数字0，否则不做转换；
 * 2. 判断上一步处理后的参数值是否为正数、负数、小数，如果是则将参数原样返回，否则抛出TypeError。
 * @param arg
 * @param options {Options}
 * @returns number or error
 */
function numberCheck(arg, options) {
    if (options && options.transformFlag && !arg) {
        arg = 0;
    }
    const pattern = /^(\-|\+)?\d+(\.\d+)?$/; // 正则匹配正数、负数、小数
    /* 将参数转换成string类型再进行正则匹配，否则会发生一些错误
     * pattern.test(-.1)        // true，console.log(-.1) 输出 -0.1
     * pattern.test('-.1')      // false
     */
    if (arg === 0 || (arg && pattern.test(arg.toString()))) {
        return arg;
    }
    else {
        throw new TypeError('Parameter value: [ ' + arg + ' ] , ERROR：Parameter type error!');
    }
}
exports.numberCheck = numberCheck;
/**
 * 两个数字相加
 * @param arg1
 * @param arg2
 * @param options {Options}
 * @returns 两数之和 {number}
 */
function add(arg1, arg2, options) {
    arg1 = numberCheck(arg1, options);
    arg2 = numberCheck(arg2, options);
    let r1, r2, m;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2) + 1);
    return Math.round(arg1 * m + arg2 * m) / m;
}
exports.add = add;
/**
 * 多参数 加法运算
 * @param args 参数列表 {any[]}
 * @param options {Options}
 * @returns 所有参数的和 {number}
 */
function calcAdd(args, options) {
    let sum = 0;
    args.forEach(p => {
        sum = add(sum, p, options);
    });
    return sum;
}
exports.calcAdd = calcAdd;
/**
 * 两个数字相减
 * @param arg1 被减数
 * @param arg2 减数
 * @param options {Options}
 * @returns number类型的差值 {number}
 */
function calcSub(arg1, arg2, options) {
    arg1 = numberCheck(arg1, options);
    arg2 = numberCheck(arg2, options);
    let r1, r2, m, n;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    // 动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    const result = ((arg1 * m - arg2 * m) / m).toFixed(n);
    return Number(result);
}
exports.calcSub = calcSub;
/**
 * 两数求积
 * @param arg1
 * @param arg2
 * @param options {Options}
 * @returns 两数乘积 {number}
 */
function calcMul(arg1, arg2, options) {
    arg1 = numberCheck(arg1, options);
    arg2 = numberCheck(arg2, options);
    if (!arg1 || !arg2) {
        return 0;
    }
    let m = 0;
    const s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}
exports.calcMul = calcMul;
/**
 * 两数求商
 * @param arg1
 * @param arg2
 * @param options {Options}
 * @returns 两数的商
 */
function calcDiv(arg1, arg2, options) {
    arg1 = numberCheck(arg1, options);
    arg2 = numberCheck(arg2, options);
    let c, d, e = 0, f = 0;
    try {
        e = arg1.toString().split('.')[1].length;
    }
    catch (g) {
        e = 0;
    }
    try {
        f = arg2.toString().split('.')[1].length;
    }
    catch (g) {
        f = 0;
    }
    c = Number(arg1.toString().replace('.', ''));
    d = Number(arg2.toString().replace('.', ''));
    return calcMul(c / d, Math.pow(10, f - e));
}
exports.calcDiv = calcDiv;
/**
 * @FileName: NumberUtils
 * @Description：Number类型数据相关方法
 *
 * @Author zhg-x
 * @Created time  2021-12-22
 */
class NumberUtils {
    /** number数字检查 */
    static numberCheck(arg, options) {
        return numberCheck(arg, options);
    }
    /** 两数求和 */
    static add(arg1, arg2, options) {
        return add(arg1, arg2, options);
    }
    /** 数字数组求和 */
    static calcAdd(args, options) {
        return calcAdd(args, options);
    }
    /** 两数相减 */
    static calcSub(arg1, arg2, options) {
        return calcSub(arg1, arg2, options);
    }
    /** 两数相乘 */
    static calcMul(arg1, arg2, options) {
        return calcMul(arg1, arg2, options);
    }
    /** 两数相除 */
    static calcDiv(arg1, arg2, options) {
        return calcDiv(arg1, arg2, options);
    }
}
exports.NumberUtils = NumberUtils;
/** 参数转换配置类 */
class Options {
    constructor() {
        /**
         * 参数是否需要进行转换，如果该属性值为true，则在后续检查中判断参数的布尔值是否为false，若为false，则将其转换为数字0
         */
        this.transformFlag = true;
    }
}
exports.Options = Options;
