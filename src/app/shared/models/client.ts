
import { ClientState } from '../enums/client-state.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: string;
  name: string;
  email: string;
  state = ClientState.ACTIF;


  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  // totalTtc(tva?: number): number {
  //   if (tva && tva > 0) {
  //     return this.totalHt() * (1 + tva / 100);
  //   }

  //   if (tva && tva <= 0) {
  //     return this.totalHt();
  //   }

  //   return this.totalHt() * (1 + this.tauxTva / 100);

  // }

}
