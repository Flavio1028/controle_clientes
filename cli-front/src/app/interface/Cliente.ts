export interface Cliente {
    idCliente: number;
    nmCliente: string;
    dtNascimento: string;
    email: string;
    cpf: string;
    rg: string;
    naturalidade: string;
    telefoneFixo: string;
    telefoneCelular?: string;
    telefoneComercial?: string;
    telefoneExtra?: string;
    profissao: string;
}