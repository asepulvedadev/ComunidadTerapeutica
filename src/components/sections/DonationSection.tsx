import { useState } from 'react';

interface DonationStats {
  monthlyTotal: number;
  monthlyGoal: number;
  peopleHelped: number;
  treatmentsSubsidized: number;
}

export const DonationSection = () => {
  const [customAmount, setCustomAmount] = useState<string>('');
  const [stats] = useState<DonationStats>({
    monthlyTotal: 0,
    monthlyGoal: 0,
    peopleHelped: 0,
    treatmentsSubsidized: 0
  });

  const handleDonation = (amount: number) => {
    window.open(`https://link.mercadopago.com.co/comunidaddrsil/${amount}`, '_blank');
  };

  const handleCustomDonation = () => {
    const amount = parseFloat(customAmount);
    if (amount && amount >= 10000) {
      handleDonation(amount);
    } else {
      alert('Por favor ingresa un monto válido (mínimo $10.000)');
    }
  };

  const progressPercentage = (stats.monthlyTotal / stats.monthlyGoal) * 100;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tu apoyo transforma vidas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada donación contribuye a brindar tratamiento y esperanza a quienes más lo necesitan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Panel de Donación */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full flex flex-col">
            <div className="flex flex-col gap-6 flex-grow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Realiza tu aporte</h3>
                <p className="text-gray-600">Elige el monto con el que deseas contribuir</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 flex-grow">
                <button
                  onClick={() => handleDonation(50000)}
                  className="bg-primary/90 hover:bg-primary text-white py-4 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center hover:shadow-lg border-2 border-primary"
                >
                  <span className="text-2xl font-bold">$50.000</span>
                  <span className="text-sm opacity-90">Donación básica</span>
                </button>
                <button
                  onClick={() => handleDonation(100000)}
                  className="bg-primary/90 hover:bg-primary text-white py-4 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center hover:shadow-lg border-2 border-primary"
                >
                  <span className="text-2xl font-bold">$100.000</span>
                  <span className="text-sm opacity-90">Donación estándar</span>
                </button>
                <button
                  onClick={() => handleDonation(200000)}
                  className="bg-primary/90 hover:bg-primary text-white py-4 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center hover:shadow-lg border-2 border-primary"
                >
                  <span className="text-2xl font-bold">$200.000</span>
                  <span className="text-sm opacity-90">Donación plus</span>
                </button>
                <button
                  onClick={() => handleDonation(500000)}
                  className="bg-primary/90 hover:bg-primary text-white py-4 px-6 rounded-xl transition-all duration-300 flex flex-col items-center justify-center hover:shadow-lg border-2 border-primary"
                >
                  <span className="text-2xl font-bold">$500.000</span>
                  <span className="text-sm opacity-90">Donación premium</span>
                </button>
              </div>

              <div className="relative mt-auto">
                <div className="flex items-center">
                  <span className="absolute left-4 text-gray-500">$</span>
                  <input 
                    type="number" 
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Ingresa otro valor" 
                    className="w-full pl-8 pr-24 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
                    min="10000"
                    step="1000"
                  />
                  <button
                    onClick={handleCustomDonation}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary text-white px-6 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:shadow-md"
                  >
                    Donar
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 p-4 rounded-xl">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">Donación segura a través de Mercado Pago</span>
              </div>
            </div>
          </div>

          {/* Panel de Estadísticas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full flex flex-col">
            <div className="text-center flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Impacto de tu ayuda</h3>
              
              <div className="flex flex-col items-center gap-4 mb-12 flex-grow">
                <div className="w-full max-w-sm">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Progreso mensual</span>
                    <span className="text-primary font-bold">
                      ${stats.monthlyTotal.toLocaleString('es-CO')}
                    </span>
                  </div>
                  <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-sm text-gray-500">
                      Meta: ${stats.monthlyGoal.toLocaleString('es-CO')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-auto">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stats.peopleHelped}
                  </div>
                  <div className="text-gray-600">
                    Personas beneficiadas este mes
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stats.treatmentsSubsidized}
                  </div>
                  <div className="text-gray-600">
                    Tratamientos subsidiados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 