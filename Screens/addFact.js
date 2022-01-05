import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
    Button,
    Alert,
    TouchableOpacity
  } from "react-native";
  import { RFValue } from "react-native-responsive-fontsize";
  import DropDownPicker from "react-native-dropdown-picker";
  
  import AppLoading from "expo-app-loading";
  import * as Font from "expo-font";
  import firebase from 'firebase'
  let customFonts = {
    "Mali-Light": require("../assets/font/Mali-Light.ttf")
  };

export default class AddFact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          previewImage: "image_1",
          dropdownHeight: 40,
          light_theme: true
        };
      }

      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
       // this.fetchUser();
      }
    async addFact() {
        if(this.state.fact &&  this.state.description) {
          let storyData = {
            preview_image: this.state.previewImage,
            fact: this.state.fact,
            description: this.state.description,
            createdOn: new Date(),
            likes: 0
          };
          await firebase
            .database()
            .ref(
              "/facts/" +
                Math.random()
                  .toString(36)
                  .slice(2)
            )
            .set(factData)
            .then(function(snapshot) {});
          
          this.props.navigation.navigate("factsSCreen");
        }else{
            Alert.alert(
                "Error",
                "All fields are required!",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
              );
        }
    }
      async addStory() {
        if (this.state.fact &&  this.state.description) {
          let storyData = {
            preview_image: this.state.previewImage,
            fact: this.state.fact,
            description: this.state.description,
            author: "Kostas",
            created_on: new Date(),
            author_uid: "LjK3vQQIkmh678U0LNVsykuxSTk2",
            likes: 0
          };
          await firebase
            .database()
            .ref(
              "/facts/" +
                Math.random()
                  .toString(36)
                  .slice(2)
            )
            .set(factData)
            .then(function(snapshot) {});
          
          this.props.navigation.navigate("factsSCreen");
        } else {
          Alert.alert(
            "Error",
            "All fields are required!",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }
      }

    render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
          let preview_images = {
            image_1: require("../assets/dog.jpg"),
            image_2: require("../assets/elephant.jpg"),
            image_3: require("../assets/monkey.jpg"),
            image_4: require("../assets/pig.jpg"),
            image_5: require("../assets/zebra.jpg")
          };
          return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Text style={styles.iconText}>Animal Facts</Text>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>New Fact</Text>
                </View>
              </View>
              <View style={styles.fieldsContainer}>
                <ScrollView>
                  <Image
                    source={preview_images[this.state.previewImage]}
                    style={styles.previewImage}
                  ></Image>
                  <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                    <DropDownPicker
                      items={[
                        { label: "Image 1", value: "image_1" },
                        { label: "Image 2", value: "image_2" },
                        { label: "Image 3", value: "image_3" },
                        { label: "Image 4", value: "image_4" },
                        { label: "Image 5", value: "image_5" }
                      ]}
                      defaultValue={this.state.previewImage}
                      containerStyle={{
                        height: 40,
                        borderRadius: 20,
                        marginBottom: 10
                      }}
                      onOpen={() => {
                        this.setState({ dropdownHeight: 170 });
                      }}
                      onClose={() => {
                        this.setState({ dropdownHeight: 40 });
                      }}
                      style={{ backgroundColor: "transparent" }}
                      itemStyle={{
                        justifyContent: "flex-start"
                      }}
                      dropDownStyle={{ backgroundColor: "#2f345d" }}
                      labelStyle={{
                        color: "white",
                        fontFamily: "Mali-Light"
                      }}
                      arrowStyle={{
                        color: "white",
                        fontFamily: "Mali-Light"
                      }}
                      onChangeItem={item =>
                        this.setState({
                          previewImage: item.value
                        })
                      }
                    />
                  </View>
    
                  <TextInput
                    style={styles.inputFont}
                    onChangeText={fact => this.setState({ fact })}
                    placeholder={"Fact"}
                    placeholderTextColor="white"
                  />
    
                  <TextInput
                    style={[
                      styles.inputFont,
                      styles.inputFontExtra,
                      styles.inputTextBig
                    ]}
                    onChangeText={description => this.setState({ description })}
                    placeholder={"Description"}
                    multiline={true}
                    numberOfLines={4}
                    placeholderTextColor="white"
                  />
                 <TouchableOpacity><Text>Submit</Text></TouchableOpacity>
    
                 
                </ScrollView>
              </View>
              <View style={{ flex: 0.08 }} />
            </View>
          );
        }
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0D1821"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
      
    },
    iconText: {
        color: "white",
     
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Mali-Light"
    },
    fieldsContainer: {
      flex: 0.85
    },
    previewImage: {
      width: "93%",
      height: RFValue(250),
      alignSelf: "center",
      borderRadius: RFValue(10),
      marginVertical: RFValue(10),
      resizeMode: "contain"
    },
    inputFont: {
      height: RFValue(40),
      borderColor: "white",
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: "white",
      fontFamily: "Mali-Light"
    },
    inputFontExtra: {
      marginTop: RFValue(15)
    },
    inputTextBig: {
      textAlignVertical: "top",
      padding: RFValue(5)
    }
  });



//Image, fact, description