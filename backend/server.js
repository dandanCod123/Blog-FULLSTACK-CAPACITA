require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const logger = require('./shared/logger');
const productRoutes = require('./modules/posts/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
 origin: function (origin, callback) {
        const allowedResource = ['http://localhost:5173', 'http://localhost:3000'];
        if (!origin) return callback(null, true);
        if (allowedResource.indexOf(origin) !== -1) {
            return callback(null, true);
        } else {
            logger.warn('CORS blocked this request: ', {origin});
            callback(new Error('Não permitido pelo CORS.'));
        }
    },
   credentials: true,
   methods: ['GET', 'PUT', 'POST', 'DELETE'],
   allowedHeaders: [
  'Content-Type',
  'Authorization',
  'X-Correlation-ID',
  'Origin',
  'Accept',
],


   exposedHeaders: ['X-Correlation-ID'],
}


// Middlewares
app.use(cors(corsOptions));
app.use(express.json()); // ESSENCIAL para interpretar JSON do body

// Rotas
const userRoutes = require('./modules/Auth/user.routes');
app.use('/api/auth', userRoutes);
app.use('/api', productRoutes); // rota final: /api/products

logger.info("Server started", {
  environment: process.env.NODE_ENV || 'development',
  port: PORT
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
