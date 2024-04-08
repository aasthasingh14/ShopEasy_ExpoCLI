import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import products from '../data/shop.json'

const ShopList = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => { navigation.navigate('DetailOfProduct', { product: item }) }}
              style={styles.itemContainer}
            >
              <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  )
}

export default ShopList

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
  },
})
