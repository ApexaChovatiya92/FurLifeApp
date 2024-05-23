import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { ScrollView } from 'react-native-gesture-handler';

const CustomComponent = ({ iconSource, text }) => {
  return (
    <View style={styles.customcontainer}>
      <View style={styles.innerContainer}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.customtext}>{text}</Text>
        <Image source={require('./left-arrow.png')} style={styles.arrowIcon} />
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const Profile = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const handleUserDetail = () => {
    navigation.navigate('ProfileDetail'); // Navigate back to the previous screen
  };
  const handleVac = () => {
    navigation.navigate('Vaccination'); // Navigate back to the previous screen
  };
  const handleSettings = () => {
    navigation.navigate('Setting'); // Navigate back to the previous screen
  };
  return (
    <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', position: 'absolute', flex: 1, }}>
      <Image
        source={require('./dog.png')} // Add your image here
        style={styles.dogIcon}
        resizeMode="stretch"
      />
      <ImageBackground
        resizeMode="stretch"
        source={require('./bg.png')}
        style={styles.curveBackGroundWhite}
      />
      <View style={styles.viewHeader}>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require('./black-arrow.png')} // Add your image here
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.text}>Profile</Text>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require('./notification.png')} // Add your image here
              style={styles.notiIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ width: '100%', position: 'absolute', top: 350 }}>
        <View style={{ width: '100%', height: 1000 }} >
          <View style={styles.viewNameHeader}>
            <Text style={styles.profiletext}>Tommy</Text>
            <Text style={styles.profileBottomtext}>Labrador Retriever</Text>
          </View>
          <View style={styles.viewDataHeader}>
            <TouchableOpacity onPress={handleUserDetail}>
              <CustomComponent
                iconSource={require('./user-detail.png')}
                text="Tommy Details"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleVac}>
              <CustomComponent
                iconSource={require('./vaccination.png')}
                text="Vaccination"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSettings}>
              <CustomComponent
                iconSource={require('./settings.png')}
                text="Settings"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewBannerHeader}>
            <Image
              source={require('./bg-dog.png')} // Add your image here
              style={styles.dogIcon}
              resizeMode="stretch"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  customcontainer: {
    height: 67,
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '100%',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 45,
    height: 45,
    marginBottom: 10,
  },
  customtext: {
    color: '#000000',
    fontSize: 18,
    height: 50,
    textAlign: 'left',
    width: '80%',
    top: 10,
  },
  arrowIcon: {
    width: 15,
    height: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  viewNameHeader: {
    position: 'absolute',
    width: '90%',
    top: 0,
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    height: 80,
  },
  viewDataHeader: {
    position: 'absolute',
    width: '100%',
    top: 70,
    padding: 15,
    alignItems: 'center',
    height: 400,
  },
  viewBannerHeader: {
    position: 'absolute',
    width: '100%',
    top: 180,
    alignItems: 'center',
    height: 300,
  },
  viewHeader: {
    position: 'absolute',
    width: '90%',
    backgroundColor: '#FFFFFF',
    top: 50,
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    height: 80,
  },
  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    top: 10,
    height: 50,
    left: 0,
    width: '100%',
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
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    textAlign: 'left',
    top: 2,
  },
  profiletext: {
    color: '#006C97',
    fontSize: 25,
    fontWeight: 'bold',
    height: 30,
    textAlign: 'center',
    top: 10,
  },
  profileBottomtext: {
    color: '#8F9295',
    fontSize: 16,
    height: 20,
    textAlign: 'center',
    top: 10,
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    marginTop: 5,
  },
  curveBackGroundWhite: {
    marginTop: 700,
    height: "98%",
    width: "100%",
  },
  backIcon: {
    height: 40,
    width: 30,
    marginRight: 20,
    top: -5,
  },
  notiIcon: {
    height: 40,
    width: 30,
    marginRight: 20,
    top: -5,
  },
  dogIcon: {
    position: 'absolute',
    height: 300,
    width: 300,
    top: 130,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

export default Profile;