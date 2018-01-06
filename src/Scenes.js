import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Util, AppLoading } from 'expo';
import { connect, Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
// import {  } from 'react-intl';

// Redux
import store from './store';
const RouterWithRedux = connect()(Router);

// Routes
import AllRoutes from './routes';

export default class Scenes extends Component {
  state = {
    locale: null,
    appIsReady: false,
  }

  async componentDidMount() {
    const locale = await this.getCurrentLocale();
    this.setState({ locale, appIsReady: true })
  }

  async getCurrentLocale() {
    const currentLocale = await Util.getCurrentLocaleAsync();
    let locale;
    if (/^es/.test(currentLocale)) locale = 'es';
    else if (/^en/.test(currentLocale)) locale = 'en';
    else locale = 'es';

    return locale;
  }

  render() {
    const { locale, appIsReady } = this.state;

    if (appIsReady) {
      return (
        <Provider store={store}>
          <RouterWithRedux scenes={AllRoutes} />
        </Provider>
      );
    }

    return <AppLoading/>;
  }
}