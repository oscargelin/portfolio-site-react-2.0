import Container from "../styled-components/Container";
import Wrapper from "../styled-components/Wrapper";
import Header from "../styled-components/Header";
import Main from "../styled-components/Main";
import Footer from "../styled-components/Footer";
import Navbar from "../styled-components/Navbar";
import HamburgerMenu from "../styled-components/HamburgerMenu";
import profilePic from "../../images/profilePic.jpg";
import Box from "../styled-components/Box";
import Button from "../styled-components/Button";
import { useEffect, useState } from "react";
import InputField from "../styled-components/InputField";
import WindowButton from "../styled-components/WindowButton";
import colors from "../../constants/colors";
import LinkItem from "../styled-components/LinkItem";
import ColorPickerBox from "../styled-components/ColorPickerBox";
import MaximizeWindow from "../styled-components/MaximizeWindow";
import Card from "../styled-components/Card";
import Typescript from "../styled-components/StyledIcons";
const regexNumber = /^[0-9]+$/;

const isMobile = true;
const isTablet = false;
const isDesktop = false;

const temp = "const hireOscar = (offer: number) : boolean =>{ ";
const tempOne = "if(offer >= requestedSalary){";
const tempTwo = "} else {";
const tempThree = " } return hired;";
const tempFour = " }}";

const minSalaryLimit = 60000;

const PortfolioSite = () => {
  const [themeBackgroundColor, setThemeBackgroundColor] = useState<string>(
    localStorage.getItem("themeBackgroundColor")
      ? (localStorage.getItem("themeBackgroundColor") as string)
      : colors.gradientGreen
  );

  const [themeColor, setThemeColor] = useState<string>(
    localStorage.getItem("themeColor")
      ? (localStorage.getItem("themeColor") as string)
      : colors.green
  );

  const [isWindowFullSize, setIsWindowFullSize] = useState<boolean>(false);

  const [isWindowHidden, setIsWindowHidden] = useState<boolean>(false);

  const [isWindowClosed, setIsWindowClosed] = useState<boolean>(false);

  const [isHamburgerMenuClicked, setIsHamburgerMenuClicked] =
    useState<boolean>(false);

  const [isChangeThemeClicked, setIsChangeThemeClicked] =
    useState<boolean>(false);

  const [isHireButtonClicked, setIsHireButtonClicked] =
    useState<boolean>(false);

  const [isSalaryAccepted, setIsSalaryAccepted] = useState<boolean>(false);

  const [isInputValidated, setIsInputValidated] = useState<boolean>(false);

  const [isInputBiggerThanZero, setIsInputBiggerThanZero] = useState(false);

  const setTheme = (themeBackgroundColor: string, themeColor: string): void => {
    localStorage.setItem("themeBackgroundColor", themeBackgroundColor);
    setThemeBackgroundColor(themeBackgroundColor);
    localStorage.setItem("themeColor", themeColor);
    setThemeColor(themeColor);
  };

  const yellowWindowButtonClicked = () => {
    setIsWindowHidden((prevValue) => !prevValue);
  };

  const greenWindowButtonClicked = () => {
    console.log("initial state", isWindowFullSize);
    setIsWindowFullSize((prevValue) => !prevValue);

    console.log("windowSized state: ", isWindowFullSize);
  };

  const hamburgerMenuClicked = () => {
    setIsHamburgerMenuClicked((prevValue) => !prevValue);
    if (isHamburgerMenuClicked) {
      setIsChangeThemeClicked(false);
    }
  };

  const checkInputBiggerThanZero = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsInputBiggerThanZero(true);
    } else {
      setIsInputBiggerThanZero(false);
    }
  };

  const checkIsInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (regexNumber.test(e.target.value)) {
      setIsInputValidated(true);
    } else {
      setIsInputValidated(false);
    }
  };
  const checkSalaryAccepted = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) >= minSalaryLimit) {
      setIsSalaryAccepted(true);
    } else {
      setIsSalaryAccepted(false);
    }
  };

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkInputBiggerThanZero(e);
    checkIsInputNumber(e);
    checkSalaryAccepted(e);
  };

  return (
    <Wrapper backgroundColor={themeBackgroundColor}>
      <div
        style={{
          width: "40px",
          height: "60px",
          backgroundColor: colors.cream,
          position: "absolute",
          right: "0",
          top: `${isWindowFullSize ? "10px" : "5vh"}`,
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translate(${!isWindowHidden ? "5000px" : "0"})`,
          transition: "all 0.4s ",
        }}
        onClick={() => setIsWindowHidden(false)}
      >
        <p style={{ rotate: "90deg", fontSize: "14px", fontWeight: "700" }}>
          show
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "15px",
          backgroundColor: colors.cream,
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translate(${!isWindowClosed ? "5000px, 5000px" : "0"})`,
          transition: "all 0.4s ",
        }}
        onClick={() => setIsWindowClosed(false)}
      >
        <hr style={{ width: "100%" }}></hr>
      </div>
      <Container
        isWindowHidden={isWindowHidden}
        isWindowClosed={isWindowClosed}
        width={isWindowFullSize ? "100%" : "80%"}
        marginY={isWindowFullSize ? "10px" : "5vh"}
        marginX={isWindowFullSize ? "1vw" : "5vw"}
        color={themeColor}
      >
        <Header>
          <Box
            style={{
              paddingLeft: "14px",
              position: "absolute",
              display: "flex",
              gap: "12px",
              top: "-6px",
            }}
          >
            <WindowButton
              backgroundColor={colors.redWindowBtn}
              onClick={() => setIsWindowClosed(true)}
            />
            <WindowButton
              backgroundColor={colors.yellowWindowBtn}
              onClick={() => setIsWindowHidden(true)}
            />
            <WindowButton
              backgroundColor={colors.greenWindowBtn}
              onClick={() => greenWindowButtonClicked()}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 8px 0px 10px",
              height: "100%",
            }}
          >
            <h1 style={{ fontSize: isTablet || isDesktop ? "42px" : "22px" }}>
              Oscar Gelin
            </h1>
            <Navbar>
              <HamburgerMenu
                size="40"
                color={themeColor}
                onClick={() => hamburgerMenuClicked()}
              />
            </Navbar>
          </Box>
        </Header>
        <Main>
          {isHamburgerMenuClicked ? (
            <Navbar
              backgroundColor={themeBackgroundColor}
              style={{
                padding: "2px 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0px 0px 4px black",
              }}
            >
              <LinkItem showBorder={true}>Portfolio</LinkItem>
              <LinkItem showBorder={true}> Contact</LinkItem>
              <LinkItem
                showBorder={true}
                style={{ display: "flex", alignItems: "center" }}
              >
                Language
              </LinkItem>
              <LinkItem
                showBorder={isChangeThemeClicked ? true : false}
                onClick={() => setIsChangeThemeClicked(!isChangeThemeClicked)}
              >
                Change theme
              </LinkItem>
              {isChangeThemeClicked ? (
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "7px",
                  }}
                >
                  <ColorPickerBox
                    height="20px"
                    width="20px"
                    backgroundColor={colors.gradientGreen}
                    title="Gradient green"
                    onClick={() => setTheme(colors.gradientGreen, colors.green)}
                  ></ColorPickerBox>
                  <ColorPickerBox
                    height="20px"
                    width="20px"
                    backgroundColor={colors.gradientPurple}
                    title="Gradient purple"
                    onClick={() =>
                      setTheme(colors.gradientPurple, colors.purple)
                    }
                  ></ColorPickerBox>
                  <ColorPickerBox
                    height="20px"
                    width="20px"
                    backgroundColor={colors.gradientOrange}
                    title="Gradient orange"
                    onClick={() => setTheme(colors.gradientOrange, colors.red)}
                  ></ColorPickerBox>
                  <ColorPickerBox
                    height="20px"
                    width="20px"
                    backgroundColor={colors.gradientGrey}
                    title="Gradient grey"
                    onClick={() => setTheme(colors.gradientGrey, colors.grey)}
                  ></ColorPickerBox>
                  <ColorPickerBox
                    height="20px"
                    width="20px"
                    backgroundColor={colors.gradientTuttiFrutti}
                    title="Gradient Tuttifrutti"
                    onClick={() =>
                      setTheme(colors.gradientTuttiFrutti, colors.pink)
                    }
                  ></ColorPickerBox>
                </Box>
              ) : null}
            </Navbar>
          ) : null}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "14px",
            }}
          >
            <img
              src={profilePic}
              style={{
                height: "140px",
                width: "140px",
                borderRadius: "50%",
                boxShadow: "0px 0px 4px black",
              }}
            />
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "14px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <Button
                backgroundColor={themeColor}
                onClick={() => {
                  setIsHireButtonClicked(!isHireButtonClicked);
                }}
              >
                Hire Oscar
              </Button>
              {isHireButtonClicked ? (
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexDirection: "column",
                  }}
                >
                  <label style={{ fontWeight: "700", fontSize: "12px" }}>
                    Enter monthly salary offer{" "}
                  </label>
                  <InputField
                    maxLength={100}
                    boxShadowColor={
                      !isInputBiggerThanZero
                        ? "black"
                        : isSalaryAccepted
                        ? "green"
                        : "red"
                    }
                    onChange={(e) => validateInput(e)}
                  />
                  {!isInputValidated && isInputBiggerThanZero ? (
                    <p>Enter a number</p>
                  ) : isInputValidated && !isSalaryAccepted ? (
                    <p>Cmon bruh...</p>
                  ) : isSalaryAccepted ? (
                    <p>Aiit aiit, I'm listenin'</p>
                  ) : null}
                </Box>
              ) : null}
            </Box>
          </Box>
          <Box>
            <Card size="m" color={themeColor} backgroundColor={colors.cream}>
              <h4>Portfolio</h4>
              <Typescript color="blue" size={30} />
            </Card>
          </Box>
        </Main>
        <Footer>Footer</Footer>
      </Container>
    </Wrapper>
  );
};
export default PortfolioSite;
