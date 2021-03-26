import React from 'react';
import { Route } from 'react-router-dom';
import {CFade} from '@coreui/react'

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
  return (
    <Route
      {...rest}
      render={(props) => {
        return(
        <CFade className="h-100">    
          <Layout {...props}>
          </Layout>
        </CFade>
      )
      }} >
    </Route>
  );
}

export default AppRoute;