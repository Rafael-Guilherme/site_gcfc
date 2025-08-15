import Image from 'next/image';
import HeaderAward from '@/components/HeaderAward';
import Button from '@/components/Button';


export default function Award() {
  return (
        <main className="flex flex-col gap-12 sm:gap-16 lg:gap-20 pt-0 pb-8 sm:pb-12 bg-white min-h-screen">
            <section
                className="w-full h-[680px] lg:h-[720px] max-h-[720px] flex flex-col justify-between overflow-hidden"
                style={{ backgroundImage: "url('/award_hero.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
                <HeaderAward logoWhite  backgroundColor='bg-transparent'/>
                <div className="relative z-10 flex flex-col h-full mt-40">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 sm:px-[60px] pb-4 sm:pb-6 lg:pb-0 flex-1">
                        <div className="flex-1 flex justify-center items-center h-64 sm:h-72 lg:h-auto lg:order-1 -mt-4 lg:-mt-40">
                            <Image 
                                src="/award_01.png" 
                                alt="3 prêmios GCFC" 
                                width={602} 
                                height={427} 
                                className="w-full max-w-sm sm:max-w-md lg:w-[550px] h-auto max-h-56 sm:max-h-64 lg:max-h-none lg:h-[400px] object-contain" 
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-3 sm:gap-4 lg:gap-6 lg:pt-8 lg:pb-8 lg:order-2 items-center px-12 sm:px-0 sm:items-start justify-center text-center sm:text-left">
                            <h1 className="text-lg sm:text-xl lg:text-5xl  text-white leading-tight mb-2 max-w-2xl font-heading">
                                Entenda como funciona a Premiação GCFC
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-[#e0d6e6] max-w-xl mb-3 sm:mb-4 font-open-sans">
                                Acompanhe todo o processo seguido pela GCFC para eleger as Melhores Empresas para o Consumidor e reconhecê-las numa noite de comemoração.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Image 
                    src="/award_02.png" 
                    alt="publicidade" 
                    width={927} 
                    height={109} 
                    className="w-[927px] max-w-[1480px] mx-auto object-cover" 
                />
            </div>
            <div className="max-w-[1480px] mx-auto border-2 border-black rounded-xl">
                <div className='w-full bg-gray-50 rounded-t-xl'>
                    <h2 className='text-2xl font-medium text-center text-black py-8'>Como Funciona</h2>
                </div>
                <div className='p-8'>
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto w-full">    
                            <p className='text-black text-sm text-center font-open-sans'>Etapa 1/4</p>
                            <h2 className="text-4xl font-medium text-[#6a0080] leading-tight text-center mb-20">
                                Notificamos os indicados
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

                    <section className="py-20 bg-gray-50 rounded-xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <p className='text-black text-sm text-center font-open-sans'>Etapa 2/4</p>
                            <h2 className="text-4xl font-medium text-[#6a0080]">
                            Avaliamos os indicados
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
                            Enviamos o Relatório
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


                    <section className="py-20 bg-gray-50 rounded-xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <p className='text-black text-sm text-center font-open-sans'>Etapa 4/4</p>
                            <h2 className="text-4xl font-medium text-[#6a0080]">
                            Convidamos as TOP 3
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
                </div>
            </div>

            

            <section className="relative my-20">
                <div className="py-20 bg-gray-50 max-w-[1480px] mx-auto rounded-4xl h-screen max-h-[480px]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center max-w-lg">
                            <div className="space-y-6 h-full w-full mt-10">
                                <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                                    Concorra ao nível máximo de reconhecimento da GCFC
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Fale agora com nosso time e receba preços e orientações sobre o processo de avaliação
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-[480px] absolute right-90 -top-20">
                                <form className="space-y-6 p-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nome Completo:
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            disabled
                                            className="w-full py-1 border border-gray-300 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            E-mail para contato:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            disabled
                                            className="w-full py-1 border border-gray-300 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-2">
                                            CNPJ da Empresa:
                                        </label>
                                        <input
                                            type="text"
                                            id="cnpj"
                                            name="cnpj"
                                            disabled
                                            className="w-full py-1 border border-gray-300 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                                            Whatsapp para contato:
                                        </label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            name="whatsapp"
                                            disabled
                                            className="w-full py-1 border border-gray-300 rounded-xl"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                                            Setor de Atuação:
                                        </label>
                                        <select
                                            id="sector"
                                            name="sector"
                                            className="w-full py-1 border border-gray-300 rounded-xl"
                                            disabled
                                        >
                                            <option value=""></option>
                                            <option value="tecnologia">Tecnologia</option>
                                            <option value="saude">Saúde</option>
                                            <option value="educacao">Educação</option>
                                            <option value="varejo">Varejo</option>
                                            <option value="servicos">Serviços</option>
                                            <option value="industria">Indústria</option>
                                            <option value="financeiro">Financeiro</option>
                                            <option value="outros">Outros</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                                            Número de funcionários:
                                        </label>
                                        <select
                                            id="employees"
                                            name="employees"
                                            className="w-full py-1 border border-gray-300 rounded-xl"
                                            disabled
                                        >
                                            <option value=""></option>
                                            <option value="1-10">1-10 funcionários</option>
                                            <option value="11-50">11-50 funcionários</option>
                                            <option value="51-200">51-200 funcionários</option>
                                            <option value="201-500">201-500 funcionários</option>
                                            <option value="501-1000">501-1000 funcionários</option>
                                            <option value="1000+">Mais de 1000 funcionários</option>
                                        </select>
                                    </div>

                                    <Button 
                                        text="Concorrer a Premiação"
                                        href="/award"
                                        padding='px-4 py-2'
                                        borderRadius="rounded-full"
                                        className="w-full text-white text-base font-bold rounded-lg h-12"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-16">
                        Dúvidas Frequentes
                    </h2>
                    
                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    O que é a Premiação GCFC?
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    A Premiação GCFC é um reconhecimento nacional que identifica e premia as Melhores Empresas para o Consumidor em diferentes segmentos de mercado. É uma avaliação gratuita e imparcial que analisa a experiência do cliente em empresas de todo o Brasil.
                                </p>
                            </div>
                        </details>

                        {/* FAQ Item 2 */}
                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    Quanto custa a Premiação GCFC?
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    A avaliação para concorrer à Premiação GCFC é completamente gratuita. Não há custos para participar do processo de avaliação, receber o relatório detalhado ou ser considerado para a premiação. A GCFC assume todos os custos do processo.
                                </p>
                            </div>
                        </details>

                        {/* FAQ Item 3 */}
                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    Como funciona o processo de avaliação para concorrer ao prêmio?
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    O processo é dividido em 4 etapas: 1) Notificação dos indicados, 2) Avaliação sigilosa simulando um cliente real, 3) Envio do relatório detalhado com diagnóstico, e 4) Convite das TOP 3 empresas para a cerimônia de premiação. Tudo é feito de forma imparcial e confidencial.
                                </p>
                            </div>
                        </details>

                        {/* FAQ Item 4 */}
                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    O que acontece se minha empresa for reprovada na avaliação?
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    Mesmo que sua empresa não seja premiada, você receberá um relatório detalhado com pontos fortes, oportunidades de melhoria e recomendações práticas. Este feedback é valioso para evolução contínua da organização e não há penalizações ou divulgação pública dos resultados.
                                </p>
                            </div>
                        </details>

                        {/* FAQ Item 5 */}
                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    Qual a diferença entre Certificação GCFC e Premiação GCFC?
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    A Premiação GCFC é um reconhecimento anual que identifica as melhores empresas em cada segmento, enquanto a Certificação GCFC é um processo contínuo de avaliação e melhoria que pode ser obtido independentemente da premiação. Ambas valorizam o compromisso com o consumidor, mas com abordagens diferentes.
                                </p>
                            </div>
                        </details>

                        {/* FAQ Item 6 */}
                        <details className="border border-gray-300 rounded-lg bg-white group">
                            <summary className="px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                <span className="text-base font-medium text-black">
                                    Como participar da premiação GCFC?
                                </span>
                                <span className="text-2xl font-bold text-gray-600 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <div className="px-6 pb-4 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed pt-4">
                                    A participação é por indicação da GCFC. Empresas com potencial de destaque em seus segmentos são notificadas sobre sua inclusão na avaliação. Se você acredita que sua empresa merece ser considerada, pode entrar em contato conosco através dos canais oficiais para solicitar uma avaliação.
                                </p>
                            </div>
                        </details>
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
  );
}
