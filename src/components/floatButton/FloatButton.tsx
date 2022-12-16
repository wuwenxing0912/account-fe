import { defineComponent } from "vue";
import { Icon } from "../icon/Icon";
import style from "./FloatButton.module.scss";

export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String,
    },
  },
  setup(props, context) {
    return () => (
      <div class={style.float_button}>
        <Icon name={props.iconName} class={style.icon}></Icon>
      </div>
    );
  },
});
