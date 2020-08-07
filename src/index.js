import App from "./app";
import { h } from "preact";
import { render } from "preact";
if (typeof window !== "undefined") {
  render(<App />, document.getElementById("app"));
}
