import React from "react";
import { Button, Collapse } from "antd";
import { MailFilled } from "@ant-design/icons";
const { Panel } = Collapse;
const Faq = () => {
  const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing
   elit. Blanditiis architecto quia aut asperiores. Dolores
    aliquid culpa veniam aut autem. Labore iusto ratione quasi! 
    Modi adipisci assumenda excepturi hic quisquam autem!  
`;

  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>lorem ipsum dolor sit amet</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="How to setup the theme?" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Can i change plan or cancel at any time?" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="Can i change multiple task?" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="How can i change mt password?" key="5">
            <p>{text}</p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste
            earum laudantium rem labore porro excepturi tempore molestiae cum,
            deserunt voluptate et, optio asperiores. Sunt adipisci quod ratione
            inventore voluptatem.
          </p>
          <Button size="large" icon={<MailFilled />} type="primary">
            Email Your Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
