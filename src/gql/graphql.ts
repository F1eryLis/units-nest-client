/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type GetSoundFilesAndPhoneListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSoundFilesAndPhoneListsQuery = { __typename?: 'Query', soundfiles: Array<{ __typename?: 'SoundFile', id: number, name: string, filePath: string, userId: number }>, phonelists: Array<{ __typename?: 'PhoneList', id: number, name: string, phones: Array<number>, userId: number }> };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: number, name: string, companyLimit: number, dayLimit: number, status: number, startTime: any, endTime: any, days: Array<number>, reaction: Array<number>, soundFileId: number, phonesId: number, userId: number }> };


export const GetSoundFilesAndPhoneListsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSoundFilesAndPhoneLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"soundfiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phonelists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phones"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetSoundFilesAndPhoneListsQuery, GetSoundFilesAndPhoneListsQueryVariables>;
export const GetCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"companyLimit"}},{"kind":"Field","name":{"kind":"Name","value":"dayLimit"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"reaction"}},{"kind":"Field","name":{"kind":"Name","value":"soundFileId"}},{"kind":"Field","name":{"kind":"Name","value":"phonesId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<GetCompaniesQuery, GetCompaniesQueryVariables>;