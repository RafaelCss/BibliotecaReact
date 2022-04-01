import { Input } from "antd";

export interface InputTextoProps {
  label?: string;
  name?: string;
  value?: string;
  onChange: (e: string) => any;
  placeholder?: string;
  type?: string;
  mask?: string;
  disabled?: boolean;
}

export function InputMaskSaldo({ label, placeholder, value, onChange }: InputTextoProps) {
  return <Input placeholder={placeholder} key={"intut"} onChange={(e) => onChange(e.target.value)} value={value} />;
}
