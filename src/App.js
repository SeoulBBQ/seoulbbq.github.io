import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Menu,
    Layout,
    Tabs,
    Icon,
} from 'antd';
import './App.css';



const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
// const { SubMenu } = Menu;
const { Header, Content, } = Layout;
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

function callback(key) {
    console.log(key);
}

class App extends Component {
  render() {
    return (
      <div className="App">

          <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Tab 1" key="1">Content of blabla</TabPane>
              <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
              <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>

          <div className="icons-list">
              <IconFont type="icon-tuichu" />
              <IconFont type="icon-facebook" />
              <IconFont type="icon-twitter" />
          </div>


          <Layout>
              <Header className="header">
                  <div className="logo" />
                  <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}
                      style={{ lineHeight: '64px' }}
                  >
                      <Menu.Item key="1">nav 1</Menu.Item>
                      <Menu.Item key="2">nav 2</Menu.Item>
                      <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
              </Header>
<Layout>
    <Content>
          <Button type="primary">Button</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <Collapse onChange={callback}>
              <Panel header="Drinks" key="1">
                  <Collapse defaultActiveKey="1">
                      <Panel header="This is panel nest panel" key="1">
                          <p>afdfsfafa</p>
                      </Panel>
                  </Collapse>
              </Panel>
              <Panel header="Soft Drinks" key="1">
                  <p>asdf</p>
              </Panel>
              <Panel header="Barbecue On Your Table" key="1">
                  <p>asdf</p>
              </Panel>
              <Panel header="Barbecue Combination" key="1">
                  <p>asdf</p>
              </Panel>
              <Panel header="Seoul BBQ Special" key="1">
                  <p>asdf</p>
              </Panel>
              <Panel header="Rice Dishes" key="3">
                  <p>asdf</p>
              </Panel>
              <Panel header="Grilled Fishes" key="3">
                  <p>asdf</p>
              </Panel>
              <Panel header="Stewing On Your Table" key="3">
                  <p>asdf</p>
              </Panel>
              <Panel header="Soup and Stew" key="3">
                  <p>asdf</p>
              </Panel>
              <Panel header="Japanese Dinner" key="3">
                  <p>asdf</p>
              </Panel>
              <Panel header="Sushi" key="3">
                  <p>asdf</p>
              </Panel>
              <Panel header="Barbecue on Your Table" key="3">
                  <p>asdf</p>
              </Panel>
          </Collapse>
    </Content>
</Layout>
</Layout>



      </div>
    );
  }
}

export default App;
