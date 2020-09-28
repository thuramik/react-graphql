// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationTasksCleaner = loader('./gql/mutationTasksCleaner.graphql');

export const useTasksCleaner = () => {
  const [_removeAll] = useMutation(mutationTasksCleaner);

  const removeAllTasks = async (id, refetch) => {
    try {
      const { data } = await _removeAll();

      if (data) {
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    removeAllTasks
  }
}
