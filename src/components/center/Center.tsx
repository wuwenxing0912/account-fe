import { defineComponent, PropType } from "vue";
import style from "./Center.module.scss";

const directionMap = {
  "-": "horizontal",
  horizontal: "horizontal",
  "|": "vertical",
  vertical: "vertical",
};

export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<"-" | "|" | "horizontal" | "vertical">,
      default: "horizontal",
    },
  },
  setup(props, context) {
    const customDirection = directionMap[props.direction];
    return () => (
      <div class={[style.center_wrapper, customDirection]}>
        {context.slots.default?.()}
      </div>
    );
  },
});
