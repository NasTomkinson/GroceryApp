import { View, Image } from 'react-native'
import { Link } from 'expo-router'

import { ThemedButton, ThemedText, ThemedImage } from '@theme/index.tsx'

interface RecipeProps {
    data: Object,
    style?: Object
}

export default function ListItem_Recipe ({ data, style }: RecipeProps ) {

    return (
        <Link href={{ 
                pathname: `/recipe/${data?.attributes?.slug}`, 
                params: { 
                    id: data?.id
                } 
            }} >
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 8, marginTop: 16 }}> 
                <Image 
                source={{ uri: `http://localhost:1337${data?.attributes?.thumbnail?.data?.attributes?.url}` }} 
                style={{ width: 90, aspectRatio: "1/1", borderRadius: 4}}
                />
                <View> 
                <ThemedText family="secondary" size="2xl"> 
                    { data?.attributes?.title } 
                </ThemedText>              
                <ThemedText family="primary" size="base" style={{ marginTop: 8 }}> 
                    { data?.attributes?.ingredients.length}
                </ThemedText>              
                </View>
            </View> 
        </Link>
    )
}