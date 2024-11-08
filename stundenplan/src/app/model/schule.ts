import {Klasse} from "./klasse";

export interface Schule {
  schulname: string;
  schulId: string;
  schulform: string; //TODO enum Schulform
  klassen: Klasse[];
}
