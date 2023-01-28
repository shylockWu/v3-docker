import { defineStore } from 'pinia';

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，
// 同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// export const useStore = defineStore('main', {
//   // 其他配置...
// });

// 1. Option Store
// 与 Vue 的选项式 API 类似，我们也可以传入一个带有 state、actions 与 getters 属性的 Option 对象
export const useCounterStore = defineStore('counter', {
  state: () => ({ countStore: 1010 }),
  getters: {
    double: (state) => state.countStore * 2,
  },
  actions: {
    increment() {
      this.countStore += 2;
    },
  },
});
// 你可以认为 state 是 store 的数据 (data)，getters 是 store 的计算属性 (computed)，而 actions 则是方法 (methods)。

// 为方便上手使用，Option Store 应尽可能直观简单。

// 2. Setup Store
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0);
//   function increment() {
//     count.value++;
//   }

//   return { count, increment };
// });

// 在 Setup Store 中：

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

// Setup store 比 Option Store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。
// 不过，请记住，使用组合式函数会让 SSR 变得更加复杂。
