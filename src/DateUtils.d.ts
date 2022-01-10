/**
 * 获取基础日期的间隔日期
 * @param interval {number} 间隔天数，正数则返回基础日期之后的日期，负数则返回基础日期之前的日期
 * @param baseDate {Date | null} 基础日期，如果不传或者传null，则默认为今天
 * @returns {Date} 新的Date对象
 */
export declare function getDateOfInterval(interval: number, baseDate?: Date | null): Date;
/**
 * 获取时间范围内的日期，包含开始日期和结束日期
 * @param startDate {Date} 开始日期
 * @param endDate {Date} 结束日期
 * @returns {Array<Date>} 日期数组
 */
export declare function getDatesFromDateRange(startDate: Date, endDate: Date): Date[];
/**
 * 日期格式化
 * @param date {Date} 日期
 * @param fmt {string} 格式，默认格式：YYYY-MM-dd
 * 格式说明：
 * y或者Y：年份，一般用yy表示两位年份，yyyy表示四位年份
 * M：一般用MM表示月份 (0 ~ 11)
 * d：一般用 dd 表示月份中的天数(1 ~ 31)
 * H或者h：一般用HH或者hh表示一天中的小时数 (0 ~ 23)
 * m：用mm表示分钟数 (0 ~ 59)
 * s: 用ss表示秒数 (0 ~ 59)
 * @Return 日期格式化后的string字符串
 *
 * ```
 * const date = new Date();
 * date.setFullYear(2022, 1, 5);
 * dateFormat(date)                             // 返回 "2022-02-05"
 * dateFormat(date, 'YYYY-MM-dd hh:mm:ss')      // 返回 "2022-02-05 16:44:11"
 * ```
 */
export declare function dateFormat(date: Date, fmt?: string): string;
/**
 * 日期相关工具类
 * @Author zhg-x
 * @Created time  2021-12-28
 * @Modified time 2021-12-28
 */
export declare class DateUtils {
    /** 获取基础日期的间隔日期 */
    static getDateOfInterval(interval: number, baseDate: Date | null): Date;
    /** 获取时间范围内的日期，包括开始日期和结束日期 */
    static getDatesFromDateRange(startDate: Date, endDate: Date): Date[];
    /** 日期格式化 */
    static dateFormat(date: Date, fmt?: string): string;
}
