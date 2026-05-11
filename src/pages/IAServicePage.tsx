import React, { useState } from "react";
import {
    ArrowRight,
    Check,
    Cpu,
    RefreshCw,
    Box,
    Play,
    Layout,
    FileText,
    Image as ImageIcon
} from "lucide-react";
import { FadeIn } from "../components/Shared";

const IAServicePage = () => {
    const [investimento, setInvestimento] = useState(1000);
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#fef0d6] selection:text-black">

            {/* HEADER / NAV */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black border-b border-white/10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#">
                        <img
                            src="https://i.ibb.co/G4v1kTLz/logobrancazzostudio-2x.png"
                            alt="ZZO Studio"
                            className="h-8 w-auto"
                        />
                    </a>

                    <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
                        <a href="#problema" className="hover:text-[#f0b05d] transition-colors">O Problema</a>
                        <a href="#solucao" className="hover:text-[#f0b05d] transition-colors">A Solução</a>
                        <a href="#servicos" className="hover:text-[#f0b05d] transition-colors">Entregáveis</a>
                        <a href="#galeria" className="hover:text-[#f0b05d] transition-colors">Galeria</a>
                        <a href="#funcionamento" className="hover:text-[#f0b05d] transition-colors">Como Funciona</a>
                    </div>

                    <a
                        href="#contato"
                        className="px-5 py-2.5 bg-[#f0b05d] hover:bg-[#d99a4a] text-black text-sm font-bold rounded-full transition-colors"
                    >
                        Diagnóstico Estratégico
                    </a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="pt-32 pb-16 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Main Hero Image/Card */}
                    <FadeIn>
                        <div className="relative w-full rounded-[2rem] overflow-hidden bg-black min-h-[70vh] flex flex-col justify-between p-10 md:p-16">
                            {/* Video background YouTube */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <iframe
                                    src="https://www.youtube.com/embed/gUONP_btbCc?autoplay=1&mute=1&controls=0&loop=1&playlist=gUONP_btbCc&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3"
                                    allow="autoplay; encrypted-media"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '100%',
                                        height: '100%',
                                        transform: 'translate(-50%, -50%) scale(3.16)',
                                        transformOrigin: 'center center',
                                        border: 'none',
                                        pointerEvents: 'none',
                                        opacity: 0.1,
                                    }}
                                    title="ZZO Studio background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            </div>

                            <div className="relative z-10 max-w-3xl mt-auto">
                                <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white mb-6 uppercase tracking-wider">
                                    ZZO STUDIO
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                                    Gestão Estratégica de Conteúdo com IA
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-xl leading-relaxed">
                                    Criamos, estruturamos e gerenciamos sua presença digital utilizando inteligência artificial para otimizar tempo e escala de produção.
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a
                                        href="#contato"
                                        className="flex items-center gap-2 px-8 py-4 bg-[#f0b05d] text-black font-bold rounded-full hover:bg-[#d99a4a] transition-colors"
                                    >
                                        Solicitar Diagnóstico <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <div className="text-sm text-gray-400 font-medium whitespace-nowrap">
                                        Não substituímos você.<br />
                                        <span className="text-white">Potencializamos sua presença.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION - O PROBLEMA / STATEMENT */}
            <section id="problema" className="py-24 px-6 border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
                    <FadeIn className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                            Produzir conteúdo <br />
                            <span className="text-gray-400 font-light">exige muito de você.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
                            A maioria das marcas trava na execução, não na estratégia. Para criar conteúdo em escala, atualmente são necessários:
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {[
                                { label: "Tempo" },
                                { label: "Energia" },
                                { label: "Constância" },
                                { label: "Equipe" },
                                { label: "Custo de produção" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full text-gray-700 font-medium border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-[#f0b05d]" />
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:w-1/2">
                        <div className="bg-[#fff8ee] p-10 md:p-14 rounded-3xl border border-[#fef0d6] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0b05d]/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">A Solução</h3>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed relative z-10">
                                Na ZZO Studio, utilizamos IA como <strong>ferramenta de produção e otimização.</strong>
                            </p>

                            <div className="space-y-4 mb-10 relative z-10">
                                <div className="flex gap-4 items-center">
                                    <Check className="w-6 h-6 text-[#f0b05d] shrink-0" />
                                    <p className="text-gray-600 font-medium">Otimização de tempo</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Check className="w-6 h-6 text-[#f0b05d] shrink-0" />
                                    <p className="text-gray-600 font-medium">Redução de custo operacional</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Check className="w-6 h-6 text-[#f0b05d] shrink-0" />
                                    <p className="text-gray-600 font-medium">Aumento de frequência de conteúdo</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Check className="w-6 h-6 text-[#f0b05d] shrink-0" />
                                    <p className="text-gray-600 font-medium">Estratégia estruturada</p>
                                </div>
                            </div>

                            <div className="border-t border-[#fde4b4]/60 pt-6 relative z-10">
                                <p className="text-xl font-bold text-[#8a5c18] leading-snug">Você continua sendo a essência.<br /><span className="font-light">Nós aceleramos a execução.</span></p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* O QUE ENTREGAMOS (SERVIÇOS) */}
            <section id="servicos" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                            O Que Entregamos
                        </h2>
                        <p className="text-xl text-gray-500 font-light">
                            IA é ferramenta. Estratégia é o centro.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Influencer de IA",
                                desc: "Criamos um influenciador digital estratégico para representar sua marca em conteúdos específicos.",
                                obj: "Ampliar sua presença digital com eficiência de produção.",
                                tags: ["Desenvolvimento da persona", "Identidade visual", "Direção criativa", "Produção recorrente de conteúdos com IA", "Gestão editorial", "Planejamento estratégico"],
                                icon: <Cpu className="w-8 h-8 text-[#f0b05d]" />
                            },
                            {
                                title: "Clone Digital",
                                desc: "Criamos conteúdos utilizando sua imagem e voz através de tecnologia de IA, com acompanhamento estratégico.",
                                obj: "Reduzir sua necessidade de gravação constante sem perder identidade.",
                                tags: ["Modelagem visual", "Modelagem de voz", "Direcionamento de roteiro", "Produção otimizada", "Gestão de calendário", "Revisão estratégica"],
                                icon: <RefreshCw className="w-8 h-8 text-[#f0b05d]" />
                            },
                            {
                                title: "Gestão Completa de Conteúdo com IA",
                                desc: "Integramos tudo em uma estrutura corporativa. Estratégia, design e produção entregando consistência sem amadores.",
                                obj: "Organizar e acelerar sua produção digital corporativa.",
                                tags: ["Planejamento editorial", "Criação de roteiros", "Produção visual com IA", "Design profissional", "Otimização de tempo", "Relatórios de performance"],
                                icon: <Box className="w-8 h-8 text-[#f0b05d]" />
                            }
                        ].map((service, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="flex">
                                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full hover:border-[#fde4b4] transition-colors">
                                    <div className="mb-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-500 mb-8 leading-relaxed font-light">
                                        {service.desc}
                                    </p>

                                    <div className="mb-8 flex-grow">
                                        <p className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">Inclui:</p>
                                        <ul className="space-y-3">
                                            {service.tags.map((tag, tIndex) => (
                                                <li key={tIndex} className="flex gap-3 text-sm text-gray-600">
                                                    <span className="text-[#f0b05d] font-bold">•</span>
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 mt-auto">
                                        <p className="text-sm font-bold text-gray-900 mb-1">Objetivo principal:</p>
                                        <p className="text-sm text-gray-500 leading-relaxed italic">{service.obj}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto">
                        <p className="text-xl font-light text-gray-500 mb-2">Não vendemos promessa de automação mágica.</p>
                        <p className="text-xl font-bold text-gray-900">Vendemos otimização de tempo e redução de custo operacional.</p>
                    </div>
                </div>
            </section>

            {/* SECTION - GALERIA EXPLORAR INSTAGRAM (NOSSOS TRABALHOS) */}
            <section id="galeria" className="py-24 px-6 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                                    O que já construímos
                                </h2>
                                <p className="text-gray-400 text-lg font-light">
                                    Nossa estratégia e IA materializada na prática. Explore o nível das nossas entregas.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        {/* Bento Grid - Estilo Instgram Explore */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">

                            {/* Bloco 1: Vídeo maior (Destaque) */}
                            <div className="col-span-2 row-span-2 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-[#0a0a0a] border border-white/10">
                                <video
                                    src="https://antiplanos.com.br/backend/uploads/1771626122_1771557580_9.mp4"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    autoPlay loop muted playsInline preload="auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur p-2 rounded-full z-10">
                                    <Play className="w-5 h-5 text-white" />
                                </div>
                                <div className="absolute bottom-6 left-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <p className="text-white font-bold md:text-2xl">Clone Estratégico</p>
                                    <p className="text-[#f0b05d] font-medium text-sm">Produção Automatizada</p>
                                </div>
                            </div>

                            {/* Bloco 2: Vídeo Estendido (Vertical) */}
                            <div className="row-span-2 relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-[#0a0a0a] border border-white/10">
                                <video
                                    src="https://antiplanos.com.br/backend/uploads/1771626173_1771557430_10.mp4"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    autoPlay loop muted playsInline preload="auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                                <div className="absolute bottom-6 left-6 z-10">
                                    <p className="text-white font-bold text-lg">Direção Visual</p>
                                </div>
                            </div>

                            {/* Bloco 3: Vídeo Padrão Menor */}
                            <div className="relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-[#0a0a0a] border border-white/10">
                                <video
                                    src="https://antiplano.com.br/uploads/media_699751cc03513.mp4"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    autoPlay loop muted playsInline preload="auto"
                                />
                                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur p-1.5 rounded-full z-10">
                                    <Play className="w-3 h-3 text-white" />
                                </div>
                            </div>

                            {/* Bloco 4: Vídeo Padrão Menor */}
                            <div className="relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-[#0a0a0a] border border-white/10">
                                <video
                                    src="https://antiplano.com.br/uploads/media_6997511ba1d6f.mp4"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                    autoPlay loop muted playsInline preload="auto"
                                />
                                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur p-1.5 rounded-full z-10">
                                    <Play className="w-3 h-3 text-white" />
                                </div>
                            </div>

                        </div>

                        {/* YouTube Shorts — 3 vídeos 9:16 centralizados */}
                        <div className="flex justify-center gap-4 mt-4">
                            {[
                                "hjq27U-Aad8",
                                "fWaMJvcKTuI",
                                "gUONP_btbCc",
                            ].map((id) => (
                                <div
                                    key={id}
                                    className="rounded-xl md:rounded-2xl overflow-hidden bg-black border border-white/10 flex-shrink-0"
                                    style={{ height: '480px', aspectRatio: '9/16' }}
                                >
                                    <iframe
                                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
                                        style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                                        allow="autoplay; encrypted-media"
                                        title="ZZO Studio"
                                    />
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION - COMO FUNCIONA */}
            <section id="funcionamento" className="py-24 px-6 border-b border-gray-100 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Como Funciona
                        </h2>
                        <p className="text-gray-500 text-lg font-light">
                            Um fluxo direto, sem atritos, focado apenas no que importa: posicionamento e escala.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { num: "01", title: "Diagnóstico estratégico" },
                            { num: "02", title: "Definição de posicionamento" },
                            { num: "03", title: "Construção da estrutura criativa" },
                            { num: "04", title: "Implementação com IA" },
                            { num: "05", title: "Gestão contínua e ajustes" }
                        ].map((step, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white p-6 rounded-2xl h-full border border-gray-100 relative group hover:bg-[#fff8ee] hover:border-[#fef0d6] transition-colors shadow-sm">
                                    <div className="text-4xl font-bold text-gray-200 group-hover:text-[#f0b05d] mb-6 font-display">
                                        {step.num}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-black">{step.title}</h4>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION - INVESTIMENTO & PLANOS */}
            <section id="investimento" className="py-24 px-6 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <div className="inline-block px-4 py-1.5 bg-[#fef0d6] text-[#c88a38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                            Assinatura Contínua
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Hub Ativo Mensal + Créditos
                        </h2>
                        <p className="text-gray-500 text-lg font-light">
                            Sua agência in-house focada em inteligência sob demanda, zero atrito.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                name: "Starter",
                                price: "2.900",
                                desc: "Organização básica para impulsionar a linha editorial.",
                                items: ["Gestão e Organização", "Briefing estruturado", "Entrega documentada"],
                                accent: false
                            },
                            {
                                name: "Growth",
                                price: "4.500",
                                desc: "Foco em estruturação robusta e alinhamento tático impecável.",
                                items: ["Tudo do Starter", "Estruturação editorial", "Dashboard de acompanhamento", "Relatórios de consumo", "Diárias de captação inclusas"],
                                accent: true
                            },
                            {
                                name: "Scale",
                                price: "A negociar",
                                desc: "Dominância máxima. Sem fricção, com todas esferas abordadas.",
                                items: ["Tudo do Growth", "Clone de avatar custom exclusivo", "Aplicações de tradução", "Sincronia multiplataforma", "Diárias de gravação inclusas"],
                                accent: false
                            }
                        ].map((plan, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="flex">
                                <div className={`w-full bg-white p-10 rounded-3xl border flex flex-col h-full relative ${plan.accent ? 'border-[#f0b05d] shadow-xl shadow-[#f0b05d]/10' : 'border-gray-200 shadow-sm'}`}>
                                    {plan.accent && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f0b05d] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                            Mais Escolhido
                                        </div>
                                    )}
                                    <h3 className={`text-xl font-bold mb-4 ${plan.accent ? 'text-[#f0b05d]' : 'text-gray-900'}`}>{plan.name}</h3>
                                    <div className="mb-6">
                                        {plan.price === "A negociar" ? (
                                            <span className="text-3xl font-bold text-gray-900">A negociar</span>
                                        ) : (
                                            <>
                                                <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                                                <span className="text-gray-500">/mês</span>
                                            </>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-sm font-light mb-8">{plan.desc}</p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.items.map((item, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm text-gray-600">
                                                <Check className={`w-5 h-5 shrink-0 ${plan.accent ? 'text-[#f0b05d]' : 'text-[#f0b05d]/50'}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION - SIMULADOR */}
            <section id="simulador" className="py-24 px-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <div className="inline-block px-4 py-1.5 bg-[#fef0d6] text-[#c88a38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                                Potencial de Créditos
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                                O que você faz com R$ 1.000 em créditos?
                            </h2>
                            <p className="text-gray-500 text-lg font-light">
                                Arraste o botão para simular. Entenda o volume de produção de Vídeos, Imagens e Clones que o seu orçamento permite criar.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto bg-gray-50 p-10 md:p-14 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="mb-12 relative z-10">
                                <label className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-2">
                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Seu Orçamento Base (R$)</span>
                                    <span className="text-4xl md:text-5xl font-bold text-[#f0b05d]">
                                        R$ {investimento.toLocaleString('pt-BR')}
                                    </span>
                                </label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="20000"
                                    step="1000"
                                    value={investimento}
                                    onChange={(e) => setInvestimento(Number(e.target.value))}
                                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#f0b05d]"
                                />
                                <div className="flex justify-between text-xs font-bold text-gray-400 mt-3">
                                    <span>R$ 1.000</span>
                                    <span>R$ 20.000</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center hover:border-[#fde4b4] transition-colors">
                                    <Play className="w-8 h-8 text-[#f0b05d] mb-4" />
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Vídeos Curtos (30s)</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{Math.floor(investimento / 60)}<span className="text-2xl text-gray-400 font-light">x</span></div>
                                    <div className="text-xs text-gray-500 mt-auto">Vídeos criados com IA<br />(Ref: R$ 60/cada)</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center hover:border-[#fde4b4] transition-colors">
                                    <ImageIcon className="w-8 h-8 text-[#f0b05d] mb-4" />
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Imagens Geradas</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{Math.floor(investimento / 0.42)}<span className="text-2xl text-gray-400 font-light">x</span></div>
                                    <div className="text-xs text-gray-500 mt-auto">Imagens em Alta Resolução<br />(Ref: R$ 0,42/cada)</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center hover:border-[#fde4b4] transition-colors">
                                    <RefreshCw className="w-8 h-8 text-[#f0b05d] mb-4" />
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Clones Digitais (30s)</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{Math.floor(investimento / 60)}<span className="text-2xl text-gray-400 font-light">x</span></div>
                                    <div className="text-xs text-gray-500 mt-auto">Vídeos do seu Clone<br />(Ref: R$ 60/cada)</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION - PROJETOS SOB DEMANDA */}
            <section id="projetos" className="py-24 px-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <div className="inline-block px-4 py-1.5 bg-[#fef0d6] text-[#c88a38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                            Projetos Standalone
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Serviços Independentes
                        </h2>
                        <p className="text-xl text-gray-500 font-light">
                            Não consumimos créditos para grandes entregáveis. Eles têm um valor fixo definido, garantindo escopo e qualidade impecável.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* LANDING PAGES */}
                        <FadeIn delay={0.1}>
                            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col h-full hover:border-[#f0b05d] transition-colors">
                                <Layout className="w-10 h-10 text-[#f0b05d] mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Landing Pages</h3>
                                <p className="text-gray-500 text-sm mb-6 flex-grow">Páginas de altíssima conversão focadas em captura de leads ou vendas diretas.</p>
                                <div className="pt-6 border-t border-gray-100 mt-auto">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">A partir de</p>
                                    <p className="text-3xl font-bold text-gray-900">R$ 1.000</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* SITES EMPRESARIAIS */}
                        <FadeIn delay={0.2}>
                            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col h-full hover:border-[#f0b05d] transition-colors">
                                <Box className="w-10 h-10 text-[#f0b05d] mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sites Empresariais</h3>
                                <p className="text-gray-500 text-sm mb-6 flex-grow">Estrutura corporativa completa, com múltiplas páginas, sistema estético robusto e CMS.</p>
                                <div className="pt-6 border-t border-gray-100 mt-auto">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">A partir de</p>
                                    <p className="text-3xl font-bold text-gray-900">R$ 3.000</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* APRESENTAÇÕES */}
                        <FadeIn delay={0.3}>
                            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col h-full hover:border-[#f0b05d] transition-colors">
                                <FileText className="w-10 h-10 text-[#f0b05d] mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Apresentações</h3>
                                <p className="text-gray-500 text-sm mb-6 flex-grow">Pitch decks e apresentações comerciais criadas com visual premium e argumentos de peso.</p>
                                <div className="pt-6 border-t border-gray-100 mt-auto">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">A partir de</p>
                                    <p className="text-3xl font-bold text-gray-900">R$ 500</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* SECTION - TABELA DE CONSUMO */}
            <section id="tabela-consumo" className="py-24 px-6 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm mb-20">
                            <div className="p-8 md:p-10 border-b border-gray-100 bg-white">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tabela de Consumo / Preços Base</h3>
                                <p className="text-gray-500 font-light text-sm">Esta é a tabela unitária que abate seus créditos. Os valores são válidos tanto para pacotes quanto serviços sob demanda. Créditos não utilizados viram rollover automático.</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-white">
                                            <th className="py-4 px-6 md:px-10 font-medium text-gray-400 text-sm">Formato</th>
                                            <th className="py-4 px-6 md:px-10 font-medium text-gray-400 text-sm">Unidade</th>
                                            <th className="py-4 px-6 md:px-10 font-medium text-gray-400 text-sm">Preço (Créditos)</th>
                                            <th className="py-4 px-6 md:px-10 font-medium text-gray-400 text-sm">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {[
                                            { fmt: "🎬 Vídeo gerado por IA", uni: "por segundo", prc: "R$ 2,00 / seg", sts: "Ativo", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "🎬 Vídeo 30 segundos", uni: "por peça", prc: "R$ 60,00", sts: "Ativo", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "🎬 Vídeo 2 minutos", uni: "por peça", prc: "R$ 240,00", sts: "Ativo", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "🖼️ Imagem gerada por IA", uni: "por imagem", prc: "R$ 0,42", sts: "Ativo", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "🧬 Clone — Vídeo 30s", uni: "por peça", prc: "R$ 60,00", sts: "Clone IA", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "🧬 Clone — Vídeo 2 min", uni: "por peça", prc: "R$ 240,00", sts: "Clone IA", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "🧬 Clone Ultra-realista 30s", uni: "por peça", prc: "R$ 137,00", sts: "Premium", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "🧬 Clone Ultra-realista 2min", uni: "por peça", prc: "R$ 548,00", sts: "Premium", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                            { fmt: "✂️ Corte & Distribuição", uni: "por 1000 views (CPMV)", prc: "R$ 1,00 - 1,50", sts: "Serviço Extra", color: "text-[#c88a38] bg-[#fff8ee] border-[#fef0d6]" },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-4 px-6 md:px-10 font-bold text-gray-900 text-sm whitespace-nowrap">{row.fmt}</td>
                                                <td className="py-4 px-6 md:px-10 text-gray-500 text-sm whitespace-nowrap">{row.uni}</td>
                                                <td className="py-4 px-6 md:px-10 font-bold text-gray-900 text-sm whitespace-nowrap">{row.prc}</td>
                                                <td className="py-4 px-6 md:px-10 whitespace-nowrap">
                                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${row.color}`}>
                                                        {row.sts}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-[#fff8ee] rounded-3xl p-10 md:p-14 border border-[#fef0d6] flex flex-col lg:flex-row items-center gap-12 mt-20">
                            <div className="lg:w-1/2">
                                <div className="inline-block px-4 py-1.5 bg-[#f0b05d]/20 text-[#8a5c18] text-xs font-bold rounded-full uppercase tracking-widest mb-6">
                                    Estratégia Separada e Autônoma
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Cortes & Tráfego</h3>
                                <p className="text-gray-600 font-light leading-relaxed mb-8">
                                    Corte e Distribuição funcionam de forma independente da produção orgânica. Transformamos seus melhores vídeos em recortes cirúrgicos magnéticos para escalar vendas via anúncios curtos. Um funil validado de 1 Milhão de visualizações focadas.
                                </p>
                                <a
                                    href="#contato"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0b05d] text-black rounded-full font-bold text-sm hover:bg-[#d99a4a] transition-colors"
                                >
                                    Quero orçar distribuição <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="lg:w-1/2 flex flex-col gap-4 w-full">
                                <div className="bg-white p-6 rounded-2xl border border-[#fef0d6] shadow-sm flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-bold text-[#c88a38] mb-1">R$ 1,00 a 1,50</span>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">CPMV (Custo p/ 1000 Views)</span>
                                    <span className="text-[10px] text-gray-400 mt-2 font-medium">*(vs Mín. R$ 6,00 no Meta Ads)*</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl border border-[#fef0d6] shadow-sm flex flex-col items-center justify-center text-center">
                                        <span className="text-3xl font-bold text-[#c88a38] mb-1">12h</span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ciclo rápido</span>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl border border-[#fef0d6] shadow-sm flex flex-col items-center justify-center text-center">
                                        <span className="text-3xl font-bold text-[#c88a38] mb-1">1M+</span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Views mês</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION - CONTATO */}
            <section id="contato" className="py-24 px-6 bg-black border-t border-white/10">
                <div className="max-w-2xl mx-auto text-center">
                    <FadeIn>
                        <div className="inline-block px-4 py-1.5 bg-[#f0b05d]/10 text-[#f0b05d] text-xs font-bold rounded-full uppercase tracking-widest mb-8">
                            Diagnóstico gratuito
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Vamos entender<br />
                            <span className="text-white/40 font-light">o seu negócio.</span>
                        </h2>
                        <p className="text-lg text-white/60 font-light mb-12 max-w-lg mx-auto">
                            Sem formulário, sem burocracia. Fale diretamente com a gente pelo WhatsApp e agende uma conversa estratégica.
                        </p>
                        <a
                            href="https://wa.me/5534999320196?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20estratégico%20com%20a%20ZZO%20Studio."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-[#f0b05d] hover:bg-[#d99a4a] text-black font-bold rounded-full transition-colors text-lg"
                        >
                            Falar no WhatsApp <ArrowRight className="w-5 h-5" />
                        </a>
                        <p className="mt-6 text-xs text-white/30 uppercase tracking-widest">Sem compromisso · Resposta rápida</p>
                    </FadeIn>
                </div>
            </section>

            {/* FOOTER BOTTOM */}
            <footer className="py-8 px-6 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase text-white/50">
                    <div className="text-white">ZZO Studio</div>
                    <div>Gestão Estratégica de Conteúdo com IA</div>
                    <div>Todos os direitos reservados</div>
                </div>
            </footer>

        </div>
    );
};

export default IAServicePage;
