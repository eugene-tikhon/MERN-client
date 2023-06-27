import styled from "styled-components";
import { MdWorkspacePremium } from "react-icons/md";
import { SiSoundcharts } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { useAppContext } from "../context/appContext";
import { NavLink } from "react-router-dom";
import { SiAddthis } from "react-icons/si";

const SidebarNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--grey-500);
  padding: 1rem;
  text-transform: capitalize;
  transition: var(--transition);
  min-width: 148px;

  &:hover {
    padding-left: 2rem;
    color: var(--grey-900);
    .icon {
      color: var(--primary-500);
    }
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  &.active {
    color: var(--grey-900);
  }
  &.active .icon {
    color: var(--primary-500);
  }
`;

export const SidebarNavLinks = (toggleSidebar) => {
  const closeSidebar = (e) => {
    e.preventDefault();
    //toggleSidebar();
  };
  return (
    <>
      <SidebarNavLink to="add-job">
        <span className="icon">
          <SiAddthis />
        </span>
        Add Job
      </SidebarNavLink>
      <SidebarNavLink to="all-jobs">
        <span className="icon">
          <MdWorkspacePremium />
        </span>
        All Jobs
      </SidebarNavLink>
      <SidebarNavLink to="stats">
        <span className="icon">
          <SiSoundcharts />
        </span>
        Stats
      </SidebarNavLink>
      <SidebarNavLink to="profile">
        <span className="icon">
          <ImProfile />
        </span>
        Profile
      </SidebarNavLink>
    </>
  );
};
