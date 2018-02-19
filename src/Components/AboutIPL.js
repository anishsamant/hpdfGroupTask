import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class MatchSummary extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff6ce', '#fffdf4']} style={{ flex: 1 }}>
            <ScrollView>
                <Text style={[styles.title]}>
                    Alexa will give a brief description about IPL.
                </Text>
                <View style={styles.card}>
                    <Text style={styles.title}>Sample invocation :- </Text>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>Alexa, start ipl search, What is Indian Premier League"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, start ipl search, What is IPL</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, start ipl search, What this skill is about</Text>
                        </ListItem>
                    </List>

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
};
