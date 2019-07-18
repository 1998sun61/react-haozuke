import React from "react";
// 配置路由  整个项目的根组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 首页组件
import Home from "./pages/Home";
// 城市列表组件
import CityList from "./pages/CityList";

import { Button } from "antd-mobile";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/list">城市列表页</Link>
            </li>
          </ul>
          <Route path="/home" component={Home} />
          <Route path="/list" component={CityList} />
          <Button type="primary">登陆</Button>
        </div>
      </Router>
    );
  }
}
