import React, { useState } from "react";
import RegForm from "./components/RegForm";
import RegList from "./components/RegList";
import "./styles.css";

export default function App() {
  const [Regs, setRegs] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  const onAddInput = (Reg) => setRegs([...Regs, Reg]);

  const onRemoveInput = (Reg) =>
    setRegs(Regs.filter((i) => i.name !== Reg.name));

  const onEditInput = (Reg) => {
    let newEditItem = Regs.find((i) => {
      return i.name === Reg.name;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    onAddInput(newEditItem.name);
    setIsEdit(Reg);
  };

  return (
    <div>
      <RegForm onAddInput={onAddInput} />
      <RegList Regs={Regs} onRemoveInput={onRemoveInput} />
    </div>
  );
}
