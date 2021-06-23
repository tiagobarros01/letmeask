import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home/Index';
import NewRoom from '../pages/NewRoom';
import Room from '../pages/Room';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/rooms/new" component={NewRoom} exact />
      <Route path="/rooms/:id" component={Room} />
    </BrowserRouter>
  );
}
