import { Injectable } from '@angular/core';

@Injectable()
export class LocalServiceProvider {

  constructor() {
    console.log('Hello LocalServiceProvider Provider');
  }

  public estabelicimentoCache: any;

  obterEstabelecimentos(): any {

    // Tipos de serviço psicologia e psiquiatria
    let s = {
      "caps": "CAPS",
      "i": "Terapia individual",
      "g": "Terapia de Grupo",
      "f": "Terapia Familiar",
      "c": "Terapia Conjugal",
      "p": "Orientação Profissional",
      "l": "LGBT",
      "d": "Drogas"
    }

    // Tipos de serviço psicologia
    let estabelecimentos = [

      // Modelo:
      // {
      //   nome: "",
      //   end: "",
      //   tel: "",
      //   valor: "Gratuito",
      //   servico: [,],
      //   descricao_servicos: "",
      //   mapa: ''
      // },


      {
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1rNueM-JqCQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        servico: [s.caps],

      },
      {
        nome: "CAPS AD - Centro de Atenção Psicossocial Álcool e Drogas",
        end: "Rua Conde Pereira Carneiro, 271, Pernambués",
        tel: "3238-2847",
        valor: "Gratuito",
        servico: [s.i, s.g, s.d, s.caps],
        descricao_servicos: "Atendimento psiquiátrico e psicoterapia de adultos ou crianças e adolescentes com necessidades decorrentes do uso de crack, álcool e outras drogas, grupos e oficinas. Compreende o território do distrito Cabula Beirú, Boca do Rio, Liberdade e Itapuã.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0489063423342!2d-38.466854185177986!3d-12.96872239085781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ade30870785%3A0x2708ee5624f75575!2sR.+Conde+Pereira+Carneiro%2C+271+-+Pernambu%C3%A9s%2C+Salvador+-+BA%2C+41100-010!5e0!3m2!1spt-BR!2sbr!4v1530940558299" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "CETAD - Centro de Estudos e Transtornos do Abuso de Drogas",
        end: "Av. Pedro Lessa, n 123, Canela.",
        tel: "3283-7180/ 7181",
        valor: "Gratuito",
        servico: [s.i, s.g, s.d],
        descricao_servicos: "Atendimento psicológico individual e em grupo ao usuário de drogas,  oficinas, salas de espera, ponto da cidadania, programa de intensificação de cuidados.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6522207459925!2d-38.525833285177754!3d-12.994081790841182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160486c4fd4d4b%3A0x9b8b6c3240dc6390!2sR.+Pedro+Lessa%2C+123+-+Canela%2C+Salvador+-+BA%2C+40110-050!5e0!3m2!1spt-BR!2sbr!4v1530940782888" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "CATA - Centro de Acolhimento e Tratamento de Alcoolista (Hospital Santo Antônio)",
        end: "Av. Bomfim, 161, Largo de Roma, Portão 7",
        tel: "3310-1195/ 3310-1291",
        valor: "Gratuito",
        servico: [s.i, s.g, s.d],
        descricao_servicos: "Psicoterapia individual, grupos terapêuticos, grupos informativos, internação, acompanhamento ambulatorial a pessoas com necessidades decorrentes do uso abusivo de álcool.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5733980210753!2d-38.509015100706094!3d-12.935117562534588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3fc696323413476!2sAmbulat%C3%B3rio+Presidente+Jos%C3%A9+Sarney!5e0!3m2!1spt-BR!2sbr!4v1530941046948" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "Hospital Geral Couto Maia",
        end: "Rua São Francisco, s/n, Monte Serrat",
        tel: "3316-3084",
        valor: "Gratuito",
        servico: [s.i, s.f],
        descricao_servicos: "Neurologia e acompanhamento psicológico a pacientes com hanseníase e familiares",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.71451969123!2d-38.515134449204204!3d-12.926061062354414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71605620d7cdfb1%3A0xcb2127d46940bdc0!2sHospital+Couto+Maia!5e0!3m2!1spt-BR!2sbr!4v1530881072450" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "Instituto de Saúde da Faculdade Unijorge",
        end: "Av. Luís Viana Filho, 6775, Paralela",
        tel: "3206-8015",
        valor: "Gratuito",
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia individual a todas as faixas etárias, Psicodiagnóstico, Avaliação Psiconeurológica, Orientação Profissional e Grupos terapêuticos.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5362927581573!2d-38.41222634920404!3d-12.937497762586544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610af309d2219%3A0xbc365de20840c79e!2sAv.+Lu%C3%ADs+Viana%2C+6775+-+S%C3%A3o+Marcos%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530877497475" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      // Thaiane
      {
        nome: "CREASI - Centro de Referência de Atenção à Saúde do Idoso",
        end: "Av. Antonio Carlos Magalhães, s/n, Iguatemi",
        tel: "3270-5741/5758",
        valor: "Gratuito",
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia individual e em grupo para idosos, grupos de convivência, atendimento familiar, avaliação cognitiva, atividades educativas e psiquiatria.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.253897976643!2d-38.511242241618795!3d-12.993793332773462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b3c486d22fb%3A0xcf98d6732a5be127!2sCREASI!5e0!3m2!1spt-BR!2sbr!4v1530883858773" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },
      {
        nome: "Centro de Referência LGBT",
        end: "Avenida Oceânica, 3.731, Rio Vermelho",
        tel: "3202-2750",
        valor: "Gratuito",
        servico: [s.i, s.l],
        descricao_servicos: "acompanhamento e orientação jurídica, psicológica e social ao público LGBT",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3967385491915!2d-38.501651249497044!3d-13.010388590785437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035b98065213%3A0x5506b9f6469feb22!2sCentro+Municipal+de+Refer%C3%AAncia+LGBT!5e0!3m2!1spt-BR!2sbr!4v1530884873584" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },
      {
        nome: "ABRE - Associação Baiana de Reabilitação e Educação do Excepcional",
        end: "Rua Raul Leite, 93, Vila Laura, Matatu de Brotas.",
        tel: "3021-0500",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Reabilitação, Habilitação e educação de crianças e adolescentes portadores de deficiência mental, Serviço Social, Neurologia, Fonoaudiologia, Psiquiatria, Psicoterapia e Psicopedagogia.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.880474847214!2d-38.50227635092514!3d-12.979495863436535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c6c824a1e5%3A0x335b8019a4187f47!2sAssocia%C3%A7%C3%A3o+Baiana+de+Recupera%C3%A7%C3%A3o+do+Excepcional!5e0!3m2!1spt-BR!2sbr!4v1531040998635" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "INESPI - Associação de Pais e Amigos de Crianças e Adolescentes com Distúrbios de Comportamento",
        end: "Rua Alberto Fiúza, no 500, Imbuí.",
        tel: "3231-1502",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Avaliação psicológica, pedagógica e psiquiátrica. Grupos pedagógicos e terapêuticos.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.048465646228!2d-38.43822564949772!3d-12.968750590812864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a50c23e2471%3A0x91aaa4b6ed532a96!2sR.+Alberto+Fi%C3%BAsa%2C+500+-+Imbu%C3%AD%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530886579980" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  '
      },
      //Ester
      {
        nome: "IBR - Instituto Baiano de Reabilitação",
        end: " Av. Presidente Vargas, no 2947, Ondina.",
        tel: "Tel: 3504-5900",
        // E-mail: ibr@fjs.org.br
        valor: "Gratuito",
        servico: [s.i, s.f],
        descricao_servicos: "Reabilitação e atendimento psicossocial a pessoa com deficiência física",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Centro de Atendimento Educacional Especializado Pestalozzi da Bahia",
        end: " Av. Ademar de Barros, s/n, Ondina.",
        tel: " 3247-0049/3331-9456",
        valor: "Gratuito",
        servico: [s.i, s.f, s.g],
        descricao_servicos: "Serviços: Educacionais, pedagógicos e psicopedagógicos a pessoas de 6 a 35 anos com necessidades educacionais especiais em deficiência intelectual e TGB - Transtorno Global em Desenvolvimento (autismo). Núcleos de arte-cultura, esporte e lazer, apoio pedagógico e de tecnologia e informação.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.46869232791!2d-38.511250049144174!3d-13.00579799078847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036094a21545%3A0x9af813f09a75851f!2sAv.+Adhemar+de+Barros+-+Ondina%2C+Salvador+-+BA!5e0!3m2!1sen!2sbr!4v1530883126152" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Instituto Guanabara",
        end: "Rua Frederico Costa, n 93, Brotas.",
        tel: "3244-1142",
        valor: "Gratuito",
        servico: [s.f, s.g],
        descricao_servicos: " Reabilitação, habilitação, educação e tratamento de crianças, adolescentes e adultos portadores de deficiência mental e transtornos nas áreas emocional, psicomotora e neurológica.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8477617282606!2d-38.50219964914424!3d-12.981587290804386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c6c4346085%3A0xf0f0e745dfd2786e!2sR.+Frederico+Costa%2C+93+-+Engenho+Velho+de+Brotas%2C+Salvador+-+BA%2C+40243-045!5e0!3m2!1sen!2sbr!4v1530883353890" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  '
      },

      {
        nome: "Centro Estadual de Prevenção de Deficiência (SUS)",
        end: "Av. ACM, s/n, Iguatemi",
        tel: "3351-2330/ 3270-5601",
        valor: "Gratuito",
        servico: [s.f, s.p],
        descricao_servicos: "Acompanhamento psicossocial, oficina terapêutica e atendimento psicopedagógico, visando à reabilitação física e neuroevolutiva de pessoas com deficiência.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.564779135166!2d-38.535121637809524!3d-12.98158492755927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa440c6fe29a3af6e!2sAvenida+Ant%C3%B4nio+Carlos+Magalh%C3%A3es%2C+S%2FN!5e0!3m2!1sen!2sbr!4v1530884342503" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      // Flávia
      {
        nome: "NACPC - Núcleo de Atendimento à Criança com Paralisia Cerebral",
        end: "Rua do Corte Grande, 160, Alto de Ondina",
        tel: "3611-2902",
        valor: "Gratuito",
        servico: [s.i, s.f],
        descricao_servicos: "Acompanhamento psicológico a crianças com paralisia cerebral e seus familiares.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.450451539659!2d-38.50325274949709!3d-13.006961890787682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035ec9190fe9%3A0x44bbe300230168ba!2sNACPC!5e0!3m2!1sen!2sbr!4v1530795898069" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "Escola Bahiana de Medicina e Saúde Pública",
        end: "Av. Dom João VI, 275, Brotas",
        tel: "3276-8259/8298",
        valor: "Gratuito",
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia individual (todas as faixas etárias) e Grupo terapêuticos.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7056640692804!2d-38.49023994949735!3d-12.990668090798456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604b468305749%3A0x72a5e386090aeb20!2sBAHIANA+-+School+of+Medicine+and+Public+Health!5e0!3m2!1sen!2sbr!4v1530796297375" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> '
      },

      {
        nome: "Núcleo de Estudos e Práticas Psicológicas (NEPSI) da Unifacs",
        end: "Rua Solimões, 181, Saboeiro",
        tel: "3271-8119",
        valor: "Gratuito",
        servico: [s.i, s.c, s.f, s.p],
        descricao_servicos: "Psicoterapia individual, conjugal, familiar, psicodiagnóstico e orientação profissional",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0610173228656!2d-38.444615349497695!3d-12.967947390813427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a56347e5f53%3A0x2e23aca9bc3c28e1!2sUnifacs+PA+10!5e0!3m2!1sen!2sbr!4v1530796458956" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "FTC - Faculdade de Tecnologia e Ciências",
        end: "Av. Luís Viana Filho, 8812, Paralela",
        tel: "3281-8073",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Psicodiagnóstico, psicoterapia individual (todas as faixas etárias) e psicoterapia em grupos, família e casal",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5754021517782!2d-38.39477344949795!3d-12.934988990835148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716174fae89b33b%3A0x163e53b115d615cd!2sFTC+-+Faculdade+de+Tecnologia+e+Ci%C3%AAncias%2C+Campus+Salvador!5e0!3m2!1sen!2sbr!4v1530796580180" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      //Naiara

      {
        nome: "UFBA - Universidade Federal da Bahia",
        end: "Rua Professor Aristides Novais, 197, Federação (São Lázaro)",
        tel: "3235-4589",
        valor: "Gratuito ou Preço Negociado",
        servico: [s.i, s.p],
        descricao_servicos: "Atendimento psicológico individual (adolescente, adulto psicodiagnóstico e orientação profissional e idoso)",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.54935361837!2d-38.513638949529465!3d-13.000649963871066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716049de15a3b17%3A0xe744f5fde0253b33!2sR.+Prof.+Arist%C3%ADdes+Novis%2C+197+-+Federa%C3%A7%C3%A3o%2C+Salvador+-+BA%2C+40210-630!5e0!3m2!1spt-BR!2sbr!4v1530883874947" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "Faculdade Ruy Barbosa",
        end: "Rua Theodomiro Batista, 422, Rio Vermelho",
        tel: "3205-1745",
        valor: "Gratuito",
        servico: [s.i, s.p, s.l],
        descricao_servicos: "Orientação profissional, psicoterapia individual e familiar (todas as faixas etárias), diagnóstico e reabilitação cognitiva.Atendimento psicológico com enfoque em gênero(núcleo de Direitos Humanos e LGBT).",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.7040583534754!2d-38.48220960800574!3d-13.009662778361196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161cabb1e48e97%3A0x2980e20c7b0b64ea!2sRua+Theodomiro+Baptista%2C+422+-+Rio+Vermelho%2C+BA%2C+41940-320!5e0!3m2!1spt-BR!2sbr!4v1530884106686" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "Instituto de Saúde da Faculdade Unijorge",
        end: "Av. Luís Viana Filho, 6775, Paralela",
        tel: "3206-8015",
        valor: "Gratuito",
        servico: [s.i, s.g, s.p],
        descricao_servicos: "Psicoterapia individual a todas as faixas etárias, Psicodiagnóstico, Avaliação Psiconeurológica, Orientação Profissional e Grupos terapêuticos.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.389013382017!2d-38.43724443958639!3d-12.952733188922403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610af309d2219%3A0xbc365de20840c79e!2sAv.+Lu%C3%ADs+Viana%2C+6775+-+S%C3%A3o+Marcos%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1530884231477" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      {
        nome: "Faculdade da Cidade do Salvador",
        end: "Av. Estados Unidos, 37, 3° andar, Comércio",
        tel: "3254-6916/6943",
        valor: "Gratuito ou Preço Negociado",
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia individual e em grupo para crianças, adolescentes e adultos.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.069513768239!2d-38.5115930495299!3d-12.967403663193645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604e11a5d4391%3A0x3ab90f53e136da6a!2sAv.+Estados+Unidos%2C+37+-+3%C2%B0+andar+-+Comercio%2C+Salvador+-+BA%2C+40010-020!5e0!3m2!1spt-BR!2sbr!4v1530884363209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      // Beatriz
      {
        nome: "Núcleo de Atendimento Psicológico (NAP) da Faculdade Castro Alves/UNIRB",
        end: "Rua Rubem Berta, 128, Pituba",
        tel: "3033-0009",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Psicoterapia individual para crianças, adolescentes e adultos",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5721685101134!2d-38.45320374949717!3d-12.999193490792829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x450657f3ff4cc65%3A0x9e7c2345cb524bb0!2sFaculdade+Castro+Alves!5e0!3m2!1spt-BR!2sbr!4v1530882231553" width="600" height="450" frameborder="0" style="border:0" allowfullscreen> </iframe>'
      },
      {
        nome: "FACULDADE SOCIAL DA BAHIA – FSBA",
        end: "Av. Oceânica, 2717, Ondina",
        tel: "4009-2937/2935",
        valor: "Gratuito",
        servico: [s.i],
        descricao_servicos: "Psicoterapia individual a todas as faixas etárias",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.395059549233!2d-38.510682749497334!3d-13.01049569078536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716036635c57f13%3A0xaabc087e3c266e12!2sFaculdade+Social+da+Bahia!5e0!3m2!1spt-BR!2sbr!4v1530882460413" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "UNIME PARALELA",
        end: "Rua Jairo Simões, 3172, Imbuí",
        tel: "3879-9155",
        valor: "Gratuito",
        servico: [s.i, s.p],
        descricao_servicos: "Atendimento psicológico individual(criança, adolescente, adulto e idoso) grupos terapêuticos, orientação para pais, orientação profissional(carreira / coaching, inserção no mercado de trabalho, qualidade de vida no trabalho e saúde mental do/a trabalhador/a)",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1748632446975!2d-38.43402704949762!3d-12.960659990818193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a42d714b603%3A0xdf606e5008e75b2b!2sR.+Prof.+Ja%C3%ADro+Sim%C3%B5es%2C+3172+-+Pitua%C3%A7u%2C+Salvador+-+BA%2C+41720-375!5e0!3m2!1spt-BR!2sbr!4v1530882793957" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "Faculdade Estácio",
        end: "Rua Xingu, 179, Jd Atalaia, Stiep.",
        tel: "2107-8144",
        valor: "Gratuito",
        servico: [s.i, s.f],
        descricao_servicos: "psicoterapia individual (todas as faixas etárias) e familiar",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.845016404577!2d-38.44905474949743!3d-12.981762790804314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b06e3eee8a5%3A0x33988cea9946e2e0!2zRXN0w6FjaW8!5e0!3m2!1spt-BR!2sbr!4v1530883024622" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "UNIVERSIDADE DO ESTADO DA BAHIA – UNEB",
        end: "Rua Silveira Martins, 2555, Cabula",
        tel: "3117-5336/5341",
        valor: "Gratuito",
        servico: [s.i, s.g],
        descricao_servicos: "psicoterapia individual e em grupo com todas as faixas etárias",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.318776205092!2d-38.46079249843412!3d-12.951442199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71612308d8d0ea7%3A0xdddaf66ca849c879!2sUniversidade+do+Estado+da+Bahia!5e0!3m2!1spt-BR!2sbr!4v1530883300079" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "COFAM - Centro de  Orientação Familiar.",
        end: "Av.  Joana  Angélica,  n°124,  Nazaré  (Próximo  ao  colégio  central  e  curso opção).",
        tel: "3242-5959",
        valor: "Acordado  entre  terapeuta  e  atendido  de  acordo  com  condição socioeconômica  do  mesmo",
        servico: [s.i, s.g, s.f],
        descricao_servicos: "Psicoterapia  de  família,  casal,  adolescente,  individual e  em  grupo.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.861241087727!2d-38.51263624930484!3d-12.980725563465388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604eb76dc1d9b%3A0x8d29f926c01e5948!2sAv.+Joana+Ang%C3%A9lica%2C+124+-+Nazar%C3%A9%2C+Salvador+-+BA%2C+40050-003!5e0!3m2!1spt-BR!2sbr!4v1531318273919" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        nome: "Centro de  Estudos  de  Família  e  Casal",
        end: "Parque  Lucaia,  n  281,  Edf.  WM,  Sala  404,  Horto  Florestal.",
        tel: "3022-3149",
        valor: "Triagem  gratuita. Valor  do  atendimento  gratuito ou negociado.",
        servico: [s.i, s.g],
        descricao_servicos: "Psicoterapia  individual, de  família  e  casal.",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.461910601058!2d-38.49029245753272!3d-13.00623072811388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71603560859f611%3A0xd6b7ca8e618b7557!2sR.+Lucaia%2C+281+-+Rio+Vermelho%2C+Salvador+-+BA%2C+41940-660!5e0!3m2!1spt-BR!2sbr!4v1531318996417" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },

      // Flávia
      {
        nome: "CAPS II GARCIA/UFBA",
        end: "R. Leovigildo Filgueiras 392, Garcia Ref. Próx. Colégio 2 de Julho",
        tel: "3328-7408 / 3329-1004",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "Atendimento das 8h00 às 17h00",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.687480564788!2d-38.519506685685705!3d-12.991829663734729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716048545244633%3A0x659fe50b296e003c!2sCAPS+II+UFBA!5e0!3m2!1spt-BR!2sbr!4v1531403433648" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
        bairros_atendidos: "Alto da Bola, Alto da Sereia, Alto das Pombas, Alto do Areal, Alto do Gantois, Alto do Sobradinho, Amaralina, Avenida Brandão, Baixa Vai quem quer, Banco dos Ingleses, Barra, Barra Avenida, Binóculo, Cardeal da Silva, Calabar, Calabar, Caminho das Arvores, Campo Santo, Canela, Centenário, Chame-Chame, Chapada do Rio Vermelho, Engenho Velho Federação, Federação, Garcia, Garibaldi, Graça, Iguatemi, Invasão do Cai Duro, Invasão do Tubo, Invasão São Lázaro, Itaigara, Jardim América, Jardim Apipema, Jardim Brasil, Jardim Zoológico, Loteamento Aquários, Loteamento IAPSEB, Morro do Conselho, Morro do Cristo, Morro do Gato, Morro Ipiranga, Nordeste de Amaralina, Ondina, Paciência, Parque Cruz Aguiar, Parque Flamboyants, Parque João XXIII, Parque Júlio César, Parque Nossa Sra. da Luz, Parque São Brás, Parque São Paulo, Parque São Vicente, Pedra da Sereia, Pituba, Ponto da Mangueira, Porto da Barra, Rio Vermelho, Roça da Sabina, Santa Cruz, São Gonçalo Federação, São Lázaro, Ubaranas, Vale da Muriçoca, Vale das Pedrinhas, Vale dos Barris, Vasco da Gama, Vila Matos, Vitória."
      },
      {
        nome: "CAPS II Oswaldo Camargo",
        end: "R. Itabuna S/N, Rio Vermelho Prox. Antiga Coca-Cola",
        tel: "3611-3917",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "Atendimento das 8h00 às 17h00",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4381307725484!2d-38.49429658517754!3d-13.007747990832177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160356f731022b%3A0xe01610742ab37e21!2sCentro+de+Saude+Mental+Oswaldo+Camargo!5e0!3m2!1spt-BR!2sbr!4v1531406263467" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
        bairros_atendidos: "Alto da Bola, Alto da Sereia, Alto das Pombas, Alto do Areal, Alto do Gantois, Alto do Sobradinho, Amaralina, Avenida Brandão, Baixa Vai quem quer, Banco dos Ingleses, Barra, Barra Avenida, Binóculo, Cardeal da Silva, Calabar, Calabar, Caminho das Arvores, Campo Santo, Canela, Centenário, Chame-Chame, Chapada do Rio Vermelho, Engenho Velho Federação, Federação, Garcia, Garibaldi, Graça, Iguatemi, Invasão do Cai Duro, Invasão do Tubo, Invasão São Lázaro, Itaigara, Jardim América, Jardim Apipema, Jardim Brasil, Jardim Zoológico, Loteamento Aquários, Loteamento IAPSEB, Morro do Conselho, Morro do Cristo, Morro do Gato, Morro Ipiranga, Nordeste de Amaralina, Ondina, Paciência, Parque Cruz Aguiar, Parque Flamboyants, Parque João XXIII, Parque Júlio César, Parque Nossa Sra. da Luz, Parque São Brás, Parque São Paulo, Parque São Vicente, Pedra da Sereia, Pituba, Ponto da Mangueira, Porto da Barra, Rio Vermelho, Roça da Sabina, Santa Cruz, São Gonçalo Federação, São Lázaro, Ubaranas, Vale da Muriçoca, Vale das Pedrinhas, Vale dos Barris, Vasco da Gama, Vila Matos, Vitória."
      },
      {
        nome: "CAPSi Luis Meira Lessa",
        end: "Rua das Magaloeiras, 32 - Jaguaribes,",
        tel: "3335-6827 / 3611-7913",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.220791818141!2d-38.396048385686214!3d-12.957718913040042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160353aaaaaaabb%3A0x66519860fb153b6a!2sCAPSi+Luis+Meira+Lessa!5e0!3m2!1spt-BR!2sbr!4v1531403518546" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
        bairros_atendidos: "Abaeté, Aeroporto, Aldeia Jaguaribe, Alto do Coqueiro, Alto do Girassol, Alto do São João, Areia  Branca, Bairro da Paz, Baixa do Dendê, Barro Duro, Cajueiro, Campinas, Capelão, Ceasa, Costa Verde, Itapuã, Jardim Atalaia, Jardim das Margaridas, Jardim Jaguaribe, Jardim Piatã, Jardim tropical, Loteamento Alameda Praia, Loteamento Cassangê, Loteamento Colina Fonte, Loteamento Farol Itapuã, Loteamento Pedra do sal, Loteamento Praia do Flamengo, Loteamento Stela Maris, Malvinas, Mussurunga, Nova Brasília, Paralela, Patamares, Piatã, Placaford, São Cristóvão, Vila Ex-Combatentes."
      },

      // Vanessa
      {
        nome: "CAPS II Rosa Garcia",
        end: " R. Prof. Euclides Alipio de Oliveira 236, Jd Armação Atrás do Rest. Bargaço, 1a Rua a Direita",
        tel: "3611-2968",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "08hrs às 17hrs",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8433425995895!2d-38.440675549497406!3d-12.981869790804227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ba945007a01%3A0xd747d0828cbddd04!2sCAPS+Rosa+Garcia!5e0!3m2!1sen!2sbr!4v1531404220176" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
        bairros_atendidos: "Armação, Aeroclube, Alto da Alegria, Alto do São Francisco, Baixa Fria, Barreiro, Bate Facho, Boca do Rio, Caxundé,Bolandeira, Conjunto Marback, Conjunto Rio das Pedras, Conjunto Solarium, Conjunto Solarium, Conjunto Vale dos Rios, Corsário, Costa Azul, Imbui, Invasão Alto de São João, Invasão Baixa Cajueiro, Invasão Bananal, Invasão da Rocinha, Invasão Golfo Pérsico, Invasão Irmã Dulce, Invasão Kwait, Invasão Novo Paraíso, Invasão Sonho Dourado, Jardim Imperial, Loteamento Vela Branca, Pituaçu."
      },
      {
        nome: "CAPS II Aristides Novis",
        end: "R. Almirante Alves Camara S/N, Engenho Velho de Brotas. Prox. Secret.Educação do Município",
        tel: "3611-2956/3611-2953",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "08hrs às 17hrs",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7954055875744!2d-38.5037336431724!3d-12.984933854235305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c72421ba5f%3A0xb4cc0ed7e8f3cdbf!2sCentro+de+Sa%C3%BAde+Aristides+N%C3%B3vis!5e0!3m2!1sen!2sbr!4v1531404148736" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
        bairros_atendidos: "Acupe, Alto do Formoso, Alto do Saldanha, Baixa Candeal Pequeno, Brotas, Buraco da Gia, Campinas de Brotas, Engenho Velho de Brotas, Galés, Parque Florestal, Parque Bela Vista, Baixa do Cacau – 2, Baixa do Tubo –1, Bandeirantes, Boa Vista de Brotas, Bonocô, Candeal, Castro Neves, Cosme de Farias, Cruz da Redenção, Daniel Lisboa, Dois Leões, Invasão Ogunjá, Invasão Pela Porco, Invasão Polêmica, Jardim Caiçara, Luís Anselmo, Matatu, Ogunjá, Pepino, Pitangueiras, Santa Rita, Santo Agostinho, Sete Portas, Vila América, Vila Laura."
      },
      {
        nome: "CAPS II Eduardo Saback",
        end: "R. Conde Pereira Carneiro 148, Pernambues. Em Frente a Rádio Metrópole",
        tel: "3460-1957 / 3611-7912",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "08hrs às 17hrs",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0469966500646!2d-38.46702844949765!3d-12.968844590812864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ade309b038f%3A0x3c39b34f3a1ee5e1!2sCAPS+Eduardo+Saback!5e0!3m2!1sen!2sbr!4v1531403640550" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
        bairros_atendidos: "Alto da Ventosa, Alto do Arraial, Alto do Calabetão, Alto do Cruzeiro – 1, Arenoso, Arraial do Retiro, Baixa da Paz, Baixa de Santo Antônio, Baixa do Calabetão, Baixa do Cruzeiro, Baixa do Manú, Baixa do Manú, Baixa do Sapo, Baixa do Tubo – 2, Baixinha Santo Antônio, Barreiras, Bate Folha, Beco da Coruja, Beco do Fuxico, Beirú-Tancredo Neves, Bom Futuro, CAB, Cabula, Cabula I, Cabula II, Cabula III, Cabula IV, Cabula VI, Cabula VII, Cabula IX, Cabula X, Calabetão, Campo Seco, Chácara Perseverança, Chácara Senhor do Bonfim, Cocheira, Invasão Barreiras, Invasão Barreiras, Invasão CAB, Invasão Narandiba, Cj. Baia de Todos os Santos, Conjunto J. S. Cavalcante, Conjunto Jardim Cabula, Conjunto João Durval, Conjunto Novo Horizonte, Conjunto Parque Flamengo, Conjunto Salvador, Conjunto Santa Edwirgens, Doron, Engomadeira, Fazenda Pompilio Bittencourt, Jardim Guiomar, Jardim Pampulha, Jardim Santo Inácio, João Caldas, Loteamento Jardim Brasília, Loteamento Jardim Iara, Mata Escura, Narandiba, Nova Sussuarana, Parque Jacélia, Parque Residencial  Vale Mangueira, Pedreira S. G. Retiro, Pernambués, Saboeiro, São Gonçalo, Sussuarana, Tesoura, Vila Aberlado Magalhães, Vila Dois Irmãos."
      },
      //Thaiane  
      {
        nome: "CAPS II Aristides Novis",
        end: "R. Almirante Alves Camara S/N, Engenho Velho de Brotas. Prox. Secret.Educação do Município",
        tel: " 3611-2956",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "8 às 18 horas ",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7954053018484!2d-38.503728278494485!3d-12.98493387249636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c72421ba5f%3A0xb4cc0ed7e8f3cdbf!2sCentro+de+Sa%C3%BAde+Aristides+N%C3%B3vis!5e0!3m2!1sen!2sbr!4v1531401539389" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
        bairros_atendidos: "Alto da Bola, Alto da Sereia, Alto das Pombas, Alto do Areal, Alto do Gantois, Alto do Sobradinho, Amaralina, Avenida Brandão, Baixa Vai quem quer, Banco dos Ingleses, Barra, Barra Avenida, Binóculo, Cardeal da Silva, Calabar, Calabar, Caminho das Arvores, Campo Santo, Canela, Centenário, Chame-Chame, Chapada do Rio Vermelho, Engenho Velho Federação, Federação, Garcia, Garibaldi, Graça, Iguatemi, Invasão do Cai Duro, Invasão do Tubo, Invasão São Lázaro, Itaigara, Jardim América, Jardim Apipema, Jardim Brasil, Jardim Zoológico, Loteamento Aquários, Loteamento IAPSEB, Morro do Conselho, Morro do Cristo, Morro do Gato, Morro Ipiranga, Nordeste de Amaralina, Ondina, Paciência, Parque Cruz Aguiar, Parque Flamboyants, Parque João XXIII, Parque Júlio César, Parque Nossa Sra. da Luz, Parque São Brás, Parque São Paulo, Parque São Vicente, Pedra da Sereia, Pituba, Ponto da Mangueira, Porto da Barra, Rio Vermelho, Roça da Sabina, Santa Cruz, São Gonçalo Federação, São Lázaro, Ubaranas, Vale da Muriçoca, Vale das Pedrinhas, Vale dos Barris, Vasco da Gama, Vila Matos, Vitória."
      },
      {
        nome: "CAPS II Eduardo Saback",
        end: "R. Conde Pereira Carneiro 148, Pernambues. Em Frente a Rádio Metrópole",
        tel: "3460-1957 / 3611-7912",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: " 8 às 18 horas ",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
        bairros_atendidos: "Alto da Ventosa, Alto do Arraial, Alto do Calabetão, Alto do Cruzeiro – 1, Arenoso, Arraial do Retiro, Baixa da Paz, Baixa de Santo Antônio, Baixa do Calabetão, Baixa do Cruzeiro, Baixa do Manú, Baixa do Manú, Baixa do Sapo, Baixa do Tubo – 2, Baixinha Santo Antônio, Barreiras, Bate Folha, Beco da Coruja, Beco do Fuxico, Beirú-Tancredo Neves, Bom Futuro, CAB, Cabula, Cabula I, Cabula II, Cabula III, Cabula IV, Cabula VI, Cabula VII, Cabula IX, Cabula X, Calabetão, Campo Seco, Chácara Perseverança, Chácara Senhor do Bonfim, Cocheira, Invasão Barreiras, Invasão Barreiras, Invasão CAB, Invasão Narandiba, Cj. Baia de Todos os Santos, Conjunto J. S. Cavalcante, Conjunto Jardim Cabula, Conjunto João Durval, Conjunto Novo Horizonte, Conjunto Parque Flamengo, Conjunto Salvador, Conjunto Santa Edwirgens, Doron, Engomadeira, Fazenda Pompilio Bittencourt, Jardim Guiomar, Jardim Pampulha, Jardim Santo Inácio, João Caldas, Loteamento Jardim Brasília, Loteamento Jardim Iara, Mata Escura, Narandiba, Nova Sussuarana, Parque Jacélia, Parque Residencial  Vale Mangueira, Pedreira S. G. Retiro, Pernambués, Saboeiro, São Gonçalo, Sussuarana, Tesoura, Vila Aberlado Magalhães, Vila Dois Irmãos."
      },
      {
        nome: "CAPS AD Pernambues",
        end: "Conde Pereira Carneiro 271, Pernambues. Em Frente a Rádio Metrópole",
        tel: "3238-2847",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "segunda a sexta-feira",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.045907398281!2d-38.466969249497694!3d-12.968914290812785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ade305f1ce1%3A0x724a308e96882ce!2sCaps-ad!5e0!3m2!1sen!2sbr!4v1531402269181" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
        bairros_atendidos: "Alto da Ventosa, Alto do Arraial, Alto do Calabetão, Alto do Cruzeiro – 1, Arenoso, Arraial do Retiro, Baixa da Paz, Baixa de Santo Antônio, Baixa do Calabetão, Baixa do Cruzeiro, Baixa do Manú, Baixa do Manú, Baixa do Sapo, Baixa do Tubo – 2, Baixinha Santo Antônio, Barreiras, Bate Folha, Beco da Coruja, Beco do Fuxico, Beirú-Tancredo Neves, Bom Futuro, CAB, Cabula, Cabula I, Cabula II, Cabula III, Cabula IV, Cabula VI, Cabula VII, Cabula IX, Cabula X, Calabetão, Campo Seco, Chácara Perseverança, Chácara Senhor do Bonfim, Cocheira, Invasão Barreiras, Invasão Barreiras, Invasão CAB, Invasão Narandiba, Cj. Baia de Todos os Santos, Conjunto J. S. Cavalcante, Conjunto Jardim Cabula, Conjunto João Durval, Conjunto Novo Horizonte, Conjunto Parque Flamengo, Conjunto Salvador, Conjunto Santa Edwirgens, Doron, Engomadeira, Fazenda Pompilio Bittencourt, Jardim Guiomar, Jardim Pampulha, Jardim Santo Inácio, João Caldas, Loteamento Jardim Brasília, Loteamento Jardim Iara, Mata Escura, Narandiba, Nova Sussuarana, Parque Jacélia, Parque Residencial  Vale Mangueira, Pedreira S. G. Retiro, Pernambués, Saboeiro, São Gonçalo, Sussuarana, Tesoura, Vila Aberlado Magalhães, Vila Dois Irmãos."
      },
      //Ester:
      {
        nome: "CAPS AD Gregório de Matos ",
        end: "Faculdade de Medicina da UFBA - Pavilhão Carneiro de Campos - Terreiro de Jesus",
        tel: "3283-5547 / 3322-0235/0304 ",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "Focam no atendimento a pessoas que utilizam o álcool de maneira prejudicial e outras drogas",
        mapa: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.282243560197!2d-38.52321792264122!3d-12.983326052851451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161a43294d8bbb%3A0x1cb6cfc0d17a0ff8!2sFaculdade+de+Medicina+da+Universidade+Federal+da+Bahia+-+FMB!5e0!3m2!1sen!2sbr!4v1531403447080" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>  ',
        bairros_atendidos: "Água de Meninos, Aflitos, Ajuda, Alto da Esperança, Aquidabã, Baixa dos Sapateiros, Barbalho, Barris, Barroquinha, BoulevardSuisso, Campo da Pólvora, Campo Grande, Carmo, Centro, Comércio, Conceição da Praia, Curva Grande, Desterro, Djalma Dutra, Faísca, Fonte Nova, Forte de São Pedro, Gamboa, Jardim Bahiano, Lapa, Largo Dois de Julho, Loteamento Lanat, Macaúbas, Mercado do Ouro, Mercês, Misericórdia, Mouraria, Nazaré, Paço, Palma, Pelourinho, Piedade, Pilar, Poeira, Politeama, Rosário, Santa Tereza, Santana, Santo Antônio, São Bento, São Francisco, São Joaquim, São José, São Pedro, São Raimundo, Saúde, Sé, Taboão, Tororó."
      },
      {
        nome: "CAPS II Ant° Roberto Pellegrino ",
        end: "R. Arquimedes Gonçalves 226, Jardim Baiano. Prox. Campo da Pólvora",
        tel: "3321-3679",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "O público-alvo são adultos com transtornos mentais persistentes.Opera com uma equipe mínima de doze profissionais, com nível médio e superior, tendo um suporte para acompanhar cerca de 360 indivíduos por mês, de segunda a sexta-feira, com horário de funcionamento das 8 às 18 horas – pode oferecer um terceiro período, funcionando até as 21 horas.",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.859294817778!2d-38.508594949144445!3d-12.980849990804924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604ea7b97ef61%3A0x75f86c3364f550ab!2sR.+Arquimedes+Gon%C3%A7alves%2C+226+-+Nazar%C3%A9%2C+Salvador+-+BA%2C+40050-300!5e0!3m2!1sen!2sbr!4v1531403746249" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
        bairros_atendidos: "Água de Meninos, Aflitos, Ajuda, Alto da Esperança, Aquidabã, Baixa dos Sapateiros, Barbalho, Barris, Barroquinha, BoulevardSuisso, Campo da Pólvora, Campo Grande, Carmo, Centro, Comércio, Conceição da Praia, Curva Grande, Desterro, Djalma Dutra, Faísca, Fonte Nova, Forte de São Pedro, Gamboa, Jardim Bahiano, Lapa, Largo Dois de Julho, Loteamento Lanat, Macaúbas, Mercado do Ouro, Mercês, Misericórdia, Mouraria, Nazaré, Paço, Palma, Pelourinho, Piedade, Pilar, Poeira, Politeama, Rosário, Santa Tereza, Santana, Santo Antônio, São Bento, São Francisco, São Joaquim, São José, São Pedro, São Raimundo, Saúde, Sé, Taboão, Tororó."
      },
      // Felipe Oliveira
      {
        nome: "CAPS II Pau da Lima",
        end: "Estrada das Muriçocas Cond. Dom Bosco, 1a Casa. De frente pro Shopping Ponto Alto.",
        tel: "3259-2556",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "das 08 as 17 hrs",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583220730003!2d-38.41992974949788!3d-12.934487390835486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610a39de36d89%3A0x2b67f9b7a709c373!2sCondo+Don+Bosco!5e0!3m2!1sen!2sbr!4v1531392704516" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
        bairros_atendidos: "Canabrava, São Marcos, Fazenda Mocambo, Mansão do Caminho, Castelo Branco, Invasão Brasilgás, Mata dos Oitis, Sete de Abri, Colina de Pituaçu, Invasão Caraíba Metais, Moradas do Campo, Conjunto Recanto das Ilhas, Invasão São Rafael, Lagos, Nova Brasília Ipitanga, Conjunto Trobogy, Canária, Coroado, Flamboyants, Jaguaribe II, Dom Avelar, Jardim Cajazeira, Novo Marotinho, Jardim Nova Esperança, Pau da Lima, Porto Seco Pirajá, Estrada Velha do Aeroporto, loteamento São José, Vivenda dos Pássaros."
      },
      {
        nome: "CAPS II São Caetano",
        end: "Rua prof° Goes Calmon s/n . Antigo Instituto Helena Jambeir, próx a 4 Delegacia, Esquina com a Policlinica de São Caetano.",
        tel: "3259-2556",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "das 08 as 17 hrs",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5763654616057!2d-38.48179314949799!3d-12.934927190835102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161aabe0ace397%3A0x419482a3a2bf82aa!2sRua+Professor+Francisco+G%C3%B3es+Calmon+-+S%C3%A3o+Caetano%2C+Salvador+-+BA%2C+40390-675!5e0!3m2!1sen!2sbr!4v1531393267662" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
        bairros_atendidos: "Alto da Boa Vista, Alto do Bom Viver, Alto do Peru, Baixa do Cacau, Baixa do Camurugipe, Bentivi, Boa Vista São Caetano, Bom Juá, Brasilgás, Calafate, Campinas de Pirajá, Capelinha de São Caetano, Cj. Dos Rodoviários, Fazenda Grande do Retiro, Formiga, Goméia, Jaqueira do Carneiro, Jardim Lobato, Largo do Retiro, Largo do Tanque, Loteamento Profilurb, Marechal Rondon, Marotinho, Para, Parque Schindler, Pirajá, Retiro, San Martin, Santa Luzia do Lobato, São Bartolomeu, São Caetano, Sussunga, Usiba, Valéria, Vila Leal."
      },
      {
        nome: "Caps AD III Gey Espinheira",
        end: "Estrada Velha de Campinas, No61, Pirajá",
        tel: "3239-1178",
        valor: "Gratuito",
        servico: [s.caps],
        descricao_servicos: "24 hrs",
        mapa: ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.305471555159!2d-38.48838605723118!3d-12.934927035121607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716100e428e141f%3A0xe0c3af6a67dcae36!2sCAPS+AD+III+Gey+Espinheira!5e0!3m2!1sen!2sbr!4v1531393503388" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> ',
        bairros_atendidos: "Alto da Boa Vista, Alto do Bom Viver, Alto do Peru, Baixa do Cacau, Baixa do Camurugipe, Bentivi, Boa Vista São Caetano, Bom Juá, Brasilgás, Calafate, Campinas de Pirajá, Capelinha de São Caetano, Cj. Dos Rodoviários, Fazenda Grande do Retiro, Formiga, Goméia, Jaqueira do Carneiro, Jardim Lobato, Largo do Retiro, Largo do Tanque, Loteamento Profilurb, Marechal Rondon, Marotinho, Para, Parque Schindler, Pirajá, Retiro, San Martin, Santa Luzia do Lobato, São Bartolomeu, São Caetano, Sussunga, Usiba, Valéria, Vila Leal."
      },
    ]
    return estabelecimentos;
  }

  obterEstabelecimentosPorServico(servicoDesejado: String): any {
    servicoDesejado = servicoDesejado.toLowerCase();
    let estabelecimentos = this.obterEstabelecimentos();

    let estabelecimentosEncontrados = [];


    estabelecimentos.forEach(estabelecimento => {
      estabelecimento.servico.forEach(servico => {
        servico = servico.toLowerCase();
        if (servicoDesejado == servico) {
          estabelecimentosEncontrados.push(estabelecimento)
        }
      });
    });

    return estabelecimentosEncontrados;

  }

}
