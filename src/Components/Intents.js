import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';


export default class Home extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff6ce', '#fffdf4']} style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.card}>
                    <List>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.aboutIPL(); }}>
                            <Text style={styles.text}>About IPL</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.totalMatches(); }}>
                            <Text style={styles.text}>Total Matches</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.manOfMatch(); }}>
                            <Text style={styles.text}>Man of the Match</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.matchResult(); }}>
                            <Text style={styles.text}>Match Result:</Text>
                            <Icon name="ios-arrow-forward-outline" />
                        </ListItem>
                        <ListItem button style={styles.listItem} onPress={() => { Actions.matchSummary(); }}>
                            <Text style={styles.text}>Match Summary</Text>
                            <Icon name="ios-arrow-forward-outline" />
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
        fontSize: 18,
        textAlign: 'center'
    },
    text: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 16,

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
    }
};