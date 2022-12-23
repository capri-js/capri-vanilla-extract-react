import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  minHeight: "100%",
  padding: 0,
  margin: 0,
  background: "#fafafa",
  fontFamily: '"Helvetica Neue", arial, sans-serif',
  fontWeight: 400,
  color: "#444",
});

globalStyle("a", {
  color: "inherit",
});
