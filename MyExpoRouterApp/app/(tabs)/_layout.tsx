import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'orange', headerShown: false , tabBarStyle: { backgroundColor: '#2f3a52', paddingBottom: 5, paddingTop: 5, borderTopWidth: 0 } }} sceneContainerStyle= {{ backgroundColor: '#181e2b' }} >
            <Tabs.Screen
                name= "index"
                options={{ 
                    title: 'Home', 
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name='home' color={color} /> ,
                }} 
            />
            <Tabs.Screen 
                name= "teste"
                options= {{
                    title: 'Test',
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name='cog' color={color} />,
                }}
            />
            <Tabs.Screen
                name= "settings"
                options={{ 
                    title: 'Settings', 
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name='bitcoin' color={color} /> ,
                }} 
            />
            <Tabs.Screen
                name= "profile" 
                options={{ 
                    title: 'Profile', 
                    tabBarIcon: ({ color }) => <FontAwesome size={20} name='address-card' color={color} /> ,
                }} 
            />
        </Tabs>
    )
}