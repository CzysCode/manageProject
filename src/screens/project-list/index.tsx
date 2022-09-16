import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject } from "utils";
import * as qs from "qs";
import { useMount, useDebounce } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [params, setParams] = useState({
    name: "",
    id: "",
  });
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(params, 200);

  // 当输入框发生改变时执行的代码
  useEffect(() => {
    // 发起请求改变当前页面的相关状态值
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (res) => {
      console.log(res);
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);

  // 初始化users数组
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
