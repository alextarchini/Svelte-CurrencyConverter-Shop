<script>
  import { productStore } from "./store.js";
  import ProductItem from "./ProductItem.svelte";
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

<section>
  <h1 class="section-title">Products</h1>
  <ul class="section-items scrollbar">
    {#each $productStore as product (product.id)}
      <ProductItem
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description} />
    {/each}
  </ul>
</section>
