import { useState } from "react";
import { assets } from "../assets";

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState(assets.eye);
  
    const handlePasswordVisibility = () => {
      if (rightIcon === assets.eye) {
        setRightIcon(assets.hidden);
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === assets.hidden) {
        setRightIcon(assets.eye);
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };