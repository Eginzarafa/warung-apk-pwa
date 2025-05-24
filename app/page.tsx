"use client";

import React from "react";
import Link from "next/link";
import { Image, Row, Col, Button, Divider } from "antd";
import { motion } from "framer-motion";
import { RightOutlined } from "@ant-design/icons";
import { products } from "./data/menu";
import CardList from "./components/CardList";

export default function Home() {
  return (
    <>
      <main className="pt-20 px-6">
        {/* Hero Section */}
        <div
          className="hero"
          style={{
            padding: "60px 0",
            background: "linear-gradient(to right, #fff4e6, #fff9f0)",
            borderRadius: "10px",
            marginBottom: "60px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Row gutter={[16, 16]} align="middle" justify="center">
              <Col xs={24} md={12} style={{ padding: "20px" }}>
                <div style={{ textAlign: "center" }}>
                  <h2
                    style={{
                      fontWeight: "bold",
                      fontSize: "2.5rem",
                      color: "#f56b00",
                      marginBottom: "20px",
                    }}
                  >
                    Delicious Drink & Food Menu <br />
                    <span style={{ color: "#ffcc00" }}>in Your Gadget</span>
                  </h2>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "#ff8c00",
                      marginBottom: "25px",
                    }}
                  >
                    Pilih dan Pesan Menu Favorit Kalian!!
                  </p>
                  <Link href="/menu" passHref>
                    <Button
                      type="primary"
                      size="large"
                      icon={<RightOutlined />}
                      shape="round"
                      style={{
                        fontSize: "1rem",
                        backgroundColor: "#ffcc00",
                        borderColor: "#ffcc00",
                        padding: "10px 24px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      Pesan
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col xs={24} md={12} style={{ padding: "20px" }}>
                <Image
                  src="/assets/images/palang.png"
                  width="100%"
                  alt=""
                  preview={false}
                  style={{
                    borderRadius: "15px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </Col>
            </Row>
          </motion.div>
        </div>

        {/* Divider Pemisah */}
        <Divider
          style={{
            borderColor: "#ffcc00",
            margin: "40px auto",
            width: "60%",
          }}
        >
          {/* <span style={{ color: "#999", fontWeight: 500 }}>Es Teh Mas Toni</span> */}
        </Divider>

        {/* Menu Section */}
        <div style={{ marginTop: "30px" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
              fontSize: "2.5rem",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              color: "#f56b00",
              letterSpacing: "1px",
              textTransform: "uppercase",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Menu Kami
          </h2>

          <CardList products={products} />
        </div>

        {/* Footer Padding */}
        <div style={{ marginTop: "80px" }} />
      </main>
    </>
  );
}
