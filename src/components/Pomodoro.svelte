<script>
    import { derived } from 'svelte/store';
    import { breakLength, sessionLength, currentTime } from './store.js';
    const SESSION_MODE = "SESSION";
    const BREAK_MODE = "BREAK";

    let minutes = "25";
    let seconds = "00";
    let current_mode = SESSION_MODE;
    let inProgress = false;
    let finishedTime = new Date();
    let timerInterval;
    const finishedTime2 = derived(
        currentTime,
        $currentTime => {
            return new Date(finishedTime - $currentTime)
        }
    );
    const minutes2 = derived(
        finishedTime2,
        $finishedTime2 => $finishedTime2.getMinutes()
    );
    const seconds2 = derived(
        finishedTime2,
        $finishedTime2 => $finishedTime2.getSeconds()
    );

    $: if (!inProgress) { minutes = $sessionLength };
    $: if (minutes === 0 && seconds === 0) { playSound() };
    // $: minutes2 = String($finishedTime2.getMinutes()).padStart(2, "0");
    // $: seconds2 = String($finishedTime2.getSeconds()).padStart(2, "0");

    function playSound() {
        stopTimer();
        document.getElementById("beep").play();
        if (current_mode === SESSION_MODE) {
            current_mode = BREAK_MODE;
            minutes = $breakLength;
        } else if (current_mode === BREAK_MODE) {
            current_mode = SESSION_MODE;
            minutes = $sessionLength;
        }
        inProgress = false;
        finishedTime = calculateEndTime();
        tickTimer();
    }

    function stopSound() {
        document.getElementById("beep").currentTime = 0;
        document.getElementById("beep").pause();
    }

    function reset() {
        breakLength.reset();
        sessionLength.reset();
        stopTimer();
        inProgress = false;
        stopSound();
        minutes = current_mode === SESSION_MODE ? $sessionLength : $breakLength;
        seconds = "00"
    }

    function tickTimer() {
        let time = new Date(finishedTime - new Date());
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    }

    function calculateEndTime() {
        let endTime = new Date();
        let length = current_mode === SESSION_MODE ? $sessionLength : $breakLength;
        endTime.setMinutes(endTime.getMinutes() + length)
        return endTime
    }

    function startTimer() {
        stopSound();
        // finishedTime = calculateEndTime();
        // timerInterval = setInterval(tickTimer, 100);
        inProgress = true;
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function toggle() {
        if (timerInterval) {
            stopTimer();
        } else {
            startTimer();
        }
    }
</script>

<div
  class="mx-auto my-10 p-10 md:w-1/2 text-center justify-center grid gap-2 grid-cols-2 grid-rows-auto"
>
    <div>
        <h1 id="break-label" class="text-xl text-bold">Break length: {$breakLength}</h1>
    </div>
    <div>
        <h1 id="session-label" class="text-xl text-bold">Session Length: {$sessionLength}</h1>
    </div>
    <div>
        <button 
            on:click={breakLength.decrement} 
            id="break-decrement" 
            class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
        >
            -
        </button>
        <button 
            on:click={breakLength.increment} 
            id="break-increment"
            class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
        >
            +
        </button>
    </div>
    <div>
        <button 
            on:click={sessionLength.decrement} 
            id="session-decrement"
            class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
        >
            -
        </button>
        <button 
            on:click={sessionLength.increment} 
            id="session-increment"
            class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
        >
            +
        </button>
    </div>
    <div class="col-span-full border-4 border-solid border-gray-400 shadow-lg bg-black rounded">
        <h2 id="timer-label" class="text-2xl text-bold">{current_mode}</h2>
        <h2 id="time-left" class="text-2xl text-bold">{$minutes2}:{$seconds2}</h2>
    </div>
    <button 
        on:click={toggle} 
        id="start_stop"
        class="font-xl font-bold rounded p-2 m-1 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
    >
        Start/Stop
    </button>
    <button 
        on:click={reset} 
        id="reset"
        class="font-xl font-bold rounded p-2 m-1 bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 shadow-lg"
    >
        Reset
    </button>
    <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
</div>
