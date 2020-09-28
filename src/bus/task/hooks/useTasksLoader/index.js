// Core
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/react-hooks';

// Queries
const queryTasksLoader = loader('./gql/queryTasksLoader.graphql');

export const useTasksLoader = () => {
  const { data, loading, refetch } = useQuery(queryTasksLoader);

  return {
    tasks: data && data.tasks,
    loading,
    refetch
  }
}
