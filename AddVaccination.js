import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { ScrollView } from 'react-native-gesture-handler';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import VaccinListPopup from './VaccinListPopup';
import CalenderPopup from './CalenderPopup';
const BottomButton = ({ onPress, title }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};
const LabeledTextField = ({ label, defaultValue }) => {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.viewTextInputContainer}>
                <TextInput style={styles.textField}
                    defaultValue={defaultValue} />
            </View>
        </View>
    );
};
const LabeledRightImageTextField = ({ label, defaultValue, icon , openPopup}) => {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.viewTextInputContainer}>
            <TouchableOpacity style={styles.textField} onPress={openPopup}>
              <Text style={styles.labelVaccine}>{defaultValue}</Text>
            </TouchableOpacity>
                {icon && <Image source={icon} style={styles.icon} />}
            </View>
        </View>
    );
};

const ImageUpload = ({ source }) => {
    return (
      <View style={styles.viewUploadContainer}>
        {source ? (
          <Image source={source} style={styles.selectedImage} />
        ) : (
          <>
            <Image source={require('./placeholder.png')} style={styles.uploadIcon} />
            <Text style={styles.labelUpload}>Drop image here, or browse</Text>
          </>
        )}
      </View>
    );
  };
  
const AddVaccination = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPopupVissible, setPopupVissible] = useState(false);
    const [isCalPopupVissible, setCalPopupVissible] = useState(false);
    const [vaccineValue, setVaccineValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const NotesComponent = ({ label }) => {
        return (
            <View style={styles.noteInputContainer}>
                <Text style={styles.label}>{label}</Text>
                <TouchableOpacity onPress={handleUploadPhotoPress} style={styles.viewNoteContainer}>
                    <View style={styles.viewNContainer}>
                    <ImageUpload source={selectedImage} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    const navigation = useNavigation();
    const handleAddVaccinationPress = () => {
    };

    const handleClosePopup  = (selectedDisease) => {
        setVaccineValue(selectedDisease)
        setPopupVissible(false)
    };

    const handleCalenderClosePopup  = (date) => {
        setSelectedDate(date)
        setCalPopupVissible(false)
    };

    const handleCalenderpenPopup  = (date) => {
        setCalPopupVissible(true)
    };
    
    const handleOpenPopup = () => {
        setPopupVissible(true)
    };

    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    const handleUploadPhotoPress = () => {
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
        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', position: 'absolute', flex: 1, }}>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image
                        source={require('./black-arrow.png')} // Add your image here
                        style={styles.backIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Add Vaccination</Text>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image
                        source={require('./notification.png')} // Add your image here
                        style={styles.notiIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%', position: 'absolute', top: 150 }}>
                <View style={{ width: '100%', height: 1000 }} >
                    <LabeledRightImageTextField label="Vaccine" defaultValue={vaccineValue} icon={require('./down-arrow.png')} openPopup={handleOpenPopup}/>
                    <LabeledTextField label="Others - Please Specify " defaultValue="" />
                    <LabeledRightImageTextField label="Date" defaultValue={selectedDate} icon={require('./cale.png')}  openPopup={handleCalenderpenPopup}/>
                    <LabeledTextField label="Clinic" defaultValue="" />
                    <NotesComponent label="Additional notes" />
                </View>
                {
                isPopupVissible && (
                    <VaccinListPopup isVisible={isPopupVissible} onClose={handleClosePopup} />)
                 }
                 {
                isCalPopupVissible && (
                    <CalenderPopup isVisible={isCalPopupVissible} onClose={handleCalenderClosePopup} />)
                 }
            </ScrollView>
            <BottomButton onPress={handleAddVaccinationPress} title={'Add Vaccination'} />
        </View>
    );
}

const styles = StyleSheet.create({
    textInputContainer: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 80,
    },
    noteInputContainer: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 130,
    },
    vacContainer: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 80,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#616466',
    },
    labelUpload: {
        fontSize: 16,
        color: '#006C97',
        height: 20,
    },
    labelVaccine: {
        fontSize: 16,
        color: '#000000',
        marginTop: 15,
        marginRight: 30,
    },
    textField: {
        height: 54,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
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
        width: 14,
        height: 15,
        marginLeft: -30,
        tintColor: 'gray',
        marginTop: 20,
    },
    uploadIcon: {
        width: 40,
        height: 30,
        marginLeft: 10,
        marginRight: 5,
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
        left: 20,
        width: '90%',
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
        height: 20,
        width: '100%',
    },
    viewNoteContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
    },
    viewNContainer: {
        height: 100,
        width: '100%', 
        alignItems: 'center',
        marginTop: -23,
        marginLeft: 10,
    },
    viewUploadContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        paddingTop: 50,
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
        margin: 20,
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
    buttonContainer: {
        position: 'relative',
        top: 750,
        width: '100%',
        height: 40,
    },
    button: {
        backgroundColor: '#006C97',
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedImage: {
        width: 90,
        height: 90,
      },
});

export default AddVaccination;