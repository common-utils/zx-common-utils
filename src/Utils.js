"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeep = exports.initCloneObj = exports.isFunction = exports.isSet = exports.isMap = exports.isArray = exports.isObj = exports.isObject = exports.isSymbol = exports.isBoolean = exports.isString = exports.isNumber = exports.isUndefined = exports.isNull = exports.getVarType = void 0;
/**
 * 获取变量类型
 * @param value
 * @return 变量类型(string，全部小写字母)
 */
function getVarType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
exports.getVarType = getVarType;
/**
 * 检查value值是否为null
 * @param value
 */
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
/**
 * 检查value值是否为undefined
 * @param value
 */
function isUndefined(value) {
    return value === undefined;
}
exports.isUndefined = isUndefined;
/**
 * 检查value的类型是否为number或者Number对象
 * @param value
 */
function isNumber(value) {
    const type = typeof value;
    return type === 'number' || (type === 'object' && getVarType(value) === 'number');
}
exports.isNumber = isNumber;
/**
 * 检查value的类型是否为string或者String对象
 * @param value
 */
function isString(value) {
    const type = typeof value;
    return type === 'string' || (type === 'object' && getVarType(value) === 'string');
}
exports.isString = isString;
/**
 * 检查value的类型是否为boolean或者Boolean对象
 * @param value
 */
function isBoolean(value) {
    return value === true || value === false || (typeof value === 'object' && getVarType(value) === 'boolean');
}
exports.isBoolean = isBoolean;
/**
 * 检查value是否为symbol类型
 * @param value
 */
function isSymbol(value) {
    const type = typeof value;
    return type === 'symbol' || (type === 'object' && getVarType(value) == 'symbol');
}
exports.isSymbol = isSymbol;
/**
 * 检查value的类型是否为Object对象
 * @param value
 */
function isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
}
exports.isObject = isObject;
/**
 * 检查value类型是否为object对象
 * @param value
 */
function isObj(value) {
    const type = typeof value;
    return value != null && type === 'object' && getVarType(value) === 'object';
}
exports.isObj = isObj;
/**
 * 检查value类型是否为Array对象
 * @param value
 */
function isArray(value) {
    const type = typeof value;
    return value != null && type === 'object' && getVarType(value) === 'array';
}
exports.isArray = isArray;
/**
 * 检查value值是否为Map类型
 * @param value
 */
function isMap(value) {
    const type = typeof value;
    return value !== null && type === 'object' && getVarType(value) === 'map';
}
exports.isMap = isMap;
/**
 * 检查value值是否为Set类型
 * @param value
 */
function isSet(value) {
    const type = typeof value;
    return value !== null && type === 'object' && getVarType(value) === 'set';
}
exports.isSet = isSet;
/**
 * 检查value是否为Function
 * @param value
 */
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
/**
 * 初始化克隆对象
 * @param object
 */
function initCloneObj(object) {
    const Ctor = object.constructor;
    switch (getVarType(object)) {
        case 'number':
        case 'string':
        case 'boolean':
        case 'date':
            return new Ctor(object);
        case 'map':
        case 'set':
            return new Ctor;
        case 'regexp':
            const regexpObj = new Ctor(object.source, /\w*$/.exec(object));
            regexpObj.lastIndex = object.lastIndex;
            return regexpObj;
        case 'object':
            return {};
        case 'array':
            return [];
        default:
            return object;
    }
}
exports.initCloneObj = initCloneObj;
/**
 * 深拷贝
 * @param value
 * @Add Version: V0.5.0
 * @Description：深拷贝对象自身的属性。
 * 1.支持深拷贝的数据类型有number、string、boolean、null、undefined、Number、String、Boolean、Map、Set、Object、Array、RegExp、Date。
 * 2. Int8Array、Uint8Array、Int16Array等对象数据只会进行简单的复制，不会进行深拷贝。
 */
function cloneDeep(value) {
    if (!isObject(value)) { // 如果value值为基本数据类型，则直接返回
        return value;
    }
    let result = initCloneObj(value); // 根据value的数据类型初始化克隆对象
    if (isMap(value)) { // 如果value值为Map类型
        value.forEach((subValue, key) => {
            result.set(key, cloneDeep(subValue));
        });
        return result;
    }
    else if (isSet(value)) { // 如果value值为Set类型
        value.forEach((subValue) => {
            result.add(cloneDeep(subValue));
        });
        return result;
    }
    else if (isObj(value) || isArray(value)) { // 如果value值类型为object或者array
        result = isArray(value) ? [] : {};
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                result[key] = isObject(value[key]) ? cloneDeep(value[key]) : value[key];
            }
        }
        return result;
    }
    else { // 其它数据类型
        return result;
    }
}
exports.cloneDeep = cloneDeep;
