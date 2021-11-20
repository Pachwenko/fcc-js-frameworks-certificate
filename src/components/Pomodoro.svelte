<script>
    import { breakLength, sessionLength } from './store.js';

    let minutes = "25";
    let seconds = "00";
    let inProgress = false;
    let timerFinished;
    let timerInterval;

    $: if (!inProgress) { minutes = $sessionLength };

    function reset() {
        breakLength.reset();
        sessionLength.reset();
        stopTimer();
        inProgress = false;
    }

    function tickTimer() {
        let time = new Date(timerFinished - new Date());
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    }

    function startTimer(minutes) {
        timerFinished = new Date();
        timerFinished.setMinutes(timerFinished.getMinutes() + $sessionLength)
        timerInterval = setInterval(tickTimer, 1000);
        inProgress = true;
    }

    function stopTimer(minutes) {
        clearInterval(timerInterval);
    }

    function toggle() {
        console.log(timerInterval);
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
<h2 id="timer-label">Session</h2>
<h2 id="time-left">{minutes}:{seconds}</h2>
<button on:click={toggle} id="start_stop">
	Start/Stop
</button>
<button on:click={reset} id="reset">
	Reset
</button>
</div>