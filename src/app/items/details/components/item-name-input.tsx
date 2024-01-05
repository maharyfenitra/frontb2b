import { FieldProps } from "@rjsf/utils";
import { TextFieldStandard } from "@/lib";

export const ItemNameInput: React.FC<FieldProps> = (props: FieldProps) => {
  return <TextFieldStandard label={props.name} />;
};
