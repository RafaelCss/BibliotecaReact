import { Table, Button, Space, Input, Checkbox } from "antd";
import { source } from "./dados/dados";
import { SearchOutlined } from "@ant-design/icons";
import { ColumnProps } from "antd/es/table";

interface IPadrao {
  searchText: () => any;
  filtered: any;
  selectedKeys?: string[];
  confirm: () => any;
  clearFilters: () => any;
  setSelectedKeys?: any;
}

export default function Tabela() {
  function handleSearch(confirm: () => any): any {
    console.log("confirm");
    confirm();
  }

  function handleReset(clearFilters: any): any {
    clearFilters();
  }

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: IPadrao) => (
      <div style={{ padding: 8 }}>
        {dataIndex == "ingles" ? (
          <Checkbox.Group>
            <Checkbox checked={true} value={"Ativo"} onChange={(e) => setSelectedKeys("true" ? ["true"] : [])}>
              Ativo
            </Checkbox>
            <Checkbox checked={true} value={"Inativo"} onChange={(e) => setSelectedKeys("false" ? ["false"] : [])}>
              Inativo
            </Checkbox>
            <Space>
              <Button type='primary' onClick={() => handleSearch(confirm)} icon={<SearchOutlined />} size='small' style={{ width: 90 }}>
                Buscar
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
                Limpar
              </Button>
            </Space>
          </Checkbox.Group>
        ) : (
          <>
            <Input placeholder={`Buscar ${dataIndex}`} value={selectedKeys} onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])} onPressEnter={() => handleSearch(confirm)} style={{ width: 188, marginBottom: 8, display: "block" }} />
            <Space>
              <Button type='primary' onClick={(e) => handleSearch(confirm)} icon={<SearchOutlined />} size='small' style={{ width: 90 }}>
                Buscar
              </Button>
              <Button onClick={(e) => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
                Limpar
              </Button>
            </Space>
          </>
        )}
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
    onFilter: (value: any, record: any) => record[dataIndex].toString().toLowerCase().includes(value.toString().toLowerCase()),
  });

  const id = Math.random();
  interface User {
    key?: number;
    name: string;
    age: string;
    ingles: boolean;
  }

  const columns: ColumnProps<User>[] = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: "10%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Idade",
      align: "center",
      dataIndex: "age",
      key: "age",
      width: "10%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Status",
      dataIndex: "ingles",
      key: "ingles",
      width: "10%",
      align: "center",
      render: (value: boolean) => {
        if (value === true) {
          return "Ativo";
        }
        return "Inativo";
      },
      ...getColumnSearchProps("ingles"),
    },
  ];

  return (
    <>
      <Table key={id} columns={columns} dataSource={source} size={"small"} bordered={true}>
        Olga
      </Table>
    </>
  );
}
