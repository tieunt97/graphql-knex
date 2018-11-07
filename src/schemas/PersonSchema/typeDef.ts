export const typeDef = `
    extend type Query {
        getAllPersons: [Person]
        findPerson(id: ID!): Person
    }

    extend type Mutation {
        createPerson(input: PersonInput): Person
        updatePerson(id: ID!, input: PersonInput): Boolean
    }

    input PersonInput {
        name: String,
        age: String,
        gender: String,
        role_name: String
    }

    type Person {
        id: ID,
        name: String,
        age: String,
        gender: String,
        role: Role
    }
`