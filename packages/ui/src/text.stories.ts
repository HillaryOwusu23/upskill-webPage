import type { Meta, StoryObj } from "@storybook/react";
import { TextComponent } from "./Text";

const meta = {
  component: TextComponent,
} satisfies Meta<typeof TextComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Intro: Story = {
  args: {
    content: "Hello world",
  },
};
