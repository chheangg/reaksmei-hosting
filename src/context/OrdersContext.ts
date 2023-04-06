import { createContext } from "react";
import { Plan } from "../types";

interface OrderContext {
  orders?: Plan[],
  setOrders?: React.Dispatch<React.SetStateAction<Plan[]>>
}

export const OrdersContext = createContext<OrderContext>({})