import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const AppImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { style = "" } = $$props;
  let { class: cssClass } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.class === void 0 && $$bindings.class && cssClass !== void 0)
    $$bindings.class(cssClass);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("style", style, 0)}${add_attribute("class", cssClass, 0)}>`;
});
export {
  AppImage as A
};
