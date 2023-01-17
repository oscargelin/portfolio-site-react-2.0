import Container from "../styled-components/Container";
import Wrapper from "../styled-components/Wrapper";
import Header from "../styled-components/Header";
import Main from "../styled-components/Main";

const PortfolioSite = () => {
  return (
    <Wrapper>
      <Container height={"100vh"}>
        <Header>Oscar Gelin</Header>
        <Main rowStart={2} rowEnd={3} columnStart={1} columnEnd={2}>
          Content
        </Main>
        <Main rowStart={2} rowEnd={3} columnStart={2} columnEnd={3}>
          Content
        </Main>

        <Header>Header</Header>
      </Container>
    </Wrapper>
  );
};
export default PortfolioSite;
