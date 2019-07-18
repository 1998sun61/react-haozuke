// 首页
import React from "react";
// 导入路由导航菜单
import { Route } from "react-router-dom";
// 导入组件
import HouseList from "../HouseList";
import Index from "../Index";
import News from "../News";
import Profile from "../Profile";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        这是首页的组件
        <Route path="/home/houselist" component={HouseList} />
        <Route path="/home/index" component={Index} />
        <Route path="/home/news" component={News} />
        <Route path="/home/profile" component={Profile} />
      </div>
    );
  }
}
