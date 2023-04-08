import { createContext } from "react";

export interface TokenContextObj {
  token: string,
  failOrder: boolean,
  setFailOrder?: (tokenObj: TokenContextObj) => void,
}


export const TokenContext = createContext<TokenContextObj>({ token: '', failOrder: false });
