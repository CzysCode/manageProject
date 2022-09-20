import { useEffect, useMemo, useState } from "react";
import { add } from "husky";

// 在一个函数里面，删除掉一个对象中值为空的属性
export const isFalsy = (obj: unknown) => {
  return obj === 0 ? false : !obj;
};

export const cleanObject = (object: Object) => {
  const clone = { ...object };
  Object.keys(clone).forEach((key) => {
    // @ts-ignore
    if (isFalsy(clone[key])) {
      // @ts-ignore
      delete clone[key];
    }
  });
  return clone;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 实现的功能，在delay时间内，如果多次触发，只有最后一次修改
// 得保存当前的时间，这里怎么用闭包？？
/*
    怎么保存时间是一个问题！！
    另一个是返回的问题，这个应该会多次渲染调用函数，所以不是大问题
*/
export const useDebounce = <V extends {}>(value: V, delay?: number): V => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};

// 第一个难点，函数的返回值怎么写？使用对象怎么写泛型呢？
//
export const useArray = <T extends {}>(initialArray: T[]) => {
  const [value, setState] = useState(initialArray);
  const add = (obj: T) => {
    setState([...value, obj]);
  };
  const clear = () => {
    setState([]);
  };
  const removeIndex = (index: number) => {
    setState(value.slice(0, index).concat(value.slice(index + 1)));
  };
  return { value, clear, removeIndex, add };
};
