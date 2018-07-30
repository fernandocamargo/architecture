import { compose, lifecycle } from "recompose";

import setStatics from "helpers/rendering/statics/set";

import * as statics from "./statics";

export default compose(
  lifecycle({
    componentDidMount() {
      console.log(statics.displayName, "componentDidMount();");
    },
    componentWillUnmount() {
      console.log(statics.displayName, "componentWillUnmount();");
    }
  }),
  setStatics(statics)
);
