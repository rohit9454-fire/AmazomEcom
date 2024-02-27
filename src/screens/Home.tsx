import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//React Navigation Native Stack
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import ProductItems from '../components/ProductItems';
import Separator from '../components/Separator';

//Data
import { PRODUCTS_LIST } from '../data/constant';

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">


const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={PRODUCTS_LIST}
                keyExtractor={item => item?.id}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => navigation.navigate('Details', { product: item })}>
                        <ProductItems product={item} />
                    </Pressable>
                )}
                ItemSeparatorComponent={Separator}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#FFFFFF',
    },
})