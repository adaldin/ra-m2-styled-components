import { Label, InputText } from '../atoms/index';

export function InputGroupText({ name, id, onChange, label }) {
  return (
    <div>
      <Label htmlFor={id} label={label} hidden={true} />
      <InputText text={label} name={name} id={id} onChange={onChange} />
    </div>
  );
}
