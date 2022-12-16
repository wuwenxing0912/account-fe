import { defineComponent } from "vue";
import { Icon } from "../icon/Icon";
import style from "./FloatButton.module.scss";

export const FloatButton = defineComponent({
  setup() {
    return () => (
      <div class={style.float_button}>
        <Icon name="add" class={style.icon}></Icon>
      </div>
    );
  },
});
