import { createContext } from "react";

interface OrderContext {
  token: string,
  failOrder: boolean,
  setFailOrder?: React.Dispatch<React.SetStateAction<boolean>>,
}


export const TokenContext = createContext<OrderContext>({ token: '', failOrder: false });
