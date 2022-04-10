import React, {Component} from 'react';
import {Provider} from "mobx-react";
import stores from "./app/src/mobx";
import App from "./app/App";
import Toast from "react-native-toast-message";

export default function AppProvider() {
  return (
    <>
    <Provider {...stores}>
      <App/>
    </Provider>
    <Toast position="bottom" bottomOffset={20} />
    </>
  );
}
