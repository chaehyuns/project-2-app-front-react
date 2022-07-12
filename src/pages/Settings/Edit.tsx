import React, {useState, useEffect} from 'react';
import {TextInput, Pressable, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

function Edit() {
  const [email, setEmail] = useState('');
  const [Pwd, setPwd] = useState('');
  const [updatePwd, setUpdatePwd] = useState(Pwd);
  const [editDisplayed, setEditDisplayed] = useState(false);

  useEffect(() => {
    const asynFuc = async () => {
      const response = await axios.post(
        'http://192.249.18.175:80/userAuth/getInfo',
        {
          email: email,
        },
      );
      setEmail(response.data.email);
      setPwd(response.data.password);
    };
    asynFuc();
  }, [editDisplayed]);

  if (editDisplayed) {
    return (
      <View styles={styles.container}>
        <TextInput
          style={styles.text}
          value={updatePwd}
          onChangeText={text => setUpdatePwd(text)}
        />
        <Pressable
          styles={styles.button}
          onPress={async () => {
            await axios.post('http://192.249.18.175:80/userAuth/updatePwd', {
              email: email,
              password: updatePwd,
            });
            setEditDisplayed(false);
          }}>
          완료
        </Pressable>
        <View style={styles.blank}></View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>이름</Text>
        <Text style={styles.text}>{email}</Text>
        <Text
          style={styles.text}
          onPress={() => {
            setEditDisplayed(true);
          }}>
          {Pwd}
        </Text>
        <View style={styles.blank}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
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

  blank: {
    flex: 7,
  },

  button: {
    flex: 1,
    backgroundColor: 'blue',
    color: 'white',
  },
});

export default Edit;
