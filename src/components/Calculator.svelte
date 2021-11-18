<script>
  import mexp from 'math-expression-evaluator'
  let display = '0';
  let previousResult = undefined;
  let operations = [];
  let errorMessage = '';

  const MATH_SYMBOLS = ['*', '/', '-', '+'];
  const DISSALLOWED_OPERATIONS = [[".", "."]];

  function disallowedOperation(op) {
    return DISSALLOWED_OPERATIONS.filter(
      disallowedOps => {
        let previousOperation = disallowedOps[0];
        let newOperation = disallowedOps[1];
        return previousOperation === operations[operations.length - 1] && newOperation === op;
      }
    ).length > 0;
  }

  function addOperation(op) {
    if (operations.length > 0 && disallowedOperation(op)) {
      return;
    }
    else if (MATH_SYMBOLS.includes(op) && operations.length === 0) {
      operations = [previousResult, op];
    } else {
      operations.push(op);
    }
    errorMessage = "";
    display = operations.join('');
  }
  function allClear() {
    errorMessage = "";
    operations = [];
    display = '0';
  }
  function equals() {
    try {
      let result = mexp.eval(operations.join(''));
      display = result;
      previousResult = result;
      operations = [];
    } catch (error) {
      errorMessage = error.message;
    }
  }
</script>

<div
  class="mx-auto my-10 p-10 md:w-1/2 text-center flex justify-center"
>
  <div
    class="container grid grid-cols-4 gap-2 border-solid border-2 border-gray-600 mx-auto p-4 justify-center"
  >
    <h2 id="error" class="text-bold text-2xl text-red-800 col-span-4">
      {errorMessage}
    </h2>
    <h2 id="display" class="text-bold text-2xl bg-black col-span-4 overflow-hidden">
      {display}
    </h2>
    <button
      id="clear"
      class="font-xl font-bold rounded col-span-2 p-2 m-1 bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 shadow-lg"
      on:click={allClear}
    >
      AC
    </button>
    <button
      id="divide"
      class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('/')}
    >
      /
    </button>
    <button
      id="multiply"
      class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('*')}
    >
      *
    </button>
    <button
      id="seven"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('7')}
    >
      7
    </button>
    <button
      id="eight"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('8')}
    >
      8
    </button>
    <button
      id="nine"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('9')}
    >
      9
    </button>
    <button
      id="subtract"
      class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('-')}
    >
      -
    </button>
    <button
      id="four"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('4')}
    >
      4
    </button>
    <button
      id="five"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('5')}
    >
      5
    </button>
    <button
      id="six"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('6')}
    >
      6
    </button>
    <button
      id="add"
      class="font-xl font-bold rounded p-2 m-1 text-gray-800 bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('+')}
    >
      +
    </button>
    <button
      id="one"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('1')}
    >
      1
    </button>
    <button
      id="two"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('2')}
    >
      2
    </button>
    <button
      id="three"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('3')}
    >
      3
    </button>
    <button
      id="equals"
      class="font-xl row-span-2 font-bold rounded p-2 m-1 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={equals}
    >
      =
    </button>
    <button
      id="zero"
      class="font-xl font-bold rounded col-span-2 p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('0')}
    >
      0
    </button>
    <button
      id="decimal"
      class="font-xl font-bold rounded p-2 m-1 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-lg"
      on:click={() => addOperation('.')}
    >
      .
    </button>
  </div>
</div>

<slot />
