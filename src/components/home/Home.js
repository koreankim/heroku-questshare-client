import React from "react";
import { Row, Col, Card, Tooltip, Divider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CreateQuestionButton from "../buttons/CreateQuestionButton";
import "./Home.css";

const { Meta } = Card;

class Home extends React.Component {
  displayCreateButton = () => {
    return (
      <Col flex={1}>
        <Card>
          <strong>Reminder</strong>: All questions automatically expire after{" "}
          <strong>1</strong> day{" "}
          <Tooltip title={this.TOOLTIP_MSG}>
            <InfoCircleOutlined />
          </Tooltip>
          <CreateQuestionButton />
        </Card>
      </Col>
    );
  };

  displayQuestShareTopic = () => {
    return (
      <Col flex={1}>
        <Card>
          <strong>What is QuestShare?</strong>
          <div>
            QuestShare is a free, UI-friendly lightweight solution for polling
            momentary feedback.
          </div>
          <div>
            It provides meaningful results and automatically filters polls after
            its expiration period.
          </div>
        </Card>
      </Col>
    );
  };

  displayQuestShareUse = () => {
    return (
      <Col flex={1}>
        <Card>
          <strong>Why should I use it?</strong>
          <div>
            QuestShare provides users with strong security measures to ensure
            your polls are safeguarded from malicious attacks.
          </div>
          <div>
            The creation menu provides selections between unlimited and IP
            specific security options and the ability to enable captcha
            protection to prevent spam.
          </div>
        </Card>
      </Col>
    );
  };

  displayAnsweringFormImage = () => {
    return (
      <Col span={16} offset={4}>
        <Card
          hoverable
          cover={
            <img
              alt="answeringform"
              src={require("../../assets/answeringform.png")}
            />
          }
        >
          <Meta
            title="Poll with Confidence"
            description="QuestShare provides a clean and intuitive UI for everyone to use - for free!"
          />
        </Card>
      </Col>
    );
  };

  displayResultsImage = () => {
    return (
      <Col span={16} offset={4}>
        <Card
          hoverable
          cover={
            <img alt="results" src={require("../../assets/results.png")} />
          }
        >
          <Meta
            title="Correct Results"
            description="You will always be able to see results whenever you want, however you want."
          />
        </Card>
      </Col>
    );
  };

  displayCreatorLinkedin = () => {
    return (
      <Col flex={1} style={{ overflowWrap: "break-word" }}>
        <Card hoverable title="Linkedin">
          <p>https://www.linkedin.com/in/junhokim97/</p>
        </Card>
      </Col>
    );
  };

  displayCreatorGithub = () => {
    return (
      <Col flex={1} style={{ overflowWrap: "break-word" }}>
        <Card hoverable style={{ width: "fill" }} title="GitHub">
          <p>https://github.com/koreankim</p>
        </Card>
      </Col>
    );
  };

  displayIntroduction = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <Row style={{ margin: "5px" }}>{this.displayCreateButton()}</Row>
        <Row style={{ margin: "5px" }}>{this.displayQuestShareTopic()}</Row>
        <Row style={{ margin: "5px" }}>{this.displayQuestShareUse()}</Row>
        <Row style={{ margin: "5px" }}>{this.displayAnsweringFormImage()}</Row>
        <Row style={{ margin: "5px" }}>{this.displayResultsImage()}</Row>

        <Card>
          <Divider>About the Creator</Divider>
        </Card>
        <Row style={{ margin: "5px" }}>
          {this.displayCreatorLinkedin()}
          {this.displayCreatorGithub()}
        </Row>
      </div>
    );
  };

  render() {
    return this.displayIntroduction();
  }
}

export default Home;
