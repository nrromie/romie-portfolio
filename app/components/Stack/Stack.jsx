import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoFirebase, BiLogoCss3, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";

const Stack = () => {
    return (
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-4">Stack</h1>
            <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center text-white">
                    <FaReact className="mr-2" />
                    React
                </li>
                <li className="flex items-center text-white">
                    <BiLogoTailwindCss className="mr-2" />
                    Tailwind CSS
                </li>
                <li className="flex items-center text-white">
                    <BiLogoJavascript className="mr-2" />
                    JavaScript
                </li>
                <li className="flex items-center text-white">
                    <BiLogoFirebase className="mr-2" />
                    Firebase
                </li>
                <li className="flex items-center text-white">
                    <BiLogoCss3 className="mr-2" />
                    CSS
                </li>
                <li className="flex items-center text-white">
                    <BiLogoMongodb className="mr-2" />
                    MongoDB
                </li>
                <li className="flex items-center text-white">
                    <BiLogoNodejs className="mr-2" />
                    Node.js
                </li>
            </ul>
        </div>
    );
};

export default Stack;