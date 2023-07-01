import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  {Todo} from '../pages/todo'
import {Made} from '../pages/Made'
const {Navigator, Screen}= createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name='Lista de tarefas' component={Todo} options={{ headerTitleAlign:'center', tabBarLabel: 'Lista de tarefas', tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="clipboard-list-outline" color={color} size={size} />),}}/>
                <Tab.Screen name='Histórico de taresfas' component={Made} options={{headerTitleAlign:'center', tabBarLabel: 'Lista de tarefas', tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="history" color={color} size={size} />),}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
} 