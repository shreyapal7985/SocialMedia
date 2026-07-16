import {Text, View, Image} from 'react-native'
import PropTypes from 'prop-types';
import styles from './style';
import UserProfileImage from '../UserProfileImage/userProfileImage';

 const UserStory=(props)=>{
    return (
        <View style={styles.storyContainer}>
        <UserProfileImage profile={props.profile}
            imageDimensions={65}
        />
            <Text style={styles.firstName}>{props.firstName}</Text>
        </View>
    )

 }

 UserStory.propTypes={
    firstName:PropTypes.string.isRequired,
    profile:PropTypes.any.isRequired
    
 }


  export default UserStory;