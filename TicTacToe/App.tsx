import { View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { PropsWithChildren } from "react";

import TicTacToe from './src/TicTacToe/';

export default function App() {
    return (
        <SafeAreaProvider>
            <HookSafeView>
                <TicTacToe />
            </HookSafeView>
        </SafeAreaProvider>
    );
}

function HookSafeView({ children }: PropsWithChildren) {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                backgroundColor: '#f3f3f3'
            }}
        >
            {children}
        </View>
    )
}