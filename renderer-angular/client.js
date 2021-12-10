export default (element) => {
  return (Component, props, childHTML) => {
    if (window.ngBootstrap) {
        window.ngBootstrap(Component.el);
    }
  };
};
