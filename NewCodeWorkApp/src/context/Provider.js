import React,{ useState } from 'react'
import {Provider} from 'react-redux'
import reducers from './reducers'
import {createStore} from 'redux'


const FavouriteProvider = ({children}) => {
    const [favouriteList,setFavouriteList] = useState([]);
    const store = createStore(reducers,{favouriteList})

    return <Provider store={store} >{children}</Provider>
    

}
export default FavouriteProvider;