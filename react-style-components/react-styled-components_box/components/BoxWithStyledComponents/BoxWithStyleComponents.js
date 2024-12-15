import styled from "styled-components";

const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

    &:hover {
    background-color: red;
`;

// Die Komponente BoxWithStyledComponents exportieren
export default BoxWithStyledComponents;
