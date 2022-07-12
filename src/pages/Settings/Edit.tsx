import React, {useState, useEffect} from 'react';
import {TextInput, Pressable, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

function Edit(props) {
  const [email, setEmail] = useState('');
  const [Pwd, setPwd] = useState('');
  const [updatePwd, setUpdatePwd] = useState(Pwd);
  const [editDisplayed, setEditDisplayed] = useState(false);

  useEffect(() => {
    if (!editDisplayed) {
      const asynFuc = async () => {
        const response = await axios.post(
          'http://192.249.18.175:80/userAuth/getInfo',
          {
            email: props.email,
          },
        );
        setEmail(response.data.email);
        setPwd(response.data.password);
      };
      asynFuc();
    }
  }, [editDisplayed]);

  if (editDisplayed) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>비밀번호</Text>
        <TextInput
          style={styles.text}
          value={updatePwd}
          onChangeText={text => setUpdatePwd(text.trim())}
          placeholder="새로운 비밀번호를 입력해주세요"
          placeholderTextColor="#666"
        />
        <View style={styles.blank}></View>
        <Pressable
          style={styles.button}
          onPress={async () => {
            await axios.post('http://192.249.18.175:80/userAuth/updatePwd', {
              email: email,
              password: updatePwd,
            });
            setEditDisplayed(false);
          }}>
          <Text>완료</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>이름</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{Pwd}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            setEditDisplayed(true);
          }}>
          <Text>비밀번호 변경</Text>
        </Pressable>
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

  textInput: {
    flex: 0.5,
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
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Edit;
