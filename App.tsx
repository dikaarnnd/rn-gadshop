// import { ScreenContent } from 'components/ScreenContent';
import Home from './src/app/(shop)/index';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      {/* <ScreenContent title="Home" path="App.tsx"></ScreenContent> */}
      <Home/>
      {/* <StatusBar style="auto" /> */}
    </>
  );
}
