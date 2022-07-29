import React from "react";

const RegItem = (props) => {
  const { Reg = {}, onRemoveInput } = props;
  const { EReg = {}, onEditInput } = props;

  const { name, password, email, gender, phone } = Reg;
  return (
    <div>
      <div>{name}</div>
      <div>{password}</div>
      <div>{email}</div>
      <div>{gender}</div>
      <div>{phone}</div>
      <div>
        <button>
          <span
            onClick={() => {
              onEditInput(EReg);
            }}
          >
            @
          </span>
        </button>
      </div>
      <div>
        <button>
          <span
            onClick={() => {
              onRemoveInput(Reg);
            }}
          >
            X
          </span>
        </button>
      </div>
    </div>
  );
};

export default RegItem;
