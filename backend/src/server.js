import express from 'express';
import { contactRoutes } from './routes/contactRoutes.js'; import { dealRoutes } from './routes/dealRoutes.js'; import { ticketRoutes } from './routes/ticketRoutes.js'; import { authRoutes } from './routes/authRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js'; import { rateLimiter } from './middleware/rateLimiter.js';
const app=express(); app.disable('x-powered-by'); app.use(express.json({limit:'1mb'})); app.use(rateLimiter); app.get('/health',(_q,r)=>r.json({ok:true,project:'CS-2026-001'}));
app.use('/api/v1/auth',authRoutes); app.use('/api/v1/contacts',contactRoutes); app.use('/api/v1/deals',dealRoutes); app.use('/api/v1/tickets',ticketRoutes); app.use(notFound); app.use(errorHandler);
const port=Number(process.env.PORT||3000); if(process.env.NODE_ENV!=='test') app.listen(port,()=>console.log(`CRM API listening on ${port}`)); export default app;