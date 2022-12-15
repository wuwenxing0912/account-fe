import { defineComponent } from "vue";
import style from "./Button.module.scss";

export const Button = defineComponent({
  setup(props, context) {
    const { slots } = context;
    return () => (
      <button class={style["common-button"]}>
        {slots.default?.() || "按钮"}
      </button>
    );
  },
});
