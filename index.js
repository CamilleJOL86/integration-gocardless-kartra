const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Endpoint qui reçoit les paiements de GoCardless
app.post('/gocardless-webhook', async (req, res) => {
  const paymentData = req.body;

  // Vérifiez que le paiement est confirmé
  if(payment.status === 'confirmed') {
    const clientEmail = payment.customer_email;

    // Requête vers API Kartra pour donner accès à un produit
    await axios.post('https://api.kartra.com/grant-access', {
      api_key: 'VOTRE_CLE_API_KARTRA',
      email: payment.customer.email,
      product_id: 'ID_PRODUIT_KARTRA'
    });

    res.status(200).send('Accès accordé');
  } else {
    res.status(400).send('Évènement non traité');
  }
});

// Port d'écoute
app.listen(process.env.PORT || 3000, () => console.log('Middleware activé !'));
