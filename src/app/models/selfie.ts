import { Wookie } from "./wookie";

/**
 * Représente un selfie d'un wookie
 */
export class Selfie {
  image: string | undefined;
  wookie: Wookie;
  titre: string | undefined;

  constructor(){
    this.wookie = new Wookie();
  }
}
