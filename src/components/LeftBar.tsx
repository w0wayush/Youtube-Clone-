import {
  FaHome,
  FaFire,
  FaPlayCircle,
  FaUserFriends,
  FaHistory,
  FaThumbsUp,
  FaCog,
} from "react-icons/fa";
import {
  AiFillPlaySquare,
  AiFillClockCircle,
  AiOutlineFolder,
} from "react-icons/ai";

const menuItems = [
  { title: "Home", icon: <FaHome size={25} /> },
  { title: "Trending", icon: <FaFire size={25} /> },
  { title: "Subscriptions", icon: <FaPlayCircle size={25} /> },
  { title: "Library", icon: <AiOutlineFolder size={25} /> },
  { title: "History", icon: <FaHistory size={25} /> },
  { title: "Watch later", icon: <AiFillClockCircle size={25} /> },
  { title: "Liked videos", icon: <FaThumbsUp size={25} /> },
  { title: "Friends", icon: <FaUserFriends size={25} /> },
  { title: "Settings", icon: <FaCog size={25} /> },
];

export const LeftBar = ({ visible }: any) => {
  return (
    <div
      className={`bg-black w-48 h-screen fixed md:relative transform ${
        visible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:translate-x-0`}
    >
      {menuItems.slice(0, 3).map((item, index) => (
        <BarWithIcon key={index} title={item.title} icon={item.icon} />
      ))}
      <Line />
      {menuItems.slice(3, 8).map((item, index) => (
        <BarWithIcon key={index} title={item.title} icon={item.icon} />
      ))}
      <Line />
      {menuItems.slice(8).map((item, index) => (
        <BarWithIcon key={index} title={item.title} icon={item.icon} />
      ))}
      <Line />
    </div>
  );
};

export const Line = () => {
  return (
    <div className="w-full bg-gray-200 h-px dark:bg-gray-950 pl-3 pr-3 opacity-20">
      <div
        className="bg-red-600 h-0.5 dark:bg-gray-500"
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};

function BarWithIcon({ title, icon }: any) {
  return (
    <div className="overflow-x-visible">
      <BarElement title={title} icon={icon} />
    </div>
  );
}

function BarElement({ icon, title }: any) {
  return (
    <div className="w-full rounded-xl bg-black hover:bg-gray-700 flex w-36 p-2 m-2 cursor-pointer">
      <div className="pr-2">{icon}</div>
      <div className="pl-4">{title}</div>
    </div>
  );
}
