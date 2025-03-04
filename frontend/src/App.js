import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layout";

function App() {
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <h1>asds;aALSK</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
`;

export default App;
