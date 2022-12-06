import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import clock from "../../assets/clock.svg";
import style from "./style/welcome-layout.module.scss";
import { WelcomeLayout } from "./components/welcome-layout";

export default defineComponent({
  setup() {
    const slots = {
      icon: () => <img src={clock} class={style["logo"]} />,
      title: () => (
        <div class={style["logo-text"]}>
          每日提醒
          <br />
          不会遗漏每一笔账单
        </div>
      ),
      action: () => <RouterLink to="/welcome/3">下一页</RouterLink>,
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});
