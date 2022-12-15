import { defineComponent } from "vue";
import { Button } from "../../components/button/Button";
import style from "./start.module.scss";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div class={style.button_wrapper}>
          <Button class={style.button}>按钮</Button>
        </div>
      </div>
    );
  },
});
