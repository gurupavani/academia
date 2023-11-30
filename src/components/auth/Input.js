import React from "react";

const Input = ({ title, name, type, value, placeholder, handleForm, err }) => {
  return (
    <div className="login-input-section">
      <span className="login-input-label">{title}</span>
      <input
        className="login-input"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleForm(e.target.name, e.target.value)}
      />
      {err && err.length > 0 && <span className="login-input-err">{err}</span>}
    </div>
  );
};

export default Input;
