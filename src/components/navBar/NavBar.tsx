import { defineComponent } from "vue";
import style from "./NavBar.module.scss";

export const NavBar = defineComponent({
  setup(props, context) {
    const { slots } = context;
    return () => (
      <div class={style.nav_bar_wrapper}>
        <span class={style.icon_wrapper}>{slots.icon?.()}</span>
        <span class={style.title_wrapper}>{slots.default?.()}</span>
      </div>
    );
  },
});
