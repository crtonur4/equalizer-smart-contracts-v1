export type Exchange = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  apiUrl: string | null;
  isIntegrated: boolean | null;
  status?: "Option1" | null;
  fees: number | null;
};
