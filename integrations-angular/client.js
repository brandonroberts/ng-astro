import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';

export default (_element) => {
  return (Component, _props, _childHTML) => {
    bootstrapApplication(Component);
  };
};
