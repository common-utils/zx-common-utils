"use strict";
/**
 * @FileName: StringUtils
 * @Description：字符串相关方法，支持直接使用方法名称调用和使用类名.方法名称调用
 *
 * @author zhg-x
 * @Created time  2021-12-21
 * @Modified time 2021-12-21
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = exports.strIsEqual = exports.convertToStr = void 0;
/**
 * 将变量类型转换为string类型
 * @Description 只支持number、null、undefined、object类型的转换
 * @Author zhg-x
 * @Created time  2021-12-27
 */
function convertToStr(arg) {
    try {
        var argType = Object.prototype.toString.call(arg); // "[object Number]"
        argType = argType.substring(8, argType.length - 1);
        switch (argType) {
            case 'String':
                break;
            case 'Number':
            case 'Null':
            case 'Undefined':
                arg = String(arg);
                break;
            case 'Object':
                arg = JSON.stringify(arg);
                break;
            case 'Array':
            case 'Function':
            default:
                throw new Error('Conversion of array types is not supported.');
        }
    }
    catch (e) {
        console.error("An error occurred while converting a variable type.");
    }
    return arg;
}
exports.convertToStr = convertToStr;
/**
 * 比较两个参数转换成字符串后是否相等
 * 将number、null、undefined、object类型的参数值转换为字符串类型
 * @param arg1 参数1
 * @param arg2 参数2
 * @return true/false
 */
function strIsEqual(arg1, arg2) {
    arg1 = convertToStr(arg1);
    arg2 = convertToStr(arg2);
    return arg1 === arg2;
}
exports.strIsEqual = strIsEqual;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.strIsEqual = function (arg1, arg2) {
        return strIsEqual(arg1, arg2);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
