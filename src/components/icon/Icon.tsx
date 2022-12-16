import { defineComponent } from "vue";
import style from "./Icon.module.scss";

export const Icon = defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup(props, context) {
    return () => (
      <svg class={style.icon}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    );
  },
});
