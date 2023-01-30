import { Input } from "antd";
import React from "react";
import "./inputype.scss";

function InputType({ className, value, onChange, onClick, rule, minLength }) {
  return (
    <div>
      <div>
        <Input
          bordered={false}
          onClick={onClick}
          onChange={onChange}
          value={value}
          rule={rule}
          minLength={minLength}
          style={{ backgroundColor: "#f4f4f7" }}
          className={`input_type_style w-100 my-2 pb-2 ${className}`}
          type="text"
        />
      </div>
    </div>
  );
}

export default InputType;