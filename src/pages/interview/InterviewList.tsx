import React, { useEffect, useState } from 'react';
import Gist from 'react-gist';
import { Link, useParams } from 'react-router-dom';
import JSData from '../../assets/json/script.json';
import { IObject } from '../../interface/IObject';
import { Params } from '../../interface/IInterviewList';
import { Button, Col, Row, Typography } from 'antd';
import Layout from 'antd/lib/layout/layout';
import styles from './interview.module.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ReplaceQuotes } from '../../helpers/ReplaceQuotes';

const { Title, Text } = Typography;

const InterviewList = () => {
  const param =  useParams<Params>();
  const [oneData, setOneData] = useState<IObject>();
  const [pagination, setPagination] = useState<IObject>({});

  useEffect(() => {
    let paramId = param.id;
    let nextId = parseInt(param.id)+1;
    let prevId = parseInt(param.id).valueOf()-1;
    
    let filteredData = JSData.find(el => el.id == paramId);
    let prevData = JSData.find(el => el.id == prevId.toString());
    let nextData = JSData.find(el => el.id == nextId.toString());
    setPagination({prev: prevData, next: nextData})
    setOneData(filteredData);
  }, [param.id]);
  
  const getRenderedCode = () => {
    return oneData && Object.keys(oneData).map((iData, i) => {
      switch (iData) {
        case 'title':
          return <Title key={i}>{oneData.id + ". "+ oneData[iData]}</Title>;
        case 'paragraph':
          return <Text key={i}><span dangerouslySetInnerHTML={{__html:oneData[iData].replace(/`(.*?)`/g, '<code>$1</code>')}}></span></Text>;
        case 'code':
          return <Gist key={i} id={oneData[iData]} />;
        case 'render':
          return oneData[iData].map((d:IObject) => (
            Object.keys(d).map(rKey => (
              getRenderedElement(rKey, d[rKey])
            ))
          ))          
        default:
          return <></>;
      }
    })
  }

  const getRenderedElement = (key: string, value: any) => {
    switch (key) {
      case 'code':
        return <Gist id={value} />;
      case 'paragraph':
        return <Text className={styles.interviewList__paragraph}><span dangerouslySetInnerHTML={{__html:ReplaceQuotes(value)}}></span></Text>;
      case 'subtitle':
        return <Title level={value[1]}>{value[0]}</Title>;   
      case 'ulist':
        return <ul>
          {value.map((list:any, i:number) => (
            <li key={i}><Text><span dangerouslySetInnerHTML={{__html:ReplaceQuotes(list)}}></span></Text></li>
          ))}
        </ul>;
      case 'olist':
        return <ol>
          {value.map((list:any, i:number) => (
            <li key={i}><Text><span dangerouslySetInnerHTML={{__html:ReplaceQuotes(list)}}></span></Text></li>
          ))}
        </ol>;
      default:
        break;
    }
  }

  const replaceQuestion = (text: string) => {
    return text.replace('?', '');
  }

  return (
    <Layout className={styles.interviewList}>
      <div className={styles.interviewList__inner}>
        {getRenderedCode()}
      </div>
      <Row justify='space-between'>
        <Col>
        {pagination.prev ? 
          <Link to={`/interview/js/${pagination.prev.id}`}><LeftOutlined/> {replaceQuestion(pagination.prev.title)}</Link>
          :
          <Button type='link' disabled><LeftOutlined/> Previous</Button>
        }
        </Col>

      
        <Col>
        {pagination.next ? 
          <Link to={`/interview/js/${pagination.next.id}`}>{replaceQuestion(pagination.next.title)} <RightOutlined/></Link>
        :
          <Button type='link' disabled>Next <RightOutlined/></Button>
        }
        </Col>
    </Row>
    </Layout>
  )
}
export default InterviewList;