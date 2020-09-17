import Reactotron from 'reactotron-react-native'

Reactotron
  // .configure() // controls connection & communication settings
  .configure()
  // .configure({ host: '10.80.0.38' })
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!