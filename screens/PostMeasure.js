import React, {useEffect, useState} from 'react';
import axios from 'axios';

import newAPI from './../apis/MeasureAPI';
import Measure from './Measure';

const postMeasureToAPI = ({date}, {time}, {pulse}, {temperature}, {systolic}, {diastolic}) => {

    const [push, setThisPush] = useState([]);

    useEffect(() => {
        pushMeasureToAPI()
    }, [])

    var postData = {
            date: {date},
            time: {time},
            pulserate: {pulse},
            oxygensat: {temperature},
            systolicpressure: {systolic},
            diastolicpressure: {diastolic}};

        var postJSON = JSON.stringify(postData);
        
        function pushMeasureToAPI() {
            newAPI.post('/vitals/', postJSON, {
                "headers": {
                    "content-type": "application/json",
                },
            }).then(function(response) {
                console.log(response);
                setThisPush(response.data);
            }).catch(function(error) {
                console.log(error);
            })
            
            if (!push) {
                return null
            }
        };
    };
      
export default postMeasureToAPI;
