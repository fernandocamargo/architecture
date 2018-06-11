import compose from './composition';
import Render from './render';
import * as statics from './statics';

export default compose(Object.assign(Render, statics));
