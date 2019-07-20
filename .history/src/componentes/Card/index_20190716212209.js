import React, { Component } from "react";
import { Card, Col, Row, Avatar } from "antd";

const { Meta } = Card;
class Card extends Component {

  render() {
    return (
      <Row gutter={16}>
        <Col span={8}>
          <Card
            style={{
              width: 500,
              height: 150,
              marginTop: 16,
              borderRadius: 5,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              fontSize: 30
            }}
            loading={false}
          >
            <Meta
              avatar={
                <div
                  style={{
                    padding: 15,
                    backgroundColor: "#fdeaab",
                    borderRadius: 50
                  }}
                >
                  <Avatar
                    size={70}
                    src={this.props.url_icon}
                  />
                </div>
              }
              title="Colmeias"
              description="33"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              width: 500,
              height: 150,
              marginTop: 16,
              borderRadius: 5,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              fontSize: 30
            }}
            loading={false}
          >
            <Meta
              avatar={
                <div
                  style={{
                    padding: 15,
                    backgroundColor: "#fdeaab",
                    borderRadius: 50
                  }}
                >
                  <Avatar
                    size={70}
                    src="https://image.flaticon.com/icons/svg/1965/1965164.svg"
                  />
                </div>
              }
              title="Colmeias"
              description="33"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              width: 500,
              height: 150,
              marginTop: 16,
              borderRadius: 5,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              fontSize: 30
            }}
            loading={false}
          >
            <Meta
              avatar={
                <div
                  style={{
                    padding: 15,
                    backgroundColor: "#fdeaab",
                    borderRadius: 50
                  }}
                >
                  <Avatar
                    size={70}
                    src="https://image.flaticon.com/icons/svg/1965/1965164.svg"
                  />
                </div>
              }
              title="Colmeias"
              description="33"
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Card;
