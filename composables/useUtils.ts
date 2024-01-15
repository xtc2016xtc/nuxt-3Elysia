/**
 * @description: utils composables
 * @returns {Object} { sayHello, onClickOutside }
 * @example: import { useUtils } from '@/composables/useUtils';
 * @example: const { sayHello, onClickOutside } = useUtils();
 * @example: sayHello();
 * @example: onClickOutside();
 * @example: <div @click="onClickOutside"></div>
 */
export const useUtils = () => {
  const sayHello = () => console.log('Hello from useUtils');
  const onClickOutside = () => console.log('onClickOutside');
  return { sayHello, onClickOutside };
}