import { createGlobalStyle } from "styled-components";
import { Fonts } from "../../constants/Fonts";
const StyledGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Russo+One&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Russo One', sans-serif;
    }
`;

export default StyledGlobal;
