export const useUtils = () => {
  const sayHello = () => console.log('Hello from useUtils');
  const onClickOutside = () => console.log('onClickOutside');
  return { sayHello, onClickOutside };
}