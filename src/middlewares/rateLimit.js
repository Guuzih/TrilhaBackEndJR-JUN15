const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // limite de 100 requisições por IP por janela de tempo
    message: 'Too many requests from this IP, please try again later'
});

module.exports = limiter;
