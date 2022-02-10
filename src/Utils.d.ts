/**
 * 获取变量类型
 * @param value
 * @return 变量类型(string，全部小写字母)
 */
export declare function getVarType(value: any): string;
/**
 * 检查value值是否为null
 * @param value
 */
export declare function isNull(value: any): boolean;
/**
 * 检查value值是否为undefined
 * @param value
 */
export declare function isUndefined(value: any): boolean;
/**
 * 检查value的类型是否为number或者Number对象
 * @param value
 */
export declare function isNumber(value: any): boolean;
/**
 * 检查value的类型是否为string或者String对象
 * @param value
 */
export declare function isString(value: any): boolean;
/**
 * 检查value的类型是否为boolean或者Boolean对象
 * @param value
 */
export declare function isBoolean(value: any): boolean;
/**
 * 检查value是否为symbol类型
 * @param value
 */
export declare function isSymbol(value: any): boolean;
/**
 * 检查value的类型是否为Object对象
 * @param value
 */
export declare function isObject(value: any): boolean;
/**
 * 检查value类型是否为object对象
 * @param value
 */
export declare function isObj(value: any): boolean;
/**
 * 检查value类型是否为Array对象
 * @param value
 */
export declare function isArray(value: any): boolean;
/**
 * 检查value值是否为Map类型
 * @param value
 */
export declare function isMap(value: any): boolean;
/**
 * 检查value值是否为Set类型
 * @param value
 */
export declare function isSet(value: any): boolean;
/**
 * 检查value是否为Function
 * @param value
 */
export declare function isFunction(value: any): boolean;
/**
 * 初始化克隆对象
 * @param object
 */
export declare function initCloneObj(object: any): any;
/**
 * 深拷贝
 * @param value
 * @Add Version: V0.5.0
 * @Description：深拷贝对象自身的属性。
 * 1.支持深拷贝的数据类型有number、string、boolean、null、undefined、Number、String、Boolean、Map、Set、Object、Array、RegExp、Date。
 * 2. Int8Array、Uint8Array、Int16Array等对象数据只会进行简单的复制，不会进行深拷贝。
 */
export declare function cloneDeep(value: any): any;
