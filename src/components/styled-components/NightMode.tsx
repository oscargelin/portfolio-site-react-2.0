import { Moon } from "@styled-icons/heroicons-solid/Moon";
import styled from "styled-components";

type Props = { color?: string };

const NightMode = styled(Moon)<Props>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export default NightMode;
