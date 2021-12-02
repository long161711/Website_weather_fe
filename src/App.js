import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import HaNoi from "./WeatherCity/HaNoi";
import DaNang from "./WeatherCity/DaNang";
import HCM from "./WeatherCity/HCM";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/weather" component={HomePage}></Route>
        <Route exact path="/weather/hanoi" component={HaNoi}></Route>
        <Route exact path="/weather/danang" component={DaNang}></Route>
        <Route exact path="/weather/hcm" component={HCM}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
