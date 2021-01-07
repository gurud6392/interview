import { CaretRightOutlined, SmileOutlined } from '@ant-design/icons';
import { Collapse, List, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/json/script.json';
import styles from "./interview.module.scss";

const { Panel } = Collapse;
const { Text } = Typography;

const Interview = () => {
  return (
    <div className={styles.interview}>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel header={<Text strong>JS Interview Questions</Text>} key="1" className="site-collapse-custom-panel">
          <List
            size='small'
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Link to={`/interview/js/${item.id}`}> {item.id}. {item.title}</Link>
              </List.Item>
            )}
          />          
        </Panel>
        <Panel header={<Text strong>HTML & CSS Interview Questions</Text>} key="2" className="site-collapse-custom-panel">
          <SmileOutlined/>
        </Panel>
        <Panel header={<Text strong>Points</Text>} key="3" className="site-collapse-custom-panel">
          <SmileOutlined/>
        </Panel>
      </Collapse>
    </div>
  )
}
export default Interview;