import React from "react";
import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/Header";
import Home from "./pages/Home/Home";
const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
    </Layout>
  );
};

export default App;
