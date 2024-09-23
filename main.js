import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";
import { changeText } from "./click.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
      <h1 id="title">Haii</h1>
      <button id="gantitext">Change Heading Text</button>
    </div>
`;

// setupCounter(document.querySelector("#counter"));
// changeText(document.querySelector("#gantitext"));
changeText();
