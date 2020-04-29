import React from "react";
import { Layout, Tooltip } from 'antd';
import "./App.css";
import Navbar from "../navbar/Navbar";
import { appRouter } from "../../utils/router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

const { Content, Footer } = Layout;

class App extends React.Component {

  displayDonateButton = () => {
    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="PVR5B7F8A56DJ" />
        <input type="hidden" name="currency_code" value="CAD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
      </form>
    )
  }

  render() {
    return (
      <Router forceRefresh={true}>
        <Layout>
          <Navbar />
          <Content style={{ padding: "25px 50px" }}>
            <div className="site-layout-content" style={{ height: "100%" }}>
              {appRouter()}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            {this.displayDonateButton()}
            QuestShare ©2020 Created by Junho Kim
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
