import { FieldProps } from "@rjsf/utils";
import { TextFieldStandard } from "@/lib";

export const ItemPrice: React.FC<FieldProps> = (props: FieldProps) => {

  const handleChange = (e : any) => {
    props.onChange(parseFloat(e?.target?.value))
  };
  
  return (
    <TextFieldStandard
      label={props.schema.title}
      value={props.formData}
      onChange={handleChange}
      type={props.uiSchema?.['ui:option']?.type || "text"}
    />
  );
};
