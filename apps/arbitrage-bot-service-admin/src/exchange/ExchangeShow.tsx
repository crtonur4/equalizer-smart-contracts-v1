import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ExchangeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="apiUrl" source="apiUrl" />
        <BooleanField label="isIntegrated" source="isIntegrated" />
        <TextField label="status" source="status" />
        <TextField label="fees" source="fees" />
      </SimpleShowLayout>
    </Show>
  );
};
