// 在一个函数里面，删除掉一个对象中值为空的属性
function isFalsy(obj) {
    return obj === 0 ? false : !obj
}

export const cleanObject = (object) => {
    const clone = { ...object }
    Object.keys(clone).forEach(key => {
        if (isFalsy(clone[key])) {
            delete clone[key]
        }
    })
    return clone
}
