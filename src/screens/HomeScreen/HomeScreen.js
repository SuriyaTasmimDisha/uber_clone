import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import tw from 'twrnc';
import uberLogo from '../../../assets/images/Uber-Logo.png';
import NavOptions from '../../components/NavOptions/NavOptions';
import {styles} from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={uberLogo}
          resizeMode={'contain'}
          style={styles.uberLogo}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) =>{
            console.log(data);
            console.log(details);
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          returnKeyType={'search'}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
