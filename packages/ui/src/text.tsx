export interface IText {
  content: string;
}
export const TextComponent = ({ content }: IText) => {
  return <div>{content}</div>;
};
