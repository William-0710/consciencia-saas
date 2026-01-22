import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// -----------------------------------------------------------------------
// DICA: Se o erro persistir, tente fechar e reabrir o VS Code.
// Se o comando 'npm run dev' funcionar no terminal, você pode ignorar
// o sublinhado vermelho (é apenas um bug visual do editor).
// -----------------------------------------------------------------------

const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Essa sintaxe 'declare global' ajuda o VS Code a entender melhor
// que a variável 'prisma' existe no escopo global.
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validação básica
    if (!body.nome || !body.email || !body.whatsapp) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }
    
    // Salvar no banco
    const lead = await prisma.lead.create({
      data: {
        nome: body.nome,
        clinica: body.clinica || '',
        whatsapp: body.whatsapp,
        email: body.email,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação.' }, 
      { status: 500 }
    );
  }
}