'use client';

import React from 'react';
import { Layout, Row, Col, Typography, Space, Image } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Footer: React.FC = () => {
  return (
    <Layout.Footer
      style={{
        backgroundColor: '#001529',
        color: '#fff',
        padding: '40px 50px',
        marginTop: '40px',
        borderTop: '1px solid #333',
      }}
    >
      <Row justify="space-between" align="middle" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <Text style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
              <Image src="/assets/images/logo.png" alt="Logo" width={150} height={150} />
            </Text>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6} style={{ textAlign: 'center' }}>
          <Text style={{ color: '#bbb' }}>Follow Us</Text>
          <Space size="large" style={{ marginTop: '10px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </a>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6} style={{ textAlign: 'right' }}>
          <Text style={{ color: '#bbb', fontSize: '0.9rem' }}>© 2025 . All rights reserved.</Text>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
