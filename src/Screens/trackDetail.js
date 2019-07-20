import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Header from '../Components/Header';
import styles from '../Config/styles';
import { p } from '../Config/normalize';

export default class TrackDetail extends Component {

  state = {
    meeting: 'RANDWICK',
    track: 'GOOD',
    rail: 'TRUE',
    race: '3',
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'Track Details'}
          rightElement={(
            <MaterialCommunityIcons
              onPress={()=>Actions.racetime()}
              name="arrow-right"
              color={'#fff'}
              size={p(24)}
            />)}
        />
        <View style={styles.view}>
          <Text style={styles.titleText}>Meetings</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(meeting) => this.setState({ meeting })}
            value={this.state.meeting}
          />

          <Text style={styles.titleText}>Track Condition</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(track) => this.setState({ track })}
            value={this.state.track}
          />

          <Text style={styles.titleText}>Rail</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(rail) => this.setState({ rail })}
            value={this.state.rail}
          />

          <Text style={styles.titleText}>How many races?</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={'numeric'}
            onChangeText={(race) => this.setState({ race })}
            value={this.state.race}
          />
        </View>
      </View>
    );
  }
}
