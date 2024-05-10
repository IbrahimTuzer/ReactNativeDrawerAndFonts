// AboutScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Screen</Text>
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
}

export default AboutScreen;
