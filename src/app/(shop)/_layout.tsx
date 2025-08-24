import { Tabs } from "expo-router"
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import '../../../global.css'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} {...props} />;
}

const TabLayout = () => {
  return (
    // <SafeAreaView edges={['top']} className="flex-1 bg-pink-200">
    <SafeAreaView className="flex-1">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: { 
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
          },
          headerShown: false
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: 'Shop',
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="shopping-cart" />;
            }
          }}
        />
        <Tabs.Screen 
          name="orders" 
          options={{ 
            title: 'Orders',
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" />;
            }
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

export default TabLayout;