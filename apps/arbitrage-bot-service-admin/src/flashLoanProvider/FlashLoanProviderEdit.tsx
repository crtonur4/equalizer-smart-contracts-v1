import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const FlashLoanProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="providerName" source="providerName" />
        <TextInput label="apiUrl" source="apiUrl" />
        <NumberInput label="maximumLoanAmount" source="maximumLoanAmount" />
        <NumberInput label="fees" source="fees" />
      </SimpleForm>
    </Edit>
  );
};
