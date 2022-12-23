import { Link } from "react-router-dom";

import CounterIsland from "./Counter.island.jsx";
import { capri, h1, main, section } from "./styles.css";

export function Home() {
  return (
    <main className={main}>
      <h1 className={h1}>
        <i className={capri}>Capri</i> + vanilla-extract 🧁
      </h1>
      <section className={section}>
        This page is static, but contains some dynamic parts.
      </section>
      <section className={section}>
        Here is a simple counter: <CounterIsland />
      </section>
      <Link to="/about">Link to another page</Link>
    </main>
  );
}
