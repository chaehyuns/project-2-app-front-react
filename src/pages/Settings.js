import React, {useState} from 'react';
import {Text, StyleSheet, View, Dimensions, Platform} from 'react-native';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

const {height, width} = Dimensions.get('window');

const Settings = () => {
  const [Todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...Todos, {textValue: text, checked: false}]);
  };

  const onRemove = id => e => {
    setTodos(Todos.filter(Todo => Todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      Todos.map(Todo =>
        Todo.id === id ? {...Todo, checked: !Todo.checked} : Todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>도장 깨기👊🏻</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList Todos={Todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2dcbb',
    padding: 50,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '900',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
          height: 30,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

export default Settings;
