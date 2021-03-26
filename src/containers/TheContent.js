import React, { Suspense } from 'react';
import {
  Redirect,
  Switch
} from 'react-router-dom';
import { CContainer } from '@coreui/react';
import classNames from "classnames";

// Component
import AppRoute from './../utils/AppRoute';

// routes config
import routes from '../routes';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  
  return (
    <main className="c-main">
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <AppRoute 
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  title__L={route.title__L}
                  title__R={route.title__R}
                  layout={route.layout}
                  component={route.component}
                />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
    </main>
  )
}

export default React.memo(TheContent)
