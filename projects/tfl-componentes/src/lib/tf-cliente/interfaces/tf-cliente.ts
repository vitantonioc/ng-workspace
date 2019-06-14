export interface TfCliente {
  id: number;
  ragioneSociale: string;
  contatto?: string;
  indirizzo?: string;
  citta?: string;
  nazione?: string;
  premium?: boolean;
}
