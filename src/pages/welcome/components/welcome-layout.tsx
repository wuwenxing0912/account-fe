import { defineComponent } from "vue";
import style from "../style/welcome-layout.module.scss";

export const WelcomeLayout = defineComponent({
  setup(props, context) {
    const { slots } = context;
    return () => (
      <div class={style["welcome-layout-container"]}>
        <div class={style["logo-card"]}>
          {slots.icon?.()}
          {slots.title?.()}
        </div>
        <div class={style["action-wrapper"]}>{slots.action?.()}</div>
      </div>
    );
  },
});
