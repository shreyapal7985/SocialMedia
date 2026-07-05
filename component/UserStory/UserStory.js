import {Text, View, Image} from 'react-native'
import PropTypes from 'prop-types';

 const UserStory=(props)=>{
    return (
        <View>
            <Image source={props.profile}/>
            <Text>{props.firstName}</Text>
        </View>
    )

 }

 UserStory.propTypes={
    firstName:PropTypes.string.isRequired,
    profile:PropTypes.object.isRequired
 }


  export default UserStory;