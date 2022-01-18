import { User } from "src/users/schema/user.schema";

export class CreateRetriever {
  name: string;
  age?: string;
  city: string;
  voivodeship: string;
  gender: string;
  owner?: string;
  description?: string;
  id: number;
  lat: number;
  long: number;
  instagram: string;
  facebook: string;
  user: User;
}
