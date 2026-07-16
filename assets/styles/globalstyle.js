import { StyleSheet } from "react-native";
import { getFontFamily } from "../fonts/helper";
const style=StyleSheet.create({
header:{
    marginLeft:30, 
    marginRight:17, 
    marginTop:30, 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between"
},
message:{
    backgroundColor:'#f5f7faf4', 
    padding:14, 
    borderRadius:100
},
messageContainerNumber:{
    backgroundColor:'#F35BAC',
    justifyContent:'center',
    flexDirection:'row',
    height:10,
    width:10,
    borderRadius:10,
    position:'absolute',
    right:10,
    top:12

},
messageNumber:{
    color:'#FFFFFF',
    fontFamily:getFontFamily('Inter','600'),
    fontSize:6
},
userStoryContainer:{
    marginTop:20,
    marginHorizontal:24
},
userPostContainer:{
    marginHorizontal:24
}
})
 export default style;