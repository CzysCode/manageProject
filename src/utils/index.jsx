import { useEffect, useMemo, useState } from "react"

// 在一个函数里面，删除掉一个对象中值为空的属性
export const isFalsy = obj => {
    return obj === 0 ? false : !obj
}

export const cleanObject = object => {
    const clone = { ...object }
    Object.keys(clone).forEach(key => {
        if (isFalsy(clone[key])) {
            delete clone[key]
        }
    })
    return clone
}

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

// 实现的功能，在delay时间内，如果多次触发，只有最后一次修改
// 得保存当前的时间，这里怎么用闭包？？
/*
    怎么保存时间是一个问题！！
    另一个是返回的问题，这个应该会多次渲染调用函数，所以不是大问题
*/
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])
    return debouncedValue
}
