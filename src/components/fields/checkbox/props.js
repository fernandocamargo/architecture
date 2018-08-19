export let instance = 0;

export default () => ({ id: (instance = instance + 1) });
