import type { Meta, StoryObj } from '@storybook/react';
import { TextComponent } from './text';


const meta = {
component: TextComponent,
parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof TextComponent>

export default meta;

type Story = StoryObj<typeof meta>;

export const Intro:Story = {
    args:{
        content:'Hello world'
    }
}