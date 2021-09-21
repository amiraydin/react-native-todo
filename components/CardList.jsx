import React from 'react'
import { View, Text } from 'react-native'

export default function CardList({ lists }) {
    return (
        <View>
            <Text>
                {lists.name}
                {lists.description}
            </Text>
        </View>
    )
}
