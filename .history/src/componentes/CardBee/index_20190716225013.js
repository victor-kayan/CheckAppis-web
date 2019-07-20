import React, { Component } from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;
class CardBee extends Component {
  render() {
    return (
      <Card
        style={{
          //width: 500,
          height: 150,
          //marginTop: 16,
          borderRadius: 5,
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          fontSize: 30
        }}
        loading={this.props.loading}
      >
        <Meta
          avatar={
            <div
              style={{
                padding: 20,
                backgroundColor: "#fdeaab",
                borderRadius: 50,
              }}
            >
              <Avatar size={60} src={this.props.urlIcon} style={{padding: 5}}/>
            </div>
          }
          title={this.props.title}
          description={this.props.description}
        />
      </Card>
    );
  }
}

export default CardBee;
