import Image from 'next/image';
import Header from '@/components/Header';


export default function Certification() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-5 bg-[#6a0080]" />
      <div className="relative z-50 shadow-lg">
        <Header />
      </div>
      <div >
        <main className="flex flex-col">
          <div className='bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 py-20 flex items-center justify-center'>
            <div className='flex items-center justify-start max-w-[1500px] w-full'>
                <div className='flex items-center justify-between w-full max-w-[980px]'>
                    <p className='text-black text-sm text-left font-open-sans'>Home { '>' } Certificação</p>
                    <h1 className='text-4xl font-medium text-center text-black uppercase'>Entenda a Certificação</h1>
                </div>
            </div>
          </div>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">    
                <p className='text-black text-sm text-center font-open-sans'>Etapa 1/5</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight text-center mb-20">
                    Sobre o selo GCFC
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">                
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-black mb-8">
                                O que é
                            </h3>
                            
                            <p className="text-base text-gray-800">
                                Um Selo de Certificação concedido a empresas que atingem um índice mínimo em nosso Diagnóstico de Experiência do Cliente que a certificada como uma Great Company for Consumers - Excelente Empresa para Consumidores.
                            </p>
                            
                            <h3 className="text-lg font-medium text-black mb-8">
                                Como é
                            </h3>
                            
                            <p className="text-base text-gray-800">
                                O selo de Certificação GCFC* está disponível em duas modalidades:
                            </p>
                            
                            <ul className="list-disc list-inside space-y-2 text-base text-gray-800 ml-4">
                                <li>Física: adesivo para colar em pontos estratégicos de sua empresa, como fachadas, portas, vitrines, etc.</li>
                                <li>Digital: concessão do direito de uso do selo em imagem para sites, redes sociais, sacolas, brindes, documentos impressos, etc.</li>
                            </ul>
                            
                            <p className="text-sm text-gray-600 mt-4">
                                *Validade: 12 meses, a partir da aprovação no Processo de Avaliação.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                        src="/certification_01.png"
                        alt="Edifício moderno da GCFC com iluminação noturna"
                        width={400}
                        height={600}
                        className="w-full h-auto max-h-[500px] max-w-[400px] object-contain"
                        priority
                        />
                    </div>
                </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className='text-black text-sm text-center font-open-sans'>Etapa 2/5</p>
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  Avaliação
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/certification_02.png"
                    alt="Profissional da GCFC analisando dados e relatórios em ambiente corporativo"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[400px] max-w-[400px] object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    Como Avaliamos
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    A GCFC simula ser um cliente para avaliar, de forma sigilosa e imparcial, a jornada real do consumidor na sua empresa, sem qualquer custo.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    O que Avaliamos
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Durante a avaliação, analisamos agilidade, clareza, cordialidade, resolução de problemas e conformidade com as leis consumeristas.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Integridade
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Essa etapa ocorre sem qualquer interferência da empresa avaliada, o que reforça a integridade e imparcialidade do processo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-20">
                <p className='text-black text-sm text-center font-open-sans'>Etapa 3/5</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight">
                  Diagnóstico
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    O que é
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Com base na avaliação realizada, é elaborado um relatório detalhado contendo todos os achados da análise. Esse é o diagnóstico.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Como é
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Esse diagnóstico inclui a pontuação obtida em cada critério avaliado, além de apontar os pontos fortes e as oportunidades de melhoria identificadas.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Confidencialidade
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    O relatório é enviado exclusivamente à empresa avaliada, incluindo uma gravação do atendimento, e não é divulgado publicamente, permitindo que a organização utilize essas informações para aprimorar seus processos internos.
                  </p>
                </div>

                <div className="relative">
                  <Image
                    src="/certification_03.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] max-w-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className='text-black text-sm text-center font-open-sans'>Etapa 4/5</p>
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  Resultado
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/notification_03.png"
                    alt="Globo terrestre transparente sendo segurado por duas mãos, simbolizando a presença global da GCFC"
                    width={600}
                    height={600}
                    className="w-full h-auto "
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    Nota Mínima
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Após a emissão do diagnóstico, a empresa é classificada com uma nota final entre 0 e 100. Caso atinja o mínimo de 70 pontos, recebe a certificação oficial GCFC - Great Company for Consumers.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Representação
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Essa nota comprova que a empresa oferece uma experiência satisfatória e em conformidade com os padrões exigidos nos critérios qualidade, respeito e confiança.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Objetivo
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    A certificação reforça a credibilidade da marca, aumentando sua reputação no mercado e destacando-a perante consumidores que valorizam empresas comprometidas com qualidade, ética e respeito ao cliente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-20">
                <p className='text-black text-sm text-center font-open-sans'>Etapa 5/5</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight">
                  Certificação GCFC
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    Nota maior que 70/100
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Comemore! Você é uma Great Company for Consumers - Excelente Empresa para o Consumidor, certificada pela maior autoridade no assunto.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Nota menor que 70/100
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    A avaliação será repetida em 30 dias. Persistindo a baixa pontuação, a empresa reprovada é reembolsada e poderá solicitar nova avaliação após 60 dias.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Benefícios da certificação
                  </h3>
                  
                  <ol className="list-decimal list-inside space-y-2 text-base text-gray-800 ml-4">
                    <li>Indica que é excelente empresa para visitar, comprar ou fazer negócios;</li>
                    <li>Aponta que a empresa é séria, confiável e segue as leis consumeristas;</li>
                    <li>Pode ser usado no marketing e divulgação para atrair clientes;</li>
                    <li>A certificação transmite autoridade, credibilidade e contribui nas vendas.</li>
                  </ol>
                </div>

                <div className="relative">
                  <Image
                    src="/certification_05.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] max-w-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1480px] mx-auto flex flex-col sm:flex-row items-start justify-center bg-[#6a0080] text-white p-12 rounded-xl my-20">
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
