import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const styles=StyleSheet.create({
storyContainer:{
    marginRight:20
},
firstName:{
    color:'#022150',
    fontSize:14,
    fontFamily:getFontFamily('Inter','500'),
    marginTop:8,
    textAlign:'center'
}
})


export default styles;