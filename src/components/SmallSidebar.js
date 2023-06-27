import styled from "styled-components";
import { PageLogo } from "./Logo";
import { GrClose } from "react-icons/gr";
import { useAppContext } from "../context/appContext";
import { SidebarNavLinks} from "./SidebarNavLinks"

const SmallSidebarSection = styled.aside`
  @media (min-width: 800px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border-color: transparent;
  font-size: 2rem;
  color: var(--red-dark);
  cursor: pointer;
`;



export const SmallSidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();
  return (
    <>
      {!showSidebar && (
        <SmallSidebarSection>
          <div className="sidebar-container">
            <div className="content">
              <CloseBtn onClick={() => toggleSidebar()}>
                <GrClose />
              </CloseBtn>
              <header>
                <PageLogo />
              </header>
              <SidebarNavLinks toggleSidebar={toggleSidebar} />
            </div>
          </div>
        </SmallSidebarSection>
      )}
    </>
  );
};
