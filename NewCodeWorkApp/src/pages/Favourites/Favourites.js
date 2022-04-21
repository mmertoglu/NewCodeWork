import React from "react";
import {View,Text,FlatList} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector,useDispatch } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";


const Favourites = () => {
    const favouriteList = useSelector(s => s.favouriteList)
    const dispatch = useDispatch();
    const RemoveItem = item => {
        dispatch({type:'REMOVE_ITEM',payload:{favourite:item}})
    }
    const renderItem = ({item}) => (
        <View>
            <JobCard job={item} />
            <TouchableOpacity
            style={{backgroundColor:'tomato',alignItems:'center',width:200,alignSelf:'center',borderRadius:8}}
            onPress={()=>RemoveItem(item)}
            >
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}} >Remove</Text>
            </TouchableOpacity>
            </View>
            
    )
    return(
        <View>
            <FlatList
            data={favouriteList}
            renderItem={renderItem}
            />
        </View>
    )
}
export default Favourites