import main from "../assets/images/main_two.svg";
import { PageLogo } from "../components/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
`;

const PageContainer = styled.section`
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items:center;  
    @media(min-width: 800px){
       grid-template-columns: 1fr 1fr;
       column-gap: 3rem;  
    }
`;

const PageTitle = styled.h1`
    color: var(--primary-grey);
    font-weight: bold;
    mark {
        color: var(--primary-500);
        background: none;
    }
`

const PageImg = styled.img`
    max-width: 100%;
`

export const Landing = () => {
  return (
    <main>
      <Nav>
        <PageLogo />
      </Nav>
      <PageContainer>
        <article className="info">
          <PageTitle>eTii <mark>Tracking</mark> App</PageTitle>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </article>
        <PageImg src={main} className="main main-img" alt="Main" />
      </PageContainer>
    </main>
  );
};
