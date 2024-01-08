import { FieldProps } from "@rjsf/utils";
import { TextFieldStandard } from "@/lib";

export const ItemNameInput: React.FC<FieldProps> = (props: FieldProps) => {
  console.log(props);
  const handleChange = (e : any) => {
    props.onChange(e?.target?.value)
  };
  
  return (
    <TextFieldStandard
      label={props.schema.title}
      value={props.formData}
      onChange={handleChange}
    />
  );
};
