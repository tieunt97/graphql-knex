import { merge } from 'lodash';

import {
    typeDef as Person,
    resolver as PersonResolver
} from './PersonSchema';

import {
    typeDef as Member,
    resolver as MemberResolver
} from './MemberSchema';

import {
    typeDef as Admin,
    resolver as AdminResolver
} from './AdminSchema';

import {
    typeDef as Role
} from './RoleSchema';
import { from } from 'zen-observable';

const DefaultSchema = `
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export const typeDefs = [DefaultSchema, Member, Role, Admin, Person];
export const resolvers = merge(MemberResolver, AdminResolver, PersonResolver);
