import React, { useEffect, useState } from 'react';
import Gist from 'react-gist';
import { useParams } from 'react-router-dom';
import JSData from '../../assets/json/script.json';
import { Params } from '../../interface/IInterviewList';
import { IObject } from '../../interface/IObject';

const InterviewList = () => {
  const param =  useParams<Params>();
  const [interviewParam, setInterviewParam] = useState<Params>();
  const [oneData, setOneData] = useState<IObject>();

  useEffect(() => {
    let paramId = param.id;
    let filteredData = JSData.find(el => el.id == paramId)
    console.log(param.id, 'a', filteredData);
  }, []);
  
  return (
    <div>
      js
      <Gist id='b97ada709cf3339f7f157d8a4d420867' />
    </div>
  )
}
export default InterviewList;