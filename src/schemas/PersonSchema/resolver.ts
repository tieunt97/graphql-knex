import { PersonModel } from '../../models/person';

export const resolver = {
    Query: {
        getAllPersons: () => {
            return PersonModel.getAllPersons();
        },
        findPerson: (_, { id }) => {
            return PersonModel.findPerson(id);
        }
    },
    Mutation: {
        createPerson: (_, { input }) => {
            return PersonModel.createPerson(input);
        },
        updatePerson: (_, { id, input }) => {
            if(id){
                return PersonModel.updatePerson(id, input);
            }
            return false;
        }
    }
}