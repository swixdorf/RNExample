import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ButtonX } from 'swxform';
import { FramePageInterface, loginType, RouteX, FrameX } from 'swxnavigation';


const pages: FramePageInterface[] = [
  { regex: /Home/, title: 'Home', page: require('./src/pages/Home')['Home'], loginType: loginType.EveryOne },
  { regex: /Page1/, title: 'Page1', page: require('./src/pages/Page1')['default'], loginType: loginType.EveryOne }, /* ['default'] for Page1 exported as default */
  { regex: /Page2/, title: 'Page2', page: require('./src/pages/Page2')['default'], loginType: loginType.EveryOne }/* ['default'] for Page2 exported as default */
]



class Top extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 3 }}>
        <ButtonX title={'<< Back'} onPress={() => { RouteX.goBack() }} />
      </View >
    )
  }
}
const BottomItem = (props: { title: string, href: string, args?: {}, img: { uri?: string, local?: any } }) => {
  return (
    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { RouteX.goto(props.href, props.args || {}) }}>
      <Image style={{ height: 30, width: 30 }} source={props.img.local ? props.img.local : { uri: props.img.uri }} />
      <Text style={{}}>{props.title}</Text>
    </TouchableOpacity>
  )
};
class Bottom extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <BottomItem title={"Page1"} href={"Page1"} img={{ local: require('./assets/images/p1.png') }} />
        <BottomItem title={"Home"} href={"Home"} img={{ local: require('./assets/images/home.png') }} />
        <BottomItem title={"Page2"} href={"Page2"} img={{ local: require('./assets/images/p2.png') }} />
      </View >
    )
  }
}
class Drawer extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'column',flex:1, justifyContent: 'space-evenly' }}>
        <BottomItem title={"Page1"} href={"Page1"} img={{ local: require('./assets/images/p1.png') }} />
        <BottomItem title={"Home"} href={"Home"} img={{ local: require('./assets/images/home.png') }} />
        <BottomItem title={"Page2"} href={"Page2"} img={{ local: require('./assets/images/p2.png') }} />
      </View >
    )
  }
}

const App = () => {
  return <FrameX pages={pages} top={<Top />} bottom={<Bottom />} drawer={<Drawer />} initialPageName={'Home'} />;
};



export default App;
