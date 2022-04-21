import React from "react";
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.style'

const JobCard = ({job,onPress}) => {
    return(
       <TouchableWithoutFeedback onPress={onPress} >
       <View style={styles.container} >
            <Text style={styles.nametext} >{job.name}</Text>
            <Text>Sprinklr</Text>
            <View style={styles.innercontainer} >
                <View style={styles.companycontainer} >
            <Text style={styles.companytext} >{job.locations[0].name}</Text>
            </View>
           <View style={styles.companycontainer} > 
            <Text style={styles.companytext} >{job.levels[0].name}</Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default JobCard;