import { defineComponent } from "vue";
import style from "./Button.module.scss";

interface Props {
  onClick: (e: MouseEvent) => void;
}

export const Button = defineComponent<Props>({
  setup(props, context) {
    const { slots } = context;
    return () => (
      <button class={style["common-button"]}>
        {slots.default?.() || "按钮"}
      </button>
    );
  },
});
