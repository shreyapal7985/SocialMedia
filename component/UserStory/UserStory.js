import {Text, View, Image} from 'react-native'
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/userProfileImage';

 const UserStory=(props)=>{
    return (
        <View style={style.storyContainer}>
        <UserProfileImage profile={props.profile}/>
            <Text style={style.firstName}>{props.firstName}</Text>
        </View>
    )

 }

 UserStory.propTypes={
    firstName:PropTypes.string.isRequired,
    profile:PropTypes.any.isRequired
    
 }


  export default UserStory;