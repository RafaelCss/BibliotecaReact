import { useState, useEffect } from "react";
import { Table, Button, Space, Input, Checkbox } from "antd";
import { source } from "./dados/dados";
import { SearchOutlined } from "@ant-design/icons";

interface IPadrao {
  searchText: string;
  filtered: string;
  setSelectedKeys?: ([]) => string[] | boolean;
  selectedKeys: string[];
  confirm: () => string;
  clearFilters: () => string;
}
export default function Tabela() {
  function handleSearch(confirm: any) {
    console.log("confirm", confirm);
    confirm();
  }

  function handleReset(clearFilters: any) {
    clearFilters();
  }

  const [checkbox, Setcheckbox] = useState("false");

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: IPadrao) => (
      <div style={{ padding: 8 }}>
        {dataIndex == "ingles" ? (
          <Space>
            <Checkbox.Group>
              <Checkbox checked={true} value={"Ativo"} onChange={(e) => setSelectedKeys("true" ? ["true"] : [])}>
                Ativo
              </Checkbox>

              <Checkbox checked={true} value={"Inativo"} onChange={(e) => setSelectedKeys("false" ? ["false"] : [])}>
                Inativo
              </Checkbox>

              <Button type='primary' onClick={() => handleSearch(confirm)} icon={<SearchOutlined />} size='small' style={{ width: 90 }}>
                Buscar
              </Button>

              <Button onClick={(e) => handleReset(clearFilters)} size='small' style={{ width: 90 }}>
                Limpar
              </Button>
            </Checkbox.Group>
          </Space>
        ) : (
          <>
            <Input placeholder={`Buscar ${dataIndex}`} value={selectedKeys[0]} onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])} onPressEnter={() => handleSearch(confirm)} style={{ width: 188, marginBottom: 8, display: "block" }} />
            <Space>
              <Button type='primary' onClick={() => handleSearch(confirm)} icon={<SearchOutlined />} size='small' style={{ width: 90 }}>
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
    filterIcon: (filtered: string) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
    onFilter: (value: any, record: any) => record[dataIndex].toString().toLowerCase().includes(value.toString().toLowerCase()),

    /* onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(100));
      }
    }, */
  });

  const id = Math.random();

  const columns = [
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

  return (
    <>
      <Table key={id} columns={columns} dataSource={source} size={"small"} bordered={true}>
        Olga
      </Table>
    </>
  );
}
