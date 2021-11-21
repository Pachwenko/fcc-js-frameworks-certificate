<script>
    import { breakLength, sessionLength } from './store.js';
    const SESSION_MODE = "SESSION";
    const BREAK_MODE = "BREAK";

    let minutes = "25";
    let seconds = "00";
    let current_mode = SESSION_MODE;
    let inProgress = false;
    let timerFinished;
    let timerInterval;

    $: if (!inProgress) { minutes = $sessionLength };
    $: if (minutes === 0 && seconds === 0) { playSound() };

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
        calculateEndTime();
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
        let time = new Date(timerFinished - new Date());
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    }

    function calculateEndTime() {
        timerFinished = new Date();
        let length = current_mode === SESSION_MODE ? $sessionLength : $breakLength;
        timerFinished.setMinutes(timerFinished.getMinutes() + length)
    }

    function startTimer() {
        stopSound();
        calculateEndTime();
        timerInterval = setInterval(tickTimer, 1000);
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
  class="mx-auto my-10 p-10 md:w-1/2 text-center justify-center"
>
    <h1 id="break-label">Break length: {$breakLength}</h1>
    <button on:click={breakLength.decrement} id="break-decrement">
        -
    </button>
    <button on:click={breakLength.increment} id="break-increment">
        +
    </button>
    <br />
    <h1 id="session-label">Session Length: {$sessionLength}</h1>
    <button on:click={sessionLength.decrement} id="session-decrement">
        -
    </button>
    <button on:click={sessionLength.increment} id="session-increment">
        +
    </button>
    <br />
    <h2 id="timer-label">{current_mode}</h2>
    <h2 id="time-left">{minutes}:{seconds}</h2>
    <button on:click={toggle} id="start_stop">
        Start/Stop
    </button>
    <button on:click={reset} id="reset">
        Reset
    </button>
    <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
</div>