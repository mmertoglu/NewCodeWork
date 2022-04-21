import { useState,useEffect } from "react";
import { Alert } from "react-native";


const reducers = (state,action) => {
switch (action.type) {
    case 'ADD_FAVOURIES':
        
        const {favourite} = action.payload
        const filter = state.favouriteList.find(item => item.id===favourite.id)
        
        if (filter) {
            Alert.alert('CodeWork','You have already add this job.');
           
            return state;
        }   else{
            const newList = [...state.favouriteList,favourite]
            return {...state,favouriteList:newList}
        }     
        
            
            case 'REMOVE_ITEM':
                return {
                    favouriteList:[
                        ...state.favouriteList.filter(favori => favori !== action.payload.favourite)
                    ]
                }
    default:
       return state;
}
}
export default reducers