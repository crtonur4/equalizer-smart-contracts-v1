import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const FlashLoanProviderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="providerName" source="providerName" />
        <TextInput label="apiUrl" source="apiUrl" />
        <NumberInput label="maximumLoanAmount" source="maximumLoanAmount" />
        <NumberInput label="fees" source="fees" />
      </SimpleForm>
    </Create>
  );
};
