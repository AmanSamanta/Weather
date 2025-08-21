import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { deviceHeight, deviceWidth } from './Dimension';

export default function Cards({ image, name }) {
  return (
    <View>
      <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={()=>{}}>
        <ImageBackground
          source={image}
          style={{ height: deviceHeight / 4, width: deviceWidth / 2 - 55 }}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={{ position: 'absolute', height: "100%", width: "100%" }}>
            <Text
              style={{
                fontSize: 21,         // ✅ fixed typo fomtSize → fontSize
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center"
              }}
            >
              {}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
