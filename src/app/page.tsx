import Image from 'next/image';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-5 bg-[#6a0080]" />
      <div className="relative z-50 shadow-lg">
        <Header />
      </div>
      <div className="">
        <main className="flex flex-col gap-16 sm:gap-20 lg:gap-24 lg:pt-12 pb-8 sm:pb-12 px-4 sm:px-[72px] lg:px-0 bg-white">
          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col lg:flex-row items-center mt-10 lg:-mt-10 gap-6 sm:gap-8 lg:gap-0 lg:justify-between bg-white min-h-[480px] sm:min-h-[520px] lg:min-h-[480px]" id="hero">
              <div className="flex-1 flex flex-col gap-4 sm:gap-6 lg:pl-16 px-4 sm:px-0">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#6a0080] leading-tight mb-2 font-heading uppercase">
                  CERTIFICADORA INTERNACIONAL EM EXPERIÊNCIA DO CONSUMIDOR
                </h1>
                <p className="text-black text-base sm:text-xl max-w-2xl font-open-sans">
                  A GCFC é uma organização global que identifica e 
                  premia as empresas que oferecem excelência em práticas de Customer Experience.
                </p>
                
                <div className="flex justify-center items-center lg:hidden">
                  <Image 
                    src={`/imagem_01.png`}
                    alt="Hero GCFC" 
                    width={840} 
                    height={840} 
                    className="w-full max-w-sm sm:max-w-lg h-auto object-cover" 
                    priority 
                    //key={`hero-mobile-${language.flag}`}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 max-w-xl">
                  <button className="text-black py-3 px-5 rounded-3xl border-2 border-black">
                    <Link href="/saiba-mais">ENTENDA A CERTIFICAÇÃO</Link>
                  </button>
                  <Button text="CONQUISTE A CERTIFICAÇÃO" href="/certification" padding='py-3 px-5' borderRadius="rounded-2xl" className="hidden lg:block text-white text-base font-bold shadow-lg" />
                </div>
              </div>
              
              <div className="hidden lg:flex flex-1 justify-center items-center lg:pr-8">
                <Image 
                  src={`/imagem_01.png`}
                  alt="Hero GCFC" 
                  width={840} 
                  height={840} 
                  className="w-full max-w-xl h-auto object-cover rounded-br-[120px] rounded-tl-[120px]" 
                  priority 
                  //key={`hero-desktop-${language.flag}`}
                />
              </div>
          </section>

          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col gap-8 sm:gap-12 items-center relative" id="empresas">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-center text-[#6a0080] tracking-tight mb-2 sm:mb-4 lg:mb- max-w-[36rem] font-heading uppercase">Nossos Serviços</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">Identificar e reconhecer as Melhores empresas para o Consumidor, é nossa missão!</p>
            <div className="w-full flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 lg:gap-32 relative">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_02.png" alt="Diagnóstico" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-40 lg:w-56" />
                <span className="font-semibold text-black text-center uppercase text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[18rem] font-heading">
                  Diagnóstico de Experiência do Cliente
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] z-10 relative">
                <Image src="/imagem_03.png" alt="Certificação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-28 sm:w-32 md:w-36 lg:w-40 relative z-10" />
                <span className="font-semibold text-black text-center uppercase text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[18rem] relative z-10 font-heading">
                  Certificação GCFC - Great Company For Consumers
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_04.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
                <span className="-mt-4 font-semibold text-black text-center uppercase text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[18rem] font-heading">
                  Premiação das Melhores Empresas para o Consumidor
                </span>
              </div>
            </div>
          </section>

          <section className="my-8 w-full flex items-center justify-center">
            <div className="w-1/2 bg-gray-300">
              <div className="flex items-center justify-center gap-10">
                <Image src="/imagem_05.png" alt="Resultado" width={360} height={360} />
                <div className="flex flex-col items-start justify-center max-w-60 gap-4">
                  <h3 className="text-[#6a0080] text-3xl font-bold uppercase">Reconhecimento internacional</h3>
                  <p className="text-[#6a0080] text-base">A mesma metodologia de reconhecimento me todos os países que atuamos</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-[#6a0080]">
              <div className="flex items-center justify-center gap-10">
                <div className="flex flex-col items-start justify-center max-w-60 gap-4">
                  <h3 className="text-white text-3xl font-bold uppercase">Presença Global</h3>
                  <p className="text-white text-base">A GCFC está presente em todos os continentes do mundo</p>
                </div>
                <Image src="/imagem_06.png" alt="Certificado" width={364} height={364} />
              </div>
            </div>
          </section>

          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col items-center relative" id="empresas">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-4 max-w-[36rem] font-heading uppercase">Certificação GCFC</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">O mesmo procedimento em qualquer lugar do mundo</p>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 relative mt-20">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_07.png" alt="Diagnóstico" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-40 lg:w-56" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">Avaliação</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  Avaliamos a experiência do consumidor e adequação às lei consumeristas
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] z-10 relative">
                <Image src="/imagem_08.png" alt="Certificação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-28 sm:w-32 md:w-36 lg:w-40 relative z-10" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">DIAGNÓSTICO</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  Emitimos relatórios de avaliação e enviamos apenas à empresa avaliada
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_09.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">Resultado</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  A empresa é certificada pela GCFC ao atingir pontuação mínima de 70/100
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] rounded-">
                <Image src="/imagem_10.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
              </div>
            </div>
            <Button text="SAIBA MAIS" href="/certification" padding='py-6 px-28' borderRadius="rounded-4xl" className="hidden lg:block text-white text-2xl font-bold shadow-lg mt-10" />
          </section>

          <section className="my-8 bg-gray-100 py-32">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-center text-[#6a0080] mb-4 font-heading uppercase">Empresas certificadas</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">Conheça algumas das empresas certificadas pela GCFC</p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_11.png" alt="Sobre a GCFC" width={480} height={400} />
                <h3 className="text-black text-xl sm:text-2xl font-heading text-center">NORD 23</h3>
                <p className="text-black text-sm sm:text-lg font-open-sans text-center max-w-[24rem]">&quot;O selo GCFC de Excelente Empresa para Consumidores nos destaca da concorrência&quot;</p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_12.png" alt="Sobre a GCFC" width={480} height={400} />
                <h3 className="text-black text-xl sm:text-2xl font-heading text-center">SEBBA IMÓVEIS</h3>
                <p className="text-black text-sm sm:text-lg font-open-sans text-center max-w-[24rem]">&quot;A certificação GCFC nos garante excelência nos processos do início ao fim&quot;</p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_13.png" alt="Sobre a GCFC" width={480} height={400} />
                <h3 className="text-black text-xl sm:text-2xl font-heading text-center">AZZURE CLUB</h3>
                <p className="text-black text-sm sm:text-lg font-open-sans text-center max-w-[24rem]">&quot;A certificação GCFC aumenta a credibilidade da empresa no mercado&quot;</p>
              </div>
            </div>
          </section>

          <section className="max-w-[1680px] mx-auto px-4 sm:px-5 w-full flex flex-col items-center relative" id="empresas">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-4 max-w-[36rem] font-heading uppercase">Prêmio GCFC</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">Como funciona o Prêmio Great Company For Consumers</p>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 relative mt-20">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_14.png" alt="Diagnóstico" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-40 lg:w-48" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">Notificação</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  Notificamos empresas potenciais ao prêmio sobre o processo de avaliação da GCFC
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px] z-10 relative">
                <Image src="/imagem_15.png" alt="Certificação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-28 sm:w-32 md:w-36 lg:w-40 relative z-10" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">Avaliação</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  Avaliamos a experiência do consumidor e adequação às leis consumeristas
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_16.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-48" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">Resultado</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  Enviaremos os insights e resultados da avaliação apenas às empresas avaliadas
                </span>
              </div>
              <ArrowRightIcon className="w-12 h-10 text-black" />
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_17.png" alt="Premiação" width={400} height={600} className="h-48 sm:h-56 md:h-48 lg:h-64 w-40 sm:w-48 md:w-36 lg:w-44" />
                <p className="text-black text-sm sm:text-2xl font-open-sans text-center uppercase font-semibold">Premiação</p>
                <span className="text-black text-center text-xs sm:text-sm lg:text-base leading-tight break-words whitespace-pre-line max-w-[20rem] font-heading">
                  As 3 empresas melhores colocadas recebem certificação e premiação numa noite épica
                </span>
              </div>
            </div>
            <Button text="SAIBA MAIS" href="/awards" padding='py-6 px-28' borderRadius="rounded-4xl" className="hidden lg:block text-white text-2xl font-bold shadow-lg mt-10" />
          </section>

          <section className="my-8 bg-gray-100 py-20">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-4 font-heading uppercase">Certificação X Premiação</h2>
            <p className="text-black text-sm sm:text-xl font-open-sans text-center">Descubra a diferença entre a Certificação e a Premiação</p>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-40">
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_18.png" alt="Certificação" width={180} height={300} className="mb-4 -mt-9" />
                <h2 className="text-xl sm:text-2xl font-semibold text-center text-black mb-4 font-heading uppercase">Certificação</h2>
                <div className="flex flex-col items-center justify-between">
                  <div className="flex flex-col items-start text-left max-w-md">
                    <div className="flex items-center mb-4">
                      <span className="text-black mr-2">?</span>
                      <p className="text-black font-bold text-base">O que é:</p>
                    </div>
                    <p className="mb-4 text-black text-sm ml-5">Um selo de certificação concedido a empresas que atingem um índice mínimo em nosso Diagnóstico de Experiência do Cliente.</p>
                    <div className="flex items-center mb-4">
                      <span className="text-black mr-2">✔</span>
                      <p className="text-black font-bold text-base">Benefícios:</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>Indica que é boa empresa para visitar, consumir ou negociar</li>
                      <li>Aponta que a empresa é confiável e segue as leis consumeristas</li>
                      <li>Pode ser usado no marketing e atração de clientes</li>
                      <li>A certificação pode contribuir no aumento das vendas</li>
                    </ul>
                    <div className="flex items-center mb-4">
                      <span className="text-black mr-2">🏆</span>
                      <p className="text-black font-bold text-base">Como obtê-lo:</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>Inscreva-se junto à GCFC Brasil clicando aqui</li>
                      <li>A GCFC aplicará o Diagnóstico de Experiência do Cliente</li>
                      <li>Para ser certificada, a pontuação mínima é 70/100</li>
                      <li>Receba o selo de Certificação GCFC válido por 1 ano</li>
                    </ul>
                  </div>
                  <Button text="CONQUISTE A CERTIFICAÇÃO" href="/certification" padding='py-3 px-5' borderRadius="rounded-4xl" className="hidden lg:block text-white text-xl font-bold shadow-lg mt-10" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-4 min-w-[150px] sm:min-w-[180px]">
                <Image src="/imagem_19.png" alt="Premiação" width={200} height={300} className="mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold text-center text-black mb-4 font-heading uppercase">Premiação</h2>
                <div className="flex flex-col items-center justify-between">
                  <div className="flex flex-col items-start text-left max-w-md">
                    <div className="flex items-center mb-4">
                      <span className="text-black mr-2">?</span>
                      <p className="text-black font-bold text-base">O que é:</p>
                    </div>
                    <p className="mb-4 text-black text-sm ml-5">Competição pelo título de Melhor Empresa para o Consumidor entre empresas convidadas ou inscritas na mesma categoria.</p>
                    <div className="flex items-center mb-4">
                      <span className="text-black mr-2">✔</span>
                      <p className="text-black font-bold text-base">Benefícios:</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>Traz prestígio e reconhecimento estadual, nacional ou setorial</li>
                      <li>Melhora a reputação da empresa no mercado consumidor</li>
                      <li>Pode ter repercussão na imprensa e no ranking oficial da GCFC</li>
                      <li>Pode gerar mais credibilidade e confiança face ao consumidor</li>
                    </ul>
                    <div className="flex items-center mb-4">
                      <span className="text-black mr-2">🏆</span>
                      <p className="text-black font-bold text-base">Como obtê-lo:</p>
                    </div>
                    <ul className="list-disc text-black pl-5 mb-4 text-sm ml-5">
                      <li>A empresa pode ser convidada ou inscrever-se clicando aqui</li>
                      <li>A GCFC aplicará o Diagnóstico de Experiência do Cliente</li>
                      <li>As 3 melhores pontuadas (&gt;70/100) são classificadas ao prêmio</li>
                      <li>O vencedor é anunciado em uma noite marcante de celebração</li>
                    </ul>
                  </div>
                  <Button text="INSCREVA-SE AO PRÊMIO" href="/awards" padding='py-3 px-5' borderRadius="rounded-4xl" className="hidden lg:block text-white text-xl font-bold shadow-lg mt-10" />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1480px] mx-auto flex flex-col sm:flex-row items-start justify-center bg-[#6a0080] text-white p-12 rounded-xl">
            <div className="flex-shrink-0">
              <Image src="/imagem_20.png" alt="GCFC Building" width={500} height={300} className="rounded-lg object-contain" />
            </div>
            <div className="sm:ml-8 mt-4 sm:mt-8">
              <h2 className="text-2xl font-bold mb-12">SOBRE A GCFC</h2>
              <p className="text-sm sm:text-lg mb-4">
                A GCFC – Great Company for Consumers é uma organização global que identifica e reconhece empresas que se destacam na qualidade do atendimento.
              </p>
              <p className="text-sm sm:text-lg mb-4">
                Presente em todos os continentes do mundo, nosso trabalho é avaliar, de forma criteriosa e imparcial, o atendimento, a transparência e o compromisso das empresas com seus consumidores.
              </p>
              <p className="text-sm sm:text-lg">
                O reconhecimento é feito pela Certificação GCFC e/ou pelo Prêmio Melhores Empresas para o Consumidor.
              </p>
            </div>
          </section>

          <section className="my-20 max-w-[1480px] mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-[#6a0080] mb-8 font-heading uppercase">Conecte-se conosco</h2>
            <p className="text-black text-sm sm:text-base font-open-sans text-center mb-16">Fale com nosso time através de nossos canais oficiais</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div className="flex flex-row items-center">
                <div className="-mr-16 h-full max-h-[250px] bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 text-black flex flex-col justify-center items-start pl-2">
                  <p className="text-2xl font-semibold mb-2 w-32">TRABALHE NA GCFC</p>
                  <p className="text-base text-left">Faça parte do nosso time: <strong>people@gcfc.global</strong></p>
                </div>
                <Image src="/imagem_21.png" alt="Trabalhe na GCFC" width={300} height={200} />
              </div>
              <div className="flex flex-row items-center">
                <div className="-mr-16 h-full max-h-[250px] bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 text-black flex flex-col justify-center items-start pl-2">
                  <p className="text-2xl font-semibold mb-2 w-32">IMPRENSA E MÍDIA</p>
                  <p className="text-base text-left">Assessoria de imprensa: <strong>press@gcfc.global</strong></p>
                </div>
                <Image src="/imagem_22.png" alt="Imprensa e Mídia" width={300} height={200} />
              </div>
              <div className="flex flex-row items-center">
                <div className="-mr-16 h-full max-h-[250px] bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 text-black flex flex-col justify-center items-start pl-2">
                  <p className="text-2xl font-semibold mb-2 w-32">FALE COM A GENTE</p>
                  <p className="text-base text-left">Central de Atendimento: <strong>info@gcfc.global</strong></p>
                </div>
                <Image src="/imagem_23.png" alt="Fale com a Gente" width={300} height={200} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
