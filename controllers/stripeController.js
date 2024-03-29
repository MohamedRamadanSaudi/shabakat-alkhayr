const stripeConfig = require("../config/stripeConfig");
const stripeSecretKey = stripeConfig.secretKey;
const stripe = require("stripe")(stripeSecretKey);

// Function to create a payment intent
const createPaymentIntent = async (amount, currency, customerEmail) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      description: "Payment for services",
      receipt_email: customerEmail,
    });
    return paymentIntent;
  } catch (error) {
    throw error;
  }
};

// Function to process a payment
const processPayment = async (paymentIntentId) => {
  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    return paymentIntent;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPaymentIntent,
  processPayment,
};
