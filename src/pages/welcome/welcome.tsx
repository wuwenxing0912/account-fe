import { defineComponent, Transition, VNode } from "vue";
import {
  RouteLocationNormalizedLoaded,
  RouterLink,
  RouterView,
} from "vue-router";
import style from "./style/welcome.module.scss";
import logo from "../../assets/logo.svg";

export default defineComponent({
  setup() {
    return () => (
      <div class={style["welcome-container"]}>
        <div class={style["skip-welcome"]}>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
        <header>
          <img src={logo} class={style["welcome-logo"]} />
          <span class={style["logo-text"]}>薪水去哪儿了</span>
        </header>
        <main>
          <RouterView>
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={style.slide_fade_enter_from}
                enterActiveClass={style.slide_fade_enter_active}
                leaveToClass={style.slide_fade_leave_to}
                leaveActiveClass={style.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
      </div>
    );
  },
});
