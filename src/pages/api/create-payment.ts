import mercadopago from 'mercadopago';

// Configura las credenciales de Mercado Pago
mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN || ''
});

export async function post({ request }) {
  try {
    const body = await request.json();
    const { amount } = body;

    // Crear la preferencia de pago
    const preference = {
      items: [
        {
          title: 'Donación - Comunidad Dr. Sillworth',
          unit_price: amount,
          quantity: 1,
        }
      ],
      back_urls: {
        success: `${process.env.PUBLIC_URL}/donacion-exitosa`,
        failure: `${process.env.PUBLIC_URL}/donacion-fallida`,
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_types: [
          { id: 'ticket' }
        ],
        installments: 1
      },
      statement_descriptor: 'Donación DrSillworth',
    };

    const response = await mercadopago.preferences.create(preference);

    return new Response(JSON.stringify({
      init_point: response.body.init_point
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error al crear preferencia de pago:', error);
    return new Response(JSON.stringify({
      error: 'Error al procesar el pago'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 