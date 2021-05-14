import { Layout, Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import { CustomFooter as Footer } from './Footer';
const { Header, Content } = Layout;

const AlphaAlert = styled.div`
  color: #ab9bf0;
  padding: 7px 25px;
  font-size: 16px;
  background-color: #393260;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UsdtAlert = styled(AlphaAlert)`
  background-color: #4b4474;
`;

export default function BasicLayout({ children }) {
  return (
    <React.Fragment>
      <Layout style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Header style={{ padding: 0, minHeight: 64, height: 'unset' }}>
          <TopBar />
        </Header>
        <Content style={{ flex: 1 }}>{children}</Content>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}
