import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function App() {
    return (
        <WebView
            style={styles.container}
            source={{ html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/2pvjRz2TOv0" frameborder="0" autoplay: clipboard-write; encrypted-media></iframe>' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight,
        margin: -3
    },
});