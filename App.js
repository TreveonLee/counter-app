// App.js - Counter App for CS50 Mobile Development
// This component displays a counter and handles user interactions
// Built with React Native and Expo

import React, { useState } from ‘react’;
import {
StyleSheet,
Text,
View,
TouchableOpacity,
StatusBar,
} from ‘react-native’;

export default function App() {
// useState stores the current counter value, starting at 0
const [count, setCount] = useState(0);

// useState stores a message to display for milestones or warnings
const [message, setMessage] = useState(‘Tap + to start counting!’);

// This function adds 1 to the counter
const increment = () => {
const newCount = count + 1;
setCount(newCount);

```
// Check for milestone messages at every multiple of 10
if (newCount % 10 === 0) {
  setMessage(`🎉 You reached ${newCount}!`);
} else {
  setMessage('');
}
```

};

// This function subtracts 1 from the counter
// Prevents the counter from going below 0
const decrement = () => {
if (count <= 0) {
setMessage(“⚠️ Counter can’t go below 0!”);
return;
}
const newCount = count - 1;
setCount(newCount);

```
// Show a message when counter reaches 0
if (newCount === 0) {
  setMessage('Counter is at zero.');
} else {
  setMessage('');
}
```

};

// This function resets the counter to 0
const reset = () => {
setCount(0);
setMessage(‘Counter has been reset.’);
};

// Helper to pick a color based on the count value
const getCountColor = () => {
if (count === 0) return ‘#8E8E93’;
if (count >= 10) return ‘#34C759’;
return ‘#007AFF’;
};

return (
<View style={styles.container}>
{/* Status bar styling */}
<StatusBar barStyle="dark-content" />

```
  {/* App title displayed at the top */}
  <Text style={styles.title}>Counter App</Text>
  <Text style={styles.subtitle}>CS50 Mobile — React Native</Text>

  {/* Number showing the current count value */}
  <View style={styles.countContainer}>
    <Text style={[styles.count, { color: getCountColor() }]}>
      {count}
    </Text>
  </View>

  {/* Display a message for milestones or warnings */}
  <Text style={styles.message}>{message}</Text>

  {/* Row of buttons for increment, decrement, and reset */}
  <View style={styles.buttonRow}>
    {/* Button to decrement the counter (−1) */}
    <TouchableOpacity
      style={[styles.button, styles.decrementButton]}
      onPress={decrement}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>−</Text>
    </TouchableOpacity>

    {/* Button to reset the counter back to 0 */}
    <TouchableOpacity
      style={[styles.button, styles.resetButton]}
      onPress={reset}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, styles.resetButtonText]}>
        Reset
      </Text>
    </TouchableOpacity>

    {/* Button to increment the counter (+1) */}
    <TouchableOpacity
      style={[styles.button, styles.incrementButton]}
      onPress={increment}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>
</View>
```

);
}

// StyleSheet for basic layout and styling
const styles = StyleSheet.create({
// Main container: centers everything on screen
container: {
flex: 1,
backgroundColor: ‘#F2F2F7’,
alignItems: ‘center’,
justifyContent: ‘center’,
paddingHorizontal: 24,
},

// App title text
title: {
fontSize: 32,
fontWeight: ‘700’,
color: ‘#1C1C1E’,
marginBottom: 4,
},

// Subtitle below the title
subtitle: {
fontSize: 14,
color: ‘#8E8E93’,
marginBottom: 48,
},

// Container around the count number
countContainer: {
backgroundColor: ‘#FFFFFF’,
width: 180,
height: 180,
borderRadius: 90,
alignItems: ‘center’,
justifyContent: ‘center’,
shadowColor: ‘#000’,
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 8,
elevation: 4,
marginBottom: 24,
},

// The large count number display
count: {
fontSize: 64,
fontWeight: ‘700’,
},

// Milestone or warning message text
message: {
fontSize: 16,
color: ‘#636366’,
height: 24,
marginBottom: 48,
textAlign: ‘center’,
},

// Horizontal row holding the three buttons
buttonRow: {
flexDirection: ‘row’,
alignItems: ‘center’,
gap: 16,
},

// Shared button style
button: {
width: 72,
height: 72,
borderRadius: 36,
alignItems: ‘center’,
justifyContent: ‘center’,
shadowColor: ‘#000’,
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.15,
shadowRadius: 4,
elevation: 3,
},

// Decrement button color
decrementButton: {
backgroundColor: ‘#FF3B30’,
},

// Increment button color
incrementButton: {
backgroundColor: ‘#34C759’,
},

// Reset button style (wider, different shape)
resetButton: {
backgroundColor: ‘#FFFFFF’,
width: 100,
borderRadius: 36,
borderWidth: 2,
borderColor: ‘#D1D1D6’,
},

// Text inside +/− buttons
buttonText: {
fontSize: 32,
fontWeight: ‘600’,
color: ‘#FFFFFF’,
},

// Reset button text color override
resetButtonText: {
fontSize: 18,
color: ‘#636366’,
},
});
