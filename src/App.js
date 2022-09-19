import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterEffect from './components/HookCounterEffect';
import HookCounterEffectOne from './components/HookCounterEffectOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalCounter';
import DataFetching from './components/DataFetching';
import DataFetchingOne from './components/DataFatchingOne';
import React from 'react';
import ComponentF from './components/ComponentF';
import HookReducerCounter from './components/HookReducerCounter';
import HookReducerCounterOne from './components/HookReducerCounterOne';
import HookReducerCounterTwo from './components/HookReducerCounterTwo';
import FetchingDataOneNew from './components/FetchingDataOneNew';
import FetchingData from './components/FetchingData';

export const UserContext = React.createContext()


function App() {
  return (
    <div className="App">
      <FetchingData></FetchingData>
      {/* <FetchingDataOneNew></FetchingDataOneNew> */}
      {/* <HookReducerCounterTwo></HookReducerCounterTwo> */}
      {/* <HookReducerCounterOne></HookReducerCounterOne> */}
      {/* <HookReducerCounter></HookReducerCounter> */}
      {/* <UserContext.Provider value={'Pranita'}>
          <ComponentF></ComponentF>
      </UserContext.Provider> */}
      {/* <DataFetchingOne></DataFetchingOne> */}
      {/* <DataFetching></DataFetching> */}
      {/* <IntervalCounter></IntervalCounter> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <HookMouse></HookMouse> */}
      {/* <HookCounterEffectOne></HookCounterEffectOne> */}
      {/* <HookCounterEffect></HookCounterEffect> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
    </div>
  );
}

export default App;
