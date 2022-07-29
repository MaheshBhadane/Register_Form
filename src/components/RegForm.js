import React, { useState } from "react";

const RegForm = (props) => {
  const { onAddInput } = props;
  const { onEditInput } = props;
  //const { EReg = [], onEditInput } = props;

  const [toggleSubmit, setToggleSubmit] = useState(true);

  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    phone: ""
  });

  const handleInputs = (e) => {
    //console.log(e);
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <>
      <div>
        <h1>Register Here</h1>
      </div>
      <div>
        Username:
        <input
          type="name"
          placeholder="Username"
          id="name"
          value={user.name}
          onChange={handleInputs}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          placeholder="Pass"
          id="password"
          value={user.password}
          onChange={handleInputs}
        />
      </div>
      <div>
        Email:
        <input
          type="email"
          placeholder="email"
          id="email"
          value={user.email}
          onChange={handleInputs}
        />
      </div>
      <div>
        <label>
          Gender:
          <input
            type="radio"
            id="Male"
            name="gender"
            value={user.gender}
            onChange={handleInputs}
          />{" "}
          Male
          <input
            type="radio"
            id="Female"
            name="gender"
            value={user.gender}
            onChange={handleInputs}
          />
          Female
          <input
            type="radio"
            id="Other"
            name="gender"
            value={user.gender}
            onChange={handleInputs}
          />
          Other
        </label>
      </div>
      <div>
        <label>
          Phone:
          <select>
            <option>+91</option>
            <option>+256</option>
            <option>+125</option>
            <option>+100</option>
          </select>
        </label>
        <input
          type="tel"
          id="phone"
          maxlength="10"
          value={user.phone}
          onChange={handleInputs}
        />
      </div>
      {toggleSubmit ? (
        <div>
          {" "}
          <button
            onClick={() => {
              onEditInput(user);
              setUser({});
            }}
          >
            {" "}
            Update{" "}
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <button
            onClick={() => {
              onAddInput(user);
              setUser({});
            }}
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default RegForm;
