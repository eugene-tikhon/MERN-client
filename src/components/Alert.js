import { useAppContext } from '../context/appContext';
import styled from "styled-components";

const AlertMsg = styled.div`
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: var(--borderRadius);
  text-align: center;
  letter-spacing: var(--letterSpacing);

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const AlertDangerMsg = styled(AlertMsg)`
  color: var(--red-dark);
  background: var(--red-light);
`;

const AlertSuccessMsg = styled(AlertMsg)`
  color: var(--green-dark);
  background: var(--green-light);
`;

export const Alert = () => {
  const {alertText, alertType } = useAppContext();  
  let Alert;
  if (alertType === "danger") {
    Alert = (
      <AlertDangerMsg>
        <p>{alertText}</p>
      </AlertDangerMsg> 
  )
  }
  if (alertType === "success") {
    Alert = (
      <AlertSuccessMsg>
        <p>{alertText}</p>
      </AlertSuccessMsg> 
    )
  }
  return Alert;
};
