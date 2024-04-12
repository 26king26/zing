// import { useState } from 'react'
import "./App.css";
import { Button } from "antd";
import { Outlet, Link } from "@tanstack/react-router";

function App() {
  return (
    <div id="app">
      <div>
        <Link to="/"><Button type="primary">Home</Button></Link>
        <Link to="/about"><Button type="primary">About</Button></Link>
      </div>
      <hr />
      <Outlet></Outlet>
      {/* 这是子路由组件显示的地方 */}
    </div>
  );
}

export default App;
