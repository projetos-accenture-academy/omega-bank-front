import {PlanoConta} from 'src/app/shared/interfaces/plano-conta.interface';

export interface Lancamento {
    conta: number;
    data: string;
    descricao: string;
    id: number;
    planoConta: PlanoConta;
    tipo: string;
    valor: number;
  }