import { createContext, useState } from "react";
export const FavoritesContext=createContext({
    ids:[],
    addFavorites:(id)=>{},
    removeFavorites:(id)=>{},
});

function FavoritesContextProvider({children}){
    const [allFavorites, setFavorites]=useState([]);

    function addFavorites(id){
        setFavorites((favoriteId)=>[...favoriteId,id]);
    }
     
    function removeFavorites(id){
        setFavorites((favoriteId)=>favoriteId.filter((mealId)=>mealId !==id));
    }

    const value={
        ids:allFavorites,
        addFavorites:addFavorites,
        removeFavorites:removeFavorites,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;