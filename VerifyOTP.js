import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ActivityIndicator, Image, KeyboardAvoidingView } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import axios from 'axios';
import { Bubbles } from 'react-native-loader';
import { requestOtp, verifyOtp } from './redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const VerifyOTP = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(60);
  const [formattedTime, setFormattedTime] = useState('00:00');
  const { params } = route;
  const loginMethod = params?.loginMethod || '';
  const mobile = params?.mobile || '';
  const email = params?.email || '';
  const [loading, setLoading] = useState(false); // State for controlling the loading indicator

 
  const getOTP = () => {
    dispatch(requestOtp(selectedTab === 'Mobile' ? 'mobile' : 'email', selectedTab === 'Mobile' ? mobileValue : emailValue));
  };

  // handleRegister function
const handleRegister = () => {
  setLoading(true);
  dispatch(verifyOtp(email, otp));
};

  // Check if params exist and then extract loginMethod
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    setFormattedTime(
      `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''
      }${remainingSeconds}`
    );
  }, [seconds]);

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const handleVerify = () => {
    // Handle logic for getting OTP
    handleRegister();
  };
  const handleChange = (otp) => {
    setOtp(otp);
  };
  const getAnOTP = () => {
    // Handle logic for getting OTP
    getOTP();
    console.log('Get OTP button pressed');
  };

  return (
    <View style={{ position: 'relative', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#006C97' }}>
      {loading && <Bubbles size={10} color="#FFF" />}
      <ImageBackground
        resizeMode="stretch"
        source={require('./bg.png')}
        style={styles.curveBackGroundWhite}
      />
      <KeyboardAvoidingView style={styles.textContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('./back.png')} // Add your image here
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.text}>Verify OTP</Text>
      </KeyboardAvoidingView>
      <View style={styles.welcomtextContainer}>
        <Text style={styles.welcomeText}>
          {loginMethod == 'email'
            ? 'Verification code has been sent to the email address associated with your account ${email}'
            : 'A one-time password (OTP) has been sent to the mobile number ending in ${mobile}'}
        </Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.headerText}>Enter OTP</Text>
        <View style={styles.viewTextInputContainer}>
          <OTPTextView
            handleTextChange={handleChange}
            containerStyle={{ marginTop: 20 }}
            textInputStyle={{ borderColor: 'gray', borderWidth: 2, borderRadius: 30, }}
            inputCount={6}
            tintColor="#439771"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={[styles.button, otp.length === 6 && styles.buttonActive]} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 15, width: '100%' }}>
          <Image
            source={require('./timer.png')} // Add your timer icon image here
            style={{ width: 32, height: 32, marginRight: 5 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 16, marginRight: 5 }}>{formattedTime}</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.textAccount}>Didn’t receive OTP ?</Text>
        <TouchableOpacity style={styles.buttonRegister} onPress={getAnOTP}>
          <Text style={styles.buttonRegisterText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  containerBottom: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#888888',
    marginTop: 40,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonActive: {
    width: '100%',
    backgroundColor: '#006C97',
    marginTop: 40,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonRegister: {
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
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
  viewTextInputContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    height: 50,
  },
  textAccount: {
    color: '#0D0E11',
    fontSize: 16,
    height: 20,
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'left',
    width: '100%',
  },
  curveBackGroundWhite: {
    top: 200,
    height: "98%",
    width: "100%",
  },
  buttonRegisterText: {
    color: '#006C97',
    fontSize: 16,
    marginTop: -3,
  },
  viewContainer: {
    flex: 1,
    position: 'absolute',
    top: 320,
    height: 220,
    alignItems: 'center',
    width: '95%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
    height: 50,
    left: 20,
  },
  welcomtextContainer: {
    flex: 1,
    position: 'absolute',
    top: 130,
    height: 50,
    left: 20,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
    marginEnd: 20,
  },
  backIcon: {
    height: 20,
    width: 20,
    marginRight: 30,
    marginTop: 5,
  },
});
