import React from 'react';
import {Image, Pressable, Alert, StyleSheet, Text, View} from 'react-native';
// import DefaultImage from './../../assets/images/default.png';

function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoBox}>프로필</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxText}>0</Text>
          <Text style={styles.infoBoxText}>팔로워</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxText}>0</Text>
          <Text style={styles.infoBoxText}>팔로잉</Text>
        </View>
        <Pressable
          style={styles.editButton}
          onPress={() => {
            navigation.navigate('Edit');
          }}>
          <Text style={styles.infoBoxText}>수정</Text>
        </Pressable>
      </View>
      <Text style={styles.text} onPress={() => {}}>
        구매한 EAT 딜
      </Text>
      <Text style={styles.text} onPress={() => {}}>
        EAT 딜 입고 알림
      </Text>
      <Text style={styles.text} onPress={() => {}}>
        타임라인
      </Text>
      <Text style={styles.text} onPress={() => {}}>
        가고싶다
      </Text>
      <Text style={styles.text} onPress={() => {}}>
        마이리스트
      </Text>
      <Text style={styles.text} onPress={() => {}}>
        북마크
      </Text>
      <Text style={styles.text} onPress={() => {}}>
        내가 등록한 식당
      </Text>
      <Text style={styles.text} onPress={() => {}}>
        설정
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  info: {
    marginTop: 5,
    marginBottom: 5,
    flex: 2,
    flexDirection: 'row',
  },

  infoBox: {
    flex: 1,
    borderLeftWidth: 0.5,
    borderLeftColor: 'lightgray',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  infoBoxText: {
    color: 'black',
    textAlign: 'center',
  },

  editButton: {
    flex: 1,
    margin: 15,
    borderRadius: 15,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  text: {
    flex: 1,
    color: 'black',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingLeft: 10,

    borderTopWidth: 0.5,
    borderTopColor: 'lightgray',

    backgroundColor: 'white',
  },
});

export default Settings;
