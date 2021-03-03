import React from "react";
import { Row, Col, Card } from "antd";
import image1 from "../assets/images/modern-design.jpg";
import image2 from "../assets/images/clean-design.jpg";
import image3 from "../assets/images/great-support.jpg";
import image4 from "../assets/images/easy-customise.jpg";
import image5 from "../assets/images/unlimited-features.jpg";
import image6 from "../assets/images/advanced-option.jpg";
const { Meta } = Card;
const Features = () => {
  const items = [
    [
      {
        id: 1,
        img: image1,
        title: "Modern Design",
      },
      {
        id: 2,
        img: image2,
        title: "Clean and Elegant",
      },
      {
        id: 3,
        img: image3,
        title: "Great Support",
      },
    ],
    [
      {
        id: 4,
        img: image4,
        title: "Great Support",
      },
      {
        id: 5,
        img: image5,
        title: "Great Support",
      },
      {
        id: 6,
        img: image6,
        title: "Great Support",
      },
    ],
  ];
  return (
    <div className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>dolor sit amet. lorem ipsum</p>
        </div>

        {items.map((row) => {
          return (
            <Row gutter={[16, 16]} key={Math.random(100)}>
              {row.map((item) => {
                return (
                  <Col span={8} key={item.id}>
                    <Card
                      hoverable
                      cover={<img alt="example" src={item.img} />}
                    >
                      <Meta title={item.title} />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
