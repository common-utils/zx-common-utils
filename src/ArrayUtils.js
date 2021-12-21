"use strict";
/**
 * @文件名称: ArrayUtils.ts
 * @Description：数组相关方法，支持直接使用方法名称调用和使用类名.方法名称调用
 *
 * @author zhg-x
 * @Created time  2021-12-21
 * @Modified time 2021-12-21
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = exports.arrayCheck = void 0;
/**
 * 检验参数是否为数组，如果是，则原样返回，否则返回空数组
 * @param arr
 */
function arrayCheck(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return arr;
    }
    else {
        return [];
    }
}
exports.arrayCheck = arrayCheck;
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.arrayCheck = function (arr) {
        return arrayCheck(arr);
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
