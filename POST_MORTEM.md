🐛 Post-Mortem: Erro de Conexão Prisma em Produção (Vercel)

Data: 23/01/2026
Status: ✅ Resolvido
Componentes: Vercel, Prisma, Neon (Postgres), Next.js

🧩 O Problema

O formulário de captura de leads funcionava perfeitamente no ambiente local (localhost), mas falhava sistematicamente após o deploy na Vercel.

Sintoma: Ao tentar enviar o formulário, a API retornava erro 500.
Logs: PrismaClientInitializationError: Error validating datasource db: the URL must start with the protocol postgresql://

🔍 Investigação

Inicialmente, suspeitou-se de erro no código ou na connection string do Neon.

Código do Prisma (schema.prisma): Verificado e validado.

Variável de Ambiente: Aparentemente correta no painel da Vercel.

Debug: Foi inserido um log no backend para ler a variável DATABASE_URL em tempo de execução.

A Descoberta:
Os logs revelaram que a variável estava sendo injetada com aspas extras:

O servidor está lendo: ["postgresql://neondb...]


Isso invalidava o protocolo exigido pelo Prisma.

💥 Causa Raiz

O projeto não estava corretamente sincronizado via CLI da Vercel, o que causava inconsistência na injeção das variáveis de ambiente. A interface web mostrava o valor limpo, mas o build interno mantinha o valor corrompido (com aspas).

✅ Solução Aplicada

A correção definitiva exigiu o uso da Vercel CLI para limpar o ambiente:

Vincular o projeto:

vercel link


Remover a variável corrompida:

vercel env rm DATABASE_URL production


Adicionar novamente (limpa):

vercel env add DATABASE_URL production


Forçar novo deploy:

vercel --prod


🧠 Lições Aprendidas

Local ≠ Produção: O fato de funcionar no .env local não garante sucesso no deploy.

Sensibilidade do Prisma: O Prisma não tolera caracteres invisíveis ou aspas na Connection String.

Poder do Debug: Adicionar logs simples (console.log) em produção foi crucial para ver o que a ferramenta estava realmente "enxergando".