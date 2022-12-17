import { defineComponent } from "vue";
import { Button } from "../../components/button/Button";
import { FloatButton } from "../../components/floatButton/FloatButton";
import { Center } from "../../components/center/Center";
import { Icon } from "../../components/icon/Icon";
import { NavBar } from "../../components/navBar/NavBar";
import style from "./start.module.scss";

export default defineComponent({
  setup() {
    const onClick = () => {
      console.log("click");
    };
    return () => (
      <div>
        <nav>
          <NavBar>
            {{
              default: "薪水哪儿去了",
              icon: <Icon name="menu" class={style.nav_icon}></Icon>,
            }}
          </NavBar>
        </nav>
        <Center class={style.pig_wrapper}>
          <Icon name="pig" class={style.pig}></Icon>
        </Center>
        <div class={style.button_wrapper}>
          <Button class={style.button} onClick={onClick}>
            按钮
          </Button>
        </div>
        <FloatButton iconName="add"></FloatButton>
      </div>
    );
  },
});
