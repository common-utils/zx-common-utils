/**
 * number 数字检查
 * @Description 1. 如果options.transformFlag值为true且参数值为null、undefined、空字符串时，则将参数值转换为数字0，否则不做转换；
 * 2. 判断上一步处理后的参数值是否为正数、负数、小数，如果是则将参数原样返回，否则抛出TypeError。
 * @param arg
 * @param options {Options}
 * @returns number or error
 */
export declare function numberCheck(arg: any, options?: Options): any;
/**
 * 两个数字相加
 * @param arg1
 * @param arg2
 * @param options {Options}
 * @returns 两数之和 {number}
 */
export declare function add(arg1: any, arg2: any, options?: Options): number;
/**
 * 多参数 加法运算
 * @param args 参数列表 {any[]}
 * @param options {Options}
 * @returns 所有参数的和 {number}
 */
export declare function calcAdd(args: any[], options?: Options): number;
/**
 * 两个数字相减
 * @param arg1 被减数
 * @param arg2 减数
 * @param options {Options}
 * @returns number类型的差值 {number}
 */
export declare function calcSub(arg1: any, arg2: any, options?: Options): number;
/**
 * 两数求积
 * @param arg1
 * @param arg2
 * @param options {Options}
 * @returns 两数乘积 {number}
 */
export declare function calcMul(arg1: any, arg2: any, options?: Options): number;
/**
 * 两数求商
 * @param arg1
 * @param arg2
 * @param options {Options}
 * @returns 两数的商
 */
export declare function calcDiv(arg1: any, arg2: any, options?: Options): number;
/**
 * @FileName: NumberUtils
 * @Description：Number类型数据相关方法
 *
 * @Author zhg-x
 * @Created time  2021-12-22
 */
export declare class NumberUtils {
    /** number数字检查 */
    static numberCheck(arg: any, options?: Options): any;
    /** 两数求和 */
    static add(arg1: any, arg2: any, options?: Options): number;
    /** 数字数组求和 */
    static calcAdd(args: any[], options?: Options): number;
    /** 两数相减 */
    static calcSub(arg1: any, arg2: any, options?: Options): number;
    /** 两数相乘 */
    static calcMul(arg1: any, arg2: any, options?: Options): number;
    /** 两数相除 */
    static calcDiv(arg1: any, arg2: any, options?: Options): number;
}
/** 参数转换配置类 */
export declare class Options {
    /**
     * 参数是否需要进行转换，如果该属性值为true，则在后续检查中判断参数的布尔值是否为false，若为false，则将其转换为数字0
     */
    transformFlag?: boolean;
}
