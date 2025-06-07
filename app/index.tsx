import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { database } from '../firebaseConfig.js'

export default function HomeScreen() {
  // Replace these values with real-time Firebase data later
  // const waterLevel = 75; // in %
  // const phValue = 7.5;
  // const turbidity = 1; // in NTU

  const [waterLevel, setWaterLevel] = useState(0);
  const [phValue, setPhValue] = useState(0);
  const [turbidity, setTurbidity] = useState(0);

  useEffect(() => {
    // Reference to the sensorData node
    const sensorDataRef = ref(database, 'sensorData');

    // Subscribe to changes
    const unsubscribe = onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setWaterLevel(data.waterLevel);
        setPhValue(data.pH);
        setTurbidity(data.turbidity);
      }
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WATER MONITORING</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Water Level</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{waterLevel}%</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.row}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/0077b6/ph.png' }}
            style={styles.icon}
          />
          <Text style={styles.label}>pH</Text>
          <Text style={styles.value}>{phValue}</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.row}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/0077b6/water.png' }}
            style={styles.icon}
          />
          <Text style={styles.label}>Turbidity</Text>
          <Text style={styles.value}>{turbidity} NTU</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0d47a1',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#1976d2',
  },
  circle: {
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: '#90caf9',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#e3f2fd',
  },
  circleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  line: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: '#0077b6',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#424242',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
});

// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Hello World!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
