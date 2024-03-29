const stripeConfig = {
  secretKey: process.env.STRIPE_SECRET_KEY,
  publicKey: process.env.STRIPE_PUBLIC_KEY,
};

module.exports = stripeConfig;
