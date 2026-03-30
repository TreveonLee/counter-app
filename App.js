// App.js - Counter App for CS50 Mobile Development
// This component displays the counter and handles user interactions
// Built with React Native and Expo

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  // useState stores the current counter value
  const [count, setCount] = useState(0);

  // useState stores a feedback message for the user
  const [message, setMessage] = useState('Tap + to start counting!');

  // This function adds 1 to the counter
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Display a celebration message when the counter reaches 10
    if (newCount === 10) {
      setMessage('Yay, You\'ve reached 10!');
    } else if (newCount % 10 === 0 && newCount > 10) {
      setMessage('You reached ' + newCount + '!');
    } else {
      setMessage('');
    }
  };

  // This function subtracts 1 from the counter
  // It prevents the counter from going below 0
  const decrement = () => {
    if (count <= 0) {
      setMessage('Counter cannot go below 0!');
      return;
    }
    const newCount = count - 1;
    setCount(newCount);
    if (newCount === 0) {
      setMessage('Counter is at zero.');
    } else {
      setMessage('');
    }
  };

  // This function resets the counter to 0
  const reset = () => {
    setCount(0);
    setMessage('Counter has been reset.');
  };

  return (
    <View style={styles.container}>

      {/* Title displayed on the screen */}
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.subtitle}>CS50 Mobile - React Native</Text>

      {/* Number showing the current count value */}
      <View style={styles.countBox}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      {/* Message area for milestones and warnings */}
      <Text style={styles.message}>{message}</Text>

      {/* Button to increment the counter (+1) */}
      <TouchableOpacity
        style={[styles.button, styles.incrementBtn]}
        onPress={increment}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>+ Increment</Text>
      </TouchableOpacity>

      {/* Button to decrement the counter (-1) */}
      <TouchableOpacity
        style={[styles.button, styles.decrementBtn]}
        onPress={decrement}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>- Decrement</Text>
      </TouchableOpacity>

      {/* Button to reset the counter back to 0 */}
      <TouchableOpacity
        style={[styles.button, styles.resetBtn]}
        onPress={reset}
        activeOpacity={0.7}
      >
        <Text style={styles.resetBtnText}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}

// StyleSheet for basic layout and styling
const styles = StyleSheet.create({

  // Main container centers everything vertically and horizontally
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // App title style
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },

  // Subtitle style
  subtitle: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 30,
  },

  // Box around the counter number
  countBox: {
    backgroundColor: '#ffffff',
    width: 160,
    height: 160,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#007AFF',
  },

  // The large counter number
  countText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#007AFF',
  },

  // Message text for milestones and warnings
  message: {
    fontSize: 16,
    color: '#666666',
    height: 25,
    marginBottom: 30,
    textAlign: 'center',
  },

  // Shared button style
  button: {
    width: 220,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },

  // Green increment button
  incrementBtn: {
    backgroundColor: '#34C759',
  },

  // Red decrement button
  decrementBtn: {
    backgroundColor: '#FF3B30',
  },

  // Gray reset button
  resetBtn: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
  },

  // White text for colored buttons
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },

  // Dark text for the reset button
  resetBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666666',
  },
});
