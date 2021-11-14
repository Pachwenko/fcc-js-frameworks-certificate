import { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const displayTextSlice = createSlice({
  name: "displayText",
  initialState: {
    value: "Play Something!",
  },
  reducers: {
    setDisplayText: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setDisplayText } = displayTextSlice.actions;


const store = configureStore({
  reducer: {
    displayText: displayTextSlice.reducer,
  },
});

function DrumPad(props) {
  const dispatch = useDispatch();
  function playAudio(id)  {
    if (!id) {
      return;
    }
    const sound = document.getElementById(id);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      dispatch(setDisplayText(`You just played ${id}`));
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", (e) => playAudio(e.key.toUpperCase()));
  }, []);
  return (
    <button
      id={"pad-" + props.trigger}
      className="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      onClick={() => playAudio(props.trigger)}
    >
      <audio id={props.trigger} className="clip" src={props.clip} />
      {props.trigger}
    </button>
  );
}

function DrumMachine() {
  const displayText = useSelector((state) => state.displayText.value);
  return (
    <div
      className="container mx-auto grid grid-cols-5 grid-rows-3 gap-2 grid-flow-row px-4 py-6 bg-gray-700 text-center w-3/4 md:h-1/2 h-3/4 justify-center rounded shadow-xl"
      id="drum-machine"
    >
      <DrumPad
        trigger="Q"
        clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
      />
      <DrumPad
        trigger="W"
        clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
      />
      <DrumPad
        trigger="E"
        clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
      />
      <h2
        value={displayText}
        id="display"
        className="text-2xl text-bold text-center col-span-2 row-span-3"
      >
        {displayText}
      </h2>
      <DrumPad
        trigger="A"
        clip="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
      />
      <DrumPad
        trigger="S"
        clip="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
      />
      <DrumPad
        trigger="D"
        clip="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
      />
      <DrumPad
        trigger="Z"
        clip="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
      />
      <DrumPad
        trigger="X"
        clip="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
      />
      <DrumPad
        trigger="C"
        clip="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
      />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <DrumMachine />
    </Provider>
  );
}
