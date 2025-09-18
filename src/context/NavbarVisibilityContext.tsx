import { createContext, useContext } from "react";

type NavbarVisibilityContextType = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

export const NavbarVisibilityContext = createContext<NavbarVisibilityContextType>({
  isVisible: true,
  setIsVisible: () => {},
});

export const useNavbarVisibility = () => useContext(NavbarVisibilityContext);