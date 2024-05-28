import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { ScrollView } from 'react-native-gesture-handler';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const LabeledTextField = ({ label, defaultValue }) => {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.textField}
             defaultValue={defaultValue} />
        </View>
    );
};
const ProfileImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const selectImage = () => {
        launchImageLibrary({}, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.assets[0].uri };
            setSelectedImage(source);
          }
        });
      };
return (
    <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
            <Image
                source={selectedImage ? selectedImage : require('./dog.png')}
                style={styles.profileImage}
            />
            <TouchableOpacity style={styles.cameraIconContainer} onPress={selectImage}>
                <Image source={require('./camera.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    </View>
);
}
const ProfileDetail = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };
    return (
        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', position: 'absolute', flex: 1, }}>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={handleBackPress}>
                        <Image
                            source={require('./black-arrow.png')} // Add your image here
                            style={styles.backIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>Tommy detail</Text>
                    <TouchableOpacity onPress={handleBackPress}>
                        <Image
                            source={require('./notification.png')} // Add your image here
                            style={styles.notiIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
            </View>

            <ScrollView style={{ width: '100%', position: 'absolute', top: 100 }}>
                <View style={{ width: '100%', height: 1000 }} >
                    <ProfileImage />
                    <LabeledTextField label="Name" defaultValue="Tommy"/>
                    <LabeledTextField label="Weight" defaultValue="59Kg" />
                    <LabeledTextField label="Age"  defaultValue="49 Years" />
                    <LabeledTextField label="Birthday"  defaultValue="19 Nov 1882"/>
                    <LabeledTextField label="Microship Number"  defaultValue="576757657"/>
                    <Text style={styles.editDetailText}>Edit details</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    textInputContainer: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#616466',
    },
    textField: {
        height: 54,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    imageContainer: {
        position: 'relative',
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
    },
    cameraIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 20,
        padding: 5,
    },
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
        width: 30,
        height: 30,
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
        height: 200,
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
        position: 'absolute',
        top: 50,
        height: 70,
        left: 0,
        width: '90%',
        margin: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        alignItems: 'center',

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
    editDetailText: {
        color: '#006C97',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left',
        margin:20,
        textDecorationLine: 'underline',
    },
    text: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
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
        marginHorizontal: 5,
    },
    notiIcon: {
        height: 20,
        width: 20,
        marginRight: 10,
       
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

export default ProfileDetail;