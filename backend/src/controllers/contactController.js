import * as service from '../services/contactService.js';
export async function list(req,res,next){try{const result=await service.listContacts({...req.query,ownerId:req.user.sub});res.json({data:result.rows,total:result.count,page:Number(req.query.page||1)});}catch(e){next(e);}}
export async function get(req,res,next){try{res.json({data:await service.getContact(req.params.id,req.user.sub)});}catch(e){next(e);}}
export async function create(req,res,next){try{res.status(201).json({data:await service.createContact(req.body,req.user.sub)});}catch(e){next(e);}}
export async function update(req,res,next){try{res.json({data:await service.updateContact(req.params.id,req.body,req.user.sub)});}catch(e){next(e);}}
export async function remove(req,res,next){try{await service.deleteContact(req.params.id,req.user.sub);res.status(204).end();}catch(e){next(e);}}