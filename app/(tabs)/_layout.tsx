import { Tabs } from 'expo-router'

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }}/>
            <Tabs.Screen name="recipes" options={{ title: "My Recipes" }}/>
            <Tabs.Screen name="recipe/[slug]" options={{  headerShown: false, title: "Recipes" }}/>
        </Tabs>
    )
}