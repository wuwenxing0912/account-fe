import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import chart from "../../assets/chart.svg";
import style from "./style/welcome-layout.module.scss";
import { WelcomeLayout } from "./components/welcome-layout";

export default defineComponent({
  setup() {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={chart} class={style["logo"]} />,
          title: () => (
            <div class={style["logo-text"]}>
              数据可视化
              <br />
              数值一目了然
            </div>
          ),
          action: () => <RouterLink to="/welcome/4">下一页</RouterLink>,
        }}
      </WelcomeLayout>
    );
  },
});
