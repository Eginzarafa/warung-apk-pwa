import React from 'react';
import { Card, Col, Row } from 'antd';
import Image from 'next/image'; // Import Image dari next/image

const { Meta } = Card;

interface Product {
  imageUrl: string;
  name: string;
  price: string;
}

interface CardListProps {
  products: Product[];
}

const CardList: React.FC<CardListProps> = ({ products }) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {products.map((product: Product, index: number) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={
                <Image
                  alt={product.name}
                  src={product.imageUrl}
                  width={240}  // Tentukan lebar gambar
                  height={240} // Tentukan tinggi gambar
                  style={{ borderRadius: '10px' }}
                />
              }
              style={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Meta
                title={product.name}
                description={`Harga: Rp ${product.price}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardList;
