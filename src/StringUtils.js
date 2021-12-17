"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * 比较两个参数转换成字符串后是否相等
     * 布尔值为false的参数当成空字符串来比较
     * @param arg1 参数1
     * @param arg2 参数2
     */
    StringUtils.strIsEqual = function (arg1, arg2) {
        arg1 = arg1 ? arg1.toString() : '';
        arg2 = arg2 ? arg2.toString() : '';
        return arg1 === arg2;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
