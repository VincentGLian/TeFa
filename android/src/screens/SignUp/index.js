import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { CheckBox } from '@rneui/themed'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useTogglePasswordVisibility } from '../../components/PasswordTextBox'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const navigation = useNavigation();
  const [text1, onChangeText] = React.useState("");
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [password, setPassword] = React.useState('');
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [check1, setCheck1] = useState(false);

  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex:1 }}>
        <View>
            <Text style={styles.started}>Lets Get Started</Text>
            <Text style={styles.create}>Create an account to veco to get all features</Text>
        </View>

        <View>
            <TextInput onChangeText={onChangeText} value={text1} style={styles.texti} placeholder="Full Name"/>
            <TextInput onChangeText={onChangeText} value={text1} style={styles.texti} placeholder="Phone"/>
              {datePicker && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={'default'}
                  is24Hour={true}
                  onChange={onDateSelected}
                  style={styles.date}
                />
              )}
              {!datePicker && (
                <View>
                  <TouchableOpacity onPress={showDatePicker} style={styles.dateb}>
                    <Text>{date.toDateString()}</Text>
                    <Ionicons name='calendar-outline' size={20}/>
                  </TouchableOpacity>
                </View>
              )}            
            
            <TextInput onChangeText={onChangeText} value={text1} style={styles.texti} placeholder="Email"/>
            <View style={styles.textii}>
              <TextInput onChangeText={text => setPassword(text)} value={password} secureTextEntry={passwordVisibility} style={{ padding:15 }}
                textContentType='newPassword' placeholder="password"/>
              <Pressable onPress={handlePasswordVisibility}>
                <Image source={rightIcon} style={styles.righti} />
              </Pressable>
            </View>
            
            <CheckBox
              center
              title="I have read and accepted the General Terms and Conditions of this app."
              containerStyle={styles.checkb}
              textStyle={{ color:'white' }}
              checked={check1}
              onPress={() => setCheck1(!check1)}
            />
            
            <TouchableOpacity style={styles.signb}>
                <Text style={styles.signt1}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.signt2} onPress={()=>navigation.navigate("Sign In")}>Sudah memiliki akun? Masuk</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp