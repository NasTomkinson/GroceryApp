import { View, Image } from 'react-native';
import { Link } from 'expo-router'

import { gql, useQuery} from '@apollo/client'

import ThemedText from '@/components/theme/typography';
import Container from '@/components/container';

const RECIPES = gql`
  query Recipes {
    recipes {
      data {
        id
        attributes {
            title
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
        }
      }
    }
  }
`

export default function Recipes() {

  const { loading, error, data } = useQuery(RECIPES)

  if(loading) return <View> Loading </View>
  if(error) return <View> error </View>

  console.log(data)

  return (
    <Container
      style={{
        flex: 1,
        flexDirection: "column"
      }}
      scrollable={true}
    >
      { data?.recipes?.data.map((recipe) => {
        return (
          <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 8, marginTop: 16 }}> 
            <Image 
              source={{ uri: `http://localhost:1337${recipe?.attributes?.thumbnail?.data?.attributes?.url}` }} 
              style={{ width: 90, aspectRatio: "1/1", borderRadius: 4}}
            />
            <View> 
              <ThemedText family="secondary" size="2xl"> 
                { recipe?.attributes?.title } 
              </ThemedText>              
              <ThemedText family="primary" size="base" style={{ marginTop: 8}}> 
                Ingredients: 10
              </ThemedText>              
            </View>

          </View> 
        )
      })}
    </Container>
  );
}
