import React, {useState, useCallback} from 'react';
import codePush from 'react-native-code-push';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onHandleIncrease = useCallback(
    () => setCounter(counter + 1),
    [counter],
  );

  return (
    <SafeAreaView style={{...backgroundStyle, flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <TouchableOpacity
          onPress={onHandleIncrease}
          style={{
            minWidth: 100,
            backgroundColor: '#eb926c',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#e85f25',
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>Somar</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 42}}>{counter}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
})(App);
