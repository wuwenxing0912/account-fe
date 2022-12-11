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
              <use xlinkHref="#pig"></use>
            </svg>
          ),
          title: () => (
            <div class={style["logo-text"]}>
              会挣钱
              <br />
              还要会省钱
            </div>
          ),
          action: () => (
            <div
              onClick={() => {
                console.log("xxx");
                // e.stopPropagation();
              }}
            >
              <RouterLink to="/welcome/2">下一页</RouterLink>
            </div>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
