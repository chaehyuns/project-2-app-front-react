import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
function TodoListItem({textValue, id, checked, onRemove, onToggle}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Text>📌</Text>
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text onPress={onRemove(id)}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 70,
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#3867d6',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 10,
  },
  completeCircle: {
    marginRight: 10,
    marginLeft: 10,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
