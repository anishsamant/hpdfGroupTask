import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';


export default class Home extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff6ce', '#fffdf4']} style={{ flex: 1 }}>
            <ScrollView>
                <Text style={[styles.title]}>This is an alexa skill which gives you answers about all the previous IPL matches till Season 10 (2017), based on the questions asked to alexa</Text>
                <View style={styles.card}>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>You invoke the skill saying "Alexa, start IPL Search."</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa will speak a welcome message and wait for your query.</Text>
                        </ListItem>
                    </List>
                </View>
                <View style={styles.card}>
                    <Text style={[styles.title]}>
                        Currently we have 5 types of queries that can be invoked. {'\n'}
                        Tap on them to know more about them.
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity transparent style={{height: 50}} onPress={()=> {Actions.intents();}}>
                        <Text style={styles.buttonText} >Click to proceed</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = {
    title: {
        color: 'black',
        margin: 10,
        fontSize: 20,
        textAlign: 'center'
    },
    text: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 18,

    },
    card: {
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 1,
        shadowRadius: 1
    },
    listItem: {
        justifyContent: 'space-between'
    },
    buttonView: {
        margin: 2,
        marginTop: 20,
        elevation: 1,
        borderWidth: 5,
        height: 50,
        backgroundColor: '#ffff33'
    },
    buttonText: {
        textAlign: 'center',
        color: '#004d00',
        fontSize: 23
    }
};