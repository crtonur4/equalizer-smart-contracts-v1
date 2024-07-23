import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const FlashLoanProviderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="providerName" source="providerName" />
        <TextField label="apiUrl" source="apiUrl" />
        <TextField label="maximumLoanAmount" source="maximumLoanAmount" />
        <TextField label="fees" source="fees" />
      </SimpleShowLayout>
    </Show>
  );
};
