import { View } from 'react-native'
import { useState } from 'react'
import { ThemedText, ThemedSwitch } from '@components/theme'

interface IngreidentProps {
    item: {
        ingredient: string
    }
}

export default function ListItem_Ingredient ({item}: IngreidentProps) {

    const [checkIngredient, setCheckIngredient] = useState(false) 
    
    function handleCheckIngredient (value) {
        setCheckIngredient(value)
    }

    return (
        <View style={{ paddingVertical: 4, flexDirection: "row" }}>
            <ThemedSwitch isEnabled={ checkIngredient } changeHandler={ (value: boolean) => handleCheckIngredient(value)}  />
            <ThemedText> { item?.ingredient } </ThemedText>
        </View>
    )
}