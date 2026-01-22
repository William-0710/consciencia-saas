🧠 ConsciencIA

Tecnologia inteligente para clínicas de fisioterapia que buscam mais organização e menos burocracia.

📋 Sobre o Projeto

O ConsciencIA é um SaaS (Software as a Service) focado na gestão de clínicas de fisioterapia. O objetivo é eliminar o uso de papel e planilhas complexas, oferecendo uma solução simples para agendamento, prontuário eletrônico e gestão financeira.

Atualmente, o projeto consiste em uma Landing Page de Alta Conversão integrada a um sistema de Lista de Espera que salva os leads diretamente em um banco de dados na nuvem.

🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as tecnologias mais modernas do ecossistema JavaScript:

Frontend: React & Next.js 14 (App Router)

Estilização: Tailwind CSS

Ícones: Lucide React

Backend: Next.js API Routes

Banco de Dados: PostgreSQL (Hospedado na Neon.tech)

ORM: Prisma

✨ Funcionalidades Atuais

[x] Landing Page Responsiva (Mobile & Desktop).

[x] Seções de apresentação (Hero, Problema, Solução, Prova Social).

[x] Formulário de Captura de Leads (Lista de Espera).

[x] Integração Backend com Banco de Dados PostgreSQL.

[x] Validação de dados e tratamento de erros.

📦 Como rodar o projeto localmente

Siga estes passos para rodar o projeto na sua máquina:

1. Clone o repositório

git clone [https://github.com/William-0710/consciencia-saas.git](https://github.com/William-0710/consciencia-saas.git)
cd consciencia-saas


2. Instale as dependências

npm install


3. Configure as Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione a URL do seu banco de dados (Ex: Neon, Supabase ou Local):

DATABASE_URL="postgresql://usuario:senha@host/banco?sslmode=require"


4. Configure o Banco de Dados

Gere o cliente do Prisma e envie a estrutura para o banco:

npx prisma generate
npx prisma db push


5. Inicie o servidor

npm run dev


Acesse http://localhost:3000 no seu navegador.

📂 Estrutura de Pastas

consciencia-saas/
├── prisma/             # Schema do Banco de Dados
├── public/             # Arquivos estáticos
├── src/
│   ├── app/
│   │   ├── api/        # Rotas da API (Backend)
│   │   ├── page.tsx    # Página Principal (Landing Page)
│   │   └── layout.tsx  # Layout Global
│   └── components/     # Componentes Reutilizáveis (Se houver)
└── package.json


🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um Pull Request.

Desenvolvido por William 🚀