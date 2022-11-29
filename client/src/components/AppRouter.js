import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes'; 
import { SHOP_ROUTE } from '../utils/consts';

export const AppRouter = () => {
  const {user} = useContext(Context)
  console.log(user);
  return (
    //Просто флаг, будем чекать авторизован пользователь или нет
    //Switch (мы указываем несколько марщрутов(например регистрация, авторизация, и магазин) и если не один не отработает(пользователь ввел некоректный адрес))
    // тогда отработает самый последний, который указан в этом Routes
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} exact/>  //указываем компонент, который по этому пути будет отрисовывать
      )}
      {publicRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>
      )}
      
      <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
    
  )
}
