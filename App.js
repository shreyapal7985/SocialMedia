/*fontWeight is not working on android when we are applying fontFamily
Ways of applying fontFamily ---1fontFamily:'Inter_18pt-Black',  */
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFontFamily } from './assets/fonts/helper';
import Title from './component/Title/title.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalstyle from './assets/styles/globalstyle';
import style from './assets/styles/globalstyle';

const App = () => {
  const stories = [
    {
      name: 'angel',
      id: 1,
      profile: require('./assets/images/default_profile.png')
    },
    {
      name: 'angelina',
      id: 2,
      profile: require('./assets/images/default_profile.png')
    },
    {
      name: 'lolo',
      id: 3,
      profile: require('./assets/images/default_profile.png')
    }, 
    {
      name: 'polo',
      id: 4,
      profile: require('./assets/images/default_profile.png')
    },
    {
      name: 'tokya',
      id: 5,
      profile: require('./assets/images/default_profile.png')
    },
    {
      name: 'lila',
      id: 6,
      profile: require('./assets/images/default_profile.png')
    },
    {
      name: 'ana',
      id: 7,
      profile: require('./assets/images/default_profile.png')
    }, 
    {
      name: 'nani',
      id: 8,
      profile: require('./assets/images/default_profile.png')
    },
    {
      name: 'gigi',
      id: 9,
      profile: require('./assets/images/default_profile.png')
    },
  ]
  return (
    <SafeAreaView>
      <View style={style.header}>
        <Title title={'Let’s Explore '} />
        <TouchableOpacity style={style.message}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={style.messageContainerNumber}>
            <Text style={style.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

export default App;
