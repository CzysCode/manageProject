import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <th>{project.name}</th>
            <th>
              {users.find((item) => item.id === project.personId)?.name ||
                "未知"}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
