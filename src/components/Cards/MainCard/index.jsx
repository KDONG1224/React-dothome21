import React from "react";
import styled from "styled-components";
import { Row, Col, Card } from "antd";

const StyledMainCard = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const MainCard = (props) => {
  const { data } = props;

  return (
    <StyledMainCard>
      <Row gutter={[16, 24]}>
        {data.map((arr, idx) => {
          return (
            <Col className="gutter-row" span={6} key={idx}>
              <a href={arr.link}>
                <Card
                  hoverable
                  key={idx}
                  cover={<img alt={arr.title} src={arr.image} />}
                >
                  <Card.Meta title={arr.title} description={arr.name} />
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
    </StyledMainCard>
  );
};
