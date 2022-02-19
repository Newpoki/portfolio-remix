import { createContext } from "react";

export interface IDrawerContextData {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export const drawerContext = createContext<IDrawerContextData>({
  onOpen: () => {},
  onClose: () => {},
  isOpen: false,
});
