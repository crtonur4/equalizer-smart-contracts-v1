import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="tokenPair" source="tokenPair" />
        <NumberInput label="profit" source="profit" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="executionTime" source="executionTime" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
