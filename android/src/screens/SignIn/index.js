import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { assets } from '../../assets'
import { useTogglePasswordVisibility } from '../../components/PasswordTextBox'
import styles from './styles'

const SignIn = () => {
  const [text1, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [password, setPassword] = React.useState('');
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex:1 }}>

        <View style={{ marginTop:30 }}>
            <Image source={assets.welcome} style={styles.welcome}/>
            <Text style={styles.back}>Welcome Back!</Text>
            <Text style={styles.veco}>login to your existing account of veco</Text>
            
            <TextInput onChangeText={onChangeText} value={text1} style={styles.texti} placeholder="Email / phone number"/>
            <View style={styles.pass}>
              <TextInput onChangeText={text => setPassword(text)} value={password} secureTextEntry={passwordVisibility}  
                textContentType='newPassword' style={{ padding:15, width:"90%" }} placeholder="password"/>  
              <Pressable onPress={handlePasswordVisibility}>
                <Image source={rightIcon} style={{ width:22, height:22 }} />
              </Pressable>
            </View>

            <Text style={styles.forgot}>forgot password?</Text>

            <TouchableOpacity style={styles.loginb}>
                <Text style={styles.logint}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.orl}>or connect using</Text>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
              <TouchableOpacity style={styles.gg}>
                <Image source={assets.google} style={{ alignSelf:'center' }}/>
                <Text style={styles.ggfb}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fb}>
                <Image source={assets.fb} style={{ alignSelf:'center' }}/>
                <Text style={styles.ggfb}>Facebook</Text>
              </TouchableOpacity>
            </View>
            
              <Text style={styles.orl}>Don't have an account yet? Sign Up</Text>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SignIn