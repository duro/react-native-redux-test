import React from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import { updateUsername } from '../ducks/user';
import { doSearch } from '../ducks/search';
import Dashboard from './Dashboard';

const {
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Text,
  StyleSheet,
  Component
} = React;

@connect(
  state => ({
    user: state.user,
    search: state.search
  }),
  dispatch => bindActionCreators({ updateUsername, doSearch }, dispatch)
)
export default class Main extends Component {

  handleChange(e) {
    this.props.updateUsername(e.nativeEvent.text)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.search.get(''))
  // }

  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a GitHub User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.props.user.get('username')}
          onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.doSearch}
          underlayColor="white">
            <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
