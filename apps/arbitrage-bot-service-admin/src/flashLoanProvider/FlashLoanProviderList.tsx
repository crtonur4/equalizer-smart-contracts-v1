import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const FlashLoanProviderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FlashLoanProviders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="providerName" source="providerName" />
        <TextField label="apiUrl" source="apiUrl" />
        <TextField label="maximumLoanAmount" source="maximumLoanAmount" />
        <TextField label="fees" source="fees" />
      </Datagrid>
    </List>
  );
};
