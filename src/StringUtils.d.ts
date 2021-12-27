/**
 * @FileName: StringUtils
 * @Description：字符串相关方法，支持直接使用方法名称调用和使用类名.方法名称调用
 *
 * @author zhg-x
 * @Created time  2021-12-21
 * @Modified time 2021-12-21
 */
/**
 * 将变量类型转换为string类型
 * @Description 只支持number、null、undefined、object类型的转换
 * @Author zhg-x
 * @Created time  2021-12-27
 */
export declare function convertToStr(arg: any): string;
/**
 * 比较两个参数转换成字符串后是否相等
 * 将number、null、undefined、object类型的参数值转换为字符串类型
 * @param arg1 参数1
 * @param arg2 参数2
 * @return true/false
 */
export declare function strIsEqual(arg1: any, arg2: any): boolean;
export declare class StringUtils {
    static strIsEqual(arg1: any, arg2: any): boolean;
}
