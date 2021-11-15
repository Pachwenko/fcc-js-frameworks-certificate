<script>
  let count = 0;
  function add() {
    count += 1;
  }
  function subtract() {
    count -= 1;
  }
</script>

<div class="calculator">
  <button on:click={subtract}>-</button>
  <pre>{ count }</pre>
  <button on:click={add}>+</button>
</div>