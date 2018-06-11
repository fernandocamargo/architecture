import { compose, hoistStatics, withProps } from "recompose";

export default compose(hoistStatics(withProps(() => ({ lol: "ROFL" }))));
