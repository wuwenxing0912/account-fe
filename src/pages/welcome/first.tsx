import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import pig from "../../assets/pig.svg";
import style from "./style/welcome-layout.module.scss";
import { WelcomeLayout } from "./components/welcome-layout";

export default defineComponent({
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={pig} class={style["logo"]} />,
          title: () => (
            <div class={style["logo-text"]}>
              会挣钱
              <br />
              还要会省钱
            </div>
          ),
          action: () => <RouterLink to="/welcome/2">下一页</RouterLink>,
        }}
      </WelcomeLayout>
    );
  },
});
