export const commands = {
  "!help": "Comandos disponibles: !about, !contact, !clear, !work, !tech. Escribe !help seguido de algun comando disponible para saber mas acerca de ese comando",
  "!about": "Link a la pagina about",
  "!work": ["https://twitter.com/home", "https://www.instagram.com/", "https://www.tiktok.com/"],
  "!tech": ["Javascript", "React", "html,css,bootstrp", "Haz click aquí para saber más..."],
  "!contact": "carlosdev90@gmail.com"
}

export function handleCommand(command) {
  if (command === "!clear") {
    return (setOutput) => setOutput("");
  }
  const response = commands[command];
  if (response) {
    if (Array.isArray(response)) {
      return response.join("\n");
    } else {
      return response;
    }
  } else {
    return "El comando no es valido. Introduce !help para ver los comandos disponibles"
  }
}