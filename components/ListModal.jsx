import React, { useState } from 'react'
import { View, Modal, TextInput, StyleSheet, Button } from 'react-native'

export default function ListModal({ lists, addList, isVisible, onClose }) {
    const [name, setName] = useState("")
    const [descrip, setDescrip] = useState("")

    const addToList = () => {
        // addList({ name: [...name], description: [...descrip] })
        addList([...lists, { name, descrip }]);
        onClose();
    }
    // console.log(`name`, name)
    // console.log(`descrip`, descrip)
    return (

        <Modal visible={isVisible}
            onRequestClose={onClose}
            animationType="slide">
            <View style={style.container}>
                <TextInput value={name}
                    style={style.input}
                    onChangeText={setName}
                    placeholder='saisir le nom de la liste' />
                <TextInput value={descrip}
                    style={style.input}
                    onChangeText={setDescrip}
                    placeholder='saisir une description' />
                <Button title='submit'
                    onPress={addToList}
                    disabled={name.length < 5 || descrip.length < 5} />
            </View>
        </Modal>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    input: {
        height: 40,
        width: "90%",
        margin: "auto",
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
    }
})
