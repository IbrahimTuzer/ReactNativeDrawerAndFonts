import { faker } from '@faker-js/faker';
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const DATA = Array(20)
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatarLegacy(),
    email: faker.internet.email()
  }));

const ContactScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  email: {
    fontSize: 16,
  },
});

export default ContactScreen;
