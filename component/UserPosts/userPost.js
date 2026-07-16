import React from "react";
import { View, Text, Image } from 'react-native';
import PropTypes from "prop-types";
import UserProfileImage from "../UserProfileImage/userProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from './style.js'



const UserPost = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                <View style={styles.user} >
                    <UserProfileImage profile={props.profile} imageDimensions={48} />
                    <View style={{ marginLeft: 10,justifyContent:'center' }}>
                        <Text>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text>{props.location}</Text>}
                    </View></View>
                <FontAwesomeIcon icon={faEllipsisH} />
            </View>
        </View>
    )
}

UserPost.prototype = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profile: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmark: PropTypes.number.isRequired
}
export default UserPost;