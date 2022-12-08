import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import style from "./style/welcome-layout.module.scss";
import { WelcomeLayout } from "./components/welcome-layout";

export default defineComponent({
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => (
            <svg>
              <use xlinkHref="#cloud"></use>
            </svg>
          ),
          title: () => (
            <div class={style["logo-text"]}>
              云备份
              <br />
              再也不怕数据丢失
            </div>
          ),
          action: () => <RouterLink to="/start">开启应用</RouterLink>,
        }}
      </WelcomeLayout>
    );
  },
});
