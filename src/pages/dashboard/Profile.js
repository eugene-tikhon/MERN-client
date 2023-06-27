import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { Alert } from "../../components/Alert";
import { FormRow } from "../../components/FormRow";
import styled from "styled-components";


const Form = styled.form`
    width: 100%;
    max-width: inherit;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
`

const FormFooter = styled.footer`
  margin: 3rem 0 0 0;
  text-align: center;
  p:last-child {
    margin-bottom: 0;
  }
`;

export const Profile = () => {
  const { user, userLocation, showAlert, isLoading, updateUser, displayAlert } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(userLocation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !location) {
        displayAlert("danger");
        return;
      }
      updateUser({name, lastName, email, location, id: user.id});
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {showAlert && <Alert />}

        <FormRow
          type="text"
          name="name"
          labelText="First Name"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />
        <FormRow
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />

        <FormRow
          type="text"
          name="location"
          value={location}
          handleChange={(e) => setLocation(e.target.value)}
        />

        <FormFooter>
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            submit
          </button>
        </FormFooter>
      </Form>
    </>
  );
};
