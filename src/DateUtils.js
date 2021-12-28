"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = exports.getDateOfInterval = void 0;
/**
 * 获取基础日期的间隔日期
 * @param interval {number} 间隔天数，正数则返回基础日期之后的日期，负数则返回基础日期之前的日期
 * @param baseDate {Date | null} 基础日期，如果不传或者传null，则默认为今天
 * @returns {Date} 新的Date对象
 */
function getDateOfInterval(interval, baseDate) {
    if (baseDate === void 0) { baseDate = null; }
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
 * 日期相关工具类
 * @Author zhg-x
 * @Created time  2021-12-28
 * @Modified time 2021-12-28
 */
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.getDateOfInterval = function (interval, baseDate) {
        return getDateOfInterval(interval, baseDate);
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;
