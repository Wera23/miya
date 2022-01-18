import { User } from "src/users/schema/user.schema";

export class UpdateRetriever {
  id: number;
  name: string;
  age?: string;
  city: string;
  voivodeship: string;
  gender: string;
  owner?: string;
  description?: string;
  lat: number;
  long: number;
  instagram: string;
  facebook: string;
  user: User;
}
