import React from "react";
import { View, Text, useWindowDimensions, Dimensions, ScrollView, TouchableOpacity,Alert } from 'react-native';
import RenderHtml from 'react-native-render-html'
import styles from './Details.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from "react-redux";

const Details = ({ route }) => {
    const { item } = route.params
    const source = {
        html: item.contents
    }
    const { width } = {
        width: Dimensions.get('screen').width
    }
    const dispatch = useDispatch();
    const addSubmit = () => {
         Alert.alert('CodeWork','Success You have submit')
    }
    const addFavourite = favourite => {
        dispatch({ type: 'ADD_FAVOURIES', payload: { favourite } })
    }
    return (
        <View style={styles.container} >
            <View style={styles.headercontainer} >
                <Text style={styles.titletext} >{item.name}</Text>
                <View style={styles.locationcontainer} >
                    <Text style={styles.locationtext} >Location:</Text>
                    <Text style={styles.locationresulttext} >{item.locations[0].name}</Text>
                </View>
                <View style={styles.locationcontainer} >
                    <Text style={styles.locationtext} >Level:</Text>
                    <Text style={styles.locationresulttext} >{item.levels[0].name}</Text>
                </View>

            </View>

            <ScrollView style={styles.content} >
                <RenderHtml
                    baseStyle={{ color: 'black' }}
                    source={source}
                    contentWidth={width}
                />
            </ScrollView>
            <View style={styles.favouritecontainer} >
                <TouchableOpacity
                    onPress={addSubmit}
                    style={styles.favouritebutton} >
                    <Icon name="login" color='white' size={20} />
                    <Text style={styles.buttontext} >Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => addFavourite(item)}
                    style={styles.favouritebutton} >
                    <Icon name="heart" color='white' size={20} />
                    <Text style={styles.buttontext} >Add Favourite</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default Details;