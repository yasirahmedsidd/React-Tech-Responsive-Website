import React from "react";
import "./App.css";
import { Layout } from "antd";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import Home from "./pages/Home/Home";
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default App;
