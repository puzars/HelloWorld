import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  {
    return (
      <View style={{ marginLeft: 5, marginRight: 5 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 10,
            backgroundColor: '#3b5998',
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              marginTop: 10,
              marginBottom: 10,
            }}
            source={{
              uri:
                'https://z-p3-scontent.frix8-1.fna.fbcdn.net/v/t1.0-9/50990867_2018894098226744_7330872131837755392_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=gf2LScYWjNsAX9gWbLr&_nc_ht=z-p3-scontent.frix8-1.fna&oh=0658529b7035b40703970bfe21300504&oe=60029BF0',
            }}
          />
          <Text style={styles.textHeader}>Pēteris Uzārs</Text>
          <View style={styles.textAlign}>
          <Ionicons name="ios-flag" size={27} color="white" />
          <Text style={styles.textInput}> Riga, Latvia</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 30,
          }}>
          <Text style={styles.textInputDetails}>
            E-mail: peteris.uzars@va.lv
          </Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.textInputDetails}>
              College/University: Vidzeme University of Applied Sciences
            </Text>
            <Text style={styles.textInputDetails}>Year: 1</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'stretch',
    },
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'stretch',
  },
  
  textInputDetails: {
    fontSize: 20,
    marginTop: 2,
    color: 'black',
    alignSelf: 'stretch',
  },
});
