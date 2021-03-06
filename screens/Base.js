import React, { Component, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import { Image, Card } from 'react-native-elements'
import { render } from 'react-dom'
import { set } from 'react-native-reanimated'


const Base = ({ navigation }) => {
   const [ selectedStartDate, setSelectedStartDate] = useState([])

const onDateChange = (selectedStartDate) => {
    setSelectedStartDate(selectedStartDate)
};


const startDate = selectedStartDate ? selectedStartDate.toString() : ''
const date = startDate
return (
<View style={styles.container}>
    <Text style={styles.text}>How are you today?</Text>
    <CalendarPicker
        onDateChange={onDateChange}
        height={'250'}
        selectedDayColor='#816c61'
        todayBackgroundColor="cyan"
    />
                
        <Text>Selected Date: { date }</Text>
        <View style={styles.container2}>
          <Card>
            <Image style={styles.imageicon}
             source={require('./../fitnessicon.png')} />
           
             <Text style={styles.text}>10000</Text>
             
             <Text style={styles.text2}>Steps</Text>
          </Card>
          <Card>
            <Image style={styles.imageicon}
            source={require('./../bmiicon.png')} />
           
            <Text style={styles.text}>35</Text>
           
            <Text style={styles.text2}>kg/m^2</Text>
          </Card>
          </View>
        <View style={styles.container3}>
        <Card>
            <Image style={styles.imageicon}
             source={require('./../bloodpressureicon.png')} />
            
             <Text style={styles.text}>120/80</Text>
            
             <Text style={styles.text2}>mmHG</Text>
          </Card>
          <Card>
            <Image style={styles.imageicon}
             source={require('./../oxygensatsicon.png')} />
             
             <Text style={styles.text}>98.0</Text>
             
             <Text style={styles.text2}>% 02</Text>
          </Card>
          </View>
          <View style={styles.container3}>
          <Card>
            <Image style={styles.imageicon}
             source={require('./../pulseheart.png')} />
             
             <Text style={styles.text}>88</Text>
             
             <Text style={styles.text2}>BPM</Text>
          </Card>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Measure')} >
            <Image style={styles.imageicon2}
             source={require('./../measureicon.png')} />
            </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('History')} >
                <Image style={styles.imageicon3}
                source={require('./../history.png')} />
            </TouchableOpacity>
            
</View>  
</View>        
)}
   
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2274a5',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#2274a5',
        marginTop: 5,
        height: 10,
        marginBottom: 5,
      },
      container3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#2274a5',
        marginTop: 5,
        height: 10,
        marginBottom: 5,
      },
      container4: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#2274a5',
        marginTop: 5,
        marginBottom: 10,
        height: 5,
      },
      imageicon: {
        height: 40,
        width: 40,  
        justifyContent: 'center',
        marginBottom: 5,
      },
      imageicon2: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        marginBottom: 5,
        paddingRight: 20,
      },
      imageicon3: {
          height: 80,
          width: 80,
      },
    text: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
    },
    text2: {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        justifyContent: 'center',
      },
})




export default Base