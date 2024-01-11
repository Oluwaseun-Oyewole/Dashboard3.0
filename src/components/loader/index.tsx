import classNames from "classnames";
import { FiLoader } from "react-icons/fi";
import { useTheme } from "../../context";

const Loader = (props: { screen?: boolean }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={classNames(
        props?.screen ? "h-screen w-screen" : "min-h-[200px] h-full w-full",
        `grid place-content-center place-items-center  ${
          isDarkMode ? "bg-bgBlackMedium" : "bg-white"
        }`
      )}
    >
      <FiLoader
        size={25}
        className={`${isDarkMode ? "text-white" : "text-bgBlackMedium"}`}
      />
    </div>
  );
};

export default Loader;
