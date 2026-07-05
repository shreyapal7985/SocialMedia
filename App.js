/*fontWeight is not working on android when we are applying fontFamily
Ways of applying fontFamily ---1fontFamily:'Inter_18pt-Black',  */
import {Text,TouchableOpacity,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {getFontFamily} from './assets/fonts/helper';
import Title from './component/Title/title.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalstyle from './assets/styles/globalstyle';
import style from './assets/styles/globalstyle';
const App=()=>{
  return(
    <SafeAreaView>
    <View style={style.header}>
    <Title title={'Let’s Explore '}/>
    <TouchableOpacity style={style.message}>
    <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'}/>
    <View style={style.messageContainerNumber}>
      <Text style={style.messageNumber}>2</Text>
    </View>
    </TouchableOpacity>
    </View>
    </SafeAreaView>

  )
}

export default App;
