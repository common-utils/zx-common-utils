"use strict";
/**
 * @文件名称: StringUtils
 * @Description：字符串相关方法，支持直接使用方法名称调用和使用类名.方法名称调用
 *
 * @author zhg-x
 * @Created time  2021-12-21
 * @Modified time 2021-12-21
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = exports.strIsEqual = void 0;
/**
 * 比较两个参数转换成字符串后是否相等
 * 布尔值为false的参数当成空字符串来比较
 * @param arg1 参数1
 * @param arg2 参数2
 * @return true/false
 */
function strIsEqual(arg1, arg2) {
    arg1 = arg1 ? arg1.toString() : '';
    arg2 = arg2 ? arg2.toString() : '';
    return arg1 === arg2;
}
exports.strIsEqual = strIsEqual;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.strIsEqual = function (arg1, arg2) {
        arg1 = arg1 ? arg1.toString() : '';
        arg2 = arg2 ? arg2.toString() : '';
        return arg1 === arg2;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
