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
    descricao_servicos: 'Sessões de fisioterapia, pilates e RPG através do plano',
    email: 'atendimento@clinicacicv.com.br',
    mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.25777799883!2d-38.4537758!3d-12.983717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85d003777d60dfd8!2sCICV!5e0!3m2!1spt-BR!2sbr!4v1540147313495" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  {
    nome: 'Clínica Viterbo',
    end: 'Av. Tancredo Neves, 1632, Torre Sul, sl 1801 a 1804 - Caminho das Árvores, Salvador - BA, 41820-020',
    tel: '(71) 3016-3015',
    // whatsapp: '',
    valor: 'Valor social (valor acessível)',
    servicos: [SERVICO.FISIOTERAPIA_PLANO, SERVICO.RPG_PLANO],
    descricao_servicos: 'Sessões de fisioterapia e RPG através do plano',
    // email: '',
    mapa:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.28406166534!2d-38.452414!3d-12.983297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6a221353c651d5!2sCl%C3%ADnica+Viterbo!5e0!3m2!1spt-BR!2sbr!4v1540147119296" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },



]
