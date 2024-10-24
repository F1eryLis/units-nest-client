import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Company = {
  __typename?: 'Company';
  companyLimit: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  dayLimit: Scalars['Int']['output'];
  days: Array<Scalars['Int']['output']>;
  endTime: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phonesId: Scalars['Int']['output'];
  reaction: Array<Scalars['Int']['output']>;
  soundFileId: Scalars['Int']['output'];
  startTime: Scalars['DateTime']['output'];
  status: Scalars['Int']['output'];
  updatetAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type CreateCompanyInput = {
  companyLimit: Scalars['Int']['input'];
  dayLimit: Scalars['Int']['input'];
  days?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  endTime: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  phonesId?: InputMaybe<Scalars['Int']['input']>;
  reaction?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  soundFileId?: InputMaybe<Scalars['Int']['input']>;
  startTime: Scalars['DateTime']['input'];
  status: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateKanbanCardInput = {
  columnId: Scalars['Int']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  task?: InputMaybe<Scalars['String']['input']>;
};

export type CreateKanbanColumnInput = {
  title: Scalars['String']['input'];
  titleColor?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePhonelistInput = {
  /** Name of the phone list */
  name: Scalars['String']['input'];
  /** List of phone numbers */
  phones: Array<Scalars['String']['input']>;
  /** User ID associated with the phone list */
  userId: Scalars['Int']['input'];
};

export type CreateSoundfileInput = {
  filePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type KanbanCard = {
  __typename?: 'KanbanCard';
  columnId: Scalars['Int']['output'];
  comment: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  dateTime: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  task: Scalars['String']['output'];
};

export type KanbanColumn = {
  __typename?: 'KanbanColumn';
  id: Scalars['Int']['output'];
  kanbanCards: Array<KanbanCard>;
  title: Scalars['String']['output'];
  titleColor: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createKanbanCard: KanbanCard;
  createKanbanColumn: KanbanColumn;
  createPhonelist: PhoneList;
  createSoundfile: SoundFile;
  createUser: User;
  removeCompany: Company;
  removeKanbanCard: KanbanCard;
  removeKanbanColumn: KanbanColumn;
  removePhonelist: PhoneList;
  removeSoundfile: SoundFile;
  removeUser: User;
  updateCompany: Company;
  updateKanbanCard: KanbanCard;
  updateKanbanColumn: KanbanColumn;
  updatePhonelist: PhoneList;
  updateSoundfile: SoundFile;
  updateUser: User;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateKanbanCardArgs = {
  createKanbanCardInput: CreateKanbanCardInput;
};


export type MutationCreateKanbanColumnArgs = {
  createKanbanColumnInput: CreateKanbanColumnInput;
};


export type MutationCreatePhonelistArgs = {
  createPhonelistInput: CreatePhonelistInput;
};


export type MutationCreateSoundfileArgs = {
  createSoundfileInput: CreateSoundfileInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveCompanyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveKanbanCardArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveKanbanColumnArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePhonelistArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSoundfileArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
};


export type MutationUpdateKanbanCardArgs = {
  updateKanbanCardInput: UpdateKanbanCardInput;
};


export type MutationUpdateKanbanColumnArgs = {
  updateKanbanColumnInput: UpdateKanbanColumnInput;
};


export type MutationUpdatePhonelistArgs = {
  updatePhonelistInput: UpdatePhonelistInput;
};


export type MutationUpdateSoundfileArgs = {
  updateSoundfileInput: UpdateSoundfileInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PhoneList = {
  __typename?: 'PhoneList';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  company: Company;
  kanbanCard: KanbanCard;
  kanbanCards: Array<KanbanCard>;
  kanbanColumn: KanbanColumn;
  kanbanColumns: Array<KanbanColumn>;
  phonelist: PhoneList;
  phonelists: Array<PhoneList>;
  soundfile: SoundFile;
  soundfiles: Array<SoundFile>;
  user: User;
  users: Array<User>;
};


export type QueryCompanyArgs = {
  id: Scalars['Int']['input'];
};


export type QueryKanbanCardArgs = {
  id: Scalars['Int']['input'];
};


export type QueryKanbanColumnArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPhonelistArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySoundfileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type SoundFile = {
  __typename?: 'SoundFile';
  createdAt: Scalars['DateTime']['output'];
  filePath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type UpdateCompanyInput = {
  companyLimit?: InputMaybe<Scalars['Int']['input']>;
  dayLimit?: InputMaybe<Scalars['Int']['input']>;
  days?: InputMaybe<Array<Scalars['Int']['input']>>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phonesId?: InputMaybe<Scalars['Int']['input']>;
  reaction?: InputMaybe<Array<Scalars['Int']['input']>>;
  soundFileId?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateKanbanCardInput = {
  columnId?: InputMaybe<Scalars['Int']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateKanbanColumnInput = {
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  titleColor?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhonelistInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSoundfileInput = {
  filePath?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  companies: Array<Company>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  phoneLists: Array<PhoneList>;
  picture?: Maybe<Scalars['String']['output']>;
  soundFile: SoundFile;
  soundFiles: Array<SoundFile>;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserSoundFileArgs = {
  id: Scalars['Int']['input'];
};

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: number, name: string, companyLimit: number, dayLimit: number, status: number, startTime: any, endTime: any, days: Array<number>, reaction: Array<number>, soundFileId: number, phonesId: number, userId: number }> };

export type GetCompanyQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetCompanyQuery = { __typename?: 'Query', company: { __typename?: 'Company', id: number, name: string, companyLimit: number, dayLimit: number, status: number, startTime: any, endTime: any, days: Array<number>, reaction: Array<number>, soundFileId: number, phonesId: number, userId: number } };

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'Company', name: string, companyLimit: number, dayLimit: number, status: number, startTime: any, endTime: any, days: Array<number>, reaction: Array<number>, soundFileId: number, phonesId: number, userId: number } };

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany: { __typename?: 'Company', name: string, companyLimit: number, dayLimit: number, status: number, startTime: any, endTime: any, days: Array<number>, reaction: Array<number>, soundFileId: number, phonesId: number, userId: number } };

export type GetPhoneListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhoneListsQuery = { __typename?: 'Query', phonelists: Array<{ __typename?: 'PhoneList', id: number, name: string, phones: Array<string>, userId: number }> };

export type GetPhoneListQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPhoneListQuery = { __typename?: 'Query', phonelist: { __typename?: 'PhoneList', id: number, name: string, phones: Array<string>, userId: number } };

export type CreatePhoneListMutationVariables = Exact<{
  input: CreatePhonelistInput;
}>;


export type CreatePhoneListMutation = { __typename?: 'Mutation', createPhonelist: { __typename?: 'PhoneList', name: string, phones: Array<string>, userId: number } };

export type UpdatePhoneListMutationVariables = Exact<{
  input: UpdatePhonelistInput;
}>;


export type UpdatePhoneListMutation = { __typename?: 'Mutation', updatePhonelist: { __typename?: 'PhoneList', name: string, phones: Array<string> } };

export type GetSoundFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSoundFilesQuery = { __typename?: 'Query', soundfiles: Array<{ __typename?: 'SoundFile', id: number, name: string, filePath: string, userId: number }> };

export type GetSoundFileQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetSoundFileQuery = { __typename?: 'Query', soundfile: { __typename?: 'SoundFile', id: number, name: string, filePath: string, userId: number } };

export type GetSoundFilesAndPhoneListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSoundFilesAndPhoneListsQuery = { __typename?: 'Query', soundfiles: Array<{ __typename?: 'SoundFile', id: number, name: string, filePath: string, userId: number }>, phonelists: Array<{ __typename?: 'PhoneList', id: number, name: string, phones: Array<string>, userId: number }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, email: string, fullName: string, picture?: string | null }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: number, email: string, fullName: string, picture?: string | null } };

export type GetKanbanColumnsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetKanbanColumnsQuery = { __typename?: 'Query', kanbanColumns: Array<{ __typename?: 'KanbanColumn', id: number, title: string, titleColor: string, kanbanCards: Array<{ __typename?: 'KanbanCard', id: number, name: string, companyName: string, phoneNumber: string, comment: string, task: string, dateTime: any, columnId: number }> }> };

export type GetKanbanCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetKanbanCardsQuery = { __typename?: 'Query', kanbanCards: Array<{ __typename?: 'KanbanCard', id: number, name: string, companyName: string, phoneNumber: string, comment: string, task: string, dateTime: any, columnId: number }> };

export type GetKanbanCardQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetKanbanCardQuery = { __typename?: 'Query', kanbanCard: { __typename?: 'KanbanCard', id: number, name: string, companyName: string, phoneNumber: string, comment: string, task: string, dateTime: any, columnId: number } };

export type UpdateKanbanCardMutationVariables = Exact<{
  input: UpdateKanbanCardInput;
}>;


export type UpdateKanbanCardMutation = { __typename?: 'Mutation', updateKanbanCard: { __typename?: 'KanbanCard', name: string, companyName: string, phoneNumber: string, comment: string, task: string, dateTime: any, columnId: number } };


export const GetCompaniesDocument = gql`
    query GetCompanies {
  companies {
    id
    name
    companyLimit
    dayLimit
    status
    startTime
    endTime
    days
    reaction
    soundFileId
    phonesId
    userId
  }
}
    `;

/**
 * __useGetCompaniesQuery__
 *
 * To run a query within a React component, call `useGetCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
      }
export function useGetCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export function useGetCompaniesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCompaniesQuery, GetCompaniesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GetCompaniesDocument, options);
        }
export type GetCompaniesQueryHookResult = ReturnType<typeof useGetCompaniesQuery>;
export type GetCompaniesLazyQueryHookResult = ReturnType<typeof useGetCompaniesLazyQuery>;
export type GetCompaniesSuspenseQueryHookResult = ReturnType<typeof useGetCompaniesSuspenseQuery>;
export type GetCompaniesQueryResult = Apollo.QueryResult<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetCompanyDocument = gql`
    query GetCompany($id: Int!) {
  company(id: $id) {
    id
    name
    companyLimit
    dayLimit
    status
    startTime
    endTime
    days
    reaction
    soundFileId
    phonesId
    userId
  }
}
    `;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables> & ({ variables: GetCompanyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
      }
export function useGetCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
        }
export function useGetCompanySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
        }
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<typeof useGetCompanyLazyQuery>;
export type GetCompanySuspenseQueryHookResult = ReturnType<typeof useGetCompanySuspenseQuery>;
export type GetCompanyQueryResult = Apollo.QueryResult<GetCompanyQuery, GetCompanyQueryVariables>;
export const CreateCompanyDocument = gql`
    mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(createCompanyInput: $input) {
    name
    companyLimit
    dayLimit
    status
    startTime
    endTime
    days
    reaction
    soundFileId
    phonesId
    userId
  }
}
    `;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const UpdateCompanyDocument = gql`
    mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(updateCompanyInput: $input) {
    name
    companyLimit
    dayLimit
    status
    startTime
    endTime
    days
    reaction
    soundFileId
    phonesId
    userId
  }
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const GetPhoneListsDocument = gql`
    query GetPhoneLists {
  phonelists {
    id
    name
    phones
    userId
  }
}
    `;

/**
 * __useGetPhoneListsQuery__
 *
 * To run a query within a React component, call `useGetPhoneListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhoneListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhoneListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPhoneListsQuery(baseOptions?: Apollo.QueryHookOptions<GetPhoneListsQuery, GetPhoneListsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhoneListsQuery, GetPhoneListsQueryVariables>(GetPhoneListsDocument, options);
      }
export function useGetPhoneListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhoneListsQuery, GetPhoneListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhoneListsQuery, GetPhoneListsQueryVariables>(GetPhoneListsDocument, options);
        }
export function useGetPhoneListsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPhoneListsQuery, GetPhoneListsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPhoneListsQuery, GetPhoneListsQueryVariables>(GetPhoneListsDocument, options);
        }
export type GetPhoneListsQueryHookResult = ReturnType<typeof useGetPhoneListsQuery>;
export type GetPhoneListsLazyQueryHookResult = ReturnType<typeof useGetPhoneListsLazyQuery>;
export type GetPhoneListsSuspenseQueryHookResult = ReturnType<typeof useGetPhoneListsSuspenseQuery>;
export type GetPhoneListsQueryResult = Apollo.QueryResult<GetPhoneListsQuery, GetPhoneListsQueryVariables>;
export const GetPhoneListDocument = gql`
    query GetPhoneList($id: Int!) {
  phonelist(id: $id) {
    id
    name
    phones
    userId
  }
}
    `;

/**
 * __useGetPhoneListQuery__
 *
 * To run a query within a React component, call `useGetPhoneListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhoneListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhoneListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPhoneListQuery(baseOptions: Apollo.QueryHookOptions<GetPhoneListQuery, GetPhoneListQueryVariables> & ({ variables: GetPhoneListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhoneListQuery, GetPhoneListQueryVariables>(GetPhoneListDocument, options);
      }
export function useGetPhoneListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhoneListQuery, GetPhoneListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhoneListQuery, GetPhoneListQueryVariables>(GetPhoneListDocument, options);
        }
export function useGetPhoneListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPhoneListQuery, GetPhoneListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPhoneListQuery, GetPhoneListQueryVariables>(GetPhoneListDocument, options);
        }
export type GetPhoneListQueryHookResult = ReturnType<typeof useGetPhoneListQuery>;
export type GetPhoneListLazyQueryHookResult = ReturnType<typeof useGetPhoneListLazyQuery>;
export type GetPhoneListSuspenseQueryHookResult = ReturnType<typeof useGetPhoneListSuspenseQuery>;
export type GetPhoneListQueryResult = Apollo.QueryResult<GetPhoneListQuery, GetPhoneListQueryVariables>;
export const CreatePhoneListDocument = gql`
    mutation CreatePhoneList($input: CreatePhonelistInput!) {
  createPhonelist(createPhonelistInput: $input) {
    name
    phones
    userId
  }
}
    `;
export type CreatePhoneListMutationFn = Apollo.MutationFunction<CreatePhoneListMutation, CreatePhoneListMutationVariables>;

/**
 * __useCreatePhoneListMutation__
 *
 * To run a mutation, you first call `useCreatePhoneListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePhoneListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhoneListMutation, { data, loading, error }] = useCreatePhoneListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePhoneListMutation(baseOptions?: Apollo.MutationHookOptions<CreatePhoneListMutation, CreatePhoneListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePhoneListMutation, CreatePhoneListMutationVariables>(CreatePhoneListDocument, options);
      }
export type CreatePhoneListMutationHookResult = ReturnType<typeof useCreatePhoneListMutation>;
export type CreatePhoneListMutationResult = Apollo.MutationResult<CreatePhoneListMutation>;
export type CreatePhoneListMutationOptions = Apollo.BaseMutationOptions<CreatePhoneListMutation, CreatePhoneListMutationVariables>;
export const UpdatePhoneListDocument = gql`
    mutation UpdatePhoneList($input: UpdatePhonelistInput!) {
  updatePhonelist(updatePhonelistInput: $input) {
    name
    phones
  }
}
    `;
export type UpdatePhoneListMutationFn = Apollo.MutationFunction<UpdatePhoneListMutation, UpdatePhoneListMutationVariables>;

/**
 * __useUpdatePhoneListMutation__
 *
 * To run a mutation, you first call `useUpdatePhoneListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhoneListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhoneListMutation, { data, loading, error }] = useUpdatePhoneListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePhoneListMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhoneListMutation, UpdatePhoneListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhoneListMutation, UpdatePhoneListMutationVariables>(UpdatePhoneListDocument, options);
      }
export type UpdatePhoneListMutationHookResult = ReturnType<typeof useUpdatePhoneListMutation>;
export type UpdatePhoneListMutationResult = Apollo.MutationResult<UpdatePhoneListMutation>;
export type UpdatePhoneListMutationOptions = Apollo.BaseMutationOptions<UpdatePhoneListMutation, UpdatePhoneListMutationVariables>;
export const GetSoundFilesDocument = gql`
    query GetSoundFiles {
  soundfiles {
    id
    name
    filePath
    userId
  }
}
    `;

/**
 * __useGetSoundFilesQuery__
 *
 * To run a query within a React component, call `useGetSoundFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSoundFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSoundFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSoundFilesQuery(baseOptions?: Apollo.QueryHookOptions<GetSoundFilesQuery, GetSoundFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSoundFilesQuery, GetSoundFilesQueryVariables>(GetSoundFilesDocument, options);
      }
export function useGetSoundFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSoundFilesQuery, GetSoundFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSoundFilesQuery, GetSoundFilesQueryVariables>(GetSoundFilesDocument, options);
        }
export function useGetSoundFilesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSoundFilesQuery, GetSoundFilesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSoundFilesQuery, GetSoundFilesQueryVariables>(GetSoundFilesDocument, options);
        }
export type GetSoundFilesQueryHookResult = ReturnType<typeof useGetSoundFilesQuery>;
export type GetSoundFilesLazyQueryHookResult = ReturnType<typeof useGetSoundFilesLazyQuery>;
export type GetSoundFilesSuspenseQueryHookResult = ReturnType<typeof useGetSoundFilesSuspenseQuery>;
export type GetSoundFilesQueryResult = Apollo.QueryResult<GetSoundFilesQuery, GetSoundFilesQueryVariables>;
export const GetSoundFileDocument = gql`
    query GetSoundFile($id: Int!) {
  soundfile(id: $id) {
    id
    name
    filePath
    userId
  }
}
    `;

/**
 * __useGetSoundFileQuery__
 *
 * To run a query within a React component, call `useGetSoundFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSoundFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSoundFileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSoundFileQuery(baseOptions: Apollo.QueryHookOptions<GetSoundFileQuery, GetSoundFileQueryVariables> & ({ variables: GetSoundFileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSoundFileQuery, GetSoundFileQueryVariables>(GetSoundFileDocument, options);
      }
export function useGetSoundFileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSoundFileQuery, GetSoundFileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSoundFileQuery, GetSoundFileQueryVariables>(GetSoundFileDocument, options);
        }
export function useGetSoundFileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSoundFileQuery, GetSoundFileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSoundFileQuery, GetSoundFileQueryVariables>(GetSoundFileDocument, options);
        }
export type GetSoundFileQueryHookResult = ReturnType<typeof useGetSoundFileQuery>;
export type GetSoundFileLazyQueryHookResult = ReturnType<typeof useGetSoundFileLazyQuery>;
export type GetSoundFileSuspenseQueryHookResult = ReturnType<typeof useGetSoundFileSuspenseQuery>;
export type GetSoundFileQueryResult = Apollo.QueryResult<GetSoundFileQuery, GetSoundFileQueryVariables>;
export const GetSoundFilesAndPhoneListsDocument = gql`
    query GetSoundFilesAndPhoneLists {
  soundfiles {
    id
    name
    filePath
    userId
  }
  phonelists {
    id
    name
    phones
    userId
  }
}
    `;

/**
 * __useGetSoundFilesAndPhoneListsQuery__
 *
 * To run a query within a React component, call `useGetSoundFilesAndPhoneListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSoundFilesAndPhoneListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSoundFilesAndPhoneListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSoundFilesAndPhoneListsQuery(baseOptions?: Apollo.QueryHookOptions<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>(GetSoundFilesAndPhoneListsDocument, options);
      }
export function useGetSoundFilesAndPhoneListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>(GetSoundFilesAndPhoneListsDocument, options);
        }
export function useGetSoundFilesAndPhoneListsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>(GetSoundFilesAndPhoneListsDocument, options);
        }
export type GetSoundFilesAndPhoneListsQueryHookResult = ReturnType<typeof useGetSoundFilesAndPhoneListsQuery>;
export type GetSoundFilesAndPhoneListsLazyQueryHookResult = ReturnType<typeof useGetSoundFilesAndPhoneListsLazyQuery>;
export type GetSoundFilesAndPhoneListsSuspenseQueryHookResult = ReturnType<typeof useGetSoundFilesAndPhoneListsSuspenseQuery>;
export type GetSoundFilesAndPhoneListsQueryResult = Apollo.QueryResult<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
    fullName
    picture
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: Int!) {
  user(id: $id) {
    id
    email
    fullName
    picture
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetKanbanColumnsDocument = gql`
    query GetKanbanColumns {
  kanbanColumns {
    id
    title
    titleColor
    kanbanCards {
      id
      name
      companyName
      phoneNumber
      comment
      task
      dateTime
      columnId
    }
  }
}
    `;

/**
 * __useGetKanbanColumnsQuery__
 *
 * To run a query within a React component, call `useGetKanbanColumnsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKanbanColumnsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKanbanColumnsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetKanbanColumnsQuery(baseOptions?: Apollo.QueryHookOptions<GetKanbanColumnsQuery, GetKanbanColumnsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetKanbanColumnsQuery, GetKanbanColumnsQueryVariables>(GetKanbanColumnsDocument, options);
      }
export function useGetKanbanColumnsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKanbanColumnsQuery, GetKanbanColumnsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetKanbanColumnsQuery, GetKanbanColumnsQueryVariables>(GetKanbanColumnsDocument, options);
        }
export function useGetKanbanColumnsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetKanbanColumnsQuery, GetKanbanColumnsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetKanbanColumnsQuery, GetKanbanColumnsQueryVariables>(GetKanbanColumnsDocument, options);
        }
export type GetKanbanColumnsQueryHookResult = ReturnType<typeof useGetKanbanColumnsQuery>;
export type GetKanbanColumnsLazyQueryHookResult = ReturnType<typeof useGetKanbanColumnsLazyQuery>;
export type GetKanbanColumnsSuspenseQueryHookResult = ReturnType<typeof useGetKanbanColumnsSuspenseQuery>;
export type GetKanbanColumnsQueryResult = Apollo.QueryResult<GetKanbanColumnsQuery, GetKanbanColumnsQueryVariables>;
export const GetKanbanCardsDocument = gql`
    query GetKanbanCards {
  kanbanCards {
    id
    name
    companyName
    phoneNumber
    comment
    task
    dateTime
    columnId
  }
}
    `;

/**
 * __useGetKanbanCardsQuery__
 *
 * To run a query within a React component, call `useGetKanbanCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKanbanCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKanbanCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetKanbanCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetKanbanCardsQuery, GetKanbanCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetKanbanCardsQuery, GetKanbanCardsQueryVariables>(GetKanbanCardsDocument, options);
      }
export function useGetKanbanCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKanbanCardsQuery, GetKanbanCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetKanbanCardsQuery, GetKanbanCardsQueryVariables>(GetKanbanCardsDocument, options);
        }
export function useGetKanbanCardsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetKanbanCardsQuery, GetKanbanCardsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetKanbanCardsQuery, GetKanbanCardsQueryVariables>(GetKanbanCardsDocument, options);
        }
export type GetKanbanCardsQueryHookResult = ReturnType<typeof useGetKanbanCardsQuery>;
export type GetKanbanCardsLazyQueryHookResult = ReturnType<typeof useGetKanbanCardsLazyQuery>;
export type GetKanbanCardsSuspenseQueryHookResult = ReturnType<typeof useGetKanbanCardsSuspenseQuery>;
export type GetKanbanCardsQueryResult = Apollo.QueryResult<GetKanbanCardsQuery, GetKanbanCardsQueryVariables>;
export const GetKanbanCardDocument = gql`
    query GetKanbanCard($id: Int!) {
  kanbanCard(id: $id) {
    id
    name
    companyName
    phoneNumber
    comment
    task
    dateTime
    columnId
  }
}
    `;

/**
 * __useGetKanbanCardQuery__
 *
 * To run a query within a React component, call `useGetKanbanCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKanbanCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKanbanCardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetKanbanCardQuery(baseOptions: Apollo.QueryHookOptions<GetKanbanCardQuery, GetKanbanCardQueryVariables> & ({ variables: GetKanbanCardQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetKanbanCardQuery, GetKanbanCardQueryVariables>(GetKanbanCardDocument, options);
      }
export function useGetKanbanCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKanbanCardQuery, GetKanbanCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetKanbanCardQuery, GetKanbanCardQueryVariables>(GetKanbanCardDocument, options);
        }
export function useGetKanbanCardSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetKanbanCardQuery, GetKanbanCardQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetKanbanCardQuery, GetKanbanCardQueryVariables>(GetKanbanCardDocument, options);
        }
export type GetKanbanCardQueryHookResult = ReturnType<typeof useGetKanbanCardQuery>;
export type GetKanbanCardLazyQueryHookResult = ReturnType<typeof useGetKanbanCardLazyQuery>;
export type GetKanbanCardSuspenseQueryHookResult = ReturnType<typeof useGetKanbanCardSuspenseQuery>;
export type GetKanbanCardQueryResult = Apollo.QueryResult<GetKanbanCardQuery, GetKanbanCardQueryVariables>;
export const UpdateKanbanCardDocument = gql`
    mutation UpdateKanbanCard($input: UpdateKanbanCardInput!) {
  updateKanbanCard(updateKanbanCardInput: $input) {
    name
    companyName
    phoneNumber
    comment
    task
    dateTime
    columnId
  }
}
    `;
export type UpdateKanbanCardMutationFn = Apollo.MutationFunction<UpdateKanbanCardMutation, UpdateKanbanCardMutationVariables>;

/**
 * __useUpdateKanbanCardMutation__
 *
 * To run a mutation, you first call `useUpdateKanbanCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKanbanCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKanbanCardMutation, { data, loading, error }] = useUpdateKanbanCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateKanbanCardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateKanbanCardMutation, UpdateKanbanCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateKanbanCardMutation, UpdateKanbanCardMutationVariables>(UpdateKanbanCardDocument, options);
      }
export type UpdateKanbanCardMutationHookResult = ReturnType<typeof useUpdateKanbanCardMutation>;
export type UpdateKanbanCardMutationResult = Apollo.MutationResult<UpdateKanbanCardMutation>;
export type UpdateKanbanCardMutationOptions = Apollo.BaseMutationOptions<UpdateKanbanCardMutation, UpdateKanbanCardMutationVariables>;