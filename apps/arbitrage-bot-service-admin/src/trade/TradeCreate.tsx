import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const TradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
