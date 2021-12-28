/**
 * 获取基础日期的间隔日期
 * @param interval {number} 间隔天数，正数则返回基础日期之后的日期，负数则返回基础日期之前的日期
 * @param baseDate {Date | null} 基础日期，如果不传或者传null，则默认为今天
 * @returns {Date} 新的Date对象
 */
export declare function getDateOfInterval(interval: number, baseDate?: Date | null): Date;
/**
 * 日期相关工具类
 * @Author zhg-x
 * @Created time  2021-12-28
 * @Modified time 2021-12-28
 */
export declare class DateUtils {
    static getDateOfInterval(interval: number, baseDate: Date | null): Date;
}
