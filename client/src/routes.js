import { Admin } from "./pages/Admin";
import { Basket } from "./pages/Basket";
import { ADMIN_ROUTE, BASKET_ROUTE } from "./utils/consts";


//Страница админа и страница с корзиной будет доступна только для авторизованных пацанов
export const authRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: BASKET_ROUTE, Component: Basket },
];

//Доступно вообще всем 
export const publicRoutes = [];
