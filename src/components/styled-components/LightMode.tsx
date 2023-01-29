import { Sun } from "@styled-icons/evaicons-solid/Sun";
import styled from "styled-components";

type Props = { color?: string };

const LightMode = styled(Sun)<Props>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export default LightMode;
