import React from "react";
import RegItem from "./RegItem";

const RegList = (props) => {
  const { Regs = [], onRemoveInput } = props;

  return (
    <>
      {Regs.map((Reg) => (
        <RegItem Reg={Reg} onRemoveInput={onRemoveInput} />
      ))}
    </>
  );
};

export default RegList;
