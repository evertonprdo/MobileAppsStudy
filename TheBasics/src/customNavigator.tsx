import * as React from 'react';
import { View, Text, Pressable, StyleProp, ViewStyle, StyleSheet, } from 'react-native';
import { createNavigatorFactory, DefaultNavigatorOptions, ParamListBase, CommonActions, TabActionHelpers, TabNavigationState, TabRouter, TabRouterOptions, useNavigationBuilder, } from '@react-navigation/native';

//React Navigation Custom Navigator Example

// Props accepted by the view
type TabNavigationConfig = {
    tabBarStyle: StyleProp<ViewStyle>;
    contentStyle: StyleProp<ViewStyle>;
};

// Supported screen options
type TabNavigationOptions = {
    title?: string;
};

// Map of event name and the type of data (in event.data)
//
// canPreventDefault: true adds the defaultPrevented property to the
// emitted events.
type TabNavigationEventMap = {
    tabPress: {
        data: { isAlreadyFocused: boolean };
        canPreventDefault: true;
    };
};

// The props accepted by the component is a combination of 3 things
type Props = DefaultNavigatorOptions< ParamListBase, TabNavigationState<ParamListBase>, TabNavigationOptions, TabNavigationEventMap > & TabRouterOptions & TabNavigationConfig;
type NavigatorProps = Omit<Props, 'contentStyle' | 'tabBarStyle'>

function TabNavigator({ initialRouteName, children, screenOptions }: NavigatorProps) {
    const { state, navigation, descriptors, NavigationContent } = useNavigationBuilder< TabNavigationState<ParamListBase>, TabRouterOptions, TabActionHelpers<ParamListBase>, TabNavigationOptions, TabNavigationEventMap>(TabRouter, { children, screenOptions, initialRouteName, });
    console.log('Renderizou');
    
    return (
        <NavigationContent>
            <View style= {{flex: 1, flexDirection: 'column-reverse'}}>
                <View style={[{ flexDirection: 'row', padding: 10, backgroundColor: '#ccc' }]}>
                    {state.routes.map((route, index) => (
                        <Pressable
                            key={route.key}
                            onPress={() => {
                                const isFocused = state.index === index;
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                    data: {
                                        isAlreadyFocused: isFocused,
                                    },
                                });
                                if (!isFocused && !event.defaultPrevented) {
                                    navigation.dispatch({
                                        ...CommonActions.navigate(route),
                                        target: state.key,
                                    });
                                }
                            }}
                            style={{ flex: 1 }}
                        >
                            <Text>{descriptors[route.key].options.title ?? route.name}</Text>
                        </Pressable>
                    ))}
                </View>
                <View style={[{ flex: 1 }]}>
                    {state.routes.map((route, i) => {
                        return (
                            <View
                                key={route.key}
                                style={[
                                    StyleSheet.absoluteFill,
                                    { display: i === state.index ? 'flex' : 'none' },
                                ]}
                            >
                                { descriptors[route.key].render() }
                            </View>
                        );
                    })}
                </View>
            </View>
        </NavigationContent>
    );
}

export default createNavigatorFactory< TabNavigationState<ParamListBase>, TabNavigationOptions, TabNavigationEventMap, typeof TabNavigator >(TabNavigator);