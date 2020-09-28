// Core
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

// Mutations
const mutationTaskCleaner = loader('./gql/mutationTaskCleaner.graphql');

export const useTaskCleaner = () => {
  const [_remove] = useMutation(mutationTaskCleaner);

  const removeTask = async (id, refetch) => {
    try {
      const { data } = await _remove({
        variables: {
          id
        }
      });

      if (data) {
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    removeTask
  }
}
