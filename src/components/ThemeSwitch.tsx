import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import themeSwitchAnimation from "../assets/theme-switch-animation.json";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);
  const options = {
    animationData: themeSwitchAnimation,
    loop: false,
    autoplay: false,
  };
  let View, playSegments: any,goToAndStop:any, setSpeed;

  if (typeof window !== "undefined") {
    ({ View, playSegments,goToAndStop, setSpeed } = useLottie(options, { height: 100 }));
    setSpeed(5);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme){
      localStorage.setItem("theme","dark")
      goToAndStop(216, true);
      setIsDark(true);
    }else{
      if (savedTheme == "light") {
        //Set in light
        setIsDark(false);
        goToAndStop(430, true);
        document.documentElement.classList.add("dark");
      }else{
        //Set in Dark
        setIsDark(true);
        goToAndStop(216, true);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (!isDark) {
      //Change to Dark Mode
      setIsDark(true)
      document.documentElement.classList.remove("dark");
      playSegments([30, 216], true);
      localStorage.setItem("theme", "dark");
    } else {
      //Change to Light Mode
      setIsDark(false)
      document.documentElement.classList.add("dark");
      playSegments([280, 430], true);
      localStorage.setItem("theme", "light");
    }
  };

  return <button onClick={toggleTheme}>{View}</button>;
}
