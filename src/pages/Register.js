import { useState, useEffect } from "react";
import { PageLogo } from "../components/Logo";
import styled from "styled-components";
import { FormRow } from "../components/FormRow";
import { Alert } from "../components/Alert";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const FormHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

`;

const FormFooter = styled.footer`
  margin: 3rem 0 0 0;
  text-align: center;
  p:last-child {
    margin-bottom: 0;
  }

`;

export default function Register() {
  const {
    user,
    showAlert,
    isLoading,
    displayAlert,
    clearAlert,
    registerUser,
    loginUser,
  } = useAppContext();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });

  const navigate = useNavigate();

  const toggleMember = (e) => {
    e.preventDefault();
    setData((data) => {
      return { ...data, isMember: !data.isMember };
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clearAlert();
    const { name, email, password, isMember } = data;
    if (!email || !password || (!isMember && !name)) {
      displayAlert("danger");
      return;
    }
    if (isMember) {
      loginUser({ email, password });
    } else {
      registerUser({ name, email, password });
    }
  };

  useEffect(() => {
    if (!user) return;
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, [user, navigate]);

  return (
    <form className="form" onSubmit={onSubmit}>
      <FormHeader>
        <h3>{data.isMember ? "Login" : "Register"}</h3>
        <PageLogo />
      </FormHeader>

      {showAlert && <Alert />}

      {!data.isMember && (
        <FormRow
          type="text"
          name="name"
          value={data.name}
          handleChange={(e) => handleChange(e)}
        />
      )}
      <FormRow
        type="email"
        name="email"
        value={data.email}
        handleChange={(e) => handleChange(e)}
      />
      <FormRow
        type="password"
        name="password"
        value={data.password}
        handleChange={(e) => handleChange(e)}
      />

      <FormFooter>
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          <span>
            {data.isMember ? "Not a member yet?" : "Already a member?"}
          </span>{" "}
          <a type="button" href="/" onClick={(e) => toggleMember(e)}>
            {data.isMember ? "Register" : "Login"}
          </a>
        </p>
      </FormFooter>
    </form>
  );
}
