/* eslint-disable */
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
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
  phonesId: Scalars['Int']['input'];
  reaction?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  soundFileId: Scalars['Int']['input'];
  startTime: Scalars['DateTime']['input'];
  status: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type CreatePhonelistInput = {
  /** Name of the phone list */
  name: Scalars['String']['input'];
  /** List of phone numbers */
  phones: Array<Scalars['Int']['input']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createPhonelist: PhoneList;
  createSoundfile: SoundFile;
  createUser: User;
  removeCompany: Company;
  removePhonelist: PhoneList;
  removeSoundfile: SoundFile;
  removeUser: User;
  updateCompany: Company;
  updatePhonelist: PhoneList;
  updateSoundfile: SoundFile;
  updateUser: User;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
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
  phones: Array<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  company: Company;
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

export type UpdatePhonelistInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  soundFiles: Array<SoundFile>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GetSoundFilesAndPhoneListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSoundFilesAndPhoneListsQuery = { __typename?: 'Query', soundfiles: Array<{ __typename?: 'SoundFile', id: number, name: string, filePath: string, userId: number }>, phonelists: Array<{ __typename?: 'PhoneList', id: number, name: string, phones: Array<number>, userId: number }> };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: number, name: string, companyLimit: number, dayLimit: number, status: number, startTime: any, endTime: any, days: Array<number>, reaction: Array<number>, soundFileId: number, phonesId: number, userId: number }> };


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