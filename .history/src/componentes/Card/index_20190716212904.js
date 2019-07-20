import React, { Component } from "react";
import { Avatar } from "antd";

class Card extends Component {
  render() {
    return (
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
              <Avatar size={70} src={this.props.urlIcon} />
            </div>
          }
          title={this.props.title}
          description={this.props.description}
        />
      </Card>
    );
  }
}

export default Card;
