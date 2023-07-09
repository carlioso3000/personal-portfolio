import React, {useState} from "react";
import '../../styles/terminal.css';
import { handleCommand } from "../../utils/terminalLogic/terminalLogic";

function Terminal() {

  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = event => setCommand(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = handleCommand(command);
    setOutput((prevOutput) => prevOutput + command + "\n" + response + "\n");
    setCommand("");
  }



  return (
      <div className="terminal">
        <div className="terminal-head">
          <h2>Bienvenido a la consola de comandos. Version [1.0.1204.206]</h2>
          <p>Por favor introduce un comando valido.</p>
          <p>Introduce !help para ver una lista de comandos</p>
        </div>
        
        <pre>{output}</pre>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={command}
          onChange={handleChange}
          />
        </form>
      </div>
  )
};

export default Terminal;