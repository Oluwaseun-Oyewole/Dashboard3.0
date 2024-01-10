import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Forward from "../../assets/svg/forward.svg";
import Plus from "../../assets/svg/plus.svg";
import { useTheme } from "../../context";
import { TaskScheduleDetails } from "../../helper/keyConstants";
import Typography from "../typography";

const TaskScheduler = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode ? "bg-bgBlackMedium" : "bg-white"
      } py-5 px-5 rounded-md md:mt-5 overflow-scroll`}
    >
      <div className="flex justify-between items-center">
        <Typography
          type="p"
          className={`${isDarkMode ? "!text-white" : "!text-bgBlack"}`}
          children="Today's tasks"
        />
        <div className="flex items-center gap-2">
          <img src={Plus} alt="plus" />
          <img src={Forward} alt="forward" />
        </div>
      </div>
      <div className={`${isDarkMode ? "" : ""} gap-2 mt-5 mb-3`}>
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
          mousewheel={{
            forceToAxis: true,
          }}
          keyboard={true}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 4 },

            640: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          <div>
            {TaskScheduleDetails?.map((task, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className={`${
                      isDarkMode ? "bg-[#212121] text-white" : "bg-[#F5F5FC]"
                    } flex flex-col  w-[150px] min-h-[200px] py-4 px-4 rounded-lg justify-between hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer`}
                  >
                    <div className="flex flex-col gap-4">
                      <Typography
                        type="p"
                        children={task.taskName}
                        className={`!text-sm`}
                        weight="medium"
                      />
                      <Typography
                        type="p"
                        children={task.time}
                        className={`!text-sm`}
                        weight="medium"
                      />
                      <Typography
                        type="p"
                        children={task.todo}
                        className={`!text-xs !text-grey`}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      {task.check && <img src={task.check} alt="image" />}
                      {task.call && <img src={task.call} alt="image" />}
                      {task.noti && <img src={task.noti} alt="image" />}
                      {task.mic && <img src={task.mic} alt="image" />}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TaskScheduler;
