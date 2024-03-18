import { fn } from '@storybook/test';
import Input from '../Input';
import React from 'react'

export default {
  title: 'Reactsearch',
  component: ()=><Input data={['play', 'playground', 'playhouse', 'plague', 'plet', 'platu']}/>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};


export const Search = {
  args: {
    primary: true,
    label: 'Button',
  },
};

