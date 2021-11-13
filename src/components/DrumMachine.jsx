import { useState, useEffect } from "react";

function DrumPad(props) {
  return  (
      <button
        id={"pad-" + props.trigger}
        className="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
        onClick={props.callback}
      >
        <audio 
          id={props.trigger} 
          className="clip"
          src={props.clip} 
        />
        {props.trigger}
      </button>
  )
}

export default function DrumMachine() {
  const [display, setDisplay] = useState("Play Something!");
  const playAudio = (id) => {
    if (!id) { return; }
    console.log(id);
    const sound = document.getElementById(id.toUpperCase());
    if (sound) { 

    sound.currentTime = 0;
    sound.play();
    setDisplay(id);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', (e) => playAudio(e.key));
    playAudio();
  }, []);

  return (
    <div 
      className="container mx-auto grid grid-cols-4 grid-rows-3 px-4 py-6 bg-gray-700 text-center w-3/4 md:h-1/2 h-3/4 justify-center rounded shadow-xl"
      id="drum-machine"
    >
      <DrumPad callback={() => playAudio("Q")} trigger="Q" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("W")} trigger="W" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("E")} trigger="E" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("A")} trigger="A" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("S")} trigger="S" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("D")} trigger="D" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("Z")} trigger="Z" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("X")} trigger="X" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <DrumPad callback={() => playAudio("C")} trigger="C" clip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
      <h2 value={display} id="display" className="text-2xl text-bold cols-span-1 rows-span-4">{display}</h2>
    </div>
  );
}
