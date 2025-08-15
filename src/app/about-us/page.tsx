import Image from 'next/image';
import Header from '@/components/Header';


export default function AboutUs() {
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
                    <p className='text-black text-sm text-left font-open-sans'>Home { '>' } Sobre nós</p>
                    <h1 className='text-4xl font-medium text-center text-black uppercase'>SOBRE NÓS</h1>
                </div>
            </div>
          </div>
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto w-full">    
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight text-center mb-20">
                    Sobre a GCFC
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                <div className="relative">
                    <Image
                    src="/about_01.png"
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
                        Quem somos
                    </h3>
                    
                    <p className="text-base text-gray-800">
                        A GCFC - Great Company for Consumers é uma <b>organização global que identifica e reconhece empresas que se destacam</b> na experiência do cliente, 
                        no cumprimento das leis consumeristas e nas boas práticas de mercado.
                    </p>
                    
                    <p className="text-base text-gray-800">
                        Por meio de uma avaliação imparcial, que inclui critérios técnicos e avaliações por cliente oculto, a <b>GCFC identifica, certifica e 
                        premia as empresas que realmente entregam valor, confiança e respeito ao consumidor.</b>
                    </p>
                    
                    <p className="text-base text-gray-800">
                        Nosso objetivo é destacar empresas confiáveis e responsáveis, oferecendo a elas uma certificação que gera credibilidade e fortalece sua 
                        imagem no mercado.
                    </p>
                    </div>
                </div>
                </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  Potente Gerador de Dados
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black">
                    Referência em reputação e credibilidade
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-base text-gray-800">
                      Além de reconhecer empresas de excelência, a GCFC atua como um poderoso gerador de dados sobre a jornada do consumidor, 
                      com <strong>informações valiosas e únicas da experiência de compra do consumidor</strong> em seu negócio.
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Cada avaliação realizada <strong>gera insights preciosos e exclusivos</strong> sobre comportamento de compra, pontos de 
                      melhoria e boas práticas adotadas no mercado.
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Essas informações são compartilhadas com as empresas avaliadas por meio de relatórios personalizados, 
                      <strong>contribuindo diretamente para a evolução de seus processos</strong> de atendimento, fidelização e experiência do cliente.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/about_02.png"
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
                <h2 className="text-4xl font-medium text-[#6a0080] leading-tight">
                  Poderoso Gerador de Reputação
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/about_03.png"
                    alt="Troféu GCFC - Great Company For Consumers com certificação de qualidade"
                    width={400}
                    height={400}
                    className="w-full h-auto max-h-[600px] max-w-[400px] object-contain"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black">
                    Criamos Reputação e Credibilidade
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-base text-gray-800">
                      A GCFC também é um <b>gerador de reputação e credibilidade</b> para as empresas que se destacam.
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Ao conquistar a certificação, a marca passa a ser reconhecida publicamente como comprometida 
                      com <b>a excelência no atendimento, o respeito ao consumidor e a conformidade com as leis.</b>
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Esse reconhecimento gera confiança imediata no público, fortalece a imagem institucional e 
                      diferencia a empresa no mercado.
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Mais do que um selo, a GCFC oferece um <b>atestado de qualidade validado por critérios técnicos e 
                      experiência real de consumo.</b>
                    </p>
                    
                    <p className="text-base text-gray-800">
                      É uma ferramenta poderosa para atrair novos clientes, aumentar a fidelização e consolidar uma 
                      reputação sólida e duradoura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-medium text-[#6a0080]">
                  Presença Global
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-black">
                    Presença em todos os continentes
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-base text-gray-800">
                      A GCFC - Great Company for Consumers é uma instituição certificadora que atua em <b>todos os continentes do mundo.</b>
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Nossa presença global nos permite <strong>comparar práticas de excelência entre diferentes culturas</strong>, i
                      dentificar <strong>tendências globais de consumo</strong> e promover um alto padrão de qualidade em todos os lugares.
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Nossa metodologia se adapta às realidades locais, levando a certificação GCFC para empresas de diversos setores, 
                      reforçando o<strong>compromisso com a transparência, o respeito e a experiência do cliente</strong>.
                    </p>
                    
                    <p className="text-base text-gray-800">
                      Ser reconhecido pela GCFC significa ter uma marca alinhada com os melhores padrões de serviço e confiança em escala global.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/about_04.png"
                    alt="Globo terrestre transparente sendo segurado por duas mãos, simbolizando a presença global da GCFC"
                    width={600}
                    height={600}
                    className="w-full h-auto "
                  />
                </div>
              </div>
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
