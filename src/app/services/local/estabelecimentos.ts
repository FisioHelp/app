import { Estabelecimento } from './estabelecimento';
import { SERVICO } from './tipos-de-servico';

// {
//   nome: '',
//   end: '',
//   tel: '',
//   whatsapp: '',
//   valor: 'Valor social (valor acessível)',
//   servicos: [SERVICO.CRIANCAS_E_ADOLESCENTES],
//   descricao_servicos: '',
//   email: '',
//   mapa:
//     ''
// },

// Tipos de serviço psicologia
export const ESTABELECIMENTOS: Estabelecimento[] = [
  {
    nome: 'Clínica CICV',
    end: 'Av. Tancredo Neves 1632, Torre Sul, Sl 616.',
    tel: '(71) 3271-4265',
    // whatsapp: '',
    valor: 'Atendimento pelo plano de saúde',
    servicos: [SERVICO.FISIOTERAPIA_PLANO, SERVICO.PILATES_PLANO, SERVICO.RPG_PLANO],
    descricao_servicos: '',
    email: 'atendimento@clinicacicv.com.br',
    // mapa: ''
  },


]
