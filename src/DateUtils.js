"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = exports.dateFormat = exports.getDatesFromDateRange = exports.getDateOfInterval = exports.isDate = void 0;
/**
 * 校验参数是否为Date类型
 * @param arg {any} 参数
 * @Returns {boolean} true / false
 */
function isDate(arg) {
    return Object.prototype.toString.call(arg).slice(8, -1) === 'Date';
}
exports.isDate = isDate;
/**
 * 获取基础日期的间隔日期
 * @param interval {number} 间隔天数，正数则返回基础日期之后的日期，负数则返回基础日期之前的日期
 * @param baseDate {Date|null} null,基础日期，如果不传或者传null，则默认为今天
 * @returns {Date} 新的Date对象
 */
function getDateOfInterval(interval, baseDate = null) {
    if (!baseDate) {
        baseDate = new Date();
    }
    else {
        baseDate = new Date(baseDate.toString()); // 创建一个新的Date对象
    }
    baseDate.setDate(baseDate.getDate() + interval);
    return baseDate;
}
exports.getDateOfInterval = getDateOfInterval;
/**
 * 获取时间范围内的日期，包含开始日期和结束日期
 * @param startDate {Date} 开始日期
 * @param endDate {Date} 结束日期
 * @returns {Array<Date>} 日期数组
 */
function getDatesFromDateRange(startDate, endDate) {
    if (!isDate(startDate) || !isDate(endDate)) {
        throw new TypeError('argument type must be Date');
    }
    const dateRange = [];
    while ((endDate.getTime() - startDate.getTime()) >= 0) {
        const d = new Date(startDate.getTime()); // 以开始日期为基础日期创建一个新的日期对象
        dateRange.push(d);
        startDate.setDate(startDate.getDate() + 1);
    }
    return dateRange;
}
exports.getDatesFromDateRange = getDatesFromDateRange;
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
function dateFormat(date, fmt = 'YYYY-MM-dd') {
    const opt = {
        "[Y|y]+": date.getFullYear().toString(),
        "M+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "[H|h]+": date.getHours().toString(),
        "m+": date.getMinutes().toString(),
        "s+": date.getSeconds().toString(),
        "q+": Math.floor((date.getMonth() + 3) / 3).toString(),
        "S": date.getMilliseconds().toString() // 毫秒
    };
    let ret;
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
        }
    }
    return fmt;
}
exports.dateFormat = dateFormat;
/**
 * 日期相关工具类
 * @Author zhg-x
 * @Created time  2021-12-28
 * @Modified time 2021-12-28
 */
class DateUtils {
    /** 检验参数是否为Date类型 */
    static isDate(arg) {
        return isDate(arg);
    }
    /** 获取基础日期的间隔日期 */
    static getDateOfInterval(interval, baseDate) {
        return getDateOfInterval(interval, baseDate);
    }
    /** 获取时间范围内的日期，包括开始日期和结束日期 */
    static getDatesFromDateRange(startDate, endDate) {
        return getDatesFromDateRange(startDate, endDate);
    }
    /** 日期格式化 */
    static dateFormat(date, fmt = 'YYYY-MM-dd') {
        return dateFormat(date, fmt);
    }
}
exports.DateUtils = DateUtils;
