<script>
  import { cartStore } from "./store.js";
  import CartItem from "./CartItem.svelte";
  import Button from "./Button.svelte";
</script>

<style>
  section {
    display: grid;
    grid-template-rows: auto 1fr;
    place-items: center;
    grid-gap: 5px;
    border: 1px solid #ccc;
    text-align: center;
    padding-right: 0.5rem;
  }
  .section-title {
    border-bottom: 1px solid #ccc;
    color: navy;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }
  #cart .section-title {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
  #cart .reset-btn {
    font-size: 1rem;
    font-weight: normal;
    font-family: initial;
    margin-right: 1rem;
  }
  .section-items {
    list-style: none;
    margin: 0;
    padding: 0 1rem;
    max-height: 350px;
  }
  .scrollbar {
    overflow-y: auto;
  }
  .scrollbar::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }
  .scrollbar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 0px;
    background-color: #f5f5f5;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    border-radius: 0px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #555;
  }
</style>

<section id="cart">
  <h1 class="section-title">
    <div>Cart</div>
    <div class="reset-btn">
      <Button mode="btn-small" on:click={() => cartStore.resetItems()}>
        Reset
      </Button>
    </div>
  </h1>
  <ul class="section-items scrollbar">
    {#each $cartStore as product (product.id)}
      <CartItem
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>
