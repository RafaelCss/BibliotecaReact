const id = Math.random();

export const columns = [
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
