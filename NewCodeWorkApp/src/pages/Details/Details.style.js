import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        
    },
    headercontainer:{
        backgroundColor:'#3C0B7F',
        padding:5
       
    },
    locationcontainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    locationtext:{
        color:'#15EADA',
        fontSize:20,
        fontWeight:'bold'
    },
    locationresulttext:{
        fontSize:20,
        color:'white',
        marginLeft:2,
        fontWeight:'500'
    },
    titletext:{
        fontSize:24,
        color:'white',
        marginBottom:5,
        fontWeight:'bold'
    },
    detailtext:{
        alignSelf:'center',
        fontSize:30,
        color:'#7DCB12',
        fontWeight:'bold'
    },
    content:{
        margin:5
    },
    favouritecontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    favouritebutton:{
        flexDirection:'row',
        backgroundColor:'#3C0B7F',
        marginBottom:5,
        paddingHorizontal:10,
        borderRadius:8,
        paddingVertical:5,
        alignItems:'center'
    },
    buttontext:{
        color:'white',
        fontSize:20,
        marginLeft:5
    }
})