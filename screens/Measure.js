import React, { useState, useEffect, Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import GeneratePulseRate from './../components/Generatepulse';



const Measure = ({ navigation }) => {


    const [ currentDate, setCurrentDate] = useState('');
    const [ currentTime, setCurrentTime] = useState('');
    const [ pulse, setCurrentPulse] = useState('');

    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var pulse = new GeneratePulseRate();

        setCurrentDate(
            date + '/' + month + '/' + year
        );
        setCurrentTime(
            hours + ':' + min
        );

        setCurrentPulse(
            pulse
        );

}, []);

const steps = 10000;

return (
<View>
    <Text>Measure Screen</Text>
    <Text>The current date is: {currentDate}</Text>
    <Text>The current time is: {currentTime}</Text>
    <Text>You have completed {steps} steps</Text>
    <Text>Your current pulse rate is {pulse} beats per minute</Text>
</View>

);
};

export default Measure;