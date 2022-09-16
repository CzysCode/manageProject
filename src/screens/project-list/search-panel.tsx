export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    id: string;
  };
  setParams: (param: SearchPanelProps["params"]) => void;
}

export const SearchPanel = (props: SearchPanelProps) => {
  const { params, setParams, users } = props;

  return (
    <form action="">
      <input
        type="text"
        value={params.name}
        onChange={(evt) =>
          setParams({
            ...params,
            name: evt.target.value,
          })
        }
      />
      <select
        value={params.id}
        onChange={(evt) =>
          setParams({
            ...params,
            id: evt.target.value,
          })
        }
      >
        {users.map((item, index) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
