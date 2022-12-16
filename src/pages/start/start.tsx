import { defineComponent } from "vue";
import { Button } from "../../components/button/Button";
import { FloatButton } from "../../components/floatButton/FloatButton";
import style from "./start.module.scss";

export default defineComponent({
  setup() {
    const onClick = () => {
      console.log("click");
    };
    return () => (
      <div>
        <div class={style.button_wrapper}>
          <Button class={style.button} onClick={onClick}>
            按钮
          </Button>
        </div>
        <FloatButton></FloatButton>
      </div>
    );
  },
});
