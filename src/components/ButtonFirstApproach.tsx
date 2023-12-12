import { type ComponentPropsWithoutRef } from 'react';

//This is a WRAPPER COMPONENT
type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>; //with using & ComponentPropsWithoutRef<'a'> we cannot use "href" property for button element

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
  //const {el,...otherProps} =props; //TypeScript wouldn't understand that! It would give an error.

  if (props.el === 'anchor') {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
