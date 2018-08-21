import forEach from "helpers/rendering/for-each";
import Item from "components/charts/x-ray/item";

export default ({ children }) => forEach(children).render(Item);
