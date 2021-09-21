import React, { useState } from 'react'
import { View, Text, Modal, TextInput, StyleSheet, Button } from 'react-native'

export default function ListModal({ addList }) {
    const [name, setName] = useState("")
    const [descrip, setDescrip] = useState("")

    const addToList = () => {
        // addList({ name: [...name], description: [...descrip] })
        addList({ name: name, description: descrip })

    }
    // console.log(`name`, name)
    // console.log(`descrip`, descrip)
    return (
        <View>
            <Text>Hello from List Modal</Text>
            <Modal>
                <TextInput value={name}
                    style={style.input}
                    onChangeText={setName}
                    placeholder='saisir le nom de la liste' />
                <TextInput value={descrip}
                    style={style.input}
                    onChangeText={setDescrip}
                    placeholder='saisir une description' />
                <Button title='add to list' onPress={addToList} />
            </Modal>
        </View>

    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})
