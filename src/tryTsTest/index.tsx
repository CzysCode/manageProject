import { useArray, useMount } from "utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "czy", age: 25 },
    { name: "ck", age: 23 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  return (
    <div>
      <button onClick={() => add({ name: "Jack", age: 22 })}>add Jack</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={clear}>clear All</button>
      <ul>
        {value.map((item, index) => {
          return (
            <li key={index}>
              <span style={{ color: "red" }}>{index}</span>
              <span>名字：{item.name}</span>
              <span>年龄：{item.age}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
