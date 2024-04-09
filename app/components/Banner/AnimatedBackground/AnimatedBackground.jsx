import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoFirebase, BiLogoCss3, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import styles from "./BgAnimation.module.css";

const AnimatedBackground = () => {

    const iconsData = [
        { icon: <FaReact />, name: "reactIcon" },
        { icon: <BiLogoTailwindCss />, name: "tailwindIcon" },
        { icon: <BiLogoJavascript />, name: "javascriptIcon" },
        { icon: <BiLogoFirebase />, name: "firebaseIcon" },
        { icon: <BiLogoCss3 />, name: "cssIcon" },
        { icon: <BiLogoMongodb />, name: "mongodbIcon" },
        { icon: <BiLogoNodejs />, name: "nodejsIcon" }
    ];

    return (
        <div className="absolute top-0 left-0 w-full h-full inset-0 flex justify-center items-center">
            {iconsData.map((icon, index) => (
                <div className={`text-9xl text-gray-950 ${styles[icon.name]}`} key={index}>
                    {icon.icon}
                </div>
            ))}
        </div>
    );
};

export default AnimatedBackground;