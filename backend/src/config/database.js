import { Sequelize } from 'sequelize';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');
export const db = new Sequelize(process.env.DATABASE_URL, { dialect:'postgres', logging:false, pool:{max:10,min:1,idle:10_000}, define:{underscored:true,timestamps:true} });
export const transaction = fn => db.transaction(fn);