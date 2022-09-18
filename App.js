// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import TodoItems from './components/todoItem';
import FormInput from './components/form';




export default function App() {

  const [toDos, setTodos] = useState(
    [

    ]);

  const pressHandler = (key) => {
    setTodos((toDos) => {
      return toDos.filter(todo => {
        return todo.key != key
      })
    })
  }

  const subHandler = (text) => {
    if (text.length > 3) {

      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Failed', `Todos has a min length of 3, you passed in ${text.length}`, [
        { text: 'understood', }
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

      <View style={styles.container}>
        <Header />
        <FormInput subHandler={subHandler} />
        <View style={styles.content}>




          <View style={styles.list}>
            <FlatList

              data={toDos}
              renderItem={({ item }) => {
                return (
                  <TodoItems pressHandler={pressHandler} item={item} />

                )
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

    // <Sandbox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    marginTop: 20,
    padding: 10,
    flex: 1,

    backgroundColor: 'white'
  },
  list: {
    marginTop: 0,
    flex: 1,
  }
});
