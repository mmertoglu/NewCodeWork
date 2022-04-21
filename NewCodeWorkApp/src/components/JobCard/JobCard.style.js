import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:8,
        margin:5,
        padding:5,
        backgroundColor:'white',
        borderColor:'#b2dfdb'
        
    },
    nametext:{
        fontWeight:'bold',
        color:'black',
        fontSize:16
    },
    innercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
    },
    companycontainer:{
        backgroundColor:'#3C0B7F',
        borderRadius:8,
        paddingHorizontal:8,
        paddingVertical:3,
        width:160,
        alignItems:'center',
        justifyContent:'center'
    },
    companytext:{
        color:'white',
        fontWeight:'bold',
        fontSize:14
    }
})