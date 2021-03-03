import { Button, Modal } from "antd";
import React, { useState } from "react";

const Works = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it Works</h2>
          <p>lorem ipsum dolor sit amet</p>
        </div>
        <div className="contentHolder">
          <Button type="primary" onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>
        <Modal
          title="Learning React"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <>
            <iframe
              src="https://www.dailymotion.com/video/x7zo6jl?playlist=x6wzqs"
              width="100%"
              height="350"
              title="Learning ant desifn with react"
            ></iframe>
          </>
        </Modal>
      </div>
    </div>
  );
};

export default Works;
