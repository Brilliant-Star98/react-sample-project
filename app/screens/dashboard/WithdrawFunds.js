import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../../assets/icons';
import { MainRoutes } from '../../config/navigation/routes';
import NavigationType from '../../config/navigation/propTypes';


export class WithdrawFunds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      reader: '',
      reference: ''
    };
  }

  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    // title: 'Grid Menu'.toUpperCase(),
    title: "Withdraw Funds",
  };

  state = {
    dimensions: undefined,
  };

  onContainerLayout = (event) => {
    if (this.state.height) {
      return;
    }
    const dimensions = event.nativeEvent.layout;
    this.setState({ dimensions });
  };

  renderItems = () => MainRoutes.map(this.renderItem);

  renderItem = (item) => (
    <RkButton
      rkType='tile'
      style={{ height: this.state.dimensions.width / 3, width: this.state.dimensions.width / 3 }}
      key={item.id}
      onPress={() => this.onItemPressed(item)}>
      <RkText style={styles.icon} rkType='primary moon xxlarge'>
        {item.icon}
      </RkText>
      <RkText rkType='small'>{item.title}</RkText>
    </RkButton>
  );

  onItemPressed = (item) => {
    this.props.navigation.navigate(item.id);
  };

  moveToMyMoney = () => {
    this.props.navigation.navigate("MyMoney");
  }

  moveToNewPing2 = () => {
    this.props.navigation.navigate("NewPing2");
  };
  moveToHome = () => {
    this.props.navigation.navigate("MainHome");
  };
  moveToNotification = () => {
    this.props.navigation.navigate("Notification");
  };
  moveToProfile = () => {
    this.props.navigation.navigate("Profile");
  };
  moveToChannels = () => {
    this.props.navigation.navigate("Channels");
  };
  moveToExplore = () => {
    this.props.navigation.navigate("Explore");
  };
  render() {
    const items = this.state.dimensions === undefined ? <View /> : this.renderItems();
    return (
      <View>
        <ScrollView
          style={styles.root}
          onLayout={this.onContainerLayout}
          contentContainerStyle={styles.rootContainer}>
          <Text style={[styles.sendText, styles.textNormal]}>AMOUNT</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder='γ$21,750,15'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.amount}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ amount: text })} />
          </View>
          <Text style={[styles.sendText, styles.textNormal]}>@PAYPAL EMAIL ADRESS</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              placeholder='sally@mainstreet.net'
              autoCapitalize='nonea'
              autoCorrect={false}
              value={this.state.reference}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ reference: text })} />
          </View>
          <View style={styles.optionCon}>
            <TouchableOpacity
              style={[styles.withdrawCol, styles.optionBut]}
              onPress={this.onDepositPressed}>
              <Text style={styles.optionButText}> Withdrawal </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkCon}>
            <Text style={[styles.linkText, styles.textNormal]}>Return to</Text>
            <TouchableOpacity onPress={() => this.moveToMyMoney()}>
              <Text style={styles.linkAds}> My Money</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkCon}>
            <Text style={styles.linkText}>You will be transferred to PayPal to complete transaction</Text>
          </View>
        </ScrollView>
        <View style={styles.headercontainer}>
          <View >
            <TouchableOpacity onPress={() => this.moveToHome()}>
              <Image style={styles.headerPic} source={require('../../assets/image1/images/home.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.moveToNotification()}>
              <Image style={styles.headerPic} onPress={this.moveToNotification} source={require('../../assets/image1/images/notification.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.moveToChannels()}>
              <Image style={styles.headerPic} onPress={this.moveToChannels} source={require('../../assets/image1/images/channels.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.moveToProfile()}>
              <Image style={styles.headerPic} onPress={this.moveToProfile} source={require('../../assets/image1/images/profile-icon.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <View styles={styles.padding}>
              <TouchableOpacity onPress={() => this.moveToExplore()}>
                <Image style={styles.headerPic} onPress={this.moveToExplore} source={require('../../assets/image1/images/search-icon.png')} />
              </TouchableOpacity>
            </View>
            {/* <View style={styles.homeline} /> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
    padding: 10,
    height: "90%"
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  empty: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  icon: {
    marginBottom: 16,
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: "10%",
    width: "100%",
    padding: 15,
    borderTopWidth: 0.4,
    borderColor: theme.colors.text.base,
    backgroundColor: theme.colors.screen.base,
  },
  authContainter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 100,
    width: "100%",
    padding: 5,
  },

  homeline: {
    width: "100%",
    borderBottomWidth: 3,
    borderBottomColor: "#099FD4",
    marginTop: 7,
    marginBottom: 15
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20
  },

  searchInput: {
    height: 50,
    flex: 5,
    fontSize: 20,
    backgroundColor: '#3b5461',
    paddingLeft: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: theme.colors.text.base
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 50,
    width: "100%",
    // padding: 5,
    // borderColor: "#ced4da",
    // borderWidth: 1,
    // borderRadius: 3,
    marginTop: 15,
    marginBottom: 20
  },
  headerPic: {
    width: 27,
    height: 28,
  },

  textNormal: {
    color: theme.colors.text.base,
  },
  sendText: {
    fontSize: 16,
    marginTop: 20
  },
  submitButton: {
    backgroundColor: 'rgb(47, 185, 179)',
    padding: 10,
    // margin: 15,
    height: 45,
    width: 150,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: "bold"
  },
  optionBut: {
    padding: 10,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 10,
    width: 200
  },
  optionButText: {
    fontSize: 16,
    color: 'white',
    // fontWeight: "bold"
  },
  withdrawCol: {
    backgroundColor: 'rgb(223, 73, 55)'
  },
  optionCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: "100%",
    padding: 5,
    marginTop: 10
  },
  linkText: {
    color: "rgb(120, 218, 206)",
    fontStyle: "italic",
    fontSize: 15,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold"
  },
  linkAds: {
    color: "rgb(120, 218, 206)",
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold"
  },
  linkCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 20,
    width: "100%",
    padding: 5,
    marginTop: 15
  },
}));
