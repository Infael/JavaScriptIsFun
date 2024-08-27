const surprise =
  (...fns) =>
  (input) =>
    fns.reduce((acc, fn) => fn(acc), input);

