import type { TabsProps } from "antd";
import { Tabs } from "antd";
import ImageFour from "../../assets/svg/chat.svg";
import ImageOne from "../../assets/svg/one.svg";
import ImageThree from "../../assets/svg/three.svg";
import ImageTwo from "../../assets/svg/two.svg";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "",
    icon: <img src={ImageOne} alt="image one" />,
    children:
      "Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1 Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "",
    icon: <img src={ImageTwo} alt="image two" />,
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "",
    icon: <img src={ImageFour} alt="image four" />,
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "",
    icon: <img src={ImageThree} alt="image three" />,
    children: "Content of Tab Pane 3",
  },
];

const tabProps = {
  paddingLeft: "100px",
  //   tabBarGutter: 0, // Remove the line indicator
};

const RightMenu = () => {
  return (
    <div>
      <Tabs
        {...tabProps}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="w-[100%] !flex !border-b-0"
        tabBarStyle={{ borderBottom: "none" }}
        indicatorSize={(origin) => origin - 10}
      />
    </div>
  );
};

export default RightMenu;
