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
    setDisplay(`You just played ${id}`);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', (e) => playAudio(e.key));
    playAudio();
  }, []);

  return (
    <div 
      className="container mx-auto grid grid-cols-5 grid-rows-3 gap-2 grid-flow-row px-4 py-6 bg-gray-700 text-center w-3/4 md:h-1/2 h-3/4 justify-center rounded shadow-xl"
      id="drum-machine"
    >
      <DrumPad callback={() => playAudio("Q")} trigger="Q" clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"/>
      <DrumPad callback={() => playAudio("W")} trigger="W" clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"/>
      <DrumPad callback={() => playAudio("E")} trigger="E" clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"/>
      <h2 value={display} id="display" className="text-2xl text-bold text-center col-span-2 row-span-3">{display}</h2>
      <DrumPad callback={() => playAudio("A")} trigger="A" clip="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"/>
      <DrumPad callback={() => playAudio("S")} trigger="S" clip="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"/>
      <DrumPad callback={() => playAudio("D")} trigger="D" clip="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"/>
      <DrumPad callback={() => playAudio("Z")} trigger="Z" clip="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"/>
      <DrumPad callback={() => playAudio("X")} trigger="X" clip="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"/>
      <DrumPad callback={() => playAudio("C")} trigger="C" clip="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"/>
    </div>
  );
}
