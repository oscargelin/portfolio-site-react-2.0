import styled from "styled-components";

type Props = {
  boxShadowColor: string;
  color?: string;
};

const InputField = styled.input<Props>`
  outline: none;
  border: none;
  color: ${(props) => props.color};
  box-shadow: 0px 0px 4px ${(props) => props.boxShadowColor};
  padding: 6px;
  font-size: 14px;
  font-weight: 600;
`;
export default InputField;
