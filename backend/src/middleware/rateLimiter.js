import rateLimit from 'express-rate-limit';
export const rateLimiter=rateLimit({windowMs:60_000,max:120,standardHeaders:'draft-7',legacyHeaders:false,message:{error:'Too many requests'}});
export const authRateLimiter=rateLimit({windowMs:15*60_000,max:10,skipSuccessfulRequests:true,message:{error:'Too many authentication attempts'}});