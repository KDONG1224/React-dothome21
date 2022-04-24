import React from "react";
import { Select } from "antd";

const RoundSelect = ({ handleChange }) => {
  const { Option } = Select;

  return (
    <>
      <Select
        onChange={handleChange}
        style={{ display: "block" }}
        placeholder="술드컵의 라운드를 선택해주세요~"
      >
        <Option value="8">8강</Option>
        <Option value="16">16강</Option>
        <Option value="32">32강</Option>
        <Option value="64">64강</Option>
      </Select>
    </>
  );
};

export default RoundSelect;
