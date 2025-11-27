import { Maple } from "./Maple";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

function App() {
  return (
    <AppContainer>
      <Maple />
    </AppContainer>
  );
}

export default App;
