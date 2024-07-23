import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const ExchangeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="apiUrl" source="apiUrl" />
        <BooleanInput label="isIntegrated" source="isIntegrated" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="fees" source="fees" />
      </SimpleForm>
    </Edit>
  );
};
