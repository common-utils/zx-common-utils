"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    /**
     * 检验参数是否为数组，如果是，则原样返回，否则返回空数组
     * @param arr
     */
    ArrayUtils.arrayCheck = function (arr) {
        if (Object.prototype.toString.call(arr) === '[object Array]') {
            return arr;
        }
        else {
            return [];
        }
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
