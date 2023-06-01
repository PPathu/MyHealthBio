import * as React from 'react';
import {View, Text} from 'react-native';

export default function Feed({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
            onPress={() => navigation.navigator('Home')}
            style={{fontSize: 26, fontWeight: 'bold', }}> Feed</Text>
            </View>
    )
}