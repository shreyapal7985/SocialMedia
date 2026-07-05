/*fontWeight is not working on android when we are applying fontFamily
Ways of applying fontFamily ---1fontFamily:'Inter_18pt-Black',  */
import {Text,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {getFontFamily} from './assets/fonts/helper';
import Title from './title.js'
const App=()=>{
  return(
    <SafeAreaView>
    <Title title={'Lets Explore'}/>
    </SafeAreaView>

  )
}

export default App;
