import React, { useState } from "react";
import Input from "./Input";
// import lgbg1 from "../../assets/login/login-bg-1.avif";
import lgbg2 from "../../assets/login/login-bg-2.jpg";
// import lgbg3 from "../../assets/login/login-bg-3.jpg";
import { useLogin } from "../../hooks/auth/useLogin";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errs, setErrs] = useState({ username: "", password: "" });

  const [error, loginUser] = useLogin();

  const validate = (name, value) => {
    switch (name) {
      case "username":
        if (value.length === 0) {
          setErrs((prev) => {
            return { ...prev, [name]: "Please Enter Username" };
          });
        } else {
          setErrs((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;
      case "password":
        if (value.length === 0) {
          setErrs((prev) => {
            return { ...prev, [name]: "Please Enter Password" };
          });
        } else {
          setErrs((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;

      default:
        break;
    }
  };

  const submitValidations = () => {
    for (const key of Object.keys(formData)) {
      validate(key, formData[key]);
    }
    let valid = true;
    for (const key of Object.keys(errs)) {
      console.log(errs[key]);
      if (errs[key].length > 0) {
        valid = false;
        break;
      }
    }

    return valid;
  };

  const handleForm = (name, value) => {
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    validate(name, value);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const valid = submitValidations();
    if (valid) {
      // call custom hook to handle
     loginUser(formData.username, formData.password);
      
    } else {
      // show errors in the page
    }
  };
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${lgbg2})`,
      }}
    >
      {/* background image add */}
      {/* card for login */}
      <div className="login-card-section">
        <div className="login-title-section">
          <span className="material-icons-outlined login-title-icon">
            auto_stories
          </span>
          <span className="login-title">Academia</span>
        </div>
        {error && error.length > 0 && (
          <div className="error-section">{error}</div>
        )}
        <div className="login-inputs-section">
          <Input
            title={"UserName"}
            type={"text"}
            name={"username"}
            value={formData.username}
            placeholder={"Enter Username"}
            err={errs.username}
            handleForm={handleForm}
          />
          <Input
            title={"Password"}
            type={"password"}
            name={"password"}
            value={formData.password}
            placeholder={"Enter Password"}
            err={errs.password}
            handleForm={handleForm}
          />
        </div>
        <div className="login-submit-section">
          <button className="custom-btn" type="submit" onClick={submitLogin}>
            signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
