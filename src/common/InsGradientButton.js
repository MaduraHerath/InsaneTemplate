import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableHighlight,Text, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class InsGradientButton extends Component {

    componentDidMount(){
        console.log("Props",this.props)
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.main} onPress={this.onPress} >
                <LinearGradient style={styles.button}
                                colors={["#315AFF", "#00D2FF"]}
                                start={{x: 0.0, y: 0.8}} end={{x: 0.6, y: 0.4}}>
                    <TouchableHighlight style={styles.button} onPress={() =>  {this.props.navigation.navigate(this.props.onNavigate)}} >
                        <Text style={{color: "#FAFAFA"}}>
                            {this.props.children}
                        </Text>
                    </TouchableHighlight>
                </LinearGradient>
            </View>

        );
    }


}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 6,
        margin: 0,
        borderBottomColor: 'white',
        borderRadius: 10,
        width: width * 0.8


    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderRadius: 100,
        margin: 20
    },
    main: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }

})

