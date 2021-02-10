import './App.css';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

const RedView = () => (
  <div style={{ height: 300, backgroundColor: "red" }}>Red</div>
);
const BlueView = () => {
  const {state} = useLocation();
  return <>
  <div style={{ height: 300, backgroundColor: "blue" }}>Blue: {}</div>
  </>
};
const GreenView = () => (
  <div style={{ height: 300, backgroundColor: "green" }}>Green</div>
);
const YellowView = () => (
  <div style={{ height: 300, backgroundColor: "yellow" }}>Yellow</div>
);
const OtherColorView = ({ match }) => (
  <div style={{ height: 300, backgroundColor: match.params.color }}>
    {match.params.color}
  </div>
);

function App() {
  return (
    <div>
      <header>
        <Router>
          <div>
            <div>
              <h2>React Swipeable Routes example</h2>
            </div>

            <div>
              <Link to="/red">Red</Link> |<Link to={{
                pathname: "/blue",
                state: {data: "Jude"}
              }}>Blue</Link> |
            <Link to="/green">Green</Link> |<Link to="/yellow">Yellow</Link> |
            <Link to="/other/palevioletred">Pale Violet Red</Link> |
            <Link to="/other/saddlebrown">Saddle Brown</Link>
            </div>

            <SwipeableRoutes replace>
              <Route path="/red" component={RedView} />
              <Route path="/blue" component={BlueView} />
              <Route path="/green" component={GreenView} />
              <Route path="/yellow" component={YellowView} />
              <Route
                path="/other/:color"
                component={OtherColorView}
                defaultParams={{ color: "grey" }}
              />
            </SwipeableRoutes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
