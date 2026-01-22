"use client";

import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Users, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight, 
  Database, 
  Lock,
  Smartphone,
  Activity
} from 'lucide-react';

// --- Componentes ---

const Navbar = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-teal-600" />
          <span className="text-2xl font-bold text-gray-900 tracking-tight">ConsciencIA</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solucao" className="text-gray-600 hover:text-teal-600 font-medium transition">Solução</a>
          <a href="#como-funciona" className="text-gray-600 hover:text-teal-600 font-medium transition">Como Funciona</a>
          <button 
            onClick={scrollToForm}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold transition shadow-lg shadow-teal-600/20"
          >
            Lista de Espera
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg">
          <a href="#solucao" className="text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>Solução</a>
          <a href="#como-funciona" className="text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>Como Funciona</a>
          <button 
            onClick={scrollToForm}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold w-full text-center"
          >
            Lista de Espera
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ scrollToForm }: { scrollToForm: () => void }) => (
  <header className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-gradient-to-b from-teal-50 to-white">
    <div className="container mx-auto text-center max-w-4xl">
      <div className="inline-block bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
        🚀 Tecnologia inteligente para clínicas
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        Organize seus pacientes e sessões de fisioterapia em um <span className="text-teal-600">único sistema</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        A ConsciencIA ajuda clínicas de fisioterapia a controlarem agenda, histórico dos pacientes e atendimentos sem papel, planilhas ou sistemas complicados.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={scrollToForm}
          className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 shadow-xl shadow-teal-600/30 flex items-center justify-center gap-2"
        >
          Quero testar gratuitamente <ChevronRight size={20} />
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-500 font-medium">👉 Simples. Rápido. Inteligente.</p>
    </div>
  </header>
);

const Problems = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Sua clínica ainda sofre com isso?</h2>
        <p className="text-red-500 font-semibold text-lg">❌ Isso custa tempo e dinheiro.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: "Agenda Caótica", desc: "Papel, planilhas confusas e horários sobrepostos.", icon: Calendar },
          { title: "Histórico Espalhado", desc: "Fichas de papel que se perdem ou arquivos desorganizados.", icon: Users },
          { title: "Prejuízo com Faltas", desc: "Pacientes esquecem e você perde o horário e o dinheiro.", icon: XCircle },
          { title: "Tempo Perdido", desc: "Horas procurando informações simples de evolução.", icon: Clock },
          { title: "Sistemas Difíceis", desc: "Softwares caros que ninguém na clínica consegue usar.", icon: Activity },
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <item.icon className="text-red-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solucao" className="py-20 bg-teal-900 text-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A solução completa para sua tranquilidade</h2>
          <p className="text-teal-100 text-lg mb-8">
            Com a ConsciencIA, você foca no tratamento do paciente enquanto nós cuidamos da organização da clínica.
          </p>
          
          <div className="space-y-4">
            {[
              "Cadastro rápido do paciente",
              "Histórico completo por nome",
              "Controle de sessões e evoluções",
              "Agendamento automático",
              "Integração com Google Agenda",
              "Lembretes automáticos para pacientes"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-teal-700 p-1 rounded-full">
                  <CheckCircle size={20} className="text-teal-300" />
                </div>
                <span className="font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
          <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col p-6 gap-3 opacity-90">
               <div className="w-1/3 h-4 bg-gray-600 rounded"></div>
               <div className="flex gap-4">
                 <div className="w-1/4 h-32 bg-gray-600 rounded"></div>
                 <div className="flex-1 space-y-3">
                   <div className="w-full h-8 bg-teal-600/50 rounded"></div>
                   <div className="w-full h-4 bg-gray-600 rounded"></div>
                   <div className="w-3/4 h-4 bg-gray-600 rounded"></div>
                 </div>
               </div>
            </div>
            <span className="relative z-10 font-bold text-white/50 text-xl">Dashboard ConsciencIA</span>
          </div>
          <p className="mt-4 text-center text-teal-200 text-sm">Interface simples feita para fisioterapeutas</p>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="como-funciona" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      
      {/* Para Quem */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Para quem é a ConsciencIA?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            "Clínicas Pequenas e Médias",
            "Fisioterapeutas Autônomos",
            "Quem quer sair do papel",
            "Quem quer reduzir faltas"
          ].map((text, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center font-semibold text-gray-700">
              <CheckCircle className="mx-auto mb-3 text-teal-600" size={24} />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Como Funciona */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Como Funciona em 4 Passos</h2>
        <div className="space-y-8">
          {[
            { step: "1", title: "Cadastro Rápido", desc: "Cadastre seus pacientes em poucos segundos." },
            { step: "2", title: "Agendamento", desc: "Agende sessões de forma automática e integrada." },
            { step: "3", title: "Histórico e Evolução", desc: "Consulte o histórico completo buscando apenas pelo nome." },
            { step: "4", title: "Zero Faltas", desc: "O sistema envia lembretes e seus pacientes não esquecem." },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start md:items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-teal-100 text-teal-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-teal-700 font-semibold flex items-center justify-center gap-2">
          <Smartphone size={20} /> Tudo online. Acesso de qualquer lugar.
        </p>
      </div>
    </div>
  </section>
);

const Security = () => (
  <section className="py-12 bg-white border-y border-gray-100">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500">
        <div className="flex items-center gap-2">
          <Database size={20} /> Dados armazenados com segurança
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} /> Adequado à LGPD
        </div>
        <div className="flex items-center gap-2">
          <Lock size={20} /> Controle de acesso por usuário
        </div>
      </div>
    </div>
  </section>
);

const WaitlistForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Coleta os dados do formulário
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());

      // Envia para a API real
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar');
      }

      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="waitlist-form" className="py-20 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
          
          <div className="p-10 md:w-1/2 bg-teal-900 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Acesso Antecipado</h2>
            <p className="mb-8 text-teal-100">
              Estamos selecionando clínicas de fisioterapia para testar a ConsciencIA antes do lançamento oficial.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Acesso prioritário à ferramenta",
                "Preço especial vitalício",
                "Influência direta nas funcionalidades"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-teal-700 p-1.5 rounded text-teal-300 font-bold text-xs">{(idx + 1).toString().padStart(2, '0')}</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 md:w-1/2 flex items-center">
            {status === 'success' ? (
              <div className="text-center w-full animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Obrigado!</h3>
                <p className="text-gray-600 mb-6">Recebemos seus dados.</p>
                <p className="text-sm text-gray-500">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Entre na lista de espera</h3>
                <p className="text-sm text-gray-500 mb-6">Garanta seus benefícios de pioneiro.</p>
                
                {status === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    Ocorreu um erro ao enviar. Tente novamente.
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome do responsável</label>
                  <input required name="nome" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition" placeholder="Seu nome" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome da clínica</label>
                  <input required name="clinica" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition" placeholder="Ex: FísioTotal" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input required name="whatsapp" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition" placeholder="(00) 00000-0000" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition" placeholder="seu@email.com" />
                </div>

                <button 
                  disabled={status === 'submitting'}
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-lg shadow-lg transition transform active:scale-95 disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Entrar na lista de espera'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Activity className="h-6 w-6 text-teal-500" />
        <span className="text-xl font-bold text-white tracking-tight">ConsciencIA</span>
      </div>
      <p className="mb-6">Tecnologia inteligente para clínicas de fisioterapia.</p>
      <div className="text-sm">
        © 2026 ConsciencIA — Todos os direitos reservados
      </div>
    </div>
  </footer>
);

export default function Home() {
  const scrollToForm = () => {
    const formSection = document.getElementById('waitlist-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar scrollToForm={scrollToForm} />
      <Hero scrollToForm={scrollToForm} />
      <Problems />
      <Solution />
      <Features />
      <Security />
      <WaitlistForm />
      <Footer />
    </main>
  );
}