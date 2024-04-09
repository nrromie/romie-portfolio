import Image from "next/image";
import logo from "@/public/favicon.ico";
const Navbar = () => {

    return (
        <div className={"w-full z-20 bg-slate-900 h-16 flex justify-between items-center px-20 sticky top-0"}>
            <Image src={logo} alt="logo" width={50} height={30} className="h-12 w-auto" />
            <ul className="flex gap-4 text-white">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
        </div>
    );
};

export default Navbar;