import { ReactComponent as SVG1 } from "../../images/svg1.svg";
import { ReactComponent as SVG2 } from "../../images/svg2.svg";
import { ReactComponent as SVG3 } from "../../images/svg3.svg";

export const HomeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  Icon: SVG1,
  dark: true,
  primary: true,
  darkText: false,
};

export const HomeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  Icon: SVG2,
  dark: false,
  primary: false,
  darkText: true,
};

export const HomeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  Icon: SVG3,
  dark: false,
  primary: false,
  darkText: true,
};
