import { Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function Recipes() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/"> Index </Link>
    </View>
  );
}
