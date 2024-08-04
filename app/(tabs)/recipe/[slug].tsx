import { ThemedText, ThemedSwitch } from "@/components/theme";
import { View, Image, FlatList } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { useQuery, gql } from '@apollo/client'

import Container from "@/components/container";
import ListItem_Ingredient from "@/components/lists/ingreident";

const RECIPE = gql`
    query Recipe ($id: ID){
        recipe( id: $id ) {
            data {
                id
                attributes {
                    title
                    description
                    slug
                    ingredients {
                        id 
                        ingredient
                        measurement
                        unit
                    }
                    thumbnail {
                        data {
                            attributes {
                                alternativeText
                                width
                                height
                                url
                            }
                        }
                    }
                    method {
                        id
                        stepMethod
                        stepThumbnail {
                            data {
                                attributes {
                                    alternativeText
                                    width
                                    height
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`


export default function Recipe () {

    const { id } = useLocalSearchParams();

    const { loading, error, data } = useQuery(RECIPE, {
        variables: {id: id}
    });
    
    if(loading) return <View> Loading </View>
    if(error) return <View> error </View>

    console.log(data)

    return (
        <Container style={{ flex: 1, marginVertical: 32}}>
            <Image 
                source={{ uri: `http://localhost:1337${data?.recipe?.data?.attributes?.thumbnail?.data?.attributes?.url}` }} 
                style={{ aspectRatio: "16/9", borderRadius: 0}}
            />
            <ThemedText family="secondary" size="4xl" style={{ marginTop: 16}}> 
                {data?.recipe?.data?.attributes?.title} 
            </ThemedText>
            <ThemedText style={{ marginTop: 8 }}> 
                {data?.recipe?.data?.attributes?.description} 
            </ThemedText>                    

            <ThemedText style={{ marginTop: 16 }} family="secondary" size="2xl"> 
                Ingredients
            </ThemedText>
            <View> 
                <FlatList 
                    style={{ marginTop: 16 }}
                    data={ data?.recipe?.data?.attributes?.ingredients }
                    numColumns={1}
                    renderItem={
                        ({item}: Object) => ( <ListItem_Ingredient item={item} />)
                    }
                />
            </View>

            <ThemedText style={{ marginTop: 16 }} family="secondary" size="2xl"> 
                Method
            </ThemedText>
            <View> 
                <FlatList 
                    style={{ marginTop: 16 }}
                    data={ data?.recipe?.data?.attributes?.method }
                    numColumns={1}
                    renderItem={
                        ({item, index}: any) => ( 
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginVertical: 16}}> 
                                <ThemedText size="4xl" family="secondary" style={{ lineHeight: 0}}> 
                                    {index + 1} 
                                </ThemedText>
                                <ThemedText>
                                    {item.stepMethod} 
                                </ThemedText>
                            </View>
                        )
                    }
                />
            </View>
        </Container>
    )
}