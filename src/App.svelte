<script>
  //Currency Converter
  import Lifecycle from "./components/CurrencyConverter/Lifecycle.svelte";
  //Shop
  import Products from "./components/Shop/Products.svelte";
  import Cart from "./components/Shop/Cart.svelte";
  const title = "Currency converter & Online Shop";
</script>

<style>
  h1 {
  }
  /* Currency Converter */
  .exchange-apps {
    display: grid;
    place-items: center;
  }
  .money-img {
    display: block;
    max-width: 100%;
    width: 75px;
  }
  /* Shop */
  .shop {
    display: grid;
    grid-template-columns: minmax(38%, auto) 1fr;
    grid-gap: 15px;
    padding: 2rem;
    margin: 5rem;
  }
</style>

<h1>{title}</h1>
<!-- Currency Converter -->
<h2>Currency Converter</h2>
<p>Choose the currency and the amounts to get the exchange rate</p>
<div class="exchange-apps">
  <img
    src="https://s3.amazonaws.com/xeblog-prd/2018/12/logo.svg"
    alt="Money image for exchange apps."
    class="money-img" />
  <Lifecycle />
</div>

<!-- Shop -->
<h2>E-shop</h2>
<p style="">Choose the products to add to your cart</p>

<div class="shop">
  <Products />
  <Cart />
</div>

<!--
Steps:
-App.svelte
-Button.svelte
-store.js
-ProductItem, Products
-CartItem, Cart

import Button from './Button.svelte';
<Button on:click="{() => console.log('Test 1')}">Test 1</Button>
<Button mode="outline" on:click="{() => console.log('Test 2')}">Test 2</Button>
-->
