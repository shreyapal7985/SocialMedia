import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
 
const UserProfileImage=(props)=>{
    return(
        <View style={style.userImageContainer}>
            <Image source={props.profile} style={style.image}/>
            </View>
    )
}

UserProfileImage.prototype={
    profile:PropTypes.any.isRequired
}
export default UserProfileImage;