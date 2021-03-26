import React from 'react';
import { Route } from 'react-router-dom';
import {CFade} from '@coreui/react'

const AppRoute = ({
  component: Component,
  layout: Layout,
  name,
  title__L,
  title__R,
  ...rest
}) => {
  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
  return (
    <Route
      {...rest}
      render={(props) => {
        return(
        <CFade className="h-100">    
          <Layout title__L={title__L} title__R={title__R} {...props}>
            <Component />
          </Layout>
        </CFade>
      )
      }} >
    </Route>
  );
}

export default AppRoute;