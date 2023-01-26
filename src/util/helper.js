export const debounce = (delay, fn) => {
    let timer;
    return function () {
      const context = this;
      const arg = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, arg);
      }, delay);
    };
  };
  