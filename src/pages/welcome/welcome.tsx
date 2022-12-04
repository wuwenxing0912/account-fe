import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import style from "./style/welcome.module.scss";
import logo from "../../assets/logo.svg";

export default defineComponent({
  setup() {
    return () => (
      <div class={style["welcome-container"]}>
        <header>
          <img src={logo} class={style["welcome-logo"]} />
          <span class={style["logo-text"]}>薪水去哪儿了</span>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
