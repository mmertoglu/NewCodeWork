import React,{useState} from "react";
import {View,Text,FlatList,StatusBar} from 'react-native';
import Config from "react-native-config";
import JobCard from "../../components/JobCard/JobCard";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from './Jobs.style'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Jobs = ({navigation}) => {
    const [page,setPage] = useState(1)
    const {loading,error,data} = useFetch(`${Config.API_URL}?page=${page}`)
    console.log(data.results)
    const handlegoDetail = (item) => {
        navigation.navigate('DetailsScreen',{item})
    }
    const goPrevious=() => {
        if (page==1) {
            setPage(1)
        }else{
            setPage(page-1)
        }
    }
    const goNext=() => {
        if (page==50) {
            setPage(1)
        }else{
            setPage(page+1)
        }
    }
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <Error/>
    }
    const renderJobItem = ({item}) =>( 
    <JobCard job={item} onPress={()=>handlegoDetail(item)}/>)
    return(
        <View style={styles.container} >
            <StatusBar backgroundColor='tomato' />
           <FlatList
           data={data.results}
           renderItem={renderJobItem}
           />
           <View style={styles.buttoncontainer} >
               <TouchableOpacity 
               onPress={goPrevious}
               style={styles.button} >
                   <Icon name="skip-previous" color='white' size={24} />
                   <Text style={styles.buttontext} >Previous</Text>
               </TouchableOpacity>
               <TouchableOpacity
               onPress={goNext}
               style={styles.button} >
                   <Text style={styles.buttontext} >Next</Text>
                   <Icon name="skip-next" color='white' size={24} />
               </TouchableOpacity>
           </View>
        </View>
    )
}
export default Jobs