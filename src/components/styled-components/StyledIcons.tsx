import { Typescript } from "../../styledIcons";
import styled from "styled-components";

type Props = {
  color: string;
};

const TypescriptIcon = styled(Typescript)<Props>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export default TypescriptIcon;
