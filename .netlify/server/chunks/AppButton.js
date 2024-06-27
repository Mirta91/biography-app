import { c as create_ssr_component, a as createEventDispatcher, e as escape, b as add_attribute } from "./ssr.js";
const AppButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { hasSlotAfterText = false } = $$props;
  let { disabled = false } = $$props;
  let { element = null } = $$props;
  let { id = "" } = $$props;
  let { class: cssClass } = $$props;
  createEventDispatcher();
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hasSlotAfterText === void 0 && $$bindings.hasSlotAfterText && hasSlotAfterText !== void 0)
    $$bindings.hasSlotAfterText(hasSlotAfterText);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.class === void 0 && $$bindings.class && cssClass !== void 0)
    $$bindings.class(cssClass);
  return `<button class="${"app-button " + escape(cssClass, true)}" type="button" ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("this", element, 0)}><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --> ${slots.default ? slots.default({}) : ``} ${hasSlotAfterText ? `${slots["after-text"] ? slots["after-text"]({}) : ``}` : ``}</button>`;
});
export {
  AppButton as A
};
