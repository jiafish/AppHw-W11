import React, { createContext, useState } from "react";
import drinkData from "../json/drink.json";

export const StoreContext = createContext();

const drinkDetail = {
  day: null,
  detail:[
  {
    name: null,
    capacity: 0,
    sweet: "無糖",
    sweetindex: 0,
    calories: 0,
    sugar: 0,
    sport: 0,
    photo: "https://raw.githubusercontent.com/wendy556609/APP_Middle/master/assets/icon/img.png",
    store: null,
    cup: 0,
    ice: "去冰"
  }
]
};

// Make a Provider
export const StoreProvider = ({ children }) => {
  const [drinks, setDrinks] = useState(drinkData.drink);
  const [drinkTemp, setdrinkTemp] = useState(drinkDetail);
  const store = {
    drinkState: [drinks, setDrinks],
    drinkTempState: [drinkTemp, setdrinkTemp],
  };
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

