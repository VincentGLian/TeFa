import SignUp from "./android/src/screens/SignUp";
import SignIn from "./android/src/screens/SignIn";
import Detail from "./android/src/screens/Detail";
import Splash from "./android/src/screens/Splash";
import Home from "./android/src/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from "./RootNavigation";

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Detail />
    </NavigationContainer>
  );
}

export default App;