import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { signOut, state } = useContext(AuthContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Welcome{state.user ? `, ${state.user.name}` : ''}!</Text>
      <Button title="Go to Transactions" onPress={() => navigation.navigate('Transactions')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
}
