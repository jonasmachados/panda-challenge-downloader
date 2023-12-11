import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import commonStyles from "../styles/commonStyles";

const Button = ({ onPress, title, loading }) => {
  return (
    <TouchableOpacity
      style={[commonStyles.button, loading && commonStyles.buttonDisabled]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={commonStyles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
