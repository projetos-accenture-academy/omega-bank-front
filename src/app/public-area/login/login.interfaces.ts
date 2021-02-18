import { Conta } from '../../shared/interfaces/conta.interface';
import { Usuario } from '../../shared/interfaces/usuario.interface';


export interface LoginCredenciais {
  login: string;
  senha: string;
}

export interface LoginResponse {
  accounts: Conta;
  tokenExpeditionTime: Date;
  tokenExpirationTime: Date;
  token: string;
  login: string;
  user: Usuario;
}
