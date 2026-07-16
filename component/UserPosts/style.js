import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row'
    },
    userTextContainer: {
        marginLeft: 10,
        justifyContent: 'center'

    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userName: {
        color: '#000',
        fontFamily: getFontFamily('Inter', 600),
        fontSize: 16
    },
    location: {
        color: '#79869F',
        fontFamily: getFontFamily('Inter', 400),
        fontSize: 12,
        marginTop: 5
    },
    userPostContainer: {
        marginTop: 35,
        borderBottomWidth:1,
        paddingBottom:20,
        borderBottomColor:'#EFF2F6'

    },
    post: {

        alignItems: 'center',
        marginVertical: 20
    },
    userPostStats:{marginLeft:20, flexDirection:'row'},
    userPostStatsButton:{flexDirection:"row"},
    userPostStatsButtonRight:{flexDirection:"row", marginLeft:27},
    userPostStatsText:{marginLeft:3,
        color:'#79869F'
    }

})
export default styles;