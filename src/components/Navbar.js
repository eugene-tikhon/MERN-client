import styled from "styled-components";
import { FaCaretDown, FaUserAstronaut } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { PageLogo } from "./Logo";
import { useAppContext } from "../context/appContext";
import { useState } from "react";

const NavbarSection = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-5);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 800px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

export const Navbar = () => {
  const { toggleSidebar, logoutUser, user } = useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);
 

  return (
    <NavbarSection>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
            <SlMenu />       
        </button>

        <div>
          {/* <PageLogo /> */}
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => {setShowDropdown((showDropdown) => !showDropdown)}}>
            <FaUserAstronaut />
            {user?.name} {user?.lastName}
            <FaCaretDown />
          </button>
          {showDropdown && (
            <div className="dropdown show-dropdown">
              <button
                onClick={() => logoutUser()}
                className="dropdown-btn"
              >
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </NavbarSection>
  );
};
