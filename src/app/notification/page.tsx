import Image from 'next/image';
import Header from '@/components/Header';


export default function Notification() {
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
                <div className='flex items-center justify-between w-full max-w-[836px]'>
                    <p className='text-black text-sm text-left font-open-sans'>Home { '>' } Fui Notificado</p>
                    <h1 className='text-4xl font-medium text-center text-black uppercase'>Fui notificado</h1>
                </div>
            </div>
          </div>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">    
                <p className='text-black text-sm text-center font-open-sans'>Etapa 1/4</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight text-center mb-20">
                    Notificação
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                <div className="relative">
                    <Image
                    src="/notification_01.png"
                    alt="Edifício moderno da GCFC com iluminação noturna"
                    width={400}
                    height={600}
                    className="w-full h-auto max-h-[500px] max-w-[400px] object-contain"
                    priority
                    />
                </div>
                
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-black mb-8">
                            Quem são notificados
                        </h3>
                        
                        <p className="text-base text-gray-800">
                            Empresas com potencial de destaque em seu segmento são notificadas pela GCFC sobre sua inclusão em uma avaliação gratuita e imparcial.
                        </p>
                        
                        <h3 className="text-lg font-medium text-black mb-8">
                            Como são notificados
                        </h3>
                        
                        <p className="text-base text-gray-800">
                            Essa comunicação inicial é feita por e-mail ou telefone com ou sem solicitação prévia por parte da empresa notificada e sem quaisquer custos.
                        </p>
                        
                        <h3 className="text-lg font-medium text-black mb-8">
                            Por que fui notificado
                        </h3>
                        
                        <p className="text-base text-gray-800">
                            Ao receber o aviso, a empresa compreende que está sendo considerada para uma premiação de relevância nacional.
                        </p>
                    </div>
                </div>
                </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className='text-black text-sm text-center font-open-sans'>Etapa 2/4</p>
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  Avaliação
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                
                <div className="relative">
                  <Image
                    src="/notification_02.png"
                    alt="Profissional da GCFC analisando dados e relatórios em ambiente corporativo"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[400px] max-w-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-20">
                <p className='text-black text-sm text-center font-open-sans'>Etapa 3/4</p>
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight">
                  Resultado
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/notification_03.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] max-w-[400px] object-contain"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    Diagnóstico
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Após a avaliação, às empresas recebem um relatório detalhado de seu atendimento, com dados, pontos fortes, oportunidades de melhoria e recomendações práticas — sem custos.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Confidencialidade
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Apenas as empresas avaliadas recebem esse material sobre seu próprio negócio — essas informações não são divulgadas publicamente.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Objetivo
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    O objetivo é contribuir para a evolução contínua das organizações, mesmo daquelas que não forem premiadas, reforçando nosso compromisso com a valorização do consumidor.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className='text-black text-sm text-center font-open-sans'>Etapa 4/4</p>
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  Premiação
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    Quem serão Convidados
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    As 3 empresas com melhor desempenho em cada segmento são convidadas para uma cerimônia exclusiva, onde será revelada a Melhor Empresa para o Consumidor da categoria.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    O que Ganharão
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    As convidadas participarão de um coquetel e jantar de gala, com fotógrafos e filmmakers produzindo conteúdo para sua empresa. As vencedoras receberão um troféu e o selo de Certificação GCFC.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Objetivo
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    A premiação valoriza publicamente o compromisso da empresa com o cliente, fortalecendo sua reputação, ampliando sua autoridade de marca e destacando-a da concorrência.
                  </p>
                </div>
                
                <div className="relative">
                  <Image
                    src="/notification_04.png"
                    alt="Globo terrestre transparente sendo segurado por duas mãos, simbolizando a presença global da GCFC"
                    width={600}
                    height={600}
                    className="w-full h-auto "
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight">
                  Não quero participar
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/notification_05.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] max-w-[400px] object-contain"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black mb-8">
                    Ser avaliado, não garante premiação
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Apenas as três empresas mais bem pontuadas em cada segmento são convidadas para a cerimônia e certificadas. Caso sua empresa não esteja entre elas, não será premiada — o convite será direcionado aos concorrentes com melhor desempenho.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Nenhum prejuízo à sua imagem
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Mesmo que a pontuação da sua empresa seja baixa, as informações não serão divulgadas publicamente. Apenas a própria empresa terá acesso ao relatório. Isso permite aprimorar processos internos, sem exposição negativa.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black mb-8">
                    Deseja ser removido da lista?
                  </h3>
                  
                  <p className="text-base text-gray-800">
                    Se ainda assim preferir não participar, basta solicitar a remoção da sua empresa da lista de potenciais avaliadas enviando um e-mail para: info@gcfc.global
                  </p>
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
