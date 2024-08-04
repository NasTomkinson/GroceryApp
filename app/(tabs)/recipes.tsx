import { View, Image } from 'react-native';
import { Link } from 'expo-router'

import { gql, useQuery} from '@apollo/client'

import Container from '@components/container';
import { ThemedText, ThemedImage } from '@components/theme';
import ListItem_Recipe from '@components/lists/recipe';

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

  return (
    <Container
      style={{
        flex: 1,
        flexDirection: "column"
      }}
      scrollable={true}
    >
      {/* Display all recipes */}
      { data?.recipes?.data.map((recipe: object) => <ListItem_Recipe data={ recipe } /> )}
    </Container>
  );
}
