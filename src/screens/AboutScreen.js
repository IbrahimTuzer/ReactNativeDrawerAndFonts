// AboutScreen.js
import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import { Images } from '../../fakerData';

const AboutScreen = ({ navigation }) => {

  // Resim öğelerini yuvarlak hale getiren işlev
  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Images}
        numColumns={2} // İki sütun olacak şekilde ayarlandı
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderImageItem}
        keyExtractor={item => item.id}
      />
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
}

const imageSize = 140; // Sabit genişlik değeri

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    padding: 5,
    aspectRatio: 1, // Resimlerin yuvarlak olmasını sağlamak için
    borderRadius: imageSize / 2, // Yuvarlak border için
    overflow: 'hidden', // Yuvarlak border için
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 1, // Resimlerin yuvarlak olmasını sağlamak için
    borderRadius: imageSize / 2, // Yuvarlak border için
  },
});

export default AboutScreen;
