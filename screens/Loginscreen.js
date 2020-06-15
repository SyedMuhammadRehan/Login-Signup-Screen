import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleViewRef = (ref) => (this.view = ref);

  bounce = () =>
    this.view
      .bounceIn(900)
      .then((endState) =>
        console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'),
      );

  componentDidMount() {
    StatusBar.setHidden(true);
    this.bounce();
  }
  render() {
    return (
      <View>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#6e48aa', 'white']}
          style={styles.upView}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            colors={['#8E0E00', '#1F1C18']}
            style={styles.oneTop}
          />
          <Text style={styles.loginTxt}>Login !</Text>

          <Image
            source={require('../images/logo1.png')}
            style={{
              width: 50,
              height: 50,
              marginTop: -15,
              marginBottom: 8,
              marginLeft: 180,
            }}
          />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text style={styles.mainTxt}>Enjoy everything that</Text>
            <Text style={styles.mainTxt2}>your city has</Text>
          </View>

          <Image source={require('../images/logo.png')} />
        </LinearGradient>

        <KeyboardAvoidingView
          behavior="position"
          style={styles.keyboardViewContainer}
          keyboardVerticalOffset={2}>
          <Animatable.View ref={this.handleViewRef} style={styles.box}>
            <Text style={styles.containerlogTxt}>Login </Text>
            <Input
              placeholder="Email"
              containerStyle={styles.emailBox}
              inputContainerStyle={styles.inputContainerStyle}
              leftIcon={<MaterialIcons name="email" size={24} color="black" />}
              ref={(input) => {
                this.secondTextInput = input;
              }}
              blurOnSubmit={true}
              onSubmitEditing={() => {
                this.thirdTextInput.focus();
              }}
            />

            <Input
              leftIcon={<MaterialIcons name="lock" size={24} color="black" />}
              placeholder="Password"
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={styles.emailBox}
              secureTextEntry={true}
              ref={(input) => {
                this.thirdTextInput = input;
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('signup');
              }}>
              <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
          </Animatable.View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  upView: {},
  oneTop: {
    height: 400,
    width: 470,
    borderRadius: 100 / 0.5,
    marginTop: -170,
    marginLeft: -40,
  },

  box: {
    shadowColor: '#f7bd08',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 20,
    backgroundColor: 'white',
    position: 'absolute',
    height: 350,
    width: 340,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 150,
  },
  nameBox: {
    height: 40,
    width: 283,
    marginLeft: 30,
    marginTop: 30,
  },
  emailBox: {
    height: 40,
    width: 283,
    marginLeft: 30,
    marginTop: 25,
  },
  loginTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: -180,
    color: 'white',
  },
  mainTxt: {
    fontSize: 25,

    marginLeft: 35,
    marginTop: -15,
    color: 'white',
  },
  mainTxt2: {
    fontSize: 25,

    marginLeft: 35,
    marginTop: 10,
    color: 'white',
  },
  keyboardViewContainer: {
    position: 'absolute',
    height: 450,
    width: 400,
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 30,
  },
  inputContainerStyle: {
    borderBottomColor: '#8E0E00',
    borderBottomWidth: 2,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8E0E00',
    padding: 10,
    margin: 40,
    borderRadius: 10,
    elevation: 5,
  },
  containerlogTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: '#8E0E00',
  },
});
