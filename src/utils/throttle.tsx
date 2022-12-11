export const throttle = (fn: Function, time: number) => {
  let timer: number | undefined;
  return (...args: any) => {
    if (timer) {
      return;
    } else {
      timer = setTimeout(() => {
        fn(args);
        timer = undefined;
      }, time);
    }
  };
};
