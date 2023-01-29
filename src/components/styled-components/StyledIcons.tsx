import {
  Typescript,
  Git,
  Javascript,
  Html5,
  Css3,
  Sass,
  ReactLogo,
  Github,
  Linkedin,
} from "../../styledIcons";
import styled from "styled-components";

type Props = {
  color?: string;
};

export const TypescriptIcon = styled(Typescript)<Props>`
  color: ${(props) => props.color};
`;

export const GitIcon = styled(Git)<Props>`
  color: ${(props) => props.color};
`;

export const JavaScriptIcon = styled(Javascript)<Props>`
  color: ${(props) => props.color};
`;
export const HtmlIcon = styled(Html5)<Props>`
  color: ${(props) => props.color};
`;
export const CssIcon = styled(Css3)<Props>`
  color: ${(props) => props.color};
`;
export const SassIcon = styled(Sass)<Props>`
  color: ${(props) => props.color};
`;
export const ReactIcon = styled(ReactLogo)<Props>`
  color: ${(props) => props.color};
`;
export const GithubIcon = styled(Github)<Props>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export const LinkedinIcon = styled(Linkedin)<Props>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
