import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { deviceHeight, deviceWidth } from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Card';

export default function Home() {
  const [city, setCity] = useState('');

  const cities = [
    { 
      image: require('../assets/delhi.jpg'),
      name: "Beautiful Place"
    },
    { 
      image: require('../assets/kolkata.jpg'),
      name: "gujrat Place"
    },
    { 
      image: require('../assets/night.jpg'),
      name: "kolkata Place"
    },
    { 
      image: require('../assets/OIP.jpg'),
      name: "ahmedabad Place"
    },
    { 
      image: require('../assets/ooo.jpg'),
      name: "delhi Place"
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Online background image */}
      <ImageBackground
        source={{
          uri: 'https://wallpaperaccess.com/full/4688756.jpg',
        }}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Icon name="menu" size={30} color="red" />

          {/* Online profile image */}
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg',
            }}
            style={{
              width: 46,
              height: 46,
              borderRadius: 50,
              marginLeft: 290,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: 'blue', marginTop: 20 }}>
            Weather Forcust
          </Text>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
            Search the city by
          </Text>

          {/* Search Box */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              marginTop: 16,
            }}
          >
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: 'white' }}
            />
            <TouchableOpacity onPress={() => {}}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 30,
              color: 'red',
              paddingHorizontal: 10,
              fontWeight: 'bold',
              marginTop: 200,
              marginBottom: 8,
            }}
          >
            Location
          </Text>

        
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <View>
                <Cards name={item.name} image={item.image} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()} // ✅ added keyExtractor to avoid warnings
          />
        </View>
      </View>
    </View>
  );
}
