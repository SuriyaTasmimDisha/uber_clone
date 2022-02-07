import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import UberCar from '../../../assets/images/UberX.png';
import UberFood from '../../../assets/images/food_logo.png';
import {styles} from './styles';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: UberCar,
    screen: 'MapScreen',
  },
  {
    id: '124',
    title: 'Order food',
    image: UberFood,
    screen: 'EatScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              source={item.image}
              resizeMode={'contain'}
              style={styles.navPic}
            />
          </View>
          <Text style={tw`text-black`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-9 mt-4`}
            color="white"
            name="arrowright"
            size={20}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
