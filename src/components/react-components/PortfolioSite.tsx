import Container from "../styled-components/Container";
import Wrapper from "../styled-components/Wrapper";
import Header from "../styled-components/Header";
import Main from "../styled-components/Main";
import Footer from "../styled-components/Footer";
import Navbar from "../styled-components/Navbar";
import MobileView from "./MobileView";

const isMobile = true;

const PortfolioSite = () => {
  return (
    <Wrapper>
      <Container width="80%">
        <Header>
          {" "}
          Oscar Gelin{" "}
          <Navbar>
            <a>Portfolio</a>
            <a>Portfolio</a>
            <a>Portfolio</a>
          </Navbar>{" "}
        </Header>

        <Main>
          {" "}
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>

            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>{" "}
        </Main>
        <Main> Main</Main>

        <Footer>Footer</Footer>
      </Container>
    </Wrapper>
  );
};
export default PortfolioSite;
