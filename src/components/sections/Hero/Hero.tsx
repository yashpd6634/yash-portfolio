import { useState, useEffect } from "react";
import { Button } from "../../common";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Spline from "@splinetool/react-spline";
import LiquidEther from "../../LiquidEther";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

export const PROFILE_LINKS = [
  {
    title: "LeetCode",
    icon: (
      <IconBrandLeetcode className="h-full w-full text-orange-600 dark:text-orange-400" />
    ),
    href: "https://leetcode.com/u/yd13/",
  },

  {
    title: "GeekForGeeks",
    icon: (
      <img
        src="/img/logos/icons8-geeksforgeeks.svg"
        width={40}
        height={40}
        alt="GeekForGeeks Logo"
      />
    ),
    href: "https://www.geeksforgeeks.org/user/yd13/",
  },
  {
    title: "Github",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-700 dark:text-neutral-500" />
    ),
    href: "https://github.com/yashpd6634",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-blue-700 dark:text-blue-500" />
    ),
    href: "https://www.linkedin.com/in/yash-dewangan-3737671a4/",
  },
];

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [splineError, setSplineError] = useState(false);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  const handleSplineError = () => {
    console.warn("Spline failed to load, showing fallback");
    setSplineError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    // Fallback timer in case Spline takes too long
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  useGSAP(() => {
    gsap.set("#hero-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    // Create the scroll-triggered animation
    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div id="hero-frame" className="relative z-10 h-dvh w-screen bg-black">
        <div className="hero-content absolute left-0 top-0 size-full bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900" />
        <div
          className="hero-content relative z-10 h-dvh w-screen"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="absolute inset-0" style={{ pointerEvents: "auto" }}>
            <LiquidEther
              className="w-full h-full"
              colors={["#1e40af", "#3b82f6", "#8b5cf6", "#a855f7", "#d946ef"]}
              mouseForce={20}
              cursorSize={100}
              isViscous={true}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              dt={0.014}
              BFECC={true}
              resolution={0.5}
              isBounce={true}
              autoDemo={true}
              takeoverDuration={0.1}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "auto",
              }}
            />
          </div>

          <div className="absolute inset-0 pointer-events-none">
            {!splineError ? (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 md:top-0 md:right-0 md:left-auto md:transform-none md:w-3/5 md:h-4/5">
                <Spline
                  scene="https://prod.spline.design/3B8JppQCecaCNdtZ/scene.splinecode"
                  onLoad={handleSplineLoad}
                  onError={handleSplineError}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ) : (
              <div className="absolute top-0 right-0 w-1/2 h-1/2 md:w-2/5 md:h-3/5 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-lg flex-center">
                <div className="text-4xl animate-bounce">🤖</div>
              </div>
            )}

            {/* Decorative particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-yellow-400/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-blue-400/10 rounded-full animate-bounce"></div>
              <div className="absolute top-2/3 right-1/3 w-20 h-20 bg-purple-400/10 rounded-full animate-ping"></div>
            </div>

            {/* Text content */}
            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Y<b>a</b>sh
            </h1>

            <div className="absolute left-0 top-0 size-full">
              <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  portf<b>o</b>lio
                </h1>
                <p className="mt-10 mb-5 max-w-128 font-robert-regular font-bold text-3xl text-black">
                  Full Stack Developer <br /> NextJS & ReactJS Specialist
                </p>

                {/* Enable pointer events only for the button */}
                <div className="pointer-events-auto">
                  <Button
                    id="view-resume"
                    title="View Resume"
                    leftIcon={<TiLocationArrow />}
                    onClick={() =>
                      window.open("https://drive.google.com/file/d/1rTNJBVCLgEkKQwx173DY5TmdTZBPgpXY/view?usp=drive_link", "_blank")
                    }
                    containerClass="bg-yellow-300 flex-center gap-1 px-8 py-4 text-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text text-transparent">
        Y<b>a</b>sh
      </h1>

      {/* FloatingDock positioned at bottom left */}
      <div className="absolute bottom-40 left-20 z-50 scale-125 p-4 rounded-2xl bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-fuchsia-900/20 backdrop-blur-md border border-white/10 shadow-2xl sm:bottom-10 sm:left-10 sm:scale-100 sm:p-3 md:bottom-16 md:left-16 md:scale-110 lg:bottom-20 lg:left-20 lg:scale-125">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={PROFILE_LINKS}
        />
      </div>
    </div>
  );
};

export default Hero;
