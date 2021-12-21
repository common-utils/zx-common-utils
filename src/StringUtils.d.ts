/**
 * @文件名称: StringUtils
 * @Description：字符串相关方法，支持直接使用方法名称调用和使用类名.方法名称调用
 *
 * @author zhg-x
 * @Created time  2021-12-21
 * @Modified time 2021-12-21
 */
/**
 * 比较两个参数转换成字符串后是否相等
 * 布尔值为false的参数当成空字符串来比较
 * @param arg1 参数1
 * @param arg2 参数2
 * @return true/false
 */
export declare function strIsEqual(arg1: any, arg2: any): boolean;
export declare class StringUtils {
    static strIsEqual(arg1: any, arg2: any): boolean;
}
