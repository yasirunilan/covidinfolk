import React from "react";
import {View} from "react-native";
import {Text} from "react-native-elements";
import {Colors} from "react-native/Libraries/NewAppScreen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class StatisticComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        marginTop: 32,
        paddingHorizontal: 24,
        alignItems: "center"
      }}>
        <View style={{
        }}>
          <FontAwesome5 name={this.props.iconName} size={this.props.iconSize}
                                   color={this.props.iconColor} />
        </View>
        <Text style={{
          fontSize: 24,
          fontWeight: '600',
          color: Colors.black,
        }}>{this.props.count}</Text>
        <Text style={{
          fontSize: 24,
          fontWeight: '600',
          color: Colors.black,
        }}>{this.props.text}</Text>

      </View>
    )
  }
}

export default StatisticComponent;
