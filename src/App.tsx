import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./App.scss";

export const App = defineComponent({
  setup() {
    initHeight();
    return () => (
      <div>
        <RouterView />
      </div>
    );
  },
});

const initHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
};
