import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// --- CONFIGURAÇÃO DO PRISMA CLIENT ---
const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

export async function POST(request: Request) {
  try {
    // --- ÁREA DE DEBUG (O Espião) ---
    const dbUrl = process.env.DATABASE_URL;
    console.log("--- INÍCIO DO DEBUG ---");
    
    if (!dbUrl) {
      console.error("ERRO GRAVE: DATABASE_URL não existe ou está vazia!");
    } else {
      // Mostra os primeiros 15 caracteres para vermos se tem aspas ou espaços
      // Exemplo esperado: "postgresql://ne..."
      // Exemplo com erro: " postgresql:/..." (espaço) ou "\"postgresql:..." (aspa)
      console.log(`O servidor está lendo: [${dbUrl.substring(0, 15)}...]`);
      console.log(`Tamanho total da string: ${dbUrl.length}`);
    }
    console.log("--- FIM DO DEBUG ---");
    // -------------------------------

    const body = await request.json();

    if (!body.nome || !body.email || !body.whatsapp) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }
    
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
    console.error('Erro DETALHADO ao salvar lead:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação. Verifique os logs.' }, 
      { status: 500 }
    );
  }
}