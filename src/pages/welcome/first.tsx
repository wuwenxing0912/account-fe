import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import logo from "../../assets/pig.svg";
import style from "./style/first.module.scss";

export default defineComponent({
  setup() {
    return () => (
      <div class={style["first-container"]}>
        <div class={style["logo-card"]}>
          <img src={logo} class={style["logo"]} />
          <div class={style["logo-text"]}>
            会挣钱
            <br />
            还要会省钱
          </div>
        </div>
        <div class={style["action-wrapper"]}>
          <RouterLink to="/welcome/2">下一页</RouterLink>
        </div>
      </div>
    );
  },
});
