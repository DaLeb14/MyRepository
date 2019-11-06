
import { ClientState } from '../enums/client-state.enum';

export interface ClientI {
  id: string;
  name: string;
  email: string;
  state: ClientState;
}
