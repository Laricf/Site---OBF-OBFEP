# 🌌 Portal de Processos Operacionais — OBF & OBFEP (UFBA)

Um portal web dinâmico e interativo desenvolvido para centralizar, organizar e automatizar a gestão logística e operacional das olimpíadas de física (**OBF** - Olimpíada Brasileira de Física e **OBFEP** - Olimpíada Brasileira de Física das Escolas Públicas) na Seção Bahia, sediada no Instituto de Física da Universidade Federal da Bahia (UFBA).

O objetivo do portal é servir como um guia definitivo para bolsistas e organizadores, oferecendo manuais passo a passo, listas de checagem interativas e download imediato de modelos de documentos operacionais.

---

## ✨ Funcionalidades Principais

- 🔄 **Alternância Dinâmica de Ambientes:** Troca suave de temas e dados entre **OBF** (Azul Institucional) e **OBFEP** (Verde Esmeralda).
- 📋 **Checklist Interativo com Persistência Local:** Marcadores de tarefas operacionais salvos automaticamente no `localStorage` do navegador, mantendo o progresso mesmo após recarregar a página.
- 🔍 **Busca Global em Tempo Real:** Campo de pesquisa no cabeçalho que filtra instantaneamente etapas, tarefas, alertas e nomes de arquivos.
- 🧭 **Menu Lateral de Navegação (Sidebar):** Rola a tela suavemente (*smooth scroll*) para a etapa selecionada.
- 📄 **Manuais Operacionais em PDF Integrados:** Acesso direto a guias detalhados em PDF incorporados nos cards de cada processo.
- ⬇️ **Download de Modelos e Templates:** Links para arquivos editáveis (`.docx`, `.xlsx`, `.pptx`, `.mp3`).
- 🕊️ **Easter Egg de Legado:** Assinatura minimalista com sabre de luz e o tordo (*Mockingjay*) sob a barra de navegação.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** — Biblioteca JavaScript para construção da interface de usuário.
- **[Vite](https://vitejs.dev/)** — Build tool rápido e ambiente de desenvolvimento moderno.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitário para estilização responsiva e tematização dinâmica.
- **JavaScript (ES6+)** — Lógica de manipulação de dados, filtros e persistência local.

---

## 📂 Estrutura do Projeto

```text
portal-obf-obfep/
├── public/
│   └── templates/
│       ├── obf/          # PDFs e documentos da OBF (ignorado no Git)
│       └── obfep/        # PDFs e documentos da OBFEP (ignorado no Git)
├── src/
│   ├── components/
│   │   ├── EtapaCard.jsx # Card individual de processo com checklist e downloads
│   │   ├── Header.jsx    # Cabeçalho fixo, seletor de olimpíadas e busca
│   │   └── Sidebar.jsx   # Menu lateral de navegação rápida
│   ├── data/
│   │   └── processos.js  # Base de dados centralizada de etapas, manuais e listas
│   ├── App.jsx           # Componente principal e orquestrador de estado
│   ├── index.css         # Importações e configurações globais do Tailwind
│   └── main.jsx          # Ponto de entrada da aplicação React
├── .gitignore
├── package.json
└── README.md

🚀 Como Executar o Projeto Localmente
Pré-requisitos
Certifique-se de ter instalado em sua máquina:

Node.js (versão 18.x ou superior)

npm ou yarn

Passo a Passo
Clonar o repositório:

Bash
git clone [https://github.com/LAricf/site---obf-obfep.git](https://github.com/Laricf/site---obf-obfep.git)
cd site---obf-obfep
Instalar as dependências:

Bash
npm install
Iniciar o servidor de desenvolvimento:

Bash
npm run dev
Acessar no navegador:
Abra o endereço indicado no terminal (geralmente http://localhost:5173).

📄 Gerenciamento de Documentos Privados (public/templates/)
Por motivos de privacidade e conformidade com diretrizes locais, os modelos editáveis (.docx, .xlsx) e os manuais em PDF não são versionados diretamente no repositório público.

Caso precise adicionar os arquivos para teste local:

Crie as pastas public/templates/obf/ e public/templates/obfep/.

Adicione os PDFs e modelos correspondentes com os nomes especificados no arquivo src/data/processos.js.

📜 Licença
Desenvolvido por Larissa Conrado de Figueiredo 
