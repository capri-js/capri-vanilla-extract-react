import { style } from "@vanilla-extract/css";
import logo from "./capri.svg";

export const main = style({
  maxWidth: "60ch",
  margin: "auto",
  fontSize: "1.5em",
  lineHeight: 1.5,
  padding: "2em",
});

export const h1 = style({
  lineHeight: 1.1,
});

export const capri = style({
  fontStyle: "normal",
  "::after": {
    content: '""',
    display: "inline-block",
    width: "0.8em",
    height: "0.8em",
    marginLeft: "0.25ch",
    background: `url("${logo}") no-repeat`,
    backgroundSize: "contain",
  },
});

export const section = style({
  marginBottom: "1em",
});

export const button = style({
  fontFamily: "inherit",
  fontSize: "0.7em",
  padding: "0.5em 1em",
  background: "#15992b",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  ":hover": {
    background: "#56c13f",
  },
});

export const row = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.2em",
});
