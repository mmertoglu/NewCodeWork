import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#c8e6c9'
    },
    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10
        
    },
    button:{
        flexDirection:'row',
        backgroundColor:'tomato',
        paddingHorizontal:20,
        marginBottom:5,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttontext:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        marginLeft:5,
        marginRight:5
    }
})