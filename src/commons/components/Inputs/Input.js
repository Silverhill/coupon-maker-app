import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/native';
import { View, TextInput } from 'react-native';
import { Palette } from '../../styles';
import Typo from '../Typography';
import { Ionicons } from '@expo/vector-icons';

const StyledInput = styled(TextInput)`
  border-color: ${props => {
    if(props.isOnFocus) return Palette.accent;
    return Palette.neutralLight;
  }};
  border-width: ${props => props.isOnFocus ? 1 : 1};
  align-self: stretch;
  padding-horizontal: ${props => props.pill ? 20 : 10};
  padding-vertical: 10;
  height: 45;
  border-radius: ${props => {
    if (props.pill) return 50;
    return 3;
  }};
`;

const Container = styled(View)`
  align-self: stretch;
`;

const Label = styled(View)`
  margin-bottom: 5;
`;

class Input extends Component {
  state = {
    isOnFocus: false,
  }

  onFocusInput = (e) => {
    const { onFocus } = this.props;
    this.setState({isOnFocus: true})
    if(onFocus) onFocus(e);
  }

  onBlurInput = (e) => {
    const { onBlur } = this.props;
    this.setState({isOnFocus: false})
    if(onBlur) onBlur(e);
  }

  render() {
    const { isOnFocus } = this.state;
    const { pill, label, ...rest } = this.props;

    return (
      <Container>
      {label && (
        <Label>
          <Typo.Header small>{label}</Typo.Header>
        </Label>
      )}
      <StyledInput
          isOnFocus={isOnFocus}
          onFocus={this.onFocusInput}
          onBlur={this.onBlurInput}
          underlineColorAndroid='transparent'
          pill={pill}
          {...rest}
        />
      </Container>
    );
  }
}

export default Input;