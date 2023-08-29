import sound1 from '../../sound/key1.mp3';
import sound2 from '../../sound/key2.mp3';
import sound3 from '../../sound/key3.mp3';
import sound4 from '../../sound/key4.mp3';
import cv from '../../assets/cv/cv.pdf';

export const commands = {
  "help": "Available commands: work, skills, download cv, contact, hack, clear",
  "about": "Link a la pagina about",
  "work": ["https://react-pokedex-app-omega.vercel.app/", "https://pomodoro-clock-eight.vercel.app/", "https://fincamaranata.site/", "https://nescritor.com/"],
  "skills": ["Javascript", "React.js", "html, css, bootstrp, sass", "Node.js", "AntDesign, Tailwind CSS"],
  "contact": ["carlosdev90@gmail.com", "https://www.linkedin.com/in/carlos-cabrera-323678113/"],
  "hack": ` **         *******   **             ****     ** **   ******  ********       ********** *******   **    **
/**        **/////** /**            /**/**   /**/**  **////**/**/////       /////**/// /**////** //**  ** 
/**       **     //**/**            /**//**  /**/** **    // /**                /**    /**   /**  //****  
/**      /**      /**/**            /** //** /**/**/**       /*******           /**    /*******    //**   
/**      /**      /**/**            /**  //**/**/**/**       /**////            /**    /**///**     /**   
/**      //**     ** /**            /**   //****/**//**    **/**                /**    /**  //**    /**   
/******** //*******  /********      /**    //***/** //****** /********          /**    /**   //**   /**   
////////   ///////   ////////       //      /// //   //////  ////////           //     //     //    //    `,
  "download cv": "",
}
export function handleDownloadCV() {
  // Crear un elemento <a> con el atributo href establecido en la ruta del archivo PDF
  const link = document.createElement('a');
  link.href = cv;
  link.download = 'cv.pdf';

  // Simular un clic en el elemento <a> para iniciar la descarga
  link.click();
}


export function handleCommand(command) {
  if (command === "clear") {
    return (setOutput) => setOutput("");
  } else if (command === "download cv") {
    handleDownloadCV();
    return "CV has been downloaded successfully";
  }
  const response = commands[command];
  if (response) {
    if (Array.isArray(response)) {
      return response.join("\n");
    } else {
      return response;
    }
  } else {
    return "The command is not valid. Enter !help to see the available commands";
  }
}


export const sounds = [sound1, sound2, sound3, sound4];

export const onKeyPress = (sounds) => {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  const sound = new Audio(sounds[randomIndex]);
  sound.play();
}
