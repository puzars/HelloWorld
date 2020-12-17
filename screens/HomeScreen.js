import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  {
    return (
      <View style={{ marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.textHeader}>Hello World from Group 2:</Text>
        <Text style={styles.textHeader}>Pēteris Uzārs!</Text>
        <Text style={styles.textInput}>
          This is my, Pēteris Uzārs, first React Native application!
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 20 }}
            source={{
              uri:
                'https://z-p3-scontent.frix8-1.fna.fbcdn.net/v/t1.0-9/50990867_2018894098226744_7330872131837755392_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=gf2LScYWjNsAX9gWbLr&_nc_ht=z-p3-scontent.frix8-1.fna&oh=0658529b7035b40703970bfe21300504&oe=60029BF0',
            }}
          />
        </View>
        <Button
          style={{ marginTop: 10 }}
          mode="contained"
          color="#3b5998"
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Ionicons name="md-add" size={20} color="white" />
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'stretch',
  },
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'stretch',
  },
});
