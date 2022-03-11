import {Pokemon} from "./pokemon.model";

export interface PagedData {
  data: Pokemon[];
  offset : number;
  limit : number;
}
