import styled from "styled-components";
import colors from "../../constants/colors";

type Props = {
  size: "s" | "m" | "l";
  backgroundColor?: string;
  color?: string;
};

const Card = styled.div<Props>`
  width: ${(props) =>
    props.size === "s" ? "50px" : props.size === "m" ? "100px" : "150px"};
  height: ${(props) =>
    props.size === "s" ? "50px" : props.size === "m" ? "100px" : "150px"};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 6px;
  box-shadow: 0px 0px 4px black;
  color: ${(props) => props.color};
`;
export default Card;
