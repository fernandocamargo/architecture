import random from "lodash/random";

import { setSomething } from "mutations";

export default props => ({
  load: () =>
    new Promise(resolve =>
      window.setTimeout(() => resolve({ foo: "bar", array: [1, 2, 3] }), 500)
    ).then(response => ({ mutation: setSomething(response) })),
  test: () =>
    new Promise((resolve, reject) =>
      window.setTimeout(
        () => (!!random(0, 1) ? resolve("LOL, it worked") : reject("Oh crap!")),
        random(0.5, 5) * 1000
      )
    )
      .then(output => ({ mutation: setSomething(output), output }))
      .catch(error => ({ mutation: setSomething(error), error })),
  a: {
    b: {
      c: {
        d: () => ({ mutation: setSomething("a.b.c.d") }),
        e: () => ({ mutation: setSomething("a.b.c.e") }),
        f: () => ({ mutation: setSomething("a.b.c.f") })
      },
      g: () => ({ mutation: setSomething("a.b.g") }),
      h: () => ({ mutation: setSomething("a.b.h") }),
      i: () => ({ mutation: setSomething("a.b.i") })
    }
  }
});
