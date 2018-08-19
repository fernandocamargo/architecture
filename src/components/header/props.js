import starts from "helpers/string/starts";
import decrease from "helpers/number/decrease";

export default () => ({
  isActive: to => (match, { pathname }) =>
    !!match || (!!decrease(to.length) && starts(pathname).with(to))
});
