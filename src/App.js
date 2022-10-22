import React, { Component, Suspense } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Feed from "./container/Feed/Feed";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound'

// lazy load PageNotFound component
// const PageNotFound = React.lazy(() =>
//   import("./components/PageNotFound/PageNotFound")
// );

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/apps" exact component={Feed} />
              <Route path="/gadgets" exact component={Feed} />
              <Route path="/startups" exact component={Feed} />
              <Route path="/:unknow" exact component={PageNotFound} />
              {/* <Route
                path="/:unknow"
                render={() => (
                  <Suspense fallback={<div>loading...</div>}>
                    <PageNotFound />
                  </Suspense>
                )}
              /> */}
              <Redirect from="/" to="/apps" />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
