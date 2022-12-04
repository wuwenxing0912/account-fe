import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>
          路由切换
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="about">About</router-link>
            </li>
          </ul>
        </header>
        <div>
          <RouterView />
        </div>
        <footer></footer>
      </>
    );
  },
});
