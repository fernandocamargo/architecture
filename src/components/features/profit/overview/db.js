import { setSomething } from "mutations";

export default props => ({
  load: () =>
    new Promise(resolve =>
      window.setTimeout(() => resolve({ foo: "bar", array: [1, 2, 3] }), 500)
    ).then(response => ({ mutation: setSomething(response) })),
  test: () =>
    Promise.resolve({
      mutation: setSomething({ hue: "BR" })
    }),
  foo: {
    bar: {
      zop: () =>
        Promise.resolve({
          mutation: setSomething("foo.bar.zop")
        })
    }
  },
  fail: () => Promise.reject(new Error("Failed")),
  delayed: () =>
    new Promise((_, reject) =>
      window.setTimeout(() => reject(new Error("Delayed!")), 2500)
    )
});
