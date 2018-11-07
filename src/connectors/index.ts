import { config } from '../constants/config';
import * as database from '../../knexfile';

export const knex = require('knex')(database[config.evironment]);

