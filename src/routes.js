import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';

// Import Pages
import Login from './containers/Login/Login';

const AllRoutes = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login}/>
    </Stack>
  </Router>
);

export default AllRoutes;