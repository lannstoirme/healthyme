import React, { useState, useEffect, Component } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';


//var pulseRate = 0;

//const GeneratePulseRate = ({ randomPulse, pulseRate }) =>{
//    if ( randomPulse <= 60)
//    {
//        pulseRate = randomPulse + 20;
//    } else if ( randomPulse >= 190)
//    {
//        pulseRate = randomPulse - 30;
//    } else {
//        pulseRate = randomPulse;
//    }
//}

const steps = 10000;
const BMI = 32;

const Measure = ({ navigation }) => {


    const [ currentDate, setCurrentDate] = useState('');
    const [ currentTime, setCurrentTime] = useState('');
    const [ pulse, setCurrentPulse] = useState('');
    const [ oxygensats, setOxygenSats] = useState('');
    const [ systolic, setSystolic] = useState('');
    const [ diastolic, setDiastolic] = useState('');
 
    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var pulse = Math.floor(Math.random() * 100) + 10; 
        var oxygensats = Math.floor(Math.random() * 100) + 15;
        var systolic = Math.floor(Math.random() * 100) + 20;
        var diastolic = Math.floor(Math.random() * 100) - 30;
           
        setCurrentDate(
            date + '/' + month + '/' + year
        );
        setCurrentTime(
            hours + ':' + min
        );
        setCurrentPulse(
            pulse
        );

        setOxygenSats(
            oxygensats
        );

        setSystolic(
            systolic
        );

        setDiastolic(
            diastolic
        );

}, []);

return (
<ScrollView style={styles.scroll}>
<View style={styles.container}>
    <View style={styles.container2}>
    <Card style={styles.card}><Text style={styles.text}>The current date is: {currentDate}</Text></Card>
    <ActivityIndicator size="large"/>
    </View>
    <View style={styles.container2}>
    <Card style={styles.card}><Text style={styles.text}>The current time is: {currentTime}</Text></Card>
    <ActivityIndicator size="large"/>
    </View>
    <View style={styles.container2}>
    <Card style={styles.card}><Text style={styles.text}>You have completed {steps} steps</Text></Card>
    <ActivityIndicator size="large"/>
    </View>
    <View style={styles.container2}>
    <Card style={styles.card}><Text style={styles.text}>Your current BMI is {BMI}</Text></Card>
    <ActivityIndicator size="large"/>
    </View>
    <View style={styles.container2}>
    <Card style={styles.card}><Text style={styles.text}>Your current pulse rate is {pulse} beats per minute</Text></Card>
    <ActivityIndicator size="large"/>
    </View>
    <View style={styles.container2}>
    <Card style={styles.card}><Text style={styles.text}>Your blood pressure is {diastolic}/{systolic} mmHg</Text></Card>
    <ActivityIndicator size="large"/>
    </View>
    <View style={styles.container2}>
    <Card style={styles.card}><Text style={styles.text}>Your blood oxygen saturation is at {oxygensats} percent</Text></Card>
    <ActivityIndicator size="large"/>
    </View>
</View>
</ScrollView>

);
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#2274A5',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8, 
        marginHorizontal: 16,
    },
    text: {
        fontSize: 14,
    },
    card: {
        width: 400,
    },
    container2: {
        flexDirection: 'row',
    },
    scroll: {
    backgroundColor: '#2274A5',
    },
});

export default Measure;