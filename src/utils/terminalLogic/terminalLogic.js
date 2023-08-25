import sound1 from '../../sound/key1.mp3';
import sound2 from '../../sound/key2.mp3';
import sound3 from '../../sound/key3.mp3';
import sound4 from '../../sound/key4.mp3';

export const commands = {
  "help": "Comandos disponibles: about, work, skills, download cv, contact, clear. Escribe 'help' seguido de algun comando disponible para saber mas acerca de ese comando",
  "about": "Link a la pagina about",
  "work": ["https://twitter.com/home", "https://www.instagram.com/", "https://www.tiktok.com/"],
  "skills": ["Javascript", "React.js", "html, css, bootstrp, sass", "Node.js", "AntDesign, Tailwind CSS", "Haz click aquí para saber más..."],
  "contact": "carlosdev90@gmail.com",
  "download cv": "",
}



export function handleCommand(command) {
  if (command === "clear") {
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

export const sounds = [sound1, sound2, sound3, sound4];

export const onKeyPress = (sounds) => {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const sound = new Audio(sounds[randomIndex]);
  sound.play();
}
