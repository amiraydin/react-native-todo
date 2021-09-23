import React from 'react'
import { Text, Pressable } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default function CardList({ lists, remove }) {
    return (
        <Card>
            <Pressable onPress={remove}>
                <Icon name="close" color="crimson" />
            </Pressable>
            <Card.Title>{lists.name}</Card.Title>
            <Card.Divider />
            <Text>
                {lists.descrip}
            </Text>
        </Card>
    )
}
