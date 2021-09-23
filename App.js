import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import CardList from './components/CardList';
import ListModal from './components/ListModal';


export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [lists, setLists] = useState([])
  // const handleReturn = () => {
  //   setListModal(!listModal)
  // }
  console.log(`lists`, lists)
  function remove(list) {
    setLists(lists.filter(l => l !== list));
  }

  return (
    <View style={styles.centeredView}>
      <Button onPress={() => setIsModalVisible(true)} title={'+ Add List'} />
      {lists?.map((list, index) => (
        <CardList lists={list} key={index} remove={() => remove(list)} />
      ))}
      {isModalVisible && (
        <ListModal lists={lists}
          addList={setLists}
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible} />
      )}
      {lists.length > 0 && (
        <TouchableHighlight style={styles.button}
          onPress={() => setLists([])}>
          <Text style={{ color: "white" }}>clear</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  button: {
    backgroundColor: "crimson",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    color: "white"
  }
})

