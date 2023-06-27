import styled, { css } from "styled-components";
import { useAppContext } from "../context/appContext";
import { PageLogo } from "./Logo";
import { SidebarNavLinks } from "./SidebarNavLinks";

const show = css`
  margin-left: 0;
`;

const BigSidebarSection = styled.aside`
  display: none;
  @media (min-width: 800px) {
    display: block;
    box-shadow: var(--shadow-1);
    background: var(--white);
    min-height: 100vh;
    height: 100%;
    min-width: 250px;
    margin-left: -250px;
    transition: var(--transition);

    ${({ showSidebar }) => showSidebar && show}
  }
`;

const SidebarContent = styled.section`
  position: sticky;
  top: 0;
`;

const SidebarHeader = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;

const NavLinksWrap = styled.article`
  margin: 3rem 0 0 0;
    padding: 0 2rem;
`;

export const BigSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <>
      {showSidebar && (
        <BigSidebarSection showSidebar={showSidebar}>
          <SidebarHeader>
            <PageLogo />
          </SidebarHeader>
          <SidebarContent>
            <NavLinksWrap>
              <SidebarNavLinks toggleSidebar={toggleSidebar}/>
            </NavLinksWrap>
          </SidebarContent>
        </BigSidebarSection>
      )}
    </>
  );
};
