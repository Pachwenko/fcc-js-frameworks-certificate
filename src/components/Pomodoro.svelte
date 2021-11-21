<script>
  import { breakLength, sessionLength } from './store.js'
  const SESSION_MODE = 'SESSION'
  const BREAK_MODE = 'BREAK'

  let minutes = '25'
  let seconds = '00'
  let current_mode = SESSION_MODE
  let inProgress = false
  let finishedTime
  let timerInterval

  $: if (!inProgress) {
    minutes = $sessionLength
  }
  $: if (minutes === '00' && seconds === '00') {
    playSound()
  }

  function playSound() {
    stopTimer()
    document.getElementById('beep').play()
    if (current_mode === SESSION_MODE) {
      current_mode = BREAK_MODE
      minutes = $breakLength
    } else if (current_mode === BREAK_MODE) {
      current_mode = SESSION_MODE
      minutes = $sessionLength
    }
    inProgress = false
    finishedTime = calculateEndTime()
    tickTimer()
  }

  function stopSound() {
    document.getElementById('beep').currentTime = 0
    document.getElementById('beep').pause()
  }

  function reset() {
    breakLength.reset()
    sessionLength.reset()
    stopTimer()
    inProgress = false
    stopSound()
    minutes = formatNum(
      current_mode === SESSION_MODE ? $sessionLength : $breakLength
    )
    seconds = formatNum(0)
  }

  function formatNum(num) {
    return String(num).padStart(2, '0')
  }

  function tickTimer() {
    let time = new Date(finishedTime - new Date())
    minutes = formatNum(time.getMinutes())
    seconds = formatNum(time.getSeconds())
  }

  function calculateEndTime() {
    let endTime = new Date()
    let length = current_mode === SESSION_MODE ? $sessionLength : $breakLength
    endTime.setMinutes(endTime.getMinutes() + length)
    return endTime
  }

  function startTimer() {
    stopSound()
    finishedTime = calculateEndTime()
    timerInterval = setInterval(tickTimer, 1000)
    inProgress = true
  }

  function stopTimer() {
    clearInterval(timerInterval)
    timerInterval = null
  }

  function toggle() {
    if (timerInterval) {
      stopTimer()
    } else {
      startTimer()
    }
  }

  function fastForward() {
    let endTime = new Date()
    endTime.setSeconds(endTime.getSeconds() + 2)
    finishedTime = endTime
  }
</script>

<div
  class="mx-auto my-10 p-10 md:w-1/2 text-center justify-center grid gap-2 grid-cols-2 grid-rows-auto"
>
  <div>
    <h1 id="break-label" class="text-xl text-bold">
      Break length: {$breakLength}
    </h1>
  </div>
  <div>
    <h1 id="session-label" class="text-xl text-bold">
      Session Length: {$sessionLength}
    </h1>
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
  <div
    class="col-span-full border-4 border-solid border-gray-400 shadow-lg bg-black rounded"
  >
    <h2 id="timer-label" class="text-2xl text-bold">{current_mode}</h2>
    <h2 id="time-left" class="text-2xl text-bold">{minutes}:{seconds}</h2>
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
  <button
    on:click={fastForward}
    class="font-xl font-bold col-span-2 rounded p-2 m-1 bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 shadow-lg"
  >
    Fast Forward
  </button>
  <audio
    id="beep"
    src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
  />
</div>
