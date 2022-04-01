import { ColumnProps } from "antd/es/table";

interface User {
  key: number;
  name: string;
  getColumnSearchProps: (dataIndex: string) => ColumnProps<User>;
}

export const columns: ColumnProps<User>[] = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    width: "30%",
    ...getColumnSearchProps("name"),
  },
  {
    title: "Idade",
    dataIndex: "age",
    key: "age",
    width: "30%",
    ...getColumnSearchProps("age"),
  },
  {
    title: "Status",
    dataIndex: "ingles",
    key: "ingles",
    width: "30%",
    render: (value: boolean) => {
      if (value === true) {
        return "Ativo";
      }
      return "Inativo";
    },
    ...getColumnSearchProps("ingles"),
  },
];
