import "./styles.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useState } from "react";
import Switch from "@mui/material/Switch";

function checkIt(output) {
  var arr = ["%", "*", "/", "+", ".", "-"];

  for (let index = 0; index < output.length - 1; index++) {
    var filtered1 = arr.includes(output[index]);
    var filtered2 = arr.includes(output[index + 1]);
    console.log(filtered1);
    console.log(filtered2);
    if (filtered1 === filtered2 && filtered1 === true) {
      return "Invalid input";
    }
  }

  if (output === "") {
    return "Invalid input";
  }

  return eval(output).toString();
}

export default function App() {
  const [output, setOutput] = useState("");
  const [on, setOn] = useState(false);

  return (
    <div className="App">
      <div className="switch">
        Calculator
        <Switch
          defaultChecked
          onClick={() => {
            setOn(!on);
          }}
        />
      </div>
      {!on && (
        <div className="layout">
          <div className="output">
            <div className="inner">{output}</div>
          </div>

          <div className="row">
            <div
              className="elementOperator"
              onClick={() => {
                setOutput(output.length === 0 ? "" : output + "%");
              }}
            >
              %
            </div>
            <div
              className="elementOperator"
              onClick={() => {
                setOutput(output.length === 0 ? "" : output + "/");
              }}
            >
              /
            </div>
            <div
              className="elementOperator"
              onClick={() => {
                setOutput("");
              }}
            >
              C
            </div>
            <div
              className="elementOperator"
              onClick={() => {
                setOutput(output.slice(0, -1));
              }}
            >
              <BackspaceIcon style={{ color: "hotpink" }} />
            </div>
          </div>

          <div className="row">
            <div
              className="element"
              onClick={() => {
                setOutput(output + "7");
              }}
            >
              7
            </div>
            <div
              className="element"
              onClick={() => {
                setOutput(output + "8");
              }}
            >
              8
            </div>
            <div
              className="element"
              onClick={() => {
                setOutput(output + "9");
              }}
            >
              9
            </div>
            <div
              className="elementOperator"
              onClick={() => {
                setOutput(output.length === 0 ? "" : output + "*");
              }}
            >
              x
            </div>
          </div>

          <div className="row">
            <div
              className="element"
              onClick={() => {
                setOutput(output + "4");
              }}
            >
              4
            </div>
            <div
              className="element"
              onClick={() => {
                setOutput(output + "5");
              }}
            >
              5
            </div>
            <div
              className="element"
              onClick={() => {
                setOutput(output + "6");
              }}
            >
              6
            </div>
            <div
              className="elementOperator"
              onClick={() => {
                setOutput(output.length === 0 ? "" : output + "-");
              }}
            >
              -
            </div>
          </div>

          <div className="row">
            <div
              className="element"
              onClick={() => {
                setOutput(output + "1");
              }}
            >
              1
            </div>
            <div
              className="element"
              onClick={() => {
                setOutput(output + "2");
              }}
            >
              2
            </div>
            <div
              className="element"
              onClick={() => {
                setOutput(output + "3");
              }}
            >
              3
            </div>
            <div
              className="elementOperator"
              onClick={() => {
                setOutput(output.length === 0 ? "" : output + "+");
              }}
            >
              +
            </div>
          </div>

          <div className="row">
            <div className="element">+/-</div>
            <div
              className="element"
              onClick={() => {
                setOutput(output + "0");
              }}
            >
              0
            </div>
            <div
              className="element"
              onClick={() => {
                setOutput(output.length === 0 ? "" : output + ".");
              }}
            >
              .
            </div>
            <div
              className="elementEqual"
              onClick={() => {
                setOutput(checkIt(output));
              }}
            >
              =
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
