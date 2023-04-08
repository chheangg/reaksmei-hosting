import { createContext } from "react";
import { Plan } from "../types";

interface OrderContextObj {
  orders?: Plan[],
  setOrders?: React.Dispatch<React.SetStateAction<Plan[]>>
}

export const OrdersContext = createContext<OrderContextObj>({})