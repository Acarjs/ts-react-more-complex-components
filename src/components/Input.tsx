//This is a WRAPPER COMPONENT
import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>; //it is for gathering all remaining props above(...props). We merged all other props with InputProps. It must a generic type and in our case we need to enter 'input' type. Now we can use type="text" in the App.tsx component.

export default function Input({ label, id, ...props }: InputProps) {
  //...props collect all the remaning props of this object and store them in a new props object here : <input id={id} type="text" {...props} />. And then, spread all key:value properties on to this input.
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
