<script>
  import mexp from 'math-expression-evaluator'
  // using 2 variables is nice because we can easily initialize the display and not interfere
  // with the operations
  let display = '0'
  let operations = []

  const UNREPEATABLE_OPERATIONS = ['+', '*', '/']
  function addOperation(op) {
    const repeated =
      UNREPEATABLE_OPERATIONS.includes(operations[operations.length]) &&
      UNREPEATABLE_OPERATIONS.includes(op)
    if (!repeated) {
      operations.push(op)
      display = operations.join('')
    }
  }
  function allClear() {
    operations = []
    display = '0'
  }
  function equals() {
    display = mexp.eval(operations.join(''))
    operations = []
  }
</script>

<div
  class="mx-auto my-10 p-10 md:w-1/2 text-center flex justify-center"
>
  <div
    class="container grid grid-cols-4 gap-2 border-solid border-2 border-gray-600 mx-auto p-4 justify-center"
  >
    <h2 id="display" class="text-bold text-2xl bg-black col-span-4">
      {display}
    </h2>
    <button
      id="clear"
      class="drum-pad font-xl font-bold rounded col-span-2 p-2 m-1 bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 shadow-lg"
      on:click={allClear}
    >
      AC
    </button>
    <button
      id="divide"
      class="drum-pad font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('/')}
    >
      /
    </button>
    <button
      id="multiply"
      class="drum-pad font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('*')}
    >
      *
    </button>
    <button
      id="seven"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('7')}
    >
      7
    </button>
    <button
      id="eight"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('8')}
    >
      8
    </button>
    <button
      id="nine"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('9')}
    >
      9
    </button>
    <button
      id="subtract"
      class="drum-pad font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('-')}
    >
      -
    </button>
    <button
      id="four"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('4')}
    >
      4
    </button>
    <button
      id="five"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('5')}
    >
      5
    </button>
    <button
      id="six"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('6')}
    >
      6
    </button>
    <button
      id="add"
      class="drum-pad font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('+')}
    >
      +
    </button>
    <button
      id="one"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('1')}
    >
      1
    </button>
    <button
      id="two"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('2')}
    >
      2
    </button>
    <button
      id="three"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('3')}
    >
      3
    </button>
    <button
      id="equals"
      class="drum-pad font-xl row-span-2 font-bold rounded p-2 m-1 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={equals}
    >
      =
    </button>
    <button
      id="zero"
      class="drum-pad font-xl font-bold rounded col-span-2 p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('0')}
    >
      0
    </button>
    <button
      id="decimal"
      class="drum-pad font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('.')}
    >
      .
    </button>
  </div>
</div>

<slot />
