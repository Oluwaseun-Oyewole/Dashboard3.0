import type { TabsProps } from "antd";
import { Tabs } from "antd";
import ImageFour from "../../assets/svg/chat.svg";
import Dropdown from "../../assets/svg/dropdown.svg";
import Image from "../../assets/svg/img1.svg";
import ImageOne from "../../assets/svg/one.svg";
import ProfileOne from "../../assets/svg/profile1.svg";
import ProfileTwo from "../../assets/svg/profile2.svg";
import ProfileThree from "../../assets/svg/profile3.svg";
import ProfileFour from "../../assets/svg/profile4.svg";
import ProfileFive from "../../assets/svg/profile5.svg";
import ImageThree from "../../assets/svg/three.svg";
import ImageTwo from "../../assets/svg/two.svg";
import { useTheme } from "../../context";
import { truncate } from "../../helper";
import { Chats } from "../../helper/keyConstants";
import Search from "../search";
import Typography from "../typography";

const onChange = (key: string) => {
  console.log(key);
};

const RightMenu = () => {
  const { isDarkMode } = useTheme();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "",
      icon: <img src={ImageOne} alt="image one" className="w-7" />,
      children: "",
      disabled: true,
    },
    {
      key: "2",
      label: "",
      icon: <img src={ImageTwo} alt="image two" className="w-7" />,
      children: "",
      disabled: true,
    },
    {
      key: "3",
      label: "",
      icon: <img src={ImageFour} alt="image four" className="w-7" />,
      children: (
        <div className="font-Poppins">
          <div className="py-4">
            <Search />
          </div>
          <div
            className={`${isDarkMode ? "text-white" : "text-bgBlackMedium"}`}
          >
            <Typography
              type="p"
              children="Chats"
              weight="medium"
              className="!py-3"
              variant="textMd"
            />
            <div
              className={`lex flex-col gap-2 ${
                isDarkMode ? "text-white" : "text-bgBlackMedium"
              }`}
            >
              <Typography type="p" children="# development team" />
              <Typography type="p" children="# sale team" />
              <Typography type="p" children="# marketing team" />
              <Typography type="p" children="# party friday" />
            </div>
          </div>
          <div className="pt-7">
            <Typography
              type="p"
              children="Contacts"
              className={`${
                isDarkMode ? "text-white" : "text-bgBlackMedium"
              } !py-4`}
              weight="medium"
            />
            <div className="grid grid-cols-6 gap-2">
              <img src={Image} alt="contacts" />
              <img src={ProfileFive} alt="contacts" />
              <img src={ProfileFour} alt="contacts" />
              <img src={ProfileThree} alt="contacts" />
              <img src={ProfileTwo} alt="contacts" />
              <img src={ProfileOne} alt="contacts" />
              <img src={ProfileFour} alt="contacts" />
              <img src={ProfileFive} alt="contacts" />
              <img src={ProfileFour} alt="contacts" />
              <img src={ProfileThree} alt="contacts" />
              <img src={ProfileTwo} alt="contacts" />
            </div>
          </div>

          <div
            className={`mt-7 px-4  ${
              isDarkMode ? "bg-black" : "bg-[#F5F5FC]"
            } rounded-lg h-[300px] overflow-y-scroll`}
          >
            <div
              className={`flex justify-between items-center py-5 sticky left-0 top-0 ${
                isDarkMode ? "bg-black" : "bg-[#F5F5FC]"
              } border-b-[1px] ${
                isDarkMode ? "border-gray-800" : "border-gray-300"
              }`}
            >
              <Typography
                type="p"
                children="Chatting"
                className={`${
                  isDarkMode ? "text-white" : "text-bgBlackMedium"
                }`}
                weight="medium"
              />
              <div className="flex items-center gap-2">
                <Typography
                  type="p"
                  children="All"
                  className={`${
                    isDarkMode ? "text-white" : "text-bgBlackMedium"
                  }`}
                  weight="medium"
                />
                <img src={Dropdown} alt="image" />
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-3">
              {Chats?.map((chat, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      isDarkMode ? "text-white" : "text-bgBlackMedium"
                    } flex justify-between border-b-[1px] ${
                      isDarkMode ? "border-gray-800" : "border-gray-300"
                    } pb-2`}
                  >
                    <div className="flex gap-2">
                      <img src={chat.image} alt="image" />
                      <div>
                        <Typography
                          type="p"
                          children={chat.name}
                          className="!text-xs"
                        />
                        <Typography
                          type="p"
                          children={truncate(chat.body, 20)}
                          className="!text-[#6F6F76] !text-xs"
                        />
                      </div>
                    </div>
                    <Typography
                      type="p"
                      children={chat.time}
                      className="!text-xs"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: "",
      icon: <img src={ImageThree} alt="image three" className="w-7" />,
      children: "",
      disabled: true,
    },
  ];

  const tabProps = {
    paddingLeft: "100px",
    //   tabBarGutter: 0, // Remove the line indicator
  };
  return (
    <div
      className={`py-5 px-5 sticky left-0 top-0 min-h-screen ${
        isDarkMode ? "bg-bgBlackMedium" : "bg-white"
      }`}
    >
      <Tabs
        {...tabProps}
        defaultActiveKey="3"
        items={items}
        onChange={onChange}
        tabBarGutter={70}
      />
    </div>
  );
};

export default RightMenu;
