"use client";
import { useState } from "react";
import Image from "next/image";
import MyImg from "@/public/myphoto.png";
import AnimatedBackground from "./AnimatedBackground/AnimatedBackground"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
    const [unfolded, setUnfolded] = useState(false);

    const handleScroll = () => {
        if (!unfolded) {
            setUnfolded(true);
            window.scrollTo(0, 0);
        }
    };

    const moveRightKeyframes = `
        @keyframes moveRight {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(0%);
            }
        }
    `;

    const animateMoveRightStyle = {
        animation: unfolded ? 'moveRight 1s linear' : 'none',
    };

    return (
        <>
            <style>{moveRightKeyframes}</style>
            <div
                className="h-screen w-full bg-slate-800 flex justify-end items-center relative overflow-hidden"
                onScroll={handleScroll}
                onWheel={handleScroll}
            >
                <AnimatedBackground />
                <div className={`h-full flex justify-between items-center gap-3 left-0 top-0 lg:w-1/2 md:w-1/2 sm:w-full absolute ${unfolded ? '' : 'hidden'}`} style={animateMoveRightStyle}>
                    <div className="flex flex-col justify-between h-full ml-20">
                        <div className="flex justify-center items-center flex-grow">
                            <div className="text-white">
                                <p className="text-2xl">Hello, I am</p>
                                <p className="text-[4rem] font-bold">Nur Hossen Romie</p>
                                <p className="text-3xl">MERN stack developer</p>
                                <button className="text-red-400 mt-6 text-2xl underline hover:text-red-700">Resume</button>
                            </div>
                        </div>
                        <ul className="flex gap-4 text-2xl pb-8">
                            <li className="text-white hover:text-red-400"><FaFacebook /></li>
                            <li className="text-white hover:text-red-400"><FaLinkedin /></li>
                            <li className="text-white hover:text-red-400"><FaTwitter /></li>
                        </ul>
                    </div>
                    <span className="bg-red-500 h-[1200px] w-4" style={{ transform: 'rotate(10deg)' }}></span>
                </div>
                <div className={`h-full lg:flex md:flex justify-center items-center z-10 ${unfolded ? 'w-1/2 sm:hidden' : 'w-full sm:flex'}`} style={{ transition: 'width 1s ease-in-out' }}>
                    <Image
                        src={MyImg}
                        width={600}
                        height={600}
                        priority={true}
                        alt="Picture of the author"
                        className="h-full w-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;