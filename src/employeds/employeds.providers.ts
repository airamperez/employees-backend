import { Connection } from 'mongoose';
import { EmployedSchema } from './schema/employe-schema';
export const employedsProviders = [
 {
 provide: 'EMPLOYED_MODEL',
 useFactory: (connection: Connection) => connection.model('Employed', EmployedSchema)
,
 inject: ['DATABASE_CONNECTION'],
 },
];

