import 'zone.js';
import '@angular/compiler';
import { CommonEngine } from '@nguniversal/common/engine';

function check(Component, _props, _children) {
  return !!Component.forServer;
}

async function renderToStaticMarkup(Component, props, children) {
  const engine = new CommonEngine();

  const html = await engine.render(Component.forServer());

  return { html };
}

export default {
  check,
  renderToStaticMarkup,
};