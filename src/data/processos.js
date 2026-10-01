export const olimpiadasData = {
  obf: {
    id: "obf",
    nome: "Olimpíada Brasileira de Física",
    sigla: "OBF",
    subtitulo: "Gestão enxuta: Aplicação da 3ª Fase na UFBA, emissão de certificados e premiação local.",
    tema: {
      corPrimaria: "bg-blue-900",
      corSecundária: "bg-blue-600",
      corFundo: "bg-blue-50/50",
      corBorda: "border-blue-200",
      corTexto: "text-blue-900",
      badge: "bg-blue-100 text-blue-800",
      hoverBtn: "hover:bg-blue-800"
    },
    etapas: [
      {
        id: "fase3-ufba",
        titulo: "1. Aplicação da 3ª Fase (UFBA)",
        descricao: "Organização e aplicação presencial da última etapa no Instituto de Física da UFBA.",
        manual: {
        nome: "Manual_Passo_a_Passo_preparacao_3fase.pdf",
        arquivo: "/templates/obf/manual_preparacao_3fase.pdf"
        },
        checklists: [
          "Verificar pacotes de provas recebidos para a 3ª Fase",
          "Conferir kits de experimentos físicos por nível",
          "Definir ensalamento no Instituto de Física",
          "Imprimir Listas de Porta (Ano/Série + Sala + Nome + Escola)",
          "Imprimir Listas de Presença (OBRIGATÓRIO conter o ID do aluno)"
        ],
        downloads: [
          { nome: "Modelo Lista de Porta", arquivo: "/templates/obf/lista_porta.docx", formato: "docx" },
          { nome: "Modelo Lista de Presença (com ID)", arquivo: "/templates/obf/lista_presenca.docx", formato: "docx" }
        ]
      },
      {
        id: "certificados-obf",
        titulo: "2. Emissão de Certificados",
        descricao: "Geração dos certificados estaduais e organização dos documentos dos professores.",
        manual: {
        nome: "Manual_Passo_a_Passo_certificados_obf.pdf",
        arquivo: "/templates/obf/manual_certificados_obf.pdf"
        },
        alerta: "A OBF não confecciona placas nem possui concurso de ilustrações.",
        checklists: [
          "Baixar os Certificados Nacionais diretamente do site oficial da OBF",
          "Confeccionar os Certificados Estaduais dos alunos premiados",
          "Identificar no sistema os professores orientadores de cada aluno premiado",
          "Gerar os Certificados dos Professores Orientadores"
        ],
        downloads: [
          { nome: "Modelo Certificado Estadual Aluno", arquivo: "/templates/obf/certificado_estadual_aluno.docx", formato: "docx" },
          { nome: "Modelo Certificado Professor Orientador", arquivo: "/templates/obf/certificado_professor.docx", formato: "docx" }
        ]
      },
      {
        id: "premiacao-obf",
        titulo: "3. Cerimônia de Premiação Local",
        descricao: "Organização do evento de entrega de medalhas na Bahia.",
        manual: {
        nome: "Manual_Passo_a_Passo_premiacao_obf.pdf",
        arquivo: "/templates/obf/manual_premiacao_obf.pdf"
        },
        alerta: "Nota de processo: Não há envio posterior de medalhas/certificados para ausentes na OBF.",
        checklists: [
          "Conferir medalhas físicas recebidas de SP com a lista oficial de medalhistas",
          "Gerar Lista de Mural (divulgação pública) e Lista de Controle do Mestre de Cerimônias",
          "Preparar apresentação de slides (.pptx) com os premiados",
          "Testar o arquivo de áudio do Hino Nacional (.mp3)",
          "Organizar mesas de exposição no dia do evento"
        ],
        downloads: [
          { nome: "Apresentação de Slides da Cerimônia", arquivo: "/templates/obf/slides_cerimonia.pptx", formato: "pptx" },
          { nome: "Hino Nacional Brasileiro (MP3)", arquivo: "/templates/obf/hino_nacional.mp3", formato: "mp3" }
        ]
      }
    ]
  },
  obfep: {
    id: "obfep",
    nome: "Olimpíada Brasileira de Física das Escolas Públicas",
    sigla: "OBFEP",
    subtitulo: "Exclusivo para escolas públicas, centro de distribuição nacional e concurso de ilustrações.",
    tema: {
      corPrimaria: "bg-emerald-800",
      corSecundária: "bg-emerald-600",
      corFundo: "bg-emerald-50/50",
      corBorda: "border-emerald-200",
      corTexto: "text-emerald-900",
      badge: "bg-emerald-100 text-emerald-800",
      hoverBtn: "hover:bg-emerald-700"
    },
    etapas: [
      {
        id: "fase2-ufba",
        titulo: "1. Preparação da 2ª Fase (UFBA)",
        descricao: "Recepção de provas da rede pública e organização das salas no Instituto de Física.",
        manual: {
        nome: "Manual_Passo_a_Passo_preparacao_2fase.pdf",
        arquivo: "/templates/obf/manual_preparacao_2fase.pdf"
        },
        checklists: [
          "Conferir provas e experimentos físicos por nível e escola",
          "Mapear alunos por sala (organização por série)",
          "Imprimir Listas de Porta e Listas de Presença contendo os IDs oficiais"
        ],
        downloads: [
          { nome: "Modelo Lista de Porta", arquivo: "/templates/obfep/lista_porta.docx", formato: "docx" },
          { nome: "Modelo Lista de Presença (com ID)", arquivo: "/templates/obfep/lista_presenca.docx", formato: "docx" }
        ]
      },
      {
        id: "ilustracao",
        titulo: "2. Concurso de Ilustrações",
        descricao: "Triagem dos desenhos recebidos e emissão de certificados e placas.",
        manual: {
        nome: "Manual_Passo_a_Passo_Certificados_ilustracoes.pdf",
        arquivo: "/templates/obf/manual_certificados_ilustracoes.pdf"
        },
        checklists: [
          "Cadastrar todas as ilustrações na planilha: Nome, Escola, Cidade, Telefone, E-mail",
          "Executar Mala Direta Word para os Certificados de Participação (todos os alunos)",
          "Filtrar TOP 3 (1º, 2º e 3º lugares) e gerar arquivos para confecção das Placas"
        ],
        downloads: [
          { nome: "Planilha Base Ilustrações", arquivo: "/templates/obfep/base_ilustracao.xlsx", formato: "xlsx" },
          { nome: "Modelo Certificado Ilustração", arquivo: "/templates/obfep/certificado_ilustracao.docx", formato: "docx" },
          { nome: "Modelo Placa TOP 3 Vencedores", arquivo: "/templates/obfep/placa_top3.docx", formato: "docx" },
          { nome: "Modelo Certificados TOP 3 Vencedores", arquivo: "/templates/obfep/certificados_top3.docx", formato: "docx" }

        ]
      },
      {
        id: "premiacao-logistica",
        titulo: "3. Logística Nacional e Premiação Local",
        descricao: "Envio de placas para outros estados e organização da cerimônia local.",
        manual: {
        nome: "Manual_Passo_a_Passo_premiacao_logistica.pdf",
        arquivo: "/templates/obf/manual_premiacao_logistica.pdf"
        },
        checklists: [
          "Preencher placas de Escolas e Professores Nacionais com dados da Profa. Graça",
          "Empacotar e despachar caixas para os Coordenadores Estaduais de todo o país",
          "Baixar/imprimir certificados estaduais e nacionais da Bahia",
          "Mapear vínculo Aluno-Professor no sistema para emitir certificados dos professores",
          "Conferir medalhas físicas de SP, montar slides (.pptx) e separar Hino em MP3",
          "Gerar Lista de Presença para o Mestre de Cerimônias chamar apenas quem esteve presente",
          "Pós-evento: empacotar medalhas/placas e despachar para as escolas do interior da BA"
        ],
        downloads: [
          { nome: "Modelo Placa Escola Nacional", arquivo: "/templates/obfep/placa_escola_nacional.docx", formato: "docx" },
          { nome: "Planilha Base Placas Escolas", arquivo: "/templates/obfep/base_placas_esc.xlsx", formato: "xlsx" },
          { nome: "Modelo Placa Professor Nacional", arquivo: "/templates/obfep/placa_prof_nacional.docx", formato: "docx" },
          { nome: "Planilha Base Placas Professores", arquivo: "/templates/obfep/base_placas_prof.xlsx", formato: "xlsx" },
          { nome: "Certificado Professor Orientador (BA)", arquivo: "/templates/obfep/cert_professor_ba.docx", formato: "docx" },
          { nome: "Modelo da Apresentação da Cerimônia", arquivo: "/templates/obfep/slides_cerimonia.pptx", formato: "pptx" },
          { nome: "Hino Nacional Brasileiro (MP3)", arquivo: "/templates/obfep/hino_nacional.mp3", formato: "mp3" }
        ]
      }
    ]
  }
};