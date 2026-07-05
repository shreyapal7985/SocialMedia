import {Text, View, Image} from 'react-native'
import PropTypes from 'prop-types';
import style from './style';

 const UserStory=(props)=>{
    return (
        <View style={style.storyContainer}>
        
            <Text style={style.firstName}>{props.firstName}</Text>
        </View>
    )

 }

 UserStory.propTypes={
    firstName:PropTypes.string.isRequired,
    
 }


  export default UserStory;