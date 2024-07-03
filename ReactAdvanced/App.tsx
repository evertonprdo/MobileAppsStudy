import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationProvider from './src/Root/Navigation/NavigationProvider';
import Navigation from './src/Root/Navigation';

export default function App() {
    return (
        <SafeAreaProvider style= {{backgroundColor: '#1d2b2b'}}>
            <NavigationProvider>
                <Navigation />
            </NavigationProvider>
        </SafeAreaProvider>
    )
}