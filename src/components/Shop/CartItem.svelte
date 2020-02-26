<script>
  import { cartStore } from "./store.js";
  import Button from "./Button.svelte";
  export let id = null;
  export let title = "";
  export let price = null;
  export let description = "Not available!";

  let showDescription = false;
</script>

<style>
  .item {
    display: grid;
    place-items: center;
    padding: 1rem;
    margin: 0 0.5rem 1rem 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.26);
  }
  .item-title {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<li class="item">
  <h3 class="item-title">{title}</h3>
  <h5 class="item-price">&euro;{price}</h5>
  <div class="item-controls">
    <Button
      mode="outline"
      on:click={() => (showDescription = !showDescription)}>
      {showDescription ? 'Hide Description' : 'Show Description'}
    </Button>
    <Button on:click={() => cartStore.removeItem(id)}>Remove from Cart</Button>
  </div>
  {#if showDescription}
    <p class="item-desc">{description}</p>
  {/if}
</li>
