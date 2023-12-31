import { useState, useEffect } from "react";
import '../../styles/terminal.css';
import { handleCommand, onKeyPress, sounds } from "../../utils/terminalLogic/terminalLogic";

function Terminal() {

  const [command, setCommand] = useState(""); //maneja el estado de los comandos
  const [output, setOutput] = useState("");
  const [response, setResponse] = useState(""); // guarda la respuesta
  const [responseIndex, setResponseIndex] = useState(0); //maneja el estado en base al caracter que se esta mostrando atualmente


  //Establece el retorno de la respuesta de manera progresiva con un delay de 20ms
  useEffect(() => {
    if (responseIndex < response.length) {
      const timeoutId = setTimeout(() => {
        setOutput((prevOutput) => prevOutput + response[responseIndex]);
        setResponseIndex((prevIndex) => prevIndex + 1);
      }, 20);
      return () => clearTimeout(timeoutId);
    }
  }, [response, responseIndex]);

  const handleChange = event => setCommand(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newResponse = handleCommand(command.toLocaleLowerCase());
    setOutput((prevOutput) => prevOutput + command + "\n");
    setCommand("");
    setTimeout(() => {
      if (typeof newResponse === "function") {
        newResponse(setOutput);
      } else {
        setResponse(newResponse + "\n");
        setResponseIndex(0);
      }
    }, 1000);
  };

  /*Handle the onKeyPress function*/

  const handlesound = event => {
    setCommand(event.target.value);
    onKeyPress(sounds)
  };

  const handleInput = event => {
    handleChange(event);
    handlesound(event);
  };

  return (
      <section id="terminal" className="terminal">
        <div className="terminal-container">
          <div className="terminal-head">
            <h2>Welcome to the console. Version [1.0.1204.206]</h2>
            <p>Enter <span className="important-text">help</span> to see a list of commands</p>
          </div>
            <pre>{output}</pre>
          <form onSubmit={handleSubmit} className="terminal-form">
            <span className="arrow">&gt;</span>
            <input 
            type="text" 
            value={command}
            onChange={handleInput}
            />
          </form>
        </div>
      </section>
  )
};

export default Terminal;