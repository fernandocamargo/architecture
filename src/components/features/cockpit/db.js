import parse from "helpers/request/parse";
import { setSomething } from "mutations";

export default props => ({
  load: () =>
    new Promise(resolve =>
      window.setTimeout(() => resolve({ foo: "bar", array: [1, 2, 3] }), 500)
    ).then(response => ({ mutation: setSomething(response) })),
  test: () =>
    window
      .fetch("/api")
      .then(parse)
      .then(output => ({ mutation: setSomething(output), output }))
      .catch(error => ({ mutation: setSomething(error), error })),
  a: {
    b: {
      c: {
        d: something => ({ mutation: setSomething(["a.b.c.d", something]) }),
        e: something => ({ mutation: setSomething(["a.b.c.e", something]) }),
        f: something => ({ mutation: setSomething(["a.b.c.f", something]) })
      },
      g: something => ({ mutation: setSomething(["a.b.g", something]) }),
      h: something => ({ mutation: setSomething(["a.b.h", something]) }),
      i: something => ({ mutation: setSomething(["a.b.i", something]) })
    }
  }
});
