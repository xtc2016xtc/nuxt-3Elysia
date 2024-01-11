export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('test')
  function $reset() {
    count.value = 0
  }

  return { count, $reset,name }
})