import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function RootNavigator() {
  const { state } = useContext(AuthContext);

  // state.userToken: null = not logged in, string = logged in
  if (state.isLoading) return null; // optionally show splash

  return state.userToken ? <AppStack /> : <AuthStack />;
}
