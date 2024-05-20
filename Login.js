import React, { useState, useEffect } from 'react';
import { View, Text, Image, KeyboardAvoidingView, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Login = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Mobile');
  const [mobileValue, setMobileValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loading, setLoading] = useState(false); // State for controlling the loading indicator

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const handleRegisterNow = () => {
    navigation.navigate('Register')
    // Handle navigation or registration logic
    console.log('Register Now button pressed');
  };
  const handlePasswordInputChange = (text) => {
    setPasswordValue(text);
  };

  const handleMobileInputChange = (text) => {
    setMobileValue(text);
  };
  const handleEmailInputChange = (text) => {
    setEmailValue(text);
  };
  const handleGetOTP = () => {
    // Handle logic for getting OTP
    navigation.navigate('VerifyOTP', { loginMethod: selectedTab == 'Mobile' ? 'mobile' : 'email' })
  };
  const handleLogin = () => {
    // Handle login logic
    console.log('Login button pressed');
  };
  return (
    <View style={{ position: 'relative', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFECE7' }}>
      <ImageBackground
        resizeMode="stretch"
        source={require('./bg.png')}
        style={styles.curveBackGroundWhite}
      />
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('./black-arrow.png')} // Add your image here
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.text}>Log In</Text>
      </View>
      <View style={styles.welcomtextContainer}><Text style={styles.welcomeText}>Welcome back! Log in to access your pet's curated healthy lifestyle.</Text></View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabContainerSep}
          onPress={() => setSelectedTab('Mobile')}
        >
          <Text style={[styles.textTab, selectedTab === 'Mobile' && styles.selectedText]}>Mobile Number</Text>
          <View style={[styles.seperator, selectedTab === 'Mobile' && styles.selectedSeparator]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabContainerSep}
          onPress={() => setSelectedTab('Email')}
        >
          <Text style={[styles.textTab, selectedTab === 'Email' && styles.selectedText]}>Email ID</Text>
          <View style={[styles.seperator, selectedTab === 'Email' && styles.selectedSeparator]} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={styles.viewContainer}>
        <ScrollView >
          {selectedTab === 'Mobile' ? (
            <View>
              <Text style={styles.headerText}>Mobile Number</Text>
              <View style={styles.viewTextInputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleMobileInputChange}
                  value={mobileValue}
                  placeholder="Type Mobile Number here..."
                  keyboardType="numeric"
                />
                <Image
                  source={require('./smartphone.png')} // Add your image here
                  style={styles.mobileIcon}
                  resizeMode="contain"
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleGetOTP}>
                <Text style={styles.buttonText}>Get OTP</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.containerRegistere}>
              <Text style={styles.headerText}>Email ID</Text>
              <View style={styles.viewTextInputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleEmailInputChange}
                  value={emailValue}
                  placeholder="Type Email ID here..."
                  keyboardType="email"
                />
                <Image
                  source={require('./mail.png')} // Add your image here
                  style={styles.regIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.headerText}>Password</Text>
              <View style={styles.viewTextInputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handlePasswordInputChange}
                  value={passwordValue}
                  placeholder="Type Password here..."
                  secureTextEntry={true}
                />
                <Image
                  source={require('./eye.png')} // Add your image here
                  style={styles.regIcon}
                  resizeMode="contain"
                />
              </View>
              <TouchableOpacity style={styles.buttonForgot} onPress={handleLogin}>
                <Text style={styles.buttonRegisterText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          <Text style={styles.connectText}>Connect With</Text>
          <View style={styles.container}>
            <Image
              source={require('./google.png')} // Add your image here
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Image
              source={require('./apple.png')} // Add your image here
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.containerSocialBottom}>

        <View style={styles.containerBottom}>
          <Text style={styles.textAccount}>Don't have an account?</Text>
          <TouchableOpacity style={styles.buttonRegister} onPress={handleRegisterNow}>
            <Text style={styles.buttonRegisterText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  containerSocialBottom: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: '40%',
  },
  containerRegistere: {
    marginBottom: 10,
    height: 260,
  },
  containerBottom: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  containerSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    width: '130',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  orText: {
    marginHorizontal: 10,
    color: '#616466',
    fontSize: 12,
  },
  connectText: {
    color: '#616466',
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonLogin: {
    width: '100%',
    backgroundColor: '#006C97',
    marginTop: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#006C97',
    marginTop: 40,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonRegister: {
    marginTop: -7,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonForgot: {
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonRegisterText: {
    color: '#006C97',
    fontSize: 16,
    marginTop: 5,
  },
  socialIcon: {
    width: 56,
    height: 56,
    marginHorizontal: 5,
  },
  mobileIcon: {
    width: 14,
    height: 20,
    marginLeft: -30,
    tintColor: 'gray',
    marginTop: 20, // You can adjust the color of the icon here
  },
  regIcon: {
    width: 13,
    height: 14,
    marginLeft: -30,
    tintColor: 'gray',
    marginTop: 24, // You can adjust the color of the icon here
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  welcomtextContainer: {
    flex: 1,
    position: 'absolute',
    top: 130,
    height: 50,
    left: 20,
  },
  selectedText: {
    color: '#006C97', // Change color when selected
  },
  selectedSeparator: {
    backgroundColor: '#006C97', // Change color when selected
    height: 2,
    marginRight: 0,
    width: '100%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
    height: 50,
    left: 20,
  },
  viewContainer: {
    flex: 1,
    position: 'absolute',
    top: 320,
    height: '85%',
    left: 40,
    width: '80%',
  },
  viewTextInputContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
  tabContainer: {
    position: 'absolute',
    flex: '1',
    flexDirection: 'row',
    top: 280,
    height: 30,
    left: 20,
  },
  tabContainerSep: {
    height: 1,
    left: 20,
  },
  imageContainer: {
    backgroundColor: 'white',
    marginTop: 300,
    height: 700,
    width: 700,
    borderRadius: 350,
  },
  text: {
    color: '#FF8C6D',
    fontSize: 28,
    fontWeight: 'bold',
    height: 50,
  },
  textAccount: {
    color: '#0D0E11',
    fontSize: 16,
    height: 20,
  },
  textTab: {
    color: '#8F9295',
    fontSize: 14,
    height: 25,
    marginRight: 50,
    textAlign: 'left',
  },
  seperator: {
    backgroundColor: '#8F9295',
    height: 2,
    marginRight: 0,
    width: '100%',
  },
  welcomeText: {
    color: '#8F9295',
    fontSize: 14,
    marginTop: 5,
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    marginTop: 5,
  },
  curveBackGroundWhite: {
    top: 200,
    height: "98%",
    width: "100%",
  },
  backIcon: {
    height: 30,
    width: 20,
    marginRight: 20,
    marginTop: 5,
  },
});
