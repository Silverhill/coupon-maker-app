import React, { Component } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Button, ButtonGradient } from '../../src/commons/components';

import CenterView from './CenterView'

const story = storiesOf('Button', module)
story.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)

story.add('Normal', () => (
  <View style={{flex: 1, alignSelf: 'stretch'}}>
    <Button style={{width: 200, marginBottom: 10}} title='Registro' />
    <Button pill style={{width: 200, marginBottom: 10}} title='Registro' />
    <Button style={{marginBottom: 10}} title='Crear Cuenta' />
    <Button style={{marginBottom: 10}} disabled title='Disabled Button' />
    <Button style={{marginBottom: 10}} rightIcon='md-wifi' iconColor='white' title='Connect' />
    <Button leftIcon='md-text' iconColor='white' title='Add Text'/>
  </View>
))

story.add('ButtonGradient', () => (
  <View style={{flex: 1, alignSelf: 'stretch'}}>
    <ButtonGradient style={{marginBottom: 10}} title='Crear Cuenta' />
    <ButtonGradient style={{marginBottom: 10}} disabled title='Disabled Button' />
    <ButtonGradient style={{width: 200, marginBottom: 10}} pill title='Pill Button' />
    <ButtonGradient iconColor='white' rightIcon='md-add' style={{width: 200}} pill title='Add Coupon' />
  </View>
))