'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Animasi menggunakan framer-motion
import { products } from '../data/menu'; // Mengimpor data produk dari file menu.ts
import CardList from '../components/CardList'; // Impor komponen CardList
import { Button, Typography, Space } from 'antd'; // Mengimpor komponen Ant Design untuk desain

const { Title } = Typography;

const Menu: React.FC = () => {
  return (
    <main className="pt-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Bagian Header dengan background gradien */}
        <div
          style={{
            background: 'linear-gradient(45deg, #f56b00, #ff8c00)',
            borderRadius: '15px',
            padding: '50px 0',
            marginBottom: '40px',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <Title level={1} style={{ fontWeight: 'bold' }}>
            Menu Kami
          </Title>
          <p style={{ fontSize: '1.1rem', color: '#fff' }}>
            Pilih dari berbagai menu lezat yang kami tawarkan dan nikmati pengalaman makan yang luar biasa.
          </p>
          <Space direction="vertical" style={{ marginTop: '20px' }}>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: '#ffcc00',
                borderColor: '#ffcc00',
                padding: '10px 30px',
              }}
            >
              Lihat Menu
            </Button>
          </Space>
        </div>

        {/* Menampilkan Daftar Produk dengan CardList */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CardList products={products} /> {/* Memanggil CardList dan mengirim data produk */}
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Menu;
