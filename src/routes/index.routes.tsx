import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminRoom from '../pages/AdminRoom';
import Home from '../pages/Home/Index';
import NewRoom from '../pages/NewRoom';
import Room from '../pages/Room';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />

        <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </BrowserRouter>
  );
}
