import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import {
  RouteLocationNormalizedLoaded,
  RouterLink,
  RouterView,
} from "vue-router";
import { useSwipe } from "../hooks/useSwipe";
import style from "./style/welcome.module.scss";

export default defineComponent({
  setup() {
    const main = ref<HTMLElement | null>(null);
    const { direction, swiping } = useSwipe(main);
    watchEffect(() => {
      console.log(swiping.value, direction.value);
    });
    return () => (
      <div class={style["welcome-container"]}>
        <div class={style["skip-welcome"]}>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
        <header>
          <svg class={style["welcome-logo"]}>
            <use xlinkHref="#logo"></use>
          </svg>
          <span class={style["logo-text"]}>薪水去哪儿了</span>
        </header>
        <main ref={main}>
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
// const route = useRoute();
// const currentRoutePath = ref<string>("");
// const historyRoutePath = ref<string>("");
// currentRoutePath.value = route.path;
// historyRoutePath.value = route.path;
// const enterClass = ref<string>("slide_fade_enter_from");
// const leaveClass = ref<string>("slide_fade_leave_to");
// const onBeforeEnter = (r: RouteLocationNormalizedLoaded) => {
//   historyRoutePath.value = currentRoutePath.value;
//   currentRoutePath.value = r.path;
//   const historyRouteIndex = getRouteIndex(historyRoutePath.value);
//   const currentRouteIndex = getRouteIndex(currentRoutePath.value);
//   if (currentRouteIndex > historyRouteIndex) {
//     enterClass.value = "slide_fade_enter_from";
//     leaveClass.value = "slide_fade_leave_to";
//   } else {
//     enterClass.value = "slide_fade_enter_from_back";
//     leaveClass.value = "slide_fade_leave_to_back";
//   }
// };
// const getRouteIndex = (path: string) => {
//   if (!path) {
//     return 0;
//   }
//   const routeArray = path.split("/");
//   return parseInt(routeArray[routeArray.length - 1]);
// };
