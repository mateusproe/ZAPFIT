import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel.jsx';
import image1 from './assets/pasted_file_61Foqi_image.png';
import image2 from './assets/pasted_file_TBBvkm_image.png';
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Smartphone, Camera, MessageCircle, BarChart3, Timer, Zap } from 'lucide-react'
import phoneFood1 from './assets/phone_food_1.png'
import phoneFood2 from './assets/phone_food_2.png'
import gymBackground from './assets/gym_background.png'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState(180) // 3 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900">
      {/* Timer de Escassez Fixo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 px-4 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2 text-sm font-bold">
          <Timer className="w-4 h-4 animate-pulse" />
          <span>OFERTA ESPECIAL EXPIRA EM: {formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        <div className="max-w-md mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-4 py-2 text-sm animate-pulse">
            🔥 REVOLUCIONÁRIO
          </Badge>
          
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Conte Calorias pelo
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> WhatsApp</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            O primeiro robô que analisa suas refeições por foto, áudio ou texto e te ajuda a atingir seus objetivos fitness
          </p>

                    <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img 
                  src={image1} 
                  alt="Exemplo 1" 
                  className="w-64 h-64 mx-auto rounded-2xl shadow-2xl border-4 border-cyan-400/30 object-contain"
                />
              </CarouselItem>
              <CarouselItem>
                <img 
                  src={image2} 
                  alt="Exemplo 2" 
                  className="w-64 h-64 mx-auto rounded-2xl shadow-2xl border-4 border-cyan-400/30 object-contain"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 mb-8 border border-red-400/30 shadow-xl">
            <div className="text-white text-center">
              <div className="text-sm font-medium mb-2">⚡ OFERTA LIMITADA ⚡</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-bold line-through opacity-70">R$ 19,90</span>
                <span className="text-4xl font-bold text-yellow-300">R$ 7,99</span>
              </div>
              <div className="text-sm">por mês • Economize 70%</div>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-green-400/30"
            onClick={() => window.open('https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=17cad667ad164829921fe76c7ed0bd0f', '_blank')}
          >
            <Zap className="w-5 h-5 mr-2" />
            APROVEITE 14 DIAS GRATIS, AGORA
          </Button>
          
          <p className="text-xs text-gray-400 mt-3">
            🔒 Pagamento 100% seguro • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Como Funciona
          </h2>
          
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-3 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">1. Cadastro e Metas</h3>
                    <p className="text-gray-300">Ao iniciar o ZapFit, solicitaremos algumas informações para definir seu Gasto Basal. Você também terá a opção de definir sua própria meta calórica diária, caso prefira.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-pink-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-full p-3 flex-shrink-0">
                    <Camera className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">2. Registro de Refeições</h3>
                    <p className="text-gray-300">Com o cadastro completo, basta enviar o que você comeu por texto, áudio ou foto. O ZapFit analisará e registrará tudo em nosso banco de dados.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-emerald-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-3 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">3. Relatórios e Análises</h3>
                    <p className="text-gray-300">Você poderá solicitar relatórios detalhados sobre seu consumo diário, semanal ou mensal, permitindo análises aprofundadas sobre sua alimentação e progresso.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demonstração Visual */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Veja Como É Fácil
          </h2>
          
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img 
                  src={image1} 
                  alt="Exemplo 1" 
                  className="w-64 h-64 mx-auto rounded-2xl shadow-2xl border-4 border-cyan-400/30 object-contain"
                />
              </CarouselItem>
              <CarouselItem>
                <img 
                  src={image2} 
                  alt="Exemplo 2" 
                  className="w-64 h-64 mx-auto rounded-2xl shadow-2xl border-4 border-cyan-400/30 object-contain"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>


        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Por Que Escolher Nosso Robô?
          </h2>
          
          <div className="space-y-4">
            {[
              "Análise por IA do ChatGPT",
              "Funciona 100% pelo WhatsApp",
              "Reconhece fotos de alimentos",
              "Aceita comandos por áudio",
              "Relatórios personalizados",
              "Acompanhamento diário automático"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-4 rounded-xl border border-slate-500/30">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Não Perca Esta Oportunidade!
          </h2>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 mb-8 border border-red-400/30 shadow-xl">
            <div className="text-white text-center">
              <div className="text-lg font-bold mb-2">⏰ ÚLTIMAS VAGAS</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-bold line-through opacity-70">R$ 19,90</span>
                <span className="text-4xl font-bold text-yellow-300">R$ 7,99</span>
              </div>
              <div className="text-sm mb-4">por mês • Economize 70%</div>
              <div className="text-xs bg-black/20 rounded-lg p-2">
                Tempo restante: {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-8 rounded-xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-green-400/30 animate-pulse"
            onClick={() => window.open('https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=17cad667ad164829921fe76c7ed0bd0f', '_blank')}
          >
            <Zap className="w-6 h-6 mr-2" />
            APROVEITE 14 DIAS GRATIS, AGORA
          </Button>
          
          <p className="text-xs text-gray-300 mt-4">
            🔒 Pagamento seguro • Garantia de 7 dias • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ZapFit. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

