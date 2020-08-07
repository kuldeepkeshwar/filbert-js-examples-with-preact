
import { render } from "preact";
import App from "./app";


if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
