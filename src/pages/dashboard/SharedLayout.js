import { Link, Outlet } from "react-router-dom";
import { SmallSidebar } from "../../components/SmallSidebar";
import { BigSidebar } from "../../components/BigSidebar";
import { Navbar } from "../../components/Navbar";
import styled from "styled-components";

const Dashboard = styled.main`
  @media (min-width: 800px) {
    display: flex;
  }
`;

const DashboardSection = styled.main`
  @media (min-width: 800px) {
    flex: 1 1 auto;
  }
`;

const DashboardContent = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding: 2rem 0;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <Dashboard>
        <SmallSidebar />
        <BigSidebar />
        <DashboardSection>
          <Navbar />
          <DashboardContent>
            <Outlet />
          </DashboardContent>
        </DashboardSection>
      </Dashboard>
    </>
  );
};
