import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);

  const handleLogin = async () => {
    setErr(null);
    const res = await signIn(email, password);
    if (!res?.token) setErr(res?.message || 'Login failed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escrow App — Login</Text>
      {err && <Text style={styles.err}>{err}</Text>}
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  err: { color: 'red', marginBottom: 10 }
});
