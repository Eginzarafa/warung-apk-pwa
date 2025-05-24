'use client';

import React from 'react';
import { Row, Col, Typography, Space, Image } from 'antd';
import { motion } from 'framer-motion'; // Animasi menggunakan framer-motion
import { AppstoreAddOutlined, RocketOutlined, TeamOutlined } from '@ant-design/icons'; // Ikon dari Ant Design

const { Title, Text } = Typography;

const Tentang: React.FC = () => {
  return (
    <main className="pt-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Bagian Header dengan background gradien */}
        <Row
          gutter={[16, 16]}
          justify="center"
          style={{
            background: 'linear-gradient(45deg, #f56b00, #ff8c00)',
            padding: '50px 0',
            borderRadius: '15px',
            marginBottom: '40px',
            color: '#fff',
          }}
        >
          <Col xs={24} md={12}>
            <div style={{ textAlign: 'center' }}>
              <Title level={1} style={{ fontWeight: 'bold', color: '#fff' }}>
                Tentang Kami
              </Title>
              <Text style={{ fontSize: '1.1rem', color: '#fff' }}>
                Kami adalah aplikasi pengantaran makanan yang mengutamakan kenyamanan dan kecepatan untuk memenuhi kebutuhan makan Anda.
                <br />
                Dengan berbagai pilihan menu yang lezat dan harga yang terjangkau, kami ingin memberikan pengalaman makan yang lebih baik di gadget Anda.
              </Text>
            </div>
          </Col>
        </Row>

        {/* Misi Kami */}
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Space direction="vertical">
                <Title level={3} style={{ fontWeight: 'bold' }}>Misi Kami</Title>
                <Text style={{ fontSize: '1rem', color: '#555' }}>
                  Misi kami adalah memberikan pengalaman pemesanan makanan yang mudah, cepat, dan menyenangkan dengan pilihan menu yang bervariasi serta layanan pengantaran yang cepat dan aman.
                </Text>
              </Space>
            </motion.div>
          </Col>

          {/* Ikon Misi */}
          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <AppstoreAddOutlined style={{ fontSize: '48px', color: '#f56b00' }} />
              <Text style={{ color: '#555', marginTop: '10px' }}>Mudah dan Cepat</Text>
            </motion.div>
          </Col>

          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <RocketOutlined style={{ fontSize: '48px', color: '#f56b00' }} />
              <Text style={{ color: '#555', marginTop: '10px' }}>Pengantaran Cepat</Text>
            </motion.div>
          </Col>

          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <TeamOutlined style={{ fontSize: '48px', color: '#f56b00' }} />
              <Text style={{ color: '#555', marginTop: '10px' }}>Tim Profesional</Text>
            </motion.div>
          </Col>
        </Row>

        {/* Gambar Tentang Kami */}
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: '40px' }}>
          <Col xs={24} md={12}>
            <Image
              src="/assets/images/logo.png" 
              alt="Tentang Kami"
              width="100%"
              style={{
                borderRadius: '15px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
              }}
            />
          </Col>
        </Row>

        {/* Tombol Pelajari Lebih Lanjut */}
        {/* <Row justify="center" style={{ marginTop: '40px' }}>
          <Col>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: '#f56b00',
                borderColor: '#f56b00',
                padding: '10px 30px',
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </Col>
        </Row> */}
      </motion.div>
    </main>
  );
};

export default Tentang;
