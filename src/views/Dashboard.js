import React from 'react-native';
import { connect } from 'react-redux/native';

const {
  Component,
  View,
  StyleSheet
} = React;

@connect(
  state => ({user: state.user})
)
export default class Dashboard extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text>This is the Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});
