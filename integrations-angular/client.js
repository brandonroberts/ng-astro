export default (element) => {
  return (Component, props, childHTML) => {
    if (window.ngBootstrap) {
        window.ngBootstrap({ selector: Component.selector, id: element.attributes.uid.value });
    }
  };
};
