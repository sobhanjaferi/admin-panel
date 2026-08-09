import { v4 as uuid } from "uuid";

export type AdminData = {
  readonly id: string;
  name: string;
  email: string;
  password: string;
};

export const adminData: AdminData[] = [
  {
    id: uuid(),
    name: "sobhan",
    email: "sobhanjafarii87@gmail.com",
    password: "Sobhan 1387",
  },
  {
    id: uuid(),
    name: "ali",
    email: "aliHamidzade4209@gmail.com",
    password: "123456778",
  },
];
