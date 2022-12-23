import { Link } from "react-router-dom";
import { h1, main, section } from "./styles.css";

export function About() {
  return (
    <main className={main}>
      <h1 className={h1}>This page is completely static.</h1>
      <section className={section}>
        An since it does not contain any interactive islands, no JavaScript is
        shipped to the browser.
      </section>
      <Link to="/">Home</Link>
    </main>
  );
}
