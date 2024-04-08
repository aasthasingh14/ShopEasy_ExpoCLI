import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'   
import ShopList from '../components/ShopList'

const ShopScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ShopList navigation={navigation}/>
    </View>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Change the background color as per your preference
    paddingHorizontal: 20, // Add some horizontal padding
    paddingTop: 20, // Add some top padding
  },
});
