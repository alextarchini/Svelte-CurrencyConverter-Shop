import { writable } from "svelte/store";

const initialProducts = [
  {
    id: "p1",
    title: "Front End Developer Course",
    price: 45.3,
    description: "Wireframes, HTML, CSS, JS, React, Svelte"
  },
  {
    id: "p2",
    title: "Back End Developer Course",
    price: 32.15,
    description: "PHP, Node.js, Python, Java"
  },
  {
    id: "p3",
    title: "Full Stack",
    price: 32.15,
    description: "HTML, CSS, JS, PHP, Node.js, Python, Java"
  }
];
const initialCart = [
  {
    id: "p4",
    title: "Front End - Free Trial",
    price: 0,
    description: "Not available!"
  },
  {
    id: "p5",
    title: "Intro to Programming - 1 month limited offer",
    price: 7.85,
    description: "HTML, CSS, JS, PHP"
  }
];

export const productStore = writable(initialProducts);

const cart = writable(initialCart);

export const cartStore = {
  subscribe: cart.subscribe,
  addItem: item => {
    cart.update(items => {
      if (items.find(currItem => currItem.id === item.id)) return [...items];
      return [...items, item];
    });
  },
  removeItem: id => {
    cart.update(items => items.filter(currItem => currItem.id !== id));
  },
  resetItems: () => {
    cart.set(initialCart);
  }
};
