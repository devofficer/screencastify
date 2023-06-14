export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  feature_flag_state: any;
  jsonb: unknown;
  numeric: any;
  timestamp: any;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth_providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers';
  comment: Scalars['String'];
  provider: Scalars['String'];
};

/** aggregated selection of "auth_providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth_providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};

/** aggregate fields of "auth_providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth_providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth_providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  AuthProvidersPkey = 'auth_providers_pkey',
}

export enum Auth_Providers_Enum {
  Clever = 'clever',
  Google = 'google',
  /** our own email/password auth method */
  Password = 'password',
}

/** Boolean expression to compare columns of type "auth_providers_enum". All fields are combined with logical 'AND'. */
export type Auth_Providers_Enum_Comparison_Exp = {
  _eq?: Maybe<Auth_Providers_Enum>;
  _in?: Maybe<Array<Auth_Providers_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Auth_Providers_Enum>;
  _nin?: Maybe<Array<Auth_Providers_Enum>>;
};

/** input type for inserting data into table "auth_providers" */
export type Auth_Providers_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  comment?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  comment?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth_providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Providers>;
};

/** on_conflict condition type for table "auth_providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns?: Array<Auth_Providers_Update_Column>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth_providers". */
export type Auth_Providers_Order_By = {
  comment?: Maybe<Order_By>;
  provider?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_providers */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

/** select columns of table "auth_providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Provider = 'provider',
}

/** input type for updating data in table "auth_providers" */
export type Auth_Providers_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
};

/** update columns of table "auth_providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Provider = 'provider',
}

/** columns and relationships of "auth_user_roles" */
export type Auth_User_Roles = {
  __typename?: 'auth_user_roles';
  comment: Scalars['String'];
  role: Scalars['String'];
};

/** aggregated selection of "auth_user_roles" */
export type Auth_User_Roles_Aggregate = {
  __typename?: 'auth_user_roles_aggregate';
  aggregate?: Maybe<Auth_User_Roles_Aggregate_Fields>;
  nodes: Array<Auth_User_Roles>;
};

/** aggregate fields of "auth_user_roles" */
export type Auth_User_Roles_Aggregate_Fields = {
  __typename?: 'auth_user_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_User_Roles_Max_Fields>;
  min?: Maybe<Auth_User_Roles_Min_Fields>;
};

/** aggregate fields of "auth_user_roles" */
export type Auth_User_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_User_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth_user_roles". All fields are combined with a logical 'AND'. */
export type Auth_User_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_User_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_User_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_User_Roles_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth_user_roles" */
export enum Auth_User_Roles_Constraint {
  /** unique or primary key constraint */
  AuthUserRolesPkey = 'auth_user_roles_pkey',
}

export enum Auth_User_Roles_Enum {
  /** TEST_COMMENT */
  TestRole = 'TEST_ROLE',
}

/** Boolean expression to compare columns of type "auth_user_roles_enum". All fields are combined with logical 'AND'. */
export type Auth_User_Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Auth_User_Roles_Enum>;
  _in?: Maybe<Array<Auth_User_Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Auth_User_Roles_Enum>;
  _nin?: Maybe<Array<Auth_User_Roles_Enum>>;
};

/** input type for inserting data into table "auth_user_roles" */
export type Auth_User_Roles_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_User_Roles_Max_Fields = {
  __typename?: 'auth_user_roles_max_fields';
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_User_Roles_Min_Fields = {
  __typename?: 'auth_user_roles_min_fields';
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth_user_roles" */
export type Auth_User_Roles_Mutation_Response = {
  __typename?: 'auth_user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User_Roles>;
};

/** on_conflict condition type for table "auth_user_roles" */
export type Auth_User_Roles_On_Conflict = {
  constraint: Auth_User_Roles_Constraint;
  update_columns?: Array<Auth_User_Roles_Update_Column>;
  where?: Maybe<Auth_User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth_user_roles". */
export type Auth_User_Roles_Order_By = {
  comment?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_user_roles */
export type Auth_User_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth_user_roles" */
export enum Auth_User_Roles_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Role = 'role',
}

/** input type for updating data in table "auth_user_roles" */
export type Auth_User_Roles_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth_user_roles" */
export enum Auth_User_Roles_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Role = 'role',
}

/** Maps email domain to roles for auto assignment */
export type Auto_Assign_Domains = {
  __typename?: 'auto_assign_domains';
  created_at: Scalars['timestamptz'];
  domain: Scalars['String'];
  is_active: Scalars['Boolean'];
  /** An object relationship */
  license: Licenses;
  license_uuid: Scalars['uuid'];
  role: License_Seat_Roles_Enum;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "auto_assign_domains" */
export type Auto_Assign_Domains_Aggregate = {
  __typename?: 'auto_assign_domains_aggregate';
  aggregate?: Maybe<Auto_Assign_Domains_Aggregate_Fields>;
  nodes: Array<Auto_Assign_Domains>;
};

/** aggregate fields of "auto_assign_domains" */
export type Auto_Assign_Domains_Aggregate_Fields = {
  __typename?: 'auto_assign_domains_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auto_Assign_Domains_Max_Fields>;
  min?: Maybe<Auto_Assign_Domains_Min_Fields>;
};

/** aggregate fields of "auto_assign_domains" */
export type Auto_Assign_Domains_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auto_assign_domains" */
export type Auto_Assign_Domains_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auto_Assign_Domains_Max_Order_By>;
  min?: Maybe<Auto_Assign_Domains_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auto_assign_domains" */
export type Auto_Assign_Domains_Arr_Rel_Insert_Input = {
  data: Array<Auto_Assign_Domains_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Auto_Assign_Domains_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auto_assign_domains". All fields are combined with a logical 'AND'. */
export type Auto_Assign_Domains_Bool_Exp = {
  _and?: Maybe<Array<Auto_Assign_Domains_Bool_Exp>>;
  _not?: Maybe<Auto_Assign_Domains_Bool_Exp>;
  _or?: Maybe<Array<Auto_Assign_Domains_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  domain?: Maybe<String_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  license?: Maybe<Licenses_Bool_Exp>;
  license_uuid?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<License_Seat_Roles_Enum_Comparison_Exp>;
  tier?: Maybe<License_Seat_Tiers_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auto_assign_domains" */
export enum Auto_Assign_Domains_Constraint {
  /** unique or primary key constraint */
  AutoAssignDomainsDomainKey = 'auto_assign_domains_domain_key',
  /** unique or primary key constraint */
  AutoAssignDomainsPkey = 'auto_assign_domains_pkey',
}

/** input type for inserting data into table "auto_assign_domains" */
export type Auto_Assign_Domains_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  license?: Maybe<Licenses_Obj_Rel_Insert_Input>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<License_Seat_Roles_Enum>;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auto_Assign_Domains_Max_Fields = {
  __typename?: 'auto_assign_domains_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auto_assign_domains" */
export type Auto_Assign_Domains_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  domain?: Maybe<Order_By>;
  license_uuid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auto_Assign_Domains_Min_Fields = {
  __typename?: 'auto_assign_domains_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auto_assign_domains" */
export type Auto_Assign_Domains_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  domain?: Maybe<Order_By>;
  license_uuid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "auto_assign_domains" */
export type Auto_Assign_Domains_Mutation_Response = {
  __typename?: 'auto_assign_domains_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auto_Assign_Domains>;
};

/** on_conflict condition type for table "auto_assign_domains" */
export type Auto_Assign_Domains_On_Conflict = {
  constraint: Auto_Assign_Domains_Constraint;
  update_columns?: Array<Auto_Assign_Domains_Update_Column>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

/** Ordering options when selecting data from "auto_assign_domains". */
export type Auto_Assign_Domains_Order_By = {
  created_at?: Maybe<Order_By>;
  domain?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  license?: Maybe<Licenses_Order_By>;
  license_uuid?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: auto_assign_domains */
export type Auto_Assign_Domains_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "auto_assign_domains" */
export enum Auto_Assign_Domains_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domain = 'domain',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LicenseUuid = 'license_uuid',
  /** column name */
  Role = 'role',
  /** column name */
  Tier = 'tier',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "auto_assign_domains" */
export type Auto_Assign_Domains_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  domain?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<License_Seat_Roles_Enum>;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auto_assign_domains" */
export enum Auto_Assign_Domains_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Domain = 'domain',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LicenseUuid = 'license_uuid',
  /** column name */
  Role = 'role',
  /** column name */
  Tier = 'tier',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** This is a table that holds all licenses that have been canceled in chargebee or had their billing lapse */
export type Canceled_Licenses = {
  __typename?: 'canceled_licenses';
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  default_migration_tier: Scalars['String'];
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats: Scalars['Int'];
  max_pro_restricted_seats: Scalars['Int'];
  max_standard_member_seats: Scalars['Int'];
  max_standard_restricted_seats: Scalars['Int'];
  organization_uuid?: Maybe<Scalars['uuid']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "canceled_licenses" */
export type Canceled_Licenses_Aggregate = {
  __typename?: 'canceled_licenses_aggregate';
  aggregate?: Maybe<Canceled_Licenses_Aggregate_Fields>;
  nodes: Array<Canceled_Licenses>;
};

/** aggregate fields of "canceled_licenses" */
export type Canceled_Licenses_Aggregate_Fields = {
  __typename?: 'canceled_licenses_aggregate_fields';
  avg?: Maybe<Canceled_Licenses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Canceled_Licenses_Max_Fields>;
  min?: Maybe<Canceled_Licenses_Min_Fields>;
  stddev?: Maybe<Canceled_Licenses_Stddev_Fields>;
  stddev_pop?: Maybe<Canceled_Licenses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Canceled_Licenses_Stddev_Samp_Fields>;
  sum?: Maybe<Canceled_Licenses_Sum_Fields>;
  var_pop?: Maybe<Canceled_Licenses_Var_Pop_Fields>;
  var_samp?: Maybe<Canceled_Licenses_Var_Samp_Fields>;
  variance?: Maybe<Canceled_Licenses_Variance_Fields>;
};

/** aggregate fields of "canceled_licenses" */
export type Canceled_Licenses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Canceled_Licenses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Canceled_Licenses_Avg_Fields = {
  __typename?: 'canceled_licenses_avg_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "canceled_licenses". All fields are combined with a logical 'AND'. */
export type Canceled_Licenses_Bool_Exp = {
  _and?: Maybe<Array<Canceled_Licenses_Bool_Exp>>;
  _not?: Maybe<Canceled_Licenses_Bool_Exp>;
  _or?: Maybe<Array<Canceled_Licenses_Bool_Exp>>;
  chargebee_customer_id?: Maybe<String_Comparison_Exp>;
  chargebee_subscription_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_migration_tier?: Maybe<String_Comparison_Exp>;
  legacy_license_id?: Maybe<String_Comparison_Exp>;
  max_pro_member_seats?: Maybe<Int_Comparison_Exp>;
  max_pro_restricted_seats?: Maybe<Int_Comparison_Exp>;
  max_standard_member_seats?: Maybe<Int_Comparison_Exp>;
  max_standard_restricted_seats?: Maybe<Int_Comparison_Exp>;
  organization_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "canceled_licenses" */
export enum Canceled_Licenses_Constraint {
  /** unique or primary key constraint */
  CanceledLicensesLegacyLicenseIdKey = 'canceled_licenses_legacy_license_id_key',
  /** unique or primary key constraint */
  CanceledLicensesPkey = 'canceled_licenses_pkey',
}

/** input type for incrementing numeric columns in table "canceled_licenses" */
export type Canceled_Licenses_Inc_Input = {
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "canceled_licenses" */
export type Canceled_Licenses_Insert_Input = {
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Canceled_Licenses_Max_Fields = {
  __typename?: 'canceled_licenses_max_fields';
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Canceled_Licenses_Min_Fields = {
  __typename?: 'canceled_licenses_min_fields';
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "canceled_licenses" */
export type Canceled_Licenses_Mutation_Response = {
  __typename?: 'canceled_licenses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Canceled_Licenses>;
};

/** on_conflict condition type for table "canceled_licenses" */
export type Canceled_Licenses_On_Conflict = {
  constraint: Canceled_Licenses_Constraint;
  update_columns?: Array<Canceled_Licenses_Update_Column>;
  where?: Maybe<Canceled_Licenses_Bool_Exp>;
};

/** Ordering options when selecting data from "canceled_licenses". */
export type Canceled_Licenses_Order_By = {
  chargebee_customer_id?: Maybe<Order_By>;
  chargebee_subscription_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_migration_tier?: Maybe<Order_By>;
  legacy_license_id?: Maybe<Order_By>;
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
  organization_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: canceled_licenses */
export type Canceled_Licenses_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "canceled_licenses" */
export enum Canceled_Licenses_Select_Column {
  /** column name */
  ChargebeeCustomerId = 'chargebee_customer_id',
  /** column name */
  ChargebeeSubscriptionId = 'chargebee_subscription_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultMigrationTier = 'default_migration_tier',
  /** column name */
  LegacyLicenseId = 'legacy_license_id',
  /** column name */
  MaxProMemberSeats = 'max_pro_member_seats',
  /** column name */
  MaxProRestrictedSeats = 'max_pro_restricted_seats',
  /** column name */
  MaxStandardMemberSeats = 'max_standard_member_seats',
  /** column name */
  MaxStandardRestrictedSeats = 'max_standard_restricted_seats',
  /** column name */
  OrganizationUuid = 'organization_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "canceled_licenses" */
export type Canceled_Licenses_Set_Input = {
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Canceled_Licenses_Stddev_Fields = {
  __typename?: 'canceled_licenses_stddev_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Canceled_Licenses_Stddev_Pop_Fields = {
  __typename?: 'canceled_licenses_stddev_pop_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Canceled_Licenses_Stddev_Samp_Fields = {
  __typename?: 'canceled_licenses_stddev_samp_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Canceled_Licenses_Sum_Fields = {
  __typename?: 'canceled_licenses_sum_fields';
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
};

/** update columns of table "canceled_licenses" */
export enum Canceled_Licenses_Update_Column {
  /** column name */
  ChargebeeCustomerId = 'chargebee_customer_id',
  /** column name */
  ChargebeeSubscriptionId = 'chargebee_subscription_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultMigrationTier = 'default_migration_tier',
  /** column name */
  LegacyLicenseId = 'legacy_license_id',
  /** column name */
  MaxProMemberSeats = 'max_pro_member_seats',
  /** column name */
  MaxProRestrictedSeats = 'max_pro_restricted_seats',
  /** column name */
  MaxStandardMemberSeats = 'max_standard_member_seats',
  /** column name */
  MaxStandardRestrictedSeats = 'max_standard_restricted_seats',
  /** column name */
  OrganizationUuid = 'organization_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** aggregate var_pop on columns */
export type Canceled_Licenses_Var_Pop_Fields = {
  __typename?: 'canceled_licenses_var_pop_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Canceled_Licenses_Var_Samp_Fields = {
  __typename?: 'canceled_licenses_var_samp_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Canceled_Licenses_Variance_Fields = {
  __typename?: 'canceled_licenses_variance_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "feature_flag_state". All fields are combined with logical 'AND'. */
export type Feature_Flag_State_Comparison_Exp = {
  _eq?: Maybe<Scalars['feature_flag_state']>;
  _gt?: Maybe<Scalars['feature_flag_state']>;
  _gte?: Maybe<Scalars['feature_flag_state']>;
  _in?: Maybe<Array<Scalars['feature_flag_state']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['feature_flag_state']>;
  _lte?: Maybe<Scalars['feature_flag_state']>;
  _neq?: Maybe<Scalars['feature_flag_state']>;
  _nin?: Maybe<Array<Scalars['feature_flag_state']>>;
};

/** columns and relationships of "feature_flags" */
export type Feature_Flags = {
  __typename?: 'feature_flags';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  state: Scalars['feature_flag_state'];
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "feature_flags" */
export type Feature_Flags_Aggregate = {
  __typename?: 'feature_flags_aggregate';
  aggregate?: Maybe<Feature_Flags_Aggregate_Fields>;
  nodes: Array<Feature_Flags>;
};

/** aggregate fields of "feature_flags" */
export type Feature_Flags_Aggregate_Fields = {
  __typename?: 'feature_flags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Feature_Flags_Max_Fields>;
  min?: Maybe<Feature_Flags_Min_Fields>;
};

/** aggregate fields of "feature_flags" */
export type Feature_Flags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Feature_Flags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "feature_flags". All fields are combined with a logical 'AND'. */
export type Feature_Flags_Bool_Exp = {
  _and?: Maybe<Array<Feature_Flags_Bool_Exp>>;
  _not?: Maybe<Feature_Flags_Bool_Exp>;
  _or?: Maybe<Array<Feature_Flags_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  state?: Maybe<Feature_Flag_State_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_flags" */
export enum Feature_Flags_Constraint {
  /** unique or primary key constraint */
  FeatureFlagsNameKey = 'feature_flags_name_key',
  /** unique or primary key constraint */
  FeatureFlagsPkey = 'feature_flags_pkey',
}

/** input type for inserting data into table "feature_flags" */
export type Feature_Flags_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['feature_flag_state']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Feature_Flags_Max_Fields = {
  __typename?: 'feature_flags_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['feature_flag_state']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Feature_Flags_Min_Fields = {
  __typename?: 'feature_flags_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['feature_flag_state']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "feature_flags" */
export type Feature_Flags_Mutation_Response = {
  __typename?: 'feature_flags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feature_Flags>;
};

/** on_conflict condition type for table "feature_flags" */
export type Feature_Flags_On_Conflict = {
  constraint: Feature_Flags_Constraint;
  update_columns?: Array<Feature_Flags_Update_Column>;
  where?: Maybe<Feature_Flags_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_flags". */
export type Feature_Flags_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: feature_flags */
export type Feature_Flags_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "feature_flags" */
export enum Feature_Flags_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "feature_flags" */
export type Feature_Flags_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['feature_flag_state']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "feature_flags" */
export enum Feature_Flags_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** columns and relationships of "invalid_seats" */
export type Invalid_Seats = {
  __typename?: 'invalid_seats';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  invalid_reason?: Maybe<Invalid_Seats_Reason_Enum>;
  /** An object relationship */
  invalidating_user?: Maybe<Users>;
  invalidating_user_uuid?: Maybe<Scalars['uuid']>;
  license_uuid: Scalars['uuid'];
  role?: Maybe<License_Seat_Roles_Enum>;
  seat_user_uuid?: Maybe<Scalars['uuid']>;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "invalid_seats" */
export type Invalid_Seats_Aggregate = {
  __typename?: 'invalid_seats_aggregate';
  aggregate?: Maybe<Invalid_Seats_Aggregate_Fields>;
  nodes: Array<Invalid_Seats>;
};

/** aggregate fields of "invalid_seats" */
export type Invalid_Seats_Aggregate_Fields = {
  __typename?: 'invalid_seats_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invalid_Seats_Max_Fields>;
  min?: Maybe<Invalid_Seats_Min_Fields>;
};

/** aggregate fields of "invalid_seats" */
export type Invalid_Seats_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Invalid_Seats_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "invalid_seats". All fields are combined with a logical 'AND'. */
export type Invalid_Seats_Bool_Exp = {
  _and?: Maybe<Array<Invalid_Seats_Bool_Exp>>;
  _not?: Maybe<Invalid_Seats_Bool_Exp>;
  _or?: Maybe<Array<Invalid_Seats_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  invalid_reason?: Maybe<Invalid_Seats_Reason_Enum_Comparison_Exp>;
  invalidating_user?: Maybe<Users_Bool_Exp>;
  invalidating_user_uuid?: Maybe<Uuid_Comparison_Exp>;
  license_uuid?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<License_Seat_Roles_Enum_Comparison_Exp>;
  seat_user_uuid?: Maybe<Uuid_Comparison_Exp>;
  tier?: Maybe<License_Seat_Tiers_Enum_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "invalid_seats" */
export enum Invalid_Seats_Constraint {
  /** unique or primary key constraint */
  InvalidInvitationsPkey = 'invalid_invitations_pkey',
}

/** input type for inserting data into table "invalid_seats" */
export type Invalid_Seats_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  invalid_reason?: Maybe<Invalid_Seats_Reason_Enum>;
  invalidating_user?: Maybe<Users_Obj_Rel_Insert_Input>;
  invalidating_user_uuid?: Maybe<Scalars['uuid']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<License_Seat_Roles_Enum>;
  seat_user_uuid?: Maybe<Scalars['uuid']>;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Invalid_Seats_Max_Fields = {
  __typename?: 'invalid_seats_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  invalidating_user_uuid?: Maybe<Scalars['uuid']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  seat_user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Invalid_Seats_Min_Fields = {
  __typename?: 'invalid_seats_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  invalidating_user_uuid?: Maybe<Scalars['uuid']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  seat_user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "invalid_seats" */
export type Invalid_Seats_Mutation_Response = {
  __typename?: 'invalid_seats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invalid_Seats>;
};

/** on_conflict condition type for table "invalid_seats" */
export type Invalid_Seats_On_Conflict = {
  constraint: Invalid_Seats_Constraint;
  update_columns?: Array<Invalid_Seats_Update_Column>;
  where?: Maybe<Invalid_Seats_Bool_Exp>;
};

/** Ordering options when selecting data from "invalid_seats". */
export type Invalid_Seats_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  invalid_reason?: Maybe<Order_By>;
  invalidating_user?: Maybe<Users_Order_By>;
  invalidating_user_uuid?: Maybe<Order_By>;
  license_uuid?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  seat_user_uuid?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: invalid_seats */
export type Invalid_Seats_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** columns and relationships of "invalid_seats_reason" */
export type Invalid_Seats_Reason = {
  __typename?: 'invalid_seats_reason';
  comment?: Maybe<Scalars['String']>;
  invalid_reason: Scalars['String'];
};

/** aggregated selection of "invalid_seats_reason" */
export type Invalid_Seats_Reason_Aggregate = {
  __typename?: 'invalid_seats_reason_aggregate';
  aggregate?: Maybe<Invalid_Seats_Reason_Aggregate_Fields>;
  nodes: Array<Invalid_Seats_Reason>;
};

/** aggregate fields of "invalid_seats_reason" */
export type Invalid_Seats_Reason_Aggregate_Fields = {
  __typename?: 'invalid_seats_reason_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invalid_Seats_Reason_Max_Fields>;
  min?: Maybe<Invalid_Seats_Reason_Min_Fields>;
};

/** aggregate fields of "invalid_seats_reason" */
export type Invalid_Seats_Reason_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Invalid_Seats_Reason_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "invalid_seats_reason". All fields are combined with a logical 'AND'. */
export type Invalid_Seats_Reason_Bool_Exp = {
  _and?: Maybe<Array<Invalid_Seats_Reason_Bool_Exp>>;
  _not?: Maybe<Invalid_Seats_Reason_Bool_Exp>;
  _or?: Maybe<Array<Invalid_Seats_Reason_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  invalid_reason?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "invalid_seats_reason" */
export enum Invalid_Seats_Reason_Constraint {
  /** unique or primary key constraint */
  InvalidInvitationsReasonPkey = 'invalid_invitations_reason_pkey',
}

export enum Invalid_Seats_Reason_Enum {
  /** An admin has actionably removed the seat from the license */
  SeatRemovedFromLicense = 'seat_removed_from_license',
  /** The subscription from chargebee has been actively cancelled, or has not renewed within the payment period */
  SubscriptionCancelled = 'subscription_cancelled',
  /** An admin has actionably deleted the unclaimed seat */
  UnclaimedSeatDeleted = 'unclaimed_seat_deleted',
  /** A user has actionably rejected the unclaimed seat */
  UnclaimedSeatRejected = 'unclaimed_seat_rejected',
}

/** Boolean expression to compare columns of type "invalid_seats_reason_enum". All fields are combined with logical 'AND'. */
export type Invalid_Seats_Reason_Enum_Comparison_Exp = {
  _eq?: Maybe<Invalid_Seats_Reason_Enum>;
  _in?: Maybe<Array<Invalid_Seats_Reason_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Invalid_Seats_Reason_Enum>;
  _nin?: Maybe<Array<Invalid_Seats_Reason_Enum>>;
};

/** input type for inserting data into table "invalid_seats_reason" */
export type Invalid_Seats_Reason_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  invalid_reason?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Invalid_Seats_Reason_Max_Fields = {
  __typename?: 'invalid_seats_reason_max_fields';
  comment?: Maybe<Scalars['String']>;
  invalid_reason?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Invalid_Seats_Reason_Min_Fields = {
  __typename?: 'invalid_seats_reason_min_fields';
  comment?: Maybe<Scalars['String']>;
  invalid_reason?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "invalid_seats_reason" */
export type Invalid_Seats_Reason_Mutation_Response = {
  __typename?: 'invalid_seats_reason_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invalid_Seats_Reason>;
};

/** on_conflict condition type for table "invalid_seats_reason" */
export type Invalid_Seats_Reason_On_Conflict = {
  constraint: Invalid_Seats_Reason_Constraint;
  update_columns?: Array<Invalid_Seats_Reason_Update_Column>;
  where?: Maybe<Invalid_Seats_Reason_Bool_Exp>;
};

/** Ordering options when selecting data from "invalid_seats_reason". */
export type Invalid_Seats_Reason_Order_By = {
  comment?: Maybe<Order_By>;
  invalid_reason?: Maybe<Order_By>;
};

/** primary key columns input for table: invalid_seats_reason */
export type Invalid_Seats_Reason_Pk_Columns_Input = {
  invalid_reason: Scalars['String'];
};

/** select columns of table "invalid_seats_reason" */
export enum Invalid_Seats_Reason_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  InvalidReason = 'invalid_reason',
}

/** input type for updating data in table "invalid_seats_reason" */
export type Invalid_Seats_Reason_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  invalid_reason?: Maybe<Scalars['String']>;
};

/** update columns of table "invalid_seats_reason" */
export enum Invalid_Seats_Reason_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  InvalidReason = 'invalid_reason',
}

/** select columns of table "invalid_seats" */
export enum Invalid_Seats_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  InvalidReason = 'invalid_reason',
  /** column name */
  InvalidatingUserUuid = 'invalidating_user_uuid',
  /** column name */
  LicenseUuid = 'license_uuid',
  /** column name */
  Role = 'role',
  /** column name */
  SeatUserUuid = 'seat_user_uuid',
  /** column name */
  Tier = 'tier',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "invalid_seats" */
export type Invalid_Seats_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  invalid_reason?: Maybe<Invalid_Seats_Reason_Enum>;
  invalidating_user_uuid?: Maybe<Scalars['uuid']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<License_Seat_Roles_Enum>;
  seat_user_uuid?: Maybe<Scalars['uuid']>;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "invalid_seats" */
export enum Invalid_Seats_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  InvalidReason = 'invalid_reason',
  /** column name */
  InvalidatingUserUuid = 'invalidating_user_uuid',
  /** column name */
  LicenseUuid = 'license_uuid',
  /** column name */
  Role = 'role',
  /** column name */
  SeatUserUuid = 'seat_user_uuid',
  /** column name */
  Tier = 'tier',
  /** column name */
  Uuid = 'uuid',
}

export type Jsonb_Cast_Exp = {
  String?: Maybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: Maybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** Enum table for roles in licensing */
export type License_Seat_Roles = {
  __typename?: 'license_seat_roles';
  comment: Scalars['String'];
  role: Scalars['String'];
};

/** aggregated selection of "license_seat_roles" */
export type License_Seat_Roles_Aggregate = {
  __typename?: 'license_seat_roles_aggregate';
  aggregate?: Maybe<License_Seat_Roles_Aggregate_Fields>;
  nodes: Array<License_Seat_Roles>;
};

/** aggregate fields of "license_seat_roles" */
export type License_Seat_Roles_Aggregate_Fields = {
  __typename?: 'license_seat_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<License_Seat_Roles_Max_Fields>;
  min?: Maybe<License_Seat_Roles_Min_Fields>;
};

/** aggregate fields of "license_seat_roles" */
export type License_Seat_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<License_Seat_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "license_seat_roles". All fields are combined with a logical 'AND'. */
export type License_Seat_Roles_Bool_Exp = {
  _and?: Maybe<Array<License_Seat_Roles_Bool_Exp>>;
  _not?: Maybe<License_Seat_Roles_Bool_Exp>;
  _or?: Maybe<Array<License_Seat_Roles_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "license_seat_roles" */
export enum License_Seat_Roles_Constraint {
  /** unique or primary key constraint */
  LicenseSeatRolesPkey = 'license_seat_roles_pkey',
}

export enum License_Seat_Roles_Enum {
  /** License administrators can add other members and change their role/tier */
  Admin = 'admin',
  /** License members are regular users with full access to screencastify */
  Member = 'member',
  /** Restricted users, such as students, have restricted access to screencastify features */
  Restricted = 'restricted',
}

/** Boolean expression to compare columns of type "license_seat_roles_enum". All fields are combined with logical 'AND'. */
export type License_Seat_Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<License_Seat_Roles_Enum>;
  _in?: Maybe<Array<License_Seat_Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<License_Seat_Roles_Enum>;
  _nin?: Maybe<Array<License_Seat_Roles_Enum>>;
};

/** input type for inserting data into table "license_seat_roles" */
export type License_Seat_Roles_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type License_Seat_Roles_Max_Fields = {
  __typename?: 'license_seat_roles_max_fields';
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type License_Seat_Roles_Min_Fields = {
  __typename?: 'license_seat_roles_min_fields';
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "license_seat_roles" */
export type License_Seat_Roles_Mutation_Response = {
  __typename?: 'license_seat_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<License_Seat_Roles>;
};

/** on_conflict condition type for table "license_seat_roles" */
export type License_Seat_Roles_On_Conflict = {
  constraint: License_Seat_Roles_Constraint;
  update_columns?: Array<License_Seat_Roles_Update_Column>;
  where?: Maybe<License_Seat_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "license_seat_roles". */
export type License_Seat_Roles_Order_By = {
  comment?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: license_seat_roles */
export type License_Seat_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "license_seat_roles" */
export enum License_Seat_Roles_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Role = 'role',
}

/** input type for updating data in table "license_seat_roles" */
export type License_Seat_Roles_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "license_seat_roles" */
export enum License_Seat_Roles_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Role = 'role',
}

/** Payment tiers available in licensing system */
export type License_Seat_Tiers = {
  __typename?: 'license_seat_tiers';
  comment: Scalars['String'];
  tier: Scalars['String'];
};

/** aggregated selection of "license_seat_tiers" */
export type License_Seat_Tiers_Aggregate = {
  __typename?: 'license_seat_tiers_aggregate';
  aggregate?: Maybe<License_Seat_Tiers_Aggregate_Fields>;
  nodes: Array<License_Seat_Tiers>;
};

/** aggregate fields of "license_seat_tiers" */
export type License_Seat_Tiers_Aggregate_Fields = {
  __typename?: 'license_seat_tiers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<License_Seat_Tiers_Max_Fields>;
  min?: Maybe<License_Seat_Tiers_Min_Fields>;
};

/** aggregate fields of "license_seat_tiers" */
export type License_Seat_Tiers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<License_Seat_Tiers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "license_seat_tiers". All fields are combined with a logical 'AND'. */
export type License_Seat_Tiers_Bool_Exp = {
  _and?: Maybe<Array<License_Seat_Tiers_Bool_Exp>>;
  _not?: Maybe<License_Seat_Tiers_Bool_Exp>;
  _or?: Maybe<Array<License_Seat_Tiers_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  tier?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "license_seat_tiers" */
export enum License_Seat_Tiers_Constraint {
  /** unique or primary key constraint */
  LicenseSeatTiersPkey = 'license_seat_tiers_pkey',
}

export enum License_Seat_Tiers_Enum {
  /** Free users have restricted quota levels and may not have all features. */
  Free = 'free',
  /** Pro licenses have the highest quota levels and access to features. */
  Pro = 'pro',
  /** Standard licenses have moderate quota levels and access to features. */
  Standard = 'standard',
}

/** Boolean expression to compare columns of type "license_seat_tiers_enum". All fields are combined with logical 'AND'. */
export type License_Seat_Tiers_Enum_Comparison_Exp = {
  _eq?: Maybe<License_Seat_Tiers_Enum>;
  _in?: Maybe<Array<License_Seat_Tiers_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<License_Seat_Tiers_Enum>;
  _nin?: Maybe<Array<License_Seat_Tiers_Enum>>;
};

/** input type for inserting data into table "license_seat_tiers" */
export type License_Seat_Tiers_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type License_Seat_Tiers_Max_Fields = {
  __typename?: 'license_seat_tiers_max_fields';
  comment?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type License_Seat_Tiers_Min_Fields = {
  __typename?: 'license_seat_tiers_min_fields';
  comment?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "license_seat_tiers" */
export type License_Seat_Tiers_Mutation_Response = {
  __typename?: 'license_seat_tiers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<License_Seat_Tiers>;
};

/** on_conflict condition type for table "license_seat_tiers" */
export type License_Seat_Tiers_On_Conflict = {
  constraint: License_Seat_Tiers_Constraint;
  update_columns?: Array<License_Seat_Tiers_Update_Column>;
  where?: Maybe<License_Seat_Tiers_Bool_Exp>;
};

/** Ordering options when selecting data from "license_seat_tiers". */
export type License_Seat_Tiers_Order_By = {
  comment?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** primary key columns input for table: license_seat_tiers */
export type License_Seat_Tiers_Pk_Columns_Input = {
  tier: Scalars['String'];
};

/** select columns of table "license_seat_tiers" */
export enum License_Seat_Tiers_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Tier = 'tier',
}

/** input type for updating data in table "license_seat_tiers" */
export type License_Seat_Tiers_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

/** update columns of table "license_seat_tiers" */
export enum License_Seat_Tiers_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Tier = 'tier',
}

/** columns and relationships of "license_seats" */
export type License_Seats = {
  __typename?: 'license_seats';
  email?: Maybe<Scalars['String']>;
  /** An object relationship */
  license?: Maybe<Licenses>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  /** An object relationship */
  seat?: Maybe<Seats>;
  tier?: Maybe<Scalars['String']>;
  user_provider_uid?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "license_seats" */
export type License_Seats_Aggregate = {
  __typename?: 'license_seats_aggregate';
  aggregate?: Maybe<License_Seats_Aggregate_Fields>;
  nodes: Array<License_Seats>;
};

/** aggregate fields of "license_seats" */
export type License_Seats_Aggregate_Fields = {
  __typename?: 'license_seats_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<License_Seats_Max_Fields>;
  min?: Maybe<License_Seats_Min_Fields>;
};

/** aggregate fields of "license_seats" */
export type License_Seats_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<License_Seats_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "license_seats" */
export type License_Seats_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<License_Seats_Max_Order_By>;
  min?: Maybe<License_Seats_Min_Order_By>;
};

/** input type for inserting array relation for remote table "license_seats" */
export type License_Seats_Arr_Rel_Insert_Input = {
  data: Array<License_Seats_Insert_Input>;
};

/** Boolean expression to filter rows from the table "license_seats". All fields are combined with a logical 'AND'. */
export type License_Seats_Bool_Exp = {
  _and?: Maybe<Array<License_Seats_Bool_Exp>>;
  _not?: Maybe<License_Seats_Bool_Exp>;
  _or?: Maybe<Array<License_Seats_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  license?: Maybe<Licenses_Bool_Exp>;
  license_uuid?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  seat?: Maybe<Seats_Bool_Exp>;
  tier?: Maybe<String_Comparison_Exp>;
  user_provider_uid?: Maybe<String_Comparison_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "license_seats" */
export type License_Seats_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  license?: Maybe<Licenses_Obj_Rel_Insert_Input>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  seat?: Maybe<Seats_Obj_Rel_Insert_Input>;
  tier?: Maybe<Scalars['String']>;
  user_provider_uid?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type License_Seats_Max_Fields = {
  __typename?: 'license_seats_max_fields';
  email?: Maybe<Scalars['String']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  user_provider_uid?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "license_seats" */
export type License_Seats_Max_Order_By = {
  email?: Maybe<Order_By>;
  license_uuid?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  user_provider_uid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type License_Seats_Min_Fields = {
  __typename?: 'license_seats_min_fields';
  email?: Maybe<Scalars['String']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  user_provider_uid?: Maybe<Scalars['String']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "license_seats" */
export type License_Seats_Min_Order_By = {
  email?: Maybe<Order_By>;
  license_uuid?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  user_provider_uid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "license_seats" */
export type License_Seats_Obj_Rel_Insert_Input = {
  data: License_Seats_Insert_Input;
};

/** Ordering options when selecting data from "license_seats". */
export type License_Seats_Order_By = {
  email?: Maybe<Order_By>;
  license?: Maybe<Licenses_Order_By>;
  license_uuid?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  seat?: Maybe<Seats_Order_By>;
  tier?: Maybe<Order_By>;
  user_provider_uid?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** select columns of table "license_seats" */
export enum License_Seats_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  LicenseUuid = 'license_uuid',
  /** column name */
  Role = 'role',
  /** column name */
  Tier = 'tier',
  /** column name */
  UserProviderUid = 'user_provider_uid',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** A license has many seats, which are taken by individual users */
export type Licenses = {
  __typename?: 'licenses';
  /** An array relationship */
  auto_assign_domains: Array<Auto_Assign_Domains>;
  /** An aggregate relationship */
  auto_assign_domains_aggregate: Auto_Assign_Domains_Aggregate;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  default_migration_tier: License_Seat_Tiers_Enum;
  legacy_license_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  license_seats: Array<License_Seats>;
  /** An aggregate relationship */
  license_seats_aggregate: License_Seats_Aggregate;
  max_pro_member_seats: Scalars['Int'];
  max_pro_restricted_seats: Scalars['Int'];
  max_standard_member_seats: Scalars['Int'];
  max_standard_restricted_seats: Scalars['Int'];
  /** An object relationship */
  organization?: Maybe<Organizations>;
  /** An object relationship */
  organization_owner?: Maybe<Organization_Owners>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  seats: Array<Seats>;
  /** An aggregate relationship */
  seats_aggregate: Seats_Aggregate;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** A license has many seats, which are taken by individual users */
export type LicensesAuto_Assign_DomainsArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

/** A license has many seats, which are taken by individual users */
export type LicensesAuto_Assign_Domains_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

/** A license has many seats, which are taken by individual users */
export type LicensesLicense_SeatsArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

/** A license has many seats, which are taken by individual users */
export type LicensesLicense_Seats_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

/** A license has many seats, which are taken by individual users */
export type LicensesSeatsArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

/** A license has many seats, which are taken by individual users */
export type LicensesSeats_AggregateArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

/** aggregated selection of "licenses" */
export type Licenses_Aggregate = {
  __typename?: 'licenses_aggregate';
  aggregate?: Maybe<Licenses_Aggregate_Fields>;
  nodes: Array<Licenses>;
};

/** aggregate fields of "licenses" */
export type Licenses_Aggregate_Fields = {
  __typename?: 'licenses_aggregate_fields';
  avg?: Maybe<Licenses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Licenses_Max_Fields>;
  min?: Maybe<Licenses_Min_Fields>;
  stddev?: Maybe<Licenses_Stddev_Fields>;
  stddev_pop?: Maybe<Licenses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Licenses_Stddev_Samp_Fields>;
  sum?: Maybe<Licenses_Sum_Fields>;
  var_pop?: Maybe<Licenses_Var_Pop_Fields>;
  var_samp?: Maybe<Licenses_Var_Samp_Fields>;
  variance?: Maybe<Licenses_Variance_Fields>;
};

/** aggregate fields of "licenses" */
export type Licenses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Licenses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "licenses" */
export type Licenses_Aggregate_Order_By = {
  avg?: Maybe<Licenses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Licenses_Max_Order_By>;
  min?: Maybe<Licenses_Min_Order_By>;
  stddev?: Maybe<Licenses_Stddev_Order_By>;
  stddev_pop?: Maybe<Licenses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Licenses_Stddev_Samp_Order_By>;
  sum?: Maybe<Licenses_Sum_Order_By>;
  var_pop?: Maybe<Licenses_Var_Pop_Order_By>;
  var_samp?: Maybe<Licenses_Var_Samp_Order_By>;
  variance?: Maybe<Licenses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "licenses" */
export type Licenses_Arr_Rel_Insert_Input = {
  data: Array<Licenses_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Licenses_On_Conflict>;
};

/** aggregate avg on columns */
export type Licenses_Avg_Fields = {
  __typename?: 'licenses_avg_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "licenses" */
export type Licenses_Avg_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "licenses". All fields are combined with a logical 'AND'. */
export type Licenses_Bool_Exp = {
  _and?: Maybe<Array<Licenses_Bool_Exp>>;
  _not?: Maybe<Licenses_Bool_Exp>;
  _or?: Maybe<Array<Licenses_Bool_Exp>>;
  auto_assign_domains?: Maybe<Auto_Assign_Domains_Bool_Exp>;
  chargebee_customer_id?: Maybe<String_Comparison_Exp>;
  chargebee_subscription_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_migration_tier?: Maybe<License_Seat_Tiers_Enum_Comparison_Exp>;
  legacy_license_id?: Maybe<String_Comparison_Exp>;
  license_seats?: Maybe<License_Seats_Bool_Exp>;
  max_pro_member_seats?: Maybe<Int_Comparison_Exp>;
  max_pro_restricted_seats?: Maybe<Int_Comparison_Exp>;
  max_standard_member_seats?: Maybe<Int_Comparison_Exp>;
  max_standard_restricted_seats?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_owner?: Maybe<Organization_Owners_Bool_Exp>;
  organization_uuid?: Maybe<Uuid_Comparison_Exp>;
  seats?: Maybe<Seats_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "licenses" */
export enum Licenses_Constraint {
  /** unique or primary key constraint */
  LicensesChargebeeCustomerIdKey = 'licenses_chargebee_customer_id_key',
  /** unique or primary key constraint */
  LicensesChargebeeSubscriptionIdKey = 'licenses_chargebee_subscription_id_key',
  /** unique or primary key constraint */
  LicensesLegacyLicenseIdKey = 'licenses_legacy_license_id_key',
  /** unique or primary key constraint */
  LicensesPkey = 'licenses_pkey',
}

/** input type for incrementing numeric columns in table "licenses" */
export type Licenses_Inc_Input = {
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "licenses" */
export type Licenses_Insert_Input = {
  auto_assign_domains?: Maybe<Auto_Assign_Domains_Arr_Rel_Insert_Input>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<License_Seat_Tiers_Enum>;
  legacy_license_id?: Maybe<Scalars['String']>;
  license_seats?: Maybe<License_Seats_Arr_Rel_Insert_Input>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organization_owner?: Maybe<Organization_Owners_Obj_Rel_Insert_Input>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  seats?: Maybe<Seats_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Licenses_Max_Fields = {
  __typename?: 'licenses_max_fields';
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "licenses" */
export type Licenses_Max_Order_By = {
  chargebee_customer_id?: Maybe<Order_By>;
  chargebee_subscription_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  legacy_license_id?: Maybe<Order_By>;
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
  organization_uuid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Licenses_Min_Fields = {
  __typename?: 'licenses_min_fields';
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "licenses" */
export type Licenses_Min_Order_By = {
  chargebee_customer_id?: Maybe<Order_By>;
  chargebee_subscription_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  legacy_license_id?: Maybe<Order_By>;
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
  organization_uuid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "licenses" */
export type Licenses_Mutation_Response = {
  __typename?: 'licenses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Licenses>;
};

/** input type for inserting object relation for remote table "licenses" */
export type Licenses_Obj_Rel_Insert_Input = {
  data: Licenses_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Licenses_On_Conflict>;
};

/** on_conflict condition type for table "licenses" */
export type Licenses_On_Conflict = {
  constraint: Licenses_Constraint;
  update_columns?: Array<Licenses_Update_Column>;
  where?: Maybe<Licenses_Bool_Exp>;
};

/** Ordering options when selecting data from "licenses". */
export type Licenses_Order_By = {
  auto_assign_domains_aggregate?: Maybe<Auto_Assign_Domains_Aggregate_Order_By>;
  chargebee_customer_id?: Maybe<Order_By>;
  chargebee_subscription_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_migration_tier?: Maybe<Order_By>;
  legacy_license_id?: Maybe<Order_By>;
  license_seats_aggregate?: Maybe<License_Seats_Aggregate_Order_By>;
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_owner?: Maybe<Organization_Owners_Order_By>;
  organization_uuid?: Maybe<Order_By>;
  seats_aggregate?: Maybe<Seats_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: licenses */
export type Licenses_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "licenses" */
export enum Licenses_Select_Column {
  /** column name */
  ChargebeeCustomerId = 'chargebee_customer_id',
  /** column name */
  ChargebeeSubscriptionId = 'chargebee_subscription_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultMigrationTier = 'default_migration_tier',
  /** column name */
  LegacyLicenseId = 'legacy_license_id',
  /** column name */
  MaxProMemberSeats = 'max_pro_member_seats',
  /** column name */
  MaxProRestrictedSeats = 'max_pro_restricted_seats',
  /** column name */
  MaxStandardMemberSeats = 'max_standard_member_seats',
  /** column name */
  MaxStandardRestrictedSeats = 'max_standard_restricted_seats',
  /** column name */
  OrganizationUuid = 'organization_uuid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "licenses" */
export type Licenses_Set_Input = {
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<License_Seat_Tiers_Enum>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Licenses_Stddev_Fields = {
  __typename?: 'licenses_stddev_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "licenses" */
export type Licenses_Stddev_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Licenses_Stddev_Pop_Fields = {
  __typename?: 'licenses_stddev_pop_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "licenses" */
export type Licenses_Stddev_Pop_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Licenses_Stddev_Samp_Fields = {
  __typename?: 'licenses_stddev_samp_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "licenses" */
export type Licenses_Stddev_Samp_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Licenses_Sum_Fields = {
  __typename?: 'licenses_sum_fields';
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "licenses" */
export type Licenses_Sum_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** update columns of table "licenses" */
export enum Licenses_Update_Column {
  /** column name */
  ChargebeeCustomerId = 'chargebee_customer_id',
  /** column name */
  ChargebeeSubscriptionId = 'chargebee_subscription_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultMigrationTier = 'default_migration_tier',
  /** column name */
  LegacyLicenseId = 'legacy_license_id',
  /** column name */
  MaxProMemberSeats = 'max_pro_member_seats',
  /** column name */
  MaxProRestrictedSeats = 'max_pro_restricted_seats',
  /** column name */
  MaxStandardMemberSeats = 'max_standard_member_seats',
  /** column name */
  MaxStandardRestrictedSeats = 'max_standard_restricted_seats',
  /** column name */
  OrganizationUuid = 'organization_uuid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** aggregate var_pop on columns */
export type Licenses_Var_Pop_Fields = {
  __typename?: 'licenses_var_pop_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "licenses" */
export type Licenses_Var_Pop_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Licenses_Var_Samp_Fields = {
  __typename?: 'licenses_var_samp_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "licenses" */
export type Licenses_Var_Samp_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Licenses_Variance_Fields = {
  __typename?: 'licenses_variance_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "licenses" */
export type Licenses_Variance_Order_By = {
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
};

/** Enum table for replication jobs as part of the billing migration */
export type Migration_Sync_Jobs = {
  __typename?: 'migration_sync_jobs';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "migration.sync_jobs" */
export type Migration_Sync_Jobs_Aggregate = {
  __typename?: 'migration_sync_jobs_aggregate';
  aggregate?: Maybe<Migration_Sync_Jobs_Aggregate_Fields>;
  nodes: Array<Migration_Sync_Jobs>;
};

/** aggregate fields of "migration.sync_jobs" */
export type Migration_Sync_Jobs_Aggregate_Fields = {
  __typename?: 'migration_sync_jobs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Migration_Sync_Jobs_Max_Fields>;
  min?: Maybe<Migration_Sync_Jobs_Min_Fields>;
};

/** aggregate fields of "migration.sync_jobs" */
export type Migration_Sync_Jobs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Migration_Sync_Jobs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "migration.sync_jobs". All fields are combined with a logical 'AND'. */
export type Migration_Sync_Jobs_Bool_Exp = {
  _and?: Maybe<Array<Migration_Sync_Jobs_Bool_Exp>>;
  _not?: Maybe<Migration_Sync_Jobs_Bool_Exp>;
  _or?: Maybe<Array<Migration_Sync_Jobs_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "migration.sync_jobs" */
export enum Migration_Sync_Jobs_Constraint {
  /** unique or primary key constraint */
  SyncJobsPkey = 'sync_jobs_pkey',
}

export enum Migration_Sync_Jobs_Enum {
  /** Sync auto assign domains */
  AutoAssignDomains = 'AUTO_ASSIGN_DOMAINS',
  /** Tracking progress of chargebee API sync */
  ChargebeeSync = 'CHARGEBEE_SYNC',
  /** Sync survey corporate responses */
  CorporateResponses = 'CORPORATE_RESPONSES',
  /** Sync datastore.UserAccounts to public.users */
  DsUserAccountToUsers = 'DS_USER_ACCOUNT_TO_USERS',
  /** Sync raw data to public.licenses */
  LicensesWithNullCustomerId = 'LICENSES_WITH_NULL_CUSTOMER_ID',
  /** Sync raw data to public.licenses */
  Seats = 'SEATS',
  /** Sync auto assign domains */
  SeatsWithNullCustomerId = 'SEATS_WITH_NULL_CUSTOMER_ID',
  /** Sync survey responses */
  SurveyResponses = 'SURVEY_RESPONSES',
}

/** Boolean expression to compare columns of type "migration_sync_jobs_enum". All fields are combined with logical 'AND'. */
export type Migration_Sync_Jobs_Enum_Comparison_Exp = {
  _eq?: Maybe<Migration_Sync_Jobs_Enum>;
  _in?: Maybe<Array<Migration_Sync_Jobs_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Migration_Sync_Jobs_Enum>;
  _nin?: Maybe<Array<Migration_Sync_Jobs_Enum>>;
};

/** input type for inserting data into table "migration.sync_jobs" */
export type Migration_Sync_Jobs_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Migration_Sync_Jobs_Max_Fields = {
  __typename?: 'migration_sync_jobs_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Migration_Sync_Jobs_Min_Fields = {
  __typename?: 'migration_sync_jobs_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "migration.sync_jobs" */
export type Migration_Sync_Jobs_Mutation_Response = {
  __typename?: 'migration_sync_jobs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Migration_Sync_Jobs>;
};

/** on_conflict condition type for table "migration.sync_jobs" */
export type Migration_Sync_Jobs_On_Conflict = {
  constraint: Migration_Sync_Jobs_Constraint;
  update_columns?: Array<Migration_Sync_Jobs_Update_Column>;
  where?: Maybe<Migration_Sync_Jobs_Bool_Exp>;
};

/** Ordering options when selecting data from "migration.sync_jobs". */
export type Migration_Sync_Jobs_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: migration_sync_jobs */
export type Migration_Sync_Jobs_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "migration.sync_jobs" */
export enum Migration_Sync_Jobs_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "migration.sync_jobs" */
export type Migration_Sync_Jobs_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "migration.sync_jobs" */
export enum Migration_Sync_Jobs_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** columns and relationships of "migration.sync_status" */
export type Migration_Sync_Status = {
  __typename?: 'migration_sync_status';
  most_recent_update: Scalars['timestamptz'];
  sync_job: Migration_Sync_Jobs_Enum;
};

/** aggregated selection of "migration.sync_status" */
export type Migration_Sync_Status_Aggregate = {
  __typename?: 'migration_sync_status_aggregate';
  aggregate?: Maybe<Migration_Sync_Status_Aggregate_Fields>;
  nodes: Array<Migration_Sync_Status>;
};

/** aggregate fields of "migration.sync_status" */
export type Migration_Sync_Status_Aggregate_Fields = {
  __typename?: 'migration_sync_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Migration_Sync_Status_Max_Fields>;
  min?: Maybe<Migration_Sync_Status_Min_Fields>;
};

/** aggregate fields of "migration.sync_status" */
export type Migration_Sync_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Migration_Sync_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "migration.sync_status". All fields are combined with a logical 'AND'. */
export type Migration_Sync_Status_Bool_Exp = {
  _and?: Maybe<Array<Migration_Sync_Status_Bool_Exp>>;
  _not?: Maybe<Migration_Sync_Status_Bool_Exp>;
  _or?: Maybe<Array<Migration_Sync_Status_Bool_Exp>>;
  most_recent_update?: Maybe<Timestamptz_Comparison_Exp>;
  sync_job?: Maybe<Migration_Sync_Jobs_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "migration.sync_status" */
export enum Migration_Sync_Status_Constraint {
  /** unique or primary key constraint */
  SyncStatusPkey = 'sync_status_pkey',
}

/** input type for inserting data into table "migration.sync_status" */
export type Migration_Sync_Status_Insert_Input = {
  most_recent_update?: Maybe<Scalars['timestamptz']>;
  sync_job?: Maybe<Migration_Sync_Jobs_Enum>;
};

/** aggregate max on columns */
export type Migration_Sync_Status_Max_Fields = {
  __typename?: 'migration_sync_status_max_fields';
  most_recent_update?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Migration_Sync_Status_Min_Fields = {
  __typename?: 'migration_sync_status_min_fields';
  most_recent_update?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "migration.sync_status" */
export type Migration_Sync_Status_Mutation_Response = {
  __typename?: 'migration_sync_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Migration_Sync_Status>;
};

/** on_conflict condition type for table "migration.sync_status" */
export type Migration_Sync_Status_On_Conflict = {
  constraint: Migration_Sync_Status_Constraint;
  update_columns?: Array<Migration_Sync_Status_Update_Column>;
  where?: Maybe<Migration_Sync_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "migration.sync_status". */
export type Migration_Sync_Status_Order_By = {
  most_recent_update?: Maybe<Order_By>;
  sync_job?: Maybe<Order_By>;
};

/** primary key columns input for table: migration_sync_status */
export type Migration_Sync_Status_Pk_Columns_Input = {
  sync_job: Migration_Sync_Jobs_Enum;
};

/** select columns of table "migration.sync_status" */
export enum Migration_Sync_Status_Select_Column {
  /** column name */
  MostRecentUpdate = 'most_recent_update',
  /** column name */
  SyncJob = 'sync_job',
}

/** input type for updating data in table "migration.sync_status" */
export type Migration_Sync_Status_Set_Input = {
  most_recent_update?: Maybe<Scalars['timestamptz']>;
  sync_job?: Maybe<Migration_Sync_Jobs_Enum>;
};

/** update columns of table "migration.sync_status" */
export enum Migration_Sync_Status_Update_Column {
  /** column name */
  MostRecentUpdate = 'most_recent_update',
  /** column name */
  SyncJob = 'sync_job',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth_providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth_providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth_user_roles" */
  delete_auth_user_roles?: Maybe<Auth_User_Roles_Mutation_Response>;
  /** delete single row from the table: "auth_user_roles" */
  delete_auth_user_roles_by_pk?: Maybe<Auth_User_Roles>;
  /** delete data from the table: "auto_assign_domains" */
  delete_auto_assign_domains?: Maybe<Auto_Assign_Domains_Mutation_Response>;
  /** delete single row from the table: "auto_assign_domains" */
  delete_auto_assign_domains_by_pk?: Maybe<Auto_Assign_Domains>;
  /** delete data from the table: "canceled_licenses" */
  delete_canceled_licenses?: Maybe<Canceled_Licenses_Mutation_Response>;
  /** delete single row from the table: "canceled_licenses" */
  delete_canceled_licenses_by_pk?: Maybe<Canceled_Licenses>;
  /** delete data from the table: "feature_flags" */
  delete_feature_flags?: Maybe<Feature_Flags_Mutation_Response>;
  /** delete single row from the table: "feature_flags" */
  delete_feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** delete data from the table: "invalid_seats" */
  delete_invalid_seats?: Maybe<Invalid_Seats_Mutation_Response>;
  /** delete single row from the table: "invalid_seats" */
  delete_invalid_seats_by_pk?: Maybe<Invalid_Seats>;
  /** delete data from the table: "invalid_seats_reason" */
  delete_invalid_seats_reason?: Maybe<Invalid_Seats_Reason_Mutation_Response>;
  /** delete single row from the table: "invalid_seats_reason" */
  delete_invalid_seats_reason_by_pk?: Maybe<Invalid_Seats_Reason>;
  /** delete data from the table: "license_seat_roles" */
  delete_license_seat_roles?: Maybe<License_Seat_Roles_Mutation_Response>;
  /** delete single row from the table: "license_seat_roles" */
  delete_license_seat_roles_by_pk?: Maybe<License_Seat_Roles>;
  /** delete data from the table: "license_seat_tiers" */
  delete_license_seat_tiers?: Maybe<License_Seat_Tiers_Mutation_Response>;
  /** delete single row from the table: "license_seat_tiers" */
  delete_license_seat_tiers_by_pk?: Maybe<License_Seat_Tiers>;
  /** delete data from the table: "licenses" */
  delete_licenses?: Maybe<Licenses_Mutation_Response>;
  /** delete single row from the table: "licenses" */
  delete_licenses_by_pk?: Maybe<Licenses>;
  /** delete data from the table: "migration.sync_jobs" */
  delete_migration_sync_jobs?: Maybe<Migration_Sync_Jobs_Mutation_Response>;
  /** delete single row from the table: "migration.sync_jobs" */
  delete_migration_sync_jobs_by_pk?: Maybe<Migration_Sync_Jobs>;
  /** delete data from the table: "migration.sync_status" */
  delete_migration_sync_status?: Maybe<Migration_Sync_Status_Mutation_Response>;
  /** delete single row from the table: "migration.sync_status" */
  delete_migration_sync_status_by_pk?: Maybe<Migration_Sync_Status>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "owned_licenses" */
  delete_owned_licenses?: Maybe<Owned_Licenses_Mutation_Response>;
  /** delete data from the table: "project_view_permissions" */
  delete_project_view_permissions?: Maybe<Project_View_Permissions_Mutation_Response>;
  /** delete single row from the table: "project_view_permissions" */
  delete_project_view_permissions_by_pk?: Maybe<Project_View_Permissions>;
  /** delete data from the table: "project_view_permissions_types" */
  delete_project_view_permissions_types?: Maybe<Project_View_Permissions_Types_Mutation_Response>;
  /** delete single row from the table: "project_view_permissions_types" */
  delete_project_view_permissions_types_by_pk?: Maybe<Project_View_Permissions_Types>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "published_projects" */
  delete_published_projects?: Maybe<Published_Projects_Mutation_Response>;
  /** delete data from the table: "published_video_sources" */
  delete_published_video_sources?: Maybe<Published_Video_Sources_Mutation_Response>;
  /** delete data from the table: "refresh_tokens" */
  delete_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "refresh_tokens" */
  delete_refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** delete data from the table: "render_types" */
  delete_render_types?: Maybe<Render_Types_Mutation_Response>;
  /** delete single row from the table: "render_types" */
  delete_render_types_by_pk?: Maybe<Render_Types>;
  /** delete data from the table: "renders" */
  delete_renders?: Maybe<Renders_Mutation_Response>;
  /** delete single row from the table: "renders" */
  delete_renders_by_pk?: Maybe<Renders>;
  /** delete data from the table: "seats" */
  delete_seats?: Maybe<Seats_Mutation_Response>;
  /** delete single row from the table: "seats" */
  delete_seats_by_pk?: Maybe<Seats>;
  /** delete data from the table: "simple_export_tasks" */
  delete_simple_export_tasks?: Maybe<Simple_Export_Tasks_Mutation_Response>;
  /** delete single row from the table: "simple_export_tasks" */
  delete_simple_export_tasks_by_pk?: Maybe<Simple_Export_Tasks>;
  /** delete data from the table: "survey.admin_types" */
  delete_survey_admin_types?: Maybe<Survey_Admin_Types_Mutation_Response>;
  /** delete single row from the table: "survey.admin_types" */
  delete_survey_admin_types_by_pk?: Maybe<Survey_Admin_Types>;
  /** delete data from the table: "survey.corporate_responses" */
  delete_survey_corporate_responses?: Maybe<Survey_Corporate_Responses_Mutation_Response>;
  /** delete single row from the table: "survey.corporate_responses" */
  delete_survey_corporate_responses_by_pk?: Maybe<Survey_Corporate_Responses>;
  /** delete data from the table: "survey.corporate_types" */
  delete_survey_corporate_types?: Maybe<Survey_Corporate_Types_Mutation_Response>;
  /** delete single row from the table: "survey.corporate_types" */
  delete_survey_corporate_types_by_pk?: Maybe<Survey_Corporate_Types>;
  /** delete data from the table: "survey.educator_types" */
  delete_survey_educator_types?: Maybe<Survey_Educator_Types_Mutation_Response>;
  /** delete single row from the table: "survey.educator_types" */
  delete_survey_educator_types_by_pk?: Maybe<Survey_Educator_Types>;
  /** delete data from the table: "survey.other_types" */
  delete_survey_other_types?: Maybe<Survey_Other_Types_Mutation_Response>;
  /** delete single row from the table: "survey.other_types" */
  delete_survey_other_types_by_pk?: Maybe<Survey_Other_Types>;
  /** delete data from the table: "survey.survey_responses" */
  delete_survey_survey_responses?: Maybe<Survey_Survey_Responses_Mutation_Response>;
  /** delete single row from the table: "survey.survey_responses" */
  delete_survey_survey_responses_by_pk?: Maybe<Survey_Survey_Responses>;
  /** delete data from the table: "survey.user_types" */
  delete_survey_user_types?: Maybe<Survey_User_Types_Mutation_Response>;
  /** delete single row from the table: "survey.user_types" */
  delete_survey_user_types_by_pk?: Maybe<Survey_User_Types>;
  /** delete data from the table: "user_settings" */
  delete_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** delete single row from the table: "user_settings" */
  delete_user_settings_by_pk?: Maybe<User_Settings>;
  /** delete data from the table: "user_settings_names" */
  delete_user_settings_names?: Maybe<User_Settings_Names_Mutation_Response>;
  /** delete single row from the table: "user_settings_names" */
  delete_user_settings_names_by_pk?: Maybe<User_Settings_Names>;
  /** delete data from the table: "user_settings_values" */
  delete_user_settings_values?: Maybe<User_Settings_Values_Mutation_Response>;
  /** delete single row from the table: "user_settings_values" */
  delete_user_settings_values_by_pk?: Maybe<User_Settings_Values>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "video_sources" */
  delete_video_sources?: Maybe<Video_Sources_Mutation_Response>;
  /** delete single row from the table: "video_sources" */
  delete_video_sources_by_pk?: Maybe<Video_Sources>;
  /** delete data from the table: "video_upload_strategies" */
  delete_video_upload_strategies?: Maybe<Video_Upload_Strategies_Mutation_Response>;
  /** delete single row from the table: "video_upload_strategies" */
  delete_video_upload_strategies_by_pk?: Maybe<Video_Upload_Strategies>;
  /** delete data from the table: "viewer_analytics" */
  delete_viewer_analytics?: Maybe<Viewer_Analytics_Mutation_Response>;
  /** delete single row from the table: "viewer_analytics" */
  delete_viewer_analytics_by_pk?: Maybe<Viewer_Analytics>;
  /** insert data into the table: "auth_providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth_providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth_user_roles" */
  insert_auth_user_roles?: Maybe<Auth_User_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth_user_roles" */
  insert_auth_user_roles_one?: Maybe<Auth_User_Roles>;
  /** insert data into the table: "auto_assign_domains" */
  insert_auto_assign_domains?: Maybe<Auto_Assign_Domains_Mutation_Response>;
  /** insert a single row into the table: "auto_assign_domains" */
  insert_auto_assign_domains_one?: Maybe<Auto_Assign_Domains>;
  /** insert data into the table: "canceled_licenses" */
  insert_canceled_licenses?: Maybe<Canceled_Licenses_Mutation_Response>;
  /** insert a single row into the table: "canceled_licenses" */
  insert_canceled_licenses_one?: Maybe<Canceled_Licenses>;
  /** insert data into the table: "feature_flags" */
  insert_feature_flags?: Maybe<Feature_Flags_Mutation_Response>;
  /** insert a single row into the table: "feature_flags" */
  insert_feature_flags_one?: Maybe<Feature_Flags>;
  /** insert data into the table: "invalid_seats" */
  insert_invalid_seats?: Maybe<Invalid_Seats_Mutation_Response>;
  /** insert a single row into the table: "invalid_seats" */
  insert_invalid_seats_one?: Maybe<Invalid_Seats>;
  /** insert data into the table: "invalid_seats_reason" */
  insert_invalid_seats_reason?: Maybe<Invalid_Seats_Reason_Mutation_Response>;
  /** insert a single row into the table: "invalid_seats_reason" */
  insert_invalid_seats_reason_one?: Maybe<Invalid_Seats_Reason>;
  /** insert data into the table: "license_seat_roles" */
  insert_license_seat_roles?: Maybe<License_Seat_Roles_Mutation_Response>;
  /** insert a single row into the table: "license_seat_roles" */
  insert_license_seat_roles_one?: Maybe<License_Seat_Roles>;
  /** insert data into the table: "license_seat_tiers" */
  insert_license_seat_tiers?: Maybe<License_Seat_Tiers_Mutation_Response>;
  /** insert a single row into the table: "license_seat_tiers" */
  insert_license_seat_tiers_one?: Maybe<License_Seat_Tiers>;
  /** insert data into the table: "licenses" */
  insert_licenses?: Maybe<Licenses_Mutation_Response>;
  /** insert a single row into the table: "licenses" */
  insert_licenses_one?: Maybe<Licenses>;
  /** insert data into the table: "migration.sync_jobs" */
  insert_migration_sync_jobs?: Maybe<Migration_Sync_Jobs_Mutation_Response>;
  /** insert a single row into the table: "migration.sync_jobs" */
  insert_migration_sync_jobs_one?: Maybe<Migration_Sync_Jobs>;
  /** insert data into the table: "migration.sync_status" */
  insert_migration_sync_status?: Maybe<Migration_Sync_Status_Mutation_Response>;
  /** insert a single row into the table: "migration.sync_status" */
  insert_migration_sync_status_one?: Maybe<Migration_Sync_Status>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "owned_licenses" */
  insert_owned_licenses?: Maybe<Owned_Licenses_Mutation_Response>;
  /** insert a single row into the table: "owned_licenses" */
  insert_owned_licenses_one?: Maybe<Owned_Licenses>;
  /** insert data into the table: "project_view_permissions" */
  insert_project_view_permissions?: Maybe<Project_View_Permissions_Mutation_Response>;
  /** insert a single row into the table: "project_view_permissions" */
  insert_project_view_permissions_one?: Maybe<Project_View_Permissions>;
  /** insert data into the table: "project_view_permissions_types" */
  insert_project_view_permissions_types?: Maybe<Project_View_Permissions_Types_Mutation_Response>;
  /** insert a single row into the table: "project_view_permissions_types" */
  insert_project_view_permissions_types_one?: Maybe<Project_View_Permissions_Types>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "published_projects" */
  insert_published_projects?: Maybe<Published_Projects_Mutation_Response>;
  /** insert a single row into the table: "published_projects" */
  insert_published_projects_one?: Maybe<Published_Projects>;
  /** insert data into the table: "published_video_sources" */
  insert_published_video_sources?: Maybe<Published_Video_Sources_Mutation_Response>;
  /** insert a single row into the table: "published_video_sources" */
  insert_published_video_sources_one?: Maybe<Published_Video_Sources>;
  /** insert data into the table: "refresh_tokens" */
  insert_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "refresh_tokens" */
  insert_refresh_tokens_one?: Maybe<Refresh_Tokens>;
  /** insert data into the table: "render_types" */
  insert_render_types?: Maybe<Render_Types_Mutation_Response>;
  /** insert a single row into the table: "render_types" */
  insert_render_types_one?: Maybe<Render_Types>;
  /** insert data into the table: "renders" */
  insert_renders?: Maybe<Renders_Mutation_Response>;
  /** insert a single row into the table: "renders" */
  insert_renders_one?: Maybe<Renders>;
  /** insert data into the table: "seats" */
  insert_seats?: Maybe<Seats_Mutation_Response>;
  /** insert a single row into the table: "seats" */
  insert_seats_one?: Maybe<Seats>;
  /** insert data into the table: "simple_export_tasks" */
  insert_simple_export_tasks?: Maybe<Simple_Export_Tasks_Mutation_Response>;
  /** insert a single row into the table: "simple_export_tasks" */
  insert_simple_export_tasks_one?: Maybe<Simple_Export_Tasks>;
  /** insert data into the table: "survey.admin_types" */
  insert_survey_admin_types?: Maybe<Survey_Admin_Types_Mutation_Response>;
  /** insert a single row into the table: "survey.admin_types" */
  insert_survey_admin_types_one?: Maybe<Survey_Admin_Types>;
  /** insert data into the table: "survey.corporate_responses" */
  insert_survey_corporate_responses?: Maybe<Survey_Corporate_Responses_Mutation_Response>;
  /** insert a single row into the table: "survey.corporate_responses" */
  insert_survey_corporate_responses_one?: Maybe<Survey_Corporate_Responses>;
  /** insert data into the table: "survey.corporate_types" */
  insert_survey_corporate_types?: Maybe<Survey_Corporate_Types_Mutation_Response>;
  /** insert a single row into the table: "survey.corporate_types" */
  insert_survey_corporate_types_one?: Maybe<Survey_Corporate_Types>;
  /** insert data into the table: "survey.educator_types" */
  insert_survey_educator_types?: Maybe<Survey_Educator_Types_Mutation_Response>;
  /** insert a single row into the table: "survey.educator_types" */
  insert_survey_educator_types_one?: Maybe<Survey_Educator_Types>;
  /** insert data into the table: "survey.other_types" */
  insert_survey_other_types?: Maybe<Survey_Other_Types_Mutation_Response>;
  /** insert a single row into the table: "survey.other_types" */
  insert_survey_other_types_one?: Maybe<Survey_Other_Types>;
  /** insert data into the table: "survey.survey_responses" */
  insert_survey_survey_responses?: Maybe<Survey_Survey_Responses_Mutation_Response>;
  /** insert a single row into the table: "survey.survey_responses" */
  insert_survey_survey_responses_one?: Maybe<Survey_Survey_Responses>;
  /** insert data into the table: "survey.user_types" */
  insert_survey_user_types?: Maybe<Survey_User_Types_Mutation_Response>;
  /** insert a single row into the table: "survey.user_types" */
  insert_survey_user_types_one?: Maybe<Survey_User_Types>;
  /** insert data into the table: "user_settings" */
  insert_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** insert data into the table: "user_settings_names" */
  insert_user_settings_names?: Maybe<User_Settings_Names_Mutation_Response>;
  /** insert a single row into the table: "user_settings_names" */
  insert_user_settings_names_one?: Maybe<User_Settings_Names>;
  /** insert a single row into the table: "user_settings" */
  insert_user_settings_one?: Maybe<User_Settings>;
  /** insert data into the table: "user_settings_values" */
  insert_user_settings_values?: Maybe<User_Settings_Values_Mutation_Response>;
  /** insert a single row into the table: "user_settings_values" */
  insert_user_settings_values_one?: Maybe<User_Settings_Values>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "video_sources" */
  insert_video_sources?: Maybe<Video_Sources_Mutation_Response>;
  /** insert a single row into the table: "video_sources" */
  insert_video_sources_one?: Maybe<Video_Sources>;
  /** insert data into the table: "video_upload_strategies" */
  insert_video_upload_strategies?: Maybe<Video_Upload_Strategies_Mutation_Response>;
  /** insert a single row into the table: "video_upload_strategies" */
  insert_video_upload_strategies_one?: Maybe<Video_Upload_Strategies>;
  /** insert data into the table: "viewer_analytics" */
  insert_viewer_analytics?: Maybe<Viewer_Analytics_Mutation_Response>;
  /** insert a single row into the table: "viewer_analytics" */
  insert_viewer_analytics_one?: Maybe<Viewer_Analytics>;
  /** update data of the table: "auth_providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth_providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth_user_roles" */
  update_auth_user_roles?: Maybe<Auth_User_Roles_Mutation_Response>;
  /** update single row of the table: "auth_user_roles" */
  update_auth_user_roles_by_pk?: Maybe<Auth_User_Roles>;
  /** update data of the table: "auto_assign_domains" */
  update_auto_assign_domains?: Maybe<Auto_Assign_Domains_Mutation_Response>;
  /** update single row of the table: "auto_assign_domains" */
  update_auto_assign_domains_by_pk?: Maybe<Auto_Assign_Domains>;
  /** update data of the table: "canceled_licenses" */
  update_canceled_licenses?: Maybe<Canceled_Licenses_Mutation_Response>;
  /** update single row of the table: "canceled_licenses" */
  update_canceled_licenses_by_pk?: Maybe<Canceled_Licenses>;
  /** update data of the table: "feature_flags" */
  update_feature_flags?: Maybe<Feature_Flags_Mutation_Response>;
  /** update single row of the table: "feature_flags" */
  update_feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** update data of the table: "invalid_seats" */
  update_invalid_seats?: Maybe<Invalid_Seats_Mutation_Response>;
  /** update single row of the table: "invalid_seats" */
  update_invalid_seats_by_pk?: Maybe<Invalid_Seats>;
  /** update data of the table: "invalid_seats_reason" */
  update_invalid_seats_reason?: Maybe<Invalid_Seats_Reason_Mutation_Response>;
  /** update single row of the table: "invalid_seats_reason" */
  update_invalid_seats_reason_by_pk?: Maybe<Invalid_Seats_Reason>;
  /** update data of the table: "license_seat_roles" */
  update_license_seat_roles?: Maybe<License_Seat_Roles_Mutation_Response>;
  /** update single row of the table: "license_seat_roles" */
  update_license_seat_roles_by_pk?: Maybe<License_Seat_Roles>;
  /** update data of the table: "license_seat_tiers" */
  update_license_seat_tiers?: Maybe<License_Seat_Tiers_Mutation_Response>;
  /** update single row of the table: "license_seat_tiers" */
  update_license_seat_tiers_by_pk?: Maybe<License_Seat_Tiers>;
  /** update data of the table: "licenses" */
  update_licenses?: Maybe<Licenses_Mutation_Response>;
  /** update single row of the table: "licenses" */
  update_licenses_by_pk?: Maybe<Licenses>;
  /** update data of the table: "migration.sync_jobs" */
  update_migration_sync_jobs?: Maybe<Migration_Sync_Jobs_Mutation_Response>;
  /** update single row of the table: "migration.sync_jobs" */
  update_migration_sync_jobs_by_pk?: Maybe<Migration_Sync_Jobs>;
  /** update data of the table: "migration.sync_status" */
  update_migration_sync_status?: Maybe<Migration_Sync_Status_Mutation_Response>;
  /** update single row of the table: "migration.sync_status" */
  update_migration_sync_status_by_pk?: Maybe<Migration_Sync_Status>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update data of the table: "owned_licenses" */
  update_owned_licenses?: Maybe<Owned_Licenses_Mutation_Response>;
  /** update data of the table: "project_view_permissions" */
  update_project_view_permissions?: Maybe<Project_View_Permissions_Mutation_Response>;
  /** update single row of the table: "project_view_permissions" */
  update_project_view_permissions_by_pk?: Maybe<Project_View_Permissions>;
  /** update data of the table: "project_view_permissions_types" */
  update_project_view_permissions_types?: Maybe<Project_View_Permissions_Types_Mutation_Response>;
  /** update single row of the table: "project_view_permissions_types" */
  update_project_view_permissions_types_by_pk?: Maybe<Project_View_Permissions_Types>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update data of the table: "published_projects" */
  update_published_projects?: Maybe<Published_Projects_Mutation_Response>;
  /** update data of the table: "published_video_sources" */
  update_published_video_sources?: Maybe<Published_Video_Sources_Mutation_Response>;
  /** update data of the table: "refresh_tokens" */
  update_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "refresh_tokens" */
  update_refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** update data of the table: "render_types" */
  update_render_types?: Maybe<Render_Types_Mutation_Response>;
  /** update single row of the table: "render_types" */
  update_render_types_by_pk?: Maybe<Render_Types>;
  /** update data of the table: "renders" */
  update_renders?: Maybe<Renders_Mutation_Response>;
  /** update single row of the table: "renders" */
  update_renders_by_pk?: Maybe<Renders>;
  /** update data of the table: "seats" */
  update_seats?: Maybe<Seats_Mutation_Response>;
  /** update single row of the table: "seats" */
  update_seats_by_pk?: Maybe<Seats>;
  /** update data of the table: "simple_export_tasks" */
  update_simple_export_tasks?: Maybe<Simple_Export_Tasks_Mutation_Response>;
  /** update single row of the table: "simple_export_tasks" */
  update_simple_export_tasks_by_pk?: Maybe<Simple_Export_Tasks>;
  /** update data of the table: "survey.admin_types" */
  update_survey_admin_types?: Maybe<Survey_Admin_Types_Mutation_Response>;
  /** update single row of the table: "survey.admin_types" */
  update_survey_admin_types_by_pk?: Maybe<Survey_Admin_Types>;
  /** update data of the table: "survey.corporate_responses" */
  update_survey_corporate_responses?: Maybe<Survey_Corporate_Responses_Mutation_Response>;
  /** update single row of the table: "survey.corporate_responses" */
  update_survey_corporate_responses_by_pk?: Maybe<Survey_Corporate_Responses>;
  /** update data of the table: "survey.corporate_types" */
  update_survey_corporate_types?: Maybe<Survey_Corporate_Types_Mutation_Response>;
  /** update single row of the table: "survey.corporate_types" */
  update_survey_corporate_types_by_pk?: Maybe<Survey_Corporate_Types>;
  /** update data of the table: "survey.educator_types" */
  update_survey_educator_types?: Maybe<Survey_Educator_Types_Mutation_Response>;
  /** update single row of the table: "survey.educator_types" */
  update_survey_educator_types_by_pk?: Maybe<Survey_Educator_Types>;
  /** update data of the table: "survey.other_types" */
  update_survey_other_types?: Maybe<Survey_Other_Types_Mutation_Response>;
  /** update single row of the table: "survey.other_types" */
  update_survey_other_types_by_pk?: Maybe<Survey_Other_Types>;
  /** update data of the table: "survey.survey_responses" */
  update_survey_survey_responses?: Maybe<Survey_Survey_Responses_Mutation_Response>;
  /** update single row of the table: "survey.survey_responses" */
  update_survey_survey_responses_by_pk?: Maybe<Survey_Survey_Responses>;
  /** update data of the table: "survey.user_types" */
  update_survey_user_types?: Maybe<Survey_User_Types_Mutation_Response>;
  /** update single row of the table: "survey.user_types" */
  update_survey_user_types_by_pk?: Maybe<Survey_User_Types>;
  /** update data of the table: "user_settings" */
  update_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** update single row of the table: "user_settings" */
  update_user_settings_by_pk?: Maybe<User_Settings>;
  /** update data of the table: "user_settings_names" */
  update_user_settings_names?: Maybe<User_Settings_Names_Mutation_Response>;
  /** update single row of the table: "user_settings_names" */
  update_user_settings_names_by_pk?: Maybe<User_Settings_Names>;
  /** update data of the table: "user_settings_values" */
  update_user_settings_values?: Maybe<User_Settings_Values_Mutation_Response>;
  /** update single row of the table: "user_settings_values" */
  update_user_settings_values_by_pk?: Maybe<User_Settings_Values>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "video_sources" */
  update_video_sources?: Maybe<Video_Sources_Mutation_Response>;
  /** update single row of the table: "video_sources" */
  update_video_sources_by_pk?: Maybe<Video_Sources>;
  /** update data of the table: "video_upload_strategies" */
  update_video_upload_strategies?: Maybe<Video_Upload_Strategies_Mutation_Response>;
  /** update single row of the table: "video_upload_strategies" */
  update_video_upload_strategies_by_pk?: Maybe<Video_Upload_Strategies>;
  /** update data of the table: "viewer_analytics" */
  update_viewer_analytics?: Maybe<Viewer_Analytics_Mutation_Response>;
  /** update single row of the table: "viewer_analytics" */
  update_viewer_analytics_by_pk?: Maybe<Viewer_Analytics>;
};

/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Auth_User_RolesArgs = {
  where: Auth_User_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auth_User_Roles_By_PkArgs = {
  role: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Auto_Assign_DomainsArgs = {
  where: Auto_Assign_Domains_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auto_Assign_Domains_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Canceled_LicensesArgs = {
  where: Canceled_Licenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Canceled_Licenses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Feature_FlagsArgs = {
  where: Feature_Flags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Feature_Flags_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Invalid_SeatsArgs = {
  where: Invalid_Seats_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Invalid_Seats_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Invalid_Seats_ReasonArgs = {
  where: Invalid_Seats_Reason_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Invalid_Seats_Reason_By_PkArgs = {
  invalid_reason: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_License_Seat_RolesArgs = {
  where: License_Seat_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_License_Seat_Roles_By_PkArgs = {
  role: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_License_Seat_TiersArgs = {
  where: License_Seat_Tiers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_License_Seat_Tiers_By_PkArgs = {
  tier: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_LicensesArgs = {
  where: Licenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Licenses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Migration_Sync_JobsArgs = {
  where: Migration_Sync_Jobs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Migration_Sync_Jobs_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Migration_Sync_StatusArgs = {
  where: Migration_Sync_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Migration_Sync_Status_By_PkArgs = {
  sync_job: Migration_Sync_Jobs_Enum;
};

/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Owned_LicensesArgs = {
  where: Owned_Licenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_View_PermissionsArgs = {
  where: Project_View_Permissions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_View_Permissions_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Project_View_Permissions_TypesArgs = {
  where: Project_View_Permissions_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_View_Permissions_Types_By_PkArgs = {
  permission: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Published_ProjectsArgs = {
  where: Published_Projects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Published_Video_SourcesArgs = {
  where: Published_Video_Sources_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Refresh_TokensArgs = {
  where: Refresh_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Refresh_Tokens_By_PkArgs = {
  user_uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Render_TypesArgs = {
  where: Render_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Render_Types_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_RendersArgs = {
  where: Renders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Renders_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_SeatsArgs = {
  where: Seats_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Seats_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Simple_Export_TasksArgs = {
  where: Simple_Export_Tasks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Simple_Export_Tasks_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Survey_Admin_TypesArgs = {
  where: Survey_Admin_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Survey_Admin_Types_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Survey_Corporate_ResponsesArgs = {
  where: Survey_Corporate_Responses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Survey_Corporate_Responses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Survey_Corporate_TypesArgs = {
  where: Survey_Corporate_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Survey_Corporate_Types_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Survey_Educator_TypesArgs = {
  where: Survey_Educator_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Survey_Educator_Types_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Survey_Other_TypesArgs = {
  where: Survey_Other_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Survey_Other_Types_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Survey_Survey_ResponsesArgs = {
  where: Survey_Survey_Responses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Survey_Survey_Responses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Survey_User_TypesArgs = {
  where: Survey_User_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Survey_User_Types_By_PkArgs = {
  value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_User_SettingsArgs = {
  where: User_Settings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Settings_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_User_Settings_NamesArgs = {
  where: User_Settings_Names_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Settings_Names_By_PkArgs = {
  setting_name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_User_Settings_ValuesArgs = {
  where: User_Settings_Values_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Settings_Values_By_PkArgs = {
  setting_value: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Video_SourcesArgs = {
  where: Video_Sources_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Video_Sources_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Video_Upload_StrategiesArgs = {
  where: Video_Upload_Strategies_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Video_Upload_Strategies_By_PkArgs = {
  video_upload_strategy: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Viewer_AnalyticsArgs = {
  where: Viewer_Analytics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Viewer_Analytics_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_User_RolesArgs = {
  objects: Array<Auth_User_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_User_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_User_Roles_OneArgs = {
  object: Auth_User_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_User_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auto_Assign_DomainsArgs = {
  objects: Array<Auto_Assign_Domains_Insert_Input>;
  on_conflict?: Maybe<Auto_Assign_Domains_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auto_Assign_Domains_OneArgs = {
  object: Auto_Assign_Domains_Insert_Input;
  on_conflict?: Maybe<Auto_Assign_Domains_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Canceled_LicensesArgs = {
  objects: Array<Canceled_Licenses_Insert_Input>;
  on_conflict?: Maybe<Canceled_Licenses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Canceled_Licenses_OneArgs = {
  object: Canceled_Licenses_Insert_Input;
  on_conflict?: Maybe<Canceled_Licenses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Feature_FlagsArgs = {
  objects: Array<Feature_Flags_Insert_Input>;
  on_conflict?: Maybe<Feature_Flags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Feature_Flags_OneArgs = {
  object: Feature_Flags_Insert_Input;
  on_conflict?: Maybe<Feature_Flags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Invalid_SeatsArgs = {
  objects: Array<Invalid_Seats_Insert_Input>;
  on_conflict?: Maybe<Invalid_Seats_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Invalid_Seats_OneArgs = {
  object: Invalid_Seats_Insert_Input;
  on_conflict?: Maybe<Invalid_Seats_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Invalid_Seats_ReasonArgs = {
  objects: Array<Invalid_Seats_Reason_Insert_Input>;
  on_conflict?: Maybe<Invalid_Seats_Reason_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Invalid_Seats_Reason_OneArgs = {
  object: Invalid_Seats_Reason_Insert_Input;
  on_conflict?: Maybe<Invalid_Seats_Reason_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_License_Seat_RolesArgs = {
  objects: Array<License_Seat_Roles_Insert_Input>;
  on_conflict?: Maybe<License_Seat_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_License_Seat_Roles_OneArgs = {
  object: License_Seat_Roles_Insert_Input;
  on_conflict?: Maybe<License_Seat_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_License_Seat_TiersArgs = {
  objects: Array<License_Seat_Tiers_Insert_Input>;
  on_conflict?: Maybe<License_Seat_Tiers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_License_Seat_Tiers_OneArgs = {
  object: License_Seat_Tiers_Insert_Input;
  on_conflict?: Maybe<License_Seat_Tiers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LicensesArgs = {
  objects: Array<Licenses_Insert_Input>;
  on_conflict?: Maybe<Licenses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Licenses_OneArgs = {
  object: Licenses_Insert_Input;
  on_conflict?: Maybe<Licenses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Migration_Sync_JobsArgs = {
  objects: Array<Migration_Sync_Jobs_Insert_Input>;
  on_conflict?: Maybe<Migration_Sync_Jobs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Migration_Sync_Jobs_OneArgs = {
  object: Migration_Sync_Jobs_Insert_Input;
  on_conflict?: Maybe<Migration_Sync_Jobs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Migration_Sync_StatusArgs = {
  objects: Array<Migration_Sync_Status_Insert_Input>;
  on_conflict?: Maybe<Migration_Sync_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Migration_Sync_Status_OneArgs = {
  object: Migration_Sync_Status_Insert_Input;
  on_conflict?: Maybe<Migration_Sync_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Owned_LicensesArgs = {
  objects: Array<Owned_Licenses_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Owned_Licenses_OneArgs = {
  object: Owned_Licenses_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Project_View_PermissionsArgs = {
  objects: Array<Project_View_Permissions_Insert_Input>;
  on_conflict?: Maybe<Project_View_Permissions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_View_Permissions_OneArgs = {
  object: Project_View_Permissions_Insert_Input;
  on_conflict?: Maybe<Project_View_Permissions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_View_Permissions_TypesArgs = {
  objects: Array<Project_View_Permissions_Types_Insert_Input>;
  on_conflict?: Maybe<Project_View_Permissions_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_View_Permissions_Types_OneArgs = {
  object: Project_View_Permissions_Types_Insert_Input;
  on_conflict?: Maybe<Project_View_Permissions_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Published_ProjectsArgs = {
  objects: Array<Published_Projects_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Published_Projects_OneArgs = {
  object: Published_Projects_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Published_Video_SourcesArgs = {
  objects: Array<Published_Video_Sources_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_Published_Video_Sources_OneArgs = {
  object: Published_Video_Sources_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_Refresh_TokensArgs = {
  objects: Array<Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Refresh_Tokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Refresh_Tokens_OneArgs = {
  object: Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Refresh_Tokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Render_TypesArgs = {
  objects: Array<Render_Types_Insert_Input>;
  on_conflict?: Maybe<Render_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Render_Types_OneArgs = {
  object: Render_Types_Insert_Input;
  on_conflict?: Maybe<Render_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RendersArgs = {
  objects: Array<Renders_Insert_Input>;
  on_conflict?: Maybe<Renders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Renders_OneArgs = {
  object: Renders_Insert_Input;
  on_conflict?: Maybe<Renders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SeatsArgs = {
  objects: Array<Seats_Insert_Input>;
  on_conflict?: Maybe<Seats_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Seats_OneArgs = {
  object: Seats_Insert_Input;
  on_conflict?: Maybe<Seats_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Simple_Export_TasksArgs = {
  objects: Array<Simple_Export_Tasks_Insert_Input>;
  on_conflict?: Maybe<Simple_Export_Tasks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Simple_Export_Tasks_OneArgs = {
  object: Simple_Export_Tasks_Insert_Input;
  on_conflict?: Maybe<Simple_Export_Tasks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Admin_TypesArgs = {
  objects: Array<Survey_Admin_Types_Insert_Input>;
  on_conflict?: Maybe<Survey_Admin_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Admin_Types_OneArgs = {
  object: Survey_Admin_Types_Insert_Input;
  on_conflict?: Maybe<Survey_Admin_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Corporate_ResponsesArgs = {
  objects: Array<Survey_Corporate_Responses_Insert_Input>;
  on_conflict?: Maybe<Survey_Corporate_Responses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Corporate_Responses_OneArgs = {
  object: Survey_Corporate_Responses_Insert_Input;
  on_conflict?: Maybe<Survey_Corporate_Responses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Corporate_TypesArgs = {
  objects: Array<Survey_Corporate_Types_Insert_Input>;
  on_conflict?: Maybe<Survey_Corporate_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Corporate_Types_OneArgs = {
  object: Survey_Corporate_Types_Insert_Input;
  on_conflict?: Maybe<Survey_Corporate_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Educator_TypesArgs = {
  objects: Array<Survey_Educator_Types_Insert_Input>;
  on_conflict?: Maybe<Survey_Educator_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Educator_Types_OneArgs = {
  object: Survey_Educator_Types_Insert_Input;
  on_conflict?: Maybe<Survey_Educator_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Other_TypesArgs = {
  objects: Array<Survey_Other_Types_Insert_Input>;
  on_conflict?: Maybe<Survey_Other_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Other_Types_OneArgs = {
  object: Survey_Other_Types_Insert_Input;
  on_conflict?: Maybe<Survey_Other_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Survey_ResponsesArgs = {
  objects: Array<Survey_Survey_Responses_Insert_Input>;
  on_conflict?: Maybe<Survey_Survey_Responses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_Survey_Responses_OneArgs = {
  object: Survey_Survey_Responses_Insert_Input;
  on_conflict?: Maybe<Survey_Survey_Responses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_User_TypesArgs = {
  objects: Array<Survey_User_Types_Insert_Input>;
  on_conflict?: Maybe<Survey_User_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Survey_User_Types_OneArgs = {
  object: Survey_User_Types_Insert_Input;
  on_conflict?: Maybe<Survey_User_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_SettingsArgs = {
  objects: Array<User_Settings_Insert_Input>;
  on_conflict?: Maybe<User_Settings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Settings_NamesArgs = {
  objects: Array<User_Settings_Names_Insert_Input>;
  on_conflict?: Maybe<User_Settings_Names_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Settings_Names_OneArgs = {
  object: User_Settings_Names_Insert_Input;
  on_conflict?: Maybe<User_Settings_Names_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Settings_OneArgs = {
  object: User_Settings_Insert_Input;
  on_conflict?: Maybe<User_Settings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Settings_ValuesArgs = {
  objects: Array<User_Settings_Values_Insert_Input>;
  on_conflict?: Maybe<User_Settings_Values_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Settings_Values_OneArgs = {
  object: User_Settings_Values_Insert_Input;
  on_conflict?: Maybe<User_Settings_Values_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_SourcesArgs = {
  objects: Array<Video_Sources_Insert_Input>;
  on_conflict?: Maybe<Video_Sources_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_Sources_OneArgs = {
  object: Video_Sources_Insert_Input;
  on_conflict?: Maybe<Video_Sources_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_Upload_StrategiesArgs = {
  objects: Array<Video_Upload_Strategies_Insert_Input>;
  on_conflict?: Maybe<Video_Upload_Strategies_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Video_Upload_Strategies_OneArgs = {
  object: Video_Upload_Strategies_Insert_Input;
  on_conflict?: Maybe<Video_Upload_Strategies_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Viewer_AnalyticsArgs = {
  objects: Array<Viewer_Analytics_Insert_Input>;
  on_conflict?: Maybe<Viewer_Analytics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Viewer_Analytics_OneArgs = {
  object: Viewer_Analytics_Insert_Input;
  on_conflict?: Maybe<Viewer_Analytics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_User_RolesArgs = {
  _set?: Maybe<Auth_User_Roles_Set_Input>;
  where: Auth_User_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_User_Roles_By_PkArgs = {
  _set?: Maybe<Auth_User_Roles_Set_Input>;
  pk_columns: Auth_User_Roles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Auto_Assign_DomainsArgs = {
  _set?: Maybe<Auto_Assign_Domains_Set_Input>;
  where: Auto_Assign_Domains_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auto_Assign_Domains_By_PkArgs = {
  _set?: Maybe<Auto_Assign_Domains_Set_Input>;
  pk_columns: Auto_Assign_Domains_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Canceled_LicensesArgs = {
  _inc?: Maybe<Canceled_Licenses_Inc_Input>;
  _set?: Maybe<Canceled_Licenses_Set_Input>;
  where: Canceled_Licenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Canceled_Licenses_By_PkArgs = {
  _inc?: Maybe<Canceled_Licenses_Inc_Input>;
  _set?: Maybe<Canceled_Licenses_Set_Input>;
  pk_columns: Canceled_Licenses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Feature_FlagsArgs = {
  _set?: Maybe<Feature_Flags_Set_Input>;
  where: Feature_Flags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Feature_Flags_By_PkArgs = {
  _set?: Maybe<Feature_Flags_Set_Input>;
  pk_columns: Feature_Flags_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Invalid_SeatsArgs = {
  _set?: Maybe<Invalid_Seats_Set_Input>;
  where: Invalid_Seats_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Invalid_Seats_By_PkArgs = {
  _set?: Maybe<Invalid_Seats_Set_Input>;
  pk_columns: Invalid_Seats_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Invalid_Seats_ReasonArgs = {
  _set?: Maybe<Invalid_Seats_Reason_Set_Input>;
  where: Invalid_Seats_Reason_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Invalid_Seats_Reason_By_PkArgs = {
  _set?: Maybe<Invalid_Seats_Reason_Set_Input>;
  pk_columns: Invalid_Seats_Reason_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_License_Seat_RolesArgs = {
  _set?: Maybe<License_Seat_Roles_Set_Input>;
  where: License_Seat_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_License_Seat_Roles_By_PkArgs = {
  _set?: Maybe<License_Seat_Roles_Set_Input>;
  pk_columns: License_Seat_Roles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_License_Seat_TiersArgs = {
  _set?: Maybe<License_Seat_Tiers_Set_Input>;
  where: License_Seat_Tiers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_License_Seat_Tiers_By_PkArgs = {
  _set?: Maybe<License_Seat_Tiers_Set_Input>;
  pk_columns: License_Seat_Tiers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LicensesArgs = {
  _inc?: Maybe<Licenses_Inc_Input>;
  _set?: Maybe<Licenses_Set_Input>;
  where: Licenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Licenses_By_PkArgs = {
  _inc?: Maybe<Licenses_Inc_Input>;
  _set?: Maybe<Licenses_Set_Input>;
  pk_columns: Licenses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Migration_Sync_JobsArgs = {
  _set?: Maybe<Migration_Sync_Jobs_Set_Input>;
  where: Migration_Sync_Jobs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Migration_Sync_Jobs_By_PkArgs = {
  _set?: Maybe<Migration_Sync_Jobs_Set_Input>;
  pk_columns: Migration_Sync_Jobs_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Migration_Sync_StatusArgs = {
  _set?: Maybe<Migration_Sync_Status_Set_Input>;
  where: Migration_Sync_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Migration_Sync_Status_By_PkArgs = {
  _set?: Maybe<Migration_Sync_Status_Set_Input>;
  pk_columns: Migration_Sync_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _set?: Maybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _set?: Maybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Owned_LicensesArgs = {
  _inc?: Maybe<Owned_Licenses_Inc_Input>;
  _set?: Maybe<Owned_Licenses_Set_Input>;
  where: Owned_Licenses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_View_PermissionsArgs = {
  _set?: Maybe<Project_View_Permissions_Set_Input>;
  where: Project_View_Permissions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_View_Permissions_By_PkArgs = {
  _set?: Maybe<Project_View_Permissions_Set_Input>;
  pk_columns: Project_View_Permissions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_View_Permissions_TypesArgs = {
  _set?: Maybe<Project_View_Permissions_Types_Set_Input>;
  where: Project_View_Permissions_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_View_Permissions_Types_By_PkArgs = {
  _set?: Maybe<Project_View_Permissions_Types_Set_Input>;
  pk_columns: Project_View_Permissions_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _append?: Maybe<Projects_Append_Input>;
  _delete_at_path?: Maybe<Projects_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Projects_Delete_Elem_Input>;
  _delete_key?: Maybe<Projects_Delete_Key_Input>;
  _prepend?: Maybe<Projects_Prepend_Input>;
  _set?: Maybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _append?: Maybe<Projects_Append_Input>;
  _delete_at_path?: Maybe<Projects_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Projects_Delete_Elem_Input>;
  _delete_key?: Maybe<Projects_Delete_Key_Input>;
  _prepend?: Maybe<Projects_Prepend_Input>;
  _set?: Maybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Published_ProjectsArgs = {
  _append?: Maybe<Published_Projects_Append_Input>;
  _delete_at_path?: Maybe<Published_Projects_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Published_Projects_Delete_Elem_Input>;
  _delete_key?: Maybe<Published_Projects_Delete_Key_Input>;
  _prepend?: Maybe<Published_Projects_Prepend_Input>;
  _set?: Maybe<Published_Projects_Set_Input>;
  where: Published_Projects_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Published_Video_SourcesArgs = {
  _append?: Maybe<Published_Video_Sources_Append_Input>;
  _delete_at_path?: Maybe<Published_Video_Sources_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Published_Video_Sources_Delete_Elem_Input>;
  _delete_key?: Maybe<Published_Video_Sources_Delete_Key_Input>;
  _inc?: Maybe<Published_Video_Sources_Inc_Input>;
  _prepend?: Maybe<Published_Video_Sources_Prepend_Input>;
  _set?: Maybe<Published_Video_Sources_Set_Input>;
  where: Published_Video_Sources_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Refresh_TokensArgs = {
  _set?: Maybe<Refresh_Tokens_Set_Input>;
  where: Refresh_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Refresh_Tokens_Set_Input>;
  pk_columns: Refresh_Tokens_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Render_TypesArgs = {
  _set?: Maybe<Render_Types_Set_Input>;
  where: Render_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Render_Types_By_PkArgs = {
  _set?: Maybe<Render_Types_Set_Input>;
  pk_columns: Render_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_RendersArgs = {
  _append?: Maybe<Renders_Append_Input>;
  _delete_at_path?: Maybe<Renders_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Renders_Delete_Elem_Input>;
  _delete_key?: Maybe<Renders_Delete_Key_Input>;
  _inc?: Maybe<Renders_Inc_Input>;
  _prepend?: Maybe<Renders_Prepend_Input>;
  _set?: Maybe<Renders_Set_Input>;
  where: Renders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Renders_By_PkArgs = {
  _append?: Maybe<Renders_Append_Input>;
  _delete_at_path?: Maybe<Renders_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Renders_Delete_Elem_Input>;
  _delete_key?: Maybe<Renders_Delete_Key_Input>;
  _inc?: Maybe<Renders_Inc_Input>;
  _prepend?: Maybe<Renders_Prepend_Input>;
  _set?: Maybe<Renders_Set_Input>;
  pk_columns: Renders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SeatsArgs = {
  _set?: Maybe<Seats_Set_Input>;
  where: Seats_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Seats_By_PkArgs = {
  _set?: Maybe<Seats_Set_Input>;
  pk_columns: Seats_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Simple_Export_TasksArgs = {
  _inc?: Maybe<Simple_Export_Tasks_Inc_Input>;
  _set?: Maybe<Simple_Export_Tasks_Set_Input>;
  where: Simple_Export_Tasks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Simple_Export_Tasks_By_PkArgs = {
  _inc?: Maybe<Simple_Export_Tasks_Inc_Input>;
  _set?: Maybe<Simple_Export_Tasks_Set_Input>;
  pk_columns: Simple_Export_Tasks_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Admin_TypesArgs = {
  _set?: Maybe<Survey_Admin_Types_Set_Input>;
  where: Survey_Admin_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Admin_Types_By_PkArgs = {
  _set?: Maybe<Survey_Admin_Types_Set_Input>;
  pk_columns: Survey_Admin_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Corporate_ResponsesArgs = {
  _set?: Maybe<Survey_Corporate_Responses_Set_Input>;
  where: Survey_Corporate_Responses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Corporate_Responses_By_PkArgs = {
  _set?: Maybe<Survey_Corporate_Responses_Set_Input>;
  pk_columns: Survey_Corporate_Responses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Corporate_TypesArgs = {
  _set?: Maybe<Survey_Corporate_Types_Set_Input>;
  where: Survey_Corporate_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Corporate_Types_By_PkArgs = {
  _set?: Maybe<Survey_Corporate_Types_Set_Input>;
  pk_columns: Survey_Corporate_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Educator_TypesArgs = {
  _set?: Maybe<Survey_Educator_Types_Set_Input>;
  where: Survey_Educator_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Educator_Types_By_PkArgs = {
  _set?: Maybe<Survey_Educator_Types_Set_Input>;
  pk_columns: Survey_Educator_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Other_TypesArgs = {
  _set?: Maybe<Survey_Other_Types_Set_Input>;
  where: Survey_Other_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Other_Types_By_PkArgs = {
  _set?: Maybe<Survey_Other_Types_Set_Input>;
  pk_columns: Survey_Other_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Survey_ResponsesArgs = {
  _inc?: Maybe<Survey_Survey_Responses_Inc_Input>;
  _set?: Maybe<Survey_Survey_Responses_Set_Input>;
  where: Survey_Survey_Responses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_Survey_Responses_By_PkArgs = {
  _inc?: Maybe<Survey_Survey_Responses_Inc_Input>;
  _set?: Maybe<Survey_Survey_Responses_Set_Input>;
  pk_columns: Survey_Survey_Responses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_User_TypesArgs = {
  _set?: Maybe<Survey_User_Types_Set_Input>;
  where: Survey_User_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Survey_User_Types_By_PkArgs = {
  _set?: Maybe<Survey_User_Types_Set_Input>;
  pk_columns: Survey_User_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_SettingsArgs = {
  _set?: Maybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Settings_By_PkArgs = {
  _set?: Maybe<User_Settings_Set_Input>;
  pk_columns: User_Settings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Settings_NamesArgs = {
  _set?: Maybe<User_Settings_Names_Set_Input>;
  where: User_Settings_Names_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Settings_Names_By_PkArgs = {
  _set?: Maybe<User_Settings_Names_Set_Input>;
  pk_columns: User_Settings_Names_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Settings_ValuesArgs = {
  _set?: Maybe<User_Settings_Values_Set_Input>;
  where: User_Settings_Values_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Settings_Values_By_PkArgs = {
  _set?: Maybe<User_Settings_Values_Set_Input>;
  pk_columns: User_Settings_Values_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Video_SourcesArgs = {
  _append?: Maybe<Video_Sources_Append_Input>;
  _delete_at_path?: Maybe<Video_Sources_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Video_Sources_Delete_Elem_Input>;
  _delete_key?: Maybe<Video_Sources_Delete_Key_Input>;
  _inc?: Maybe<Video_Sources_Inc_Input>;
  _prepend?: Maybe<Video_Sources_Prepend_Input>;
  _set?: Maybe<Video_Sources_Set_Input>;
  where: Video_Sources_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Sources_By_PkArgs = {
  _append?: Maybe<Video_Sources_Append_Input>;
  _delete_at_path?: Maybe<Video_Sources_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Video_Sources_Delete_Elem_Input>;
  _delete_key?: Maybe<Video_Sources_Delete_Key_Input>;
  _inc?: Maybe<Video_Sources_Inc_Input>;
  _prepend?: Maybe<Video_Sources_Prepend_Input>;
  _set?: Maybe<Video_Sources_Set_Input>;
  pk_columns: Video_Sources_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Upload_StrategiesArgs = {
  _set?: Maybe<Video_Upload_Strategies_Set_Input>;
  where: Video_Upload_Strategies_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Video_Upload_Strategies_By_PkArgs = {
  _set?: Maybe<Video_Upload_Strategies_Set_Input>;
  pk_columns: Video_Upload_Strategies_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Viewer_AnalyticsArgs = {
  _inc?: Maybe<Viewer_Analytics_Inc_Input>;
  _set?: Maybe<Viewer_Analytics_Set_Input>;
  where: Viewer_Analytics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Viewer_Analytics_By_PkArgs = {
  _inc?: Maybe<Viewer_Analytics_Inc_Input>;
  _set?: Maybe<Viewer_Analytics_Set_Input>;
  pk_columns: Viewer_Analytics_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "organization_owners" */
export type Organization_Owners = {
  __typename?: 'organization_owners';
  email?: Maybe<Scalars['String']>;
  organizations_uuid?: Maybe<Scalars['uuid']>;
  users_uuid?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "organization_owners" */
export type Organization_Owners_Aggregate = {
  __typename?: 'organization_owners_aggregate';
  aggregate?: Maybe<Organization_Owners_Aggregate_Fields>;
  nodes: Array<Organization_Owners>;
};

/** aggregate fields of "organization_owners" */
export type Organization_Owners_Aggregate_Fields = {
  __typename?: 'organization_owners_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organization_Owners_Max_Fields>;
  min?: Maybe<Organization_Owners_Min_Fields>;
};

/** aggregate fields of "organization_owners" */
export type Organization_Owners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organization_Owners_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organization_owners". All fields are combined with a logical 'AND'. */
export type Organization_Owners_Bool_Exp = {
  _and?: Maybe<Array<Organization_Owners_Bool_Exp>>;
  _not?: Maybe<Organization_Owners_Bool_Exp>;
  _or?: Maybe<Array<Organization_Owners_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  organizations_uuid?: Maybe<Uuid_Comparison_Exp>;
  users_uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "organization_owners" */
export type Organization_Owners_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  organizations_uuid?: Maybe<Scalars['uuid']>;
  users_uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Organization_Owners_Max_Fields = {
  __typename?: 'organization_owners_max_fields';
  email?: Maybe<Scalars['String']>;
  organizations_uuid?: Maybe<Scalars['uuid']>;
  users_uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Organization_Owners_Min_Fields = {
  __typename?: 'organization_owners_min_fields';
  email?: Maybe<Scalars['String']>;
  organizations_uuid?: Maybe<Scalars['uuid']>;
  users_uuid?: Maybe<Scalars['uuid']>;
};

/** input type for inserting object relation for remote table "organization_owners" */
export type Organization_Owners_Obj_Rel_Insert_Input = {
  data: Organization_Owners_Insert_Input;
};

/** Ordering options when selecting data from "organization_owners". */
export type Organization_Owners_Order_By = {
  email?: Maybe<Order_By>;
  organizations_uuid?: Maybe<Order_By>;
  users_uuid?: Maybe<Order_By>;
};

/** select columns of table "organization_owners" */
export enum Organization_Owners_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  OrganizationsUuid = 'organizations_uuid',
  /** column name */
  UsersUuid = 'users_uuid',
}

/** organizations that manage licenses and managed users */
export type Organizations = {
  __typename?: 'organizations';
  chargebee_customer_email?: Maybe<Scalars['String']>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  is_edu: Scalars['Boolean'];
  /** An array relationship */
  licenses: Array<Licenses>;
  /** An aggregate relationship */
  licenses_aggregate: Licenses_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  owner?: Maybe<Organization_Owners>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** organizations that manage licenses and managed users */
export type OrganizationsLicensesArgs = {
  distinct_on?: Maybe<Array<Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Licenses_Order_By>>;
  where?: Maybe<Licenses_Bool_Exp>;
};

/** organizations that manage licenses and managed users */
export type OrganizationsLicenses_AggregateArgs = {
  distinct_on?: Maybe<Array<Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Licenses_Order_By>>;
  where?: Maybe<Licenses_Bool_Exp>;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organizations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: Maybe<Array<Organizations_Bool_Exp>>;
  _not?: Maybe<Organizations_Bool_Exp>;
  _or?: Maybe<Array<Organizations_Bool_Exp>>;
  chargebee_customer_email?: Maybe<String_Comparison_Exp>;
  chargebee_customer_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  is_edu?: Maybe<Boolean_Comparison_Exp>;
  licenses?: Maybe<Licenses_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Organization_Owners_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint */
  OrganizationsChargebeeCustomerIdKey = 'organizations_chargebee_customer_id_key',
  /** unique or primary key constraint */
  OrganizationsPkey = 'organizations_pkey',
}

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  chargebee_customer_email?: Maybe<Scalars['String']>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  is_edu?: Maybe<Scalars['Boolean']>;
  licenses?: Maybe<Licenses_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Organization_Owners_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  chargebee_customer_email?: Maybe<Scalars['String']>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  chargebee_customer_email?: Maybe<Scalars['String']>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  chargebee_customer_email?: Maybe<Order_By>;
  chargebee_customer_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  is_edu?: Maybe<Order_By>;
  licenses_aggregate?: Maybe<Licenses_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Organization_Owners_Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  ChargebeeCustomerEmail = 'chargebee_customer_email',
  /** column name */
  ChargebeeCustomerId = 'chargebee_customer_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  IsEdu = 'is_edu',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  chargebee_customer_email?: Maybe<Scalars['String']>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  is_edu?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  ChargebeeCustomerEmail = 'chargebee_customer_email',
  /** column name */
  ChargebeeCustomerId = 'chargebee_customer_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  IsEdu = 'is_edu',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** columns and relationships of "owned_licenses" */
export type Owned_Licenses = {
  __typename?: 'owned_licenses';
  /** An array relationship */
  auto_assign_domains: Array<Auto_Assign_Domains>;
  /** An aggregate relationship */
  auto_assign_domains_aggregate: Auto_Assign_Domains_Aggregate;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  license_seats: Array<License_Seats>;
  /** An aggregate relationship */
  license_seats_aggregate: License_Seats_Aggregate;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  /** An object relationship */
  organization?: Maybe<Organizations>;
  /** An object relationship */
  organization_owners?: Maybe<Organization_Owners>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  seats: Array<Seats>;
  /** An aggregate relationship */
  seats_aggregate: Seats_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "owned_licenses" */
export type Owned_LicensesAuto_Assign_DomainsArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

/** columns and relationships of "owned_licenses" */
export type Owned_LicensesAuto_Assign_Domains_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

/** columns and relationships of "owned_licenses" */
export type Owned_LicensesLicense_SeatsArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

/** columns and relationships of "owned_licenses" */
export type Owned_LicensesLicense_Seats_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

/** columns and relationships of "owned_licenses" */
export type Owned_LicensesSeatsArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

/** columns and relationships of "owned_licenses" */
export type Owned_LicensesSeats_AggregateArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

/** aggregated selection of "owned_licenses" */
export type Owned_Licenses_Aggregate = {
  __typename?: 'owned_licenses_aggregate';
  aggregate?: Maybe<Owned_Licenses_Aggregate_Fields>;
  nodes: Array<Owned_Licenses>;
};

/** aggregate fields of "owned_licenses" */
export type Owned_Licenses_Aggregate_Fields = {
  __typename?: 'owned_licenses_aggregate_fields';
  avg?: Maybe<Owned_Licenses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Owned_Licenses_Max_Fields>;
  min?: Maybe<Owned_Licenses_Min_Fields>;
  stddev?: Maybe<Owned_Licenses_Stddev_Fields>;
  stddev_pop?: Maybe<Owned_Licenses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Owned_Licenses_Stddev_Samp_Fields>;
  sum?: Maybe<Owned_Licenses_Sum_Fields>;
  var_pop?: Maybe<Owned_Licenses_Var_Pop_Fields>;
  var_samp?: Maybe<Owned_Licenses_Var_Samp_Fields>;
  variance?: Maybe<Owned_Licenses_Variance_Fields>;
};

/** aggregate fields of "owned_licenses" */
export type Owned_Licenses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Owned_Licenses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Owned_Licenses_Avg_Fields = {
  __typename?: 'owned_licenses_avg_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "owned_licenses". All fields are combined with a logical 'AND'. */
export type Owned_Licenses_Bool_Exp = {
  _and?: Maybe<Array<Owned_Licenses_Bool_Exp>>;
  _not?: Maybe<Owned_Licenses_Bool_Exp>;
  _or?: Maybe<Array<Owned_Licenses_Bool_Exp>>;
  auto_assign_domains?: Maybe<Auto_Assign_Domains_Bool_Exp>;
  chargebee_customer_id?: Maybe<String_Comparison_Exp>;
  chargebee_subscription_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_migration_tier?: Maybe<String_Comparison_Exp>;
  legacy_license_id?: Maybe<String_Comparison_Exp>;
  license_seats?: Maybe<License_Seats_Bool_Exp>;
  max_pro_member_seats?: Maybe<Int_Comparison_Exp>;
  max_pro_restricted_seats?: Maybe<Int_Comparison_Exp>;
  max_standard_member_seats?: Maybe<Int_Comparison_Exp>;
  max_standard_restricted_seats?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_owners?: Maybe<Organization_Owners_Bool_Exp>;
  organization_uuid?: Maybe<Uuid_Comparison_Exp>;
  seats?: Maybe<Seats_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "owned_licenses" */
export type Owned_Licenses_Inc_Input = {
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "owned_licenses" */
export type Owned_Licenses_Insert_Input = {
  auto_assign_domains?: Maybe<Auto_Assign_Domains_Arr_Rel_Insert_Input>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  license_seats?: Maybe<License_Seats_Arr_Rel_Insert_Input>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organization_owners?: Maybe<Organization_Owners_Obj_Rel_Insert_Input>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  seats?: Maybe<Seats_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Owned_Licenses_Max_Fields = {
  __typename?: 'owned_licenses_max_fields';
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Owned_Licenses_Min_Fields = {
  __typename?: 'owned_licenses_min_fields';
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "owned_licenses" */
export type Owned_Licenses_Mutation_Response = {
  __typename?: 'owned_licenses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Owned_Licenses>;
};

/** Ordering options when selecting data from "owned_licenses". */
export type Owned_Licenses_Order_By = {
  auto_assign_domains_aggregate?: Maybe<Auto_Assign_Domains_Aggregate_Order_By>;
  chargebee_customer_id?: Maybe<Order_By>;
  chargebee_subscription_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_migration_tier?: Maybe<Order_By>;
  legacy_license_id?: Maybe<Order_By>;
  license_seats_aggregate?: Maybe<License_Seats_Aggregate_Order_By>;
  max_pro_member_seats?: Maybe<Order_By>;
  max_pro_restricted_seats?: Maybe<Order_By>;
  max_standard_member_seats?: Maybe<Order_By>;
  max_standard_restricted_seats?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_owners?: Maybe<Organization_Owners_Order_By>;
  organization_uuid?: Maybe<Order_By>;
  seats_aggregate?: Maybe<Seats_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** select columns of table "owned_licenses" */
export enum Owned_Licenses_Select_Column {
  /** column name */
  ChargebeeCustomerId = 'chargebee_customer_id',
  /** column name */
  ChargebeeSubscriptionId = 'chargebee_subscription_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultMigrationTier = 'default_migration_tier',
  /** column name */
  LegacyLicenseId = 'legacy_license_id',
  /** column name */
  MaxProMemberSeats = 'max_pro_member_seats',
  /** column name */
  MaxProRestrictedSeats = 'max_pro_restricted_seats',
  /** column name */
  MaxStandardMemberSeats = 'max_standard_member_seats',
  /** column name */
  MaxStandardRestrictedSeats = 'max_standard_restricted_seats',
  /** column name */
  OrganizationUuid = 'organization_uuid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "owned_licenses" */
export type Owned_Licenses_Set_Input = {
  chargebee_customer_id?: Maybe<Scalars['String']>;
  chargebee_subscription_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_migration_tier?: Maybe<Scalars['String']>;
  legacy_license_id?: Maybe<Scalars['String']>;
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
  organization_uuid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Owned_Licenses_Stddev_Fields = {
  __typename?: 'owned_licenses_stddev_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Owned_Licenses_Stddev_Pop_Fields = {
  __typename?: 'owned_licenses_stddev_pop_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Owned_Licenses_Stddev_Samp_Fields = {
  __typename?: 'owned_licenses_stddev_samp_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Owned_Licenses_Sum_Fields = {
  __typename?: 'owned_licenses_sum_fields';
  max_pro_member_seats?: Maybe<Scalars['Int']>;
  max_pro_restricted_seats?: Maybe<Scalars['Int']>;
  max_standard_member_seats?: Maybe<Scalars['Int']>;
  max_standard_restricted_seats?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Owned_Licenses_Var_Pop_Fields = {
  __typename?: 'owned_licenses_var_pop_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Owned_Licenses_Var_Samp_Fields = {
  __typename?: 'owned_licenses_var_samp_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Owned_Licenses_Variance_Fields = {
  __typename?: 'owned_licenses_variance_fields';
  max_pro_member_seats?: Maybe<Scalars['Float']>;
  max_pro_restricted_seats?: Maybe<Scalars['Float']>;
  max_standard_member_seats?: Maybe<Scalars['Float']>;
  max_standard_restricted_seats?: Maybe<Scalars['Float']>;
};

/** Who can view a shared project */
export type Project_View_Permissions = {
  __typename?: 'project_view_permissions';
  domain?: Maybe<Scalars['String']>;
  permission: Project_View_Permissions_Types_Enum;
  /** An object relationship */
  project: Projects;
  project_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "project_view_permissions" */
export type Project_View_Permissions_Aggregate = {
  __typename?: 'project_view_permissions_aggregate';
  aggregate?: Maybe<Project_View_Permissions_Aggregate_Fields>;
  nodes: Array<Project_View_Permissions>;
};

/** aggregate fields of "project_view_permissions" */
export type Project_View_Permissions_Aggregate_Fields = {
  __typename?: 'project_view_permissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Project_View_Permissions_Max_Fields>;
  min?: Maybe<Project_View_Permissions_Min_Fields>;
};

/** aggregate fields of "project_view_permissions" */
export type Project_View_Permissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_View_Permissions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project_view_permissions". All fields are combined with a logical 'AND'. */
export type Project_View_Permissions_Bool_Exp = {
  _and?: Maybe<Array<Project_View_Permissions_Bool_Exp>>;
  _not?: Maybe<Project_View_Permissions_Bool_Exp>;
  _or?: Maybe<Array<Project_View_Permissions_Bool_Exp>>;
  domain?: Maybe<String_Comparison_Exp>;
  permission?: Maybe<Project_View_Permissions_Types_Enum_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_view_permissions" */
export enum Project_View_Permissions_Constraint {
  /** unique or primary key constraint */
  ProjectViewPermissionsPkey = 'project_view_permissions_pkey',
  /** unique or primary key constraint */
  ProjectViewPermissionsProjectUuidKey = 'project_view_permissions_project_uuid_key',
}

/** input type for inserting data into table "project_view_permissions" */
export type Project_View_Permissions_Insert_Input = {
  domain?: Maybe<Scalars['String']>;
  permission?: Maybe<Project_View_Permissions_Types_Enum>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_View_Permissions_Max_Fields = {
  __typename?: 'project_view_permissions_max_fields';
  domain?: Maybe<Scalars['String']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Project_View_Permissions_Min_Fields = {
  __typename?: 'project_view_permissions_min_fields';
  domain?: Maybe<Scalars['String']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "project_view_permissions" */
export type Project_View_Permissions_Mutation_Response = {
  __typename?: 'project_view_permissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_View_Permissions>;
};

/** input type for inserting object relation for remote table "project_view_permissions" */
export type Project_View_Permissions_Obj_Rel_Insert_Input = {
  data: Project_View_Permissions_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Project_View_Permissions_On_Conflict>;
};

/** on_conflict condition type for table "project_view_permissions" */
export type Project_View_Permissions_On_Conflict = {
  constraint: Project_View_Permissions_Constraint;
  update_columns?: Array<Project_View_Permissions_Update_Column>;
  where?: Maybe<Project_View_Permissions_Bool_Exp>;
};

/** Ordering options when selecting data from "project_view_permissions". */
export type Project_View_Permissions_Order_By = {
  domain?: Maybe<Order_By>;
  permission?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: project_view_permissions */
export type Project_View_Permissions_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "project_view_permissions" */
export enum Project_View_Permissions_Select_Column {
  /** column name */
  Domain = 'domain',
  /** column name */
  Permission = 'permission',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "project_view_permissions" */
export type Project_View_Permissions_Set_Input = {
  domain?: Maybe<Scalars['String']>;
  permission?: Maybe<Project_View_Permissions_Types_Enum>;
  project_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** Enum table for permission viewing settings */
export type Project_View_Permissions_Types = {
  __typename?: 'project_view_permissions_types';
  comment: Scalars['String'];
  permission: Scalars['String'];
};

/** aggregated selection of "project_view_permissions_types" */
export type Project_View_Permissions_Types_Aggregate = {
  __typename?: 'project_view_permissions_types_aggregate';
  aggregate?: Maybe<Project_View_Permissions_Types_Aggregate_Fields>;
  nodes: Array<Project_View_Permissions_Types>;
};

/** aggregate fields of "project_view_permissions_types" */
export type Project_View_Permissions_Types_Aggregate_Fields = {
  __typename?: 'project_view_permissions_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Project_View_Permissions_Types_Max_Fields>;
  min?: Maybe<Project_View_Permissions_Types_Min_Fields>;
};

/** aggregate fields of "project_view_permissions_types" */
export type Project_View_Permissions_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_View_Permissions_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project_view_permissions_types". All fields are combined with a logical 'AND'. */
export type Project_View_Permissions_Types_Bool_Exp = {
  _and?: Maybe<Array<Project_View_Permissions_Types_Bool_Exp>>;
  _not?: Maybe<Project_View_Permissions_Types_Bool_Exp>;
  _or?: Maybe<Array<Project_View_Permissions_Types_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  permission?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_view_permissions_types" */
export enum Project_View_Permissions_Types_Constraint {
  /** unique or primary key constraint */
  ProjectViewPermissionsTypesPkey = 'project_view_permissions_types_pkey',
}

export enum Project_View_Permissions_Types_Enum {
  /** Any users with an account can view a video from the view page */
  Account = 'account',
  /** Users with the same domain can view a video from the view page */
  Domain = 'domain',
  /** Any users with a link can view a video from the view page */
  Link = 'link',
}

/** Boolean expression to compare columns of type "project_view_permissions_types_enum". All fields are combined with logical 'AND'. */
export type Project_View_Permissions_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Project_View_Permissions_Types_Enum>;
  _in?: Maybe<Array<Project_View_Permissions_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Project_View_Permissions_Types_Enum>;
  _nin?: Maybe<Array<Project_View_Permissions_Types_Enum>>;
};

/** input type for inserting data into table "project_view_permissions_types" */
export type Project_View_Permissions_Types_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Project_View_Permissions_Types_Max_Fields = {
  __typename?: 'project_view_permissions_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Project_View_Permissions_Types_Min_Fields = {
  __typename?: 'project_view_permissions_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "project_view_permissions_types" */
export type Project_View_Permissions_Types_Mutation_Response = {
  __typename?: 'project_view_permissions_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_View_Permissions_Types>;
};

/** on_conflict condition type for table "project_view_permissions_types" */
export type Project_View_Permissions_Types_On_Conflict = {
  constraint: Project_View_Permissions_Types_Constraint;
  update_columns?: Array<Project_View_Permissions_Types_Update_Column>;
  where?: Maybe<Project_View_Permissions_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "project_view_permissions_types". */
export type Project_View_Permissions_Types_Order_By = {
  comment?: Maybe<Order_By>;
  permission?: Maybe<Order_By>;
};

/** primary key columns input for table: project_view_permissions_types */
export type Project_View_Permissions_Types_Pk_Columns_Input = {
  permission: Scalars['String'];
};

/** select columns of table "project_view_permissions_types" */
export enum Project_View_Permissions_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Permission = 'permission',
}

/** input type for updating data in table "project_view_permissions_types" */
export type Project_View_Permissions_Types_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
};

/** update columns of table "project_view_permissions_types" */
export enum Project_View_Permissions_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Permission = 'permission',
}

/** update columns of table "project_view_permissions" */
export enum Project_View_Permissions_Update_Column {
  /** column name */
  Domain = 'domain',
  /** column name */
  Permission = 'permission',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  owner: Users;
  owner_uuid: Scalars['uuid'];
  /** An object relationship */
  project_view_permission?: Maybe<Project_View_Permissions>;
  scene: Scalars['jsonb'];
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
  /** An array relationship */
  video_sources: Array<Video_Sources>;
  /** An aggregate relationship */
  video_sources_aggregate: Video_Sources_Aggregate;
};

/** columns and relationships of "projects" */
export type ProjectsSceneArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "projects" */
export type ProjectsVideo_SourcesArgs = {
  distinct_on?: Maybe<Array<Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Sources_Order_By>>;
  where?: Maybe<Video_Sources_Bool_Exp>;
};

/** columns and relationships of "projects" */
export type ProjectsVideo_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Sources_Order_By>>;
  where?: Maybe<Video_Sources_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Projects_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Projects_Append_Input = {
  scene?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: Maybe<Array<Projects_Bool_Exp>>;
  _not?: Maybe<Projects_Bool_Exp>;
  _or?: Maybe<Array<Projects_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_uuid?: Maybe<Uuid_Comparison_Exp>;
  project_view_permission?: Maybe<Project_View_Permissions_Bool_Exp>;
  scene?: Maybe<Jsonb_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
  video_sources?: Maybe<Video_Sources_Bool_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Projects_Delete_At_Path_Input = {
  scene?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Projects_Delete_Elem_Input = {
  scene?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Projects_Delete_Key_Input = {
  scene?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_view_permission?: Maybe<Project_View_Permissions_Obj_Rel_Insert_Input>;
  scene?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
  video_sources?: Maybe<Video_Sources_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: Maybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_uuid?: Maybe<Order_By>;
  project_view_permission?: Maybe<Project_View_Permissions_Order_By>;
  scene?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
  video_sources_aggregate?: Maybe<Video_Sources_Aggregate_Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Projects_Prepend_Input = {
  scene?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  Scene = 'scene',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  scene?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  Scene = 'scene',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** columns and relationships of "published_project_owners" */
export type Published_Project_Owners = {
  __typename?: 'published_project_owners';
  avatar_url?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  seats_count?: Maybe<Scalars['bigint']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "published_project_owners" */
export type Published_Project_Owners_Aggregate = {
  __typename?: 'published_project_owners_aggregate';
  aggregate?: Maybe<Published_Project_Owners_Aggregate_Fields>;
  nodes: Array<Published_Project_Owners>;
};

/** aggregate fields of "published_project_owners" */
export type Published_Project_Owners_Aggregate_Fields = {
  __typename?: 'published_project_owners_aggregate_fields';
  avg?: Maybe<Published_Project_Owners_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Published_Project_Owners_Max_Fields>;
  min?: Maybe<Published_Project_Owners_Min_Fields>;
  stddev?: Maybe<Published_Project_Owners_Stddev_Fields>;
  stddev_pop?: Maybe<Published_Project_Owners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Published_Project_Owners_Stddev_Samp_Fields>;
  sum?: Maybe<Published_Project_Owners_Sum_Fields>;
  var_pop?: Maybe<Published_Project_Owners_Var_Pop_Fields>;
  var_samp?: Maybe<Published_Project_Owners_Var_Samp_Fields>;
  variance?: Maybe<Published_Project_Owners_Variance_Fields>;
};

/** aggregate fields of "published_project_owners" */
export type Published_Project_Owners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Published_Project_Owners_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Published_Project_Owners_Avg_Fields = {
  __typename?: 'published_project_owners_avg_fields';
  seats_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "published_project_owners". All fields are combined with a logical 'AND'. */
export type Published_Project_Owners_Bool_Exp = {
  _and?: Maybe<Array<Published_Project_Owners_Bool_Exp>>;
  _not?: Maybe<Published_Project_Owners_Bool_Exp>;
  _or?: Maybe<Array<Published_Project_Owners_Bool_Exp>>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  seats_count?: Maybe<Bigint_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "published_project_owners" */
export type Published_Project_Owners_Insert_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  seats_count?: Maybe<Scalars['bigint']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Published_Project_Owners_Max_Fields = {
  __typename?: 'published_project_owners_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  seats_count?: Maybe<Scalars['bigint']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Published_Project_Owners_Min_Fields = {
  __typename?: 'published_project_owners_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  seats_count?: Maybe<Scalars['bigint']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** input type for inserting object relation for remote table "published_project_owners" */
export type Published_Project_Owners_Obj_Rel_Insert_Input = {
  data: Published_Project_Owners_Insert_Input;
};

/** Ordering options when selecting data from "published_project_owners". */
export type Published_Project_Owners_Order_By = {
  avatar_url?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  seats_count?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** select columns of table "published_project_owners" */
export enum Published_Project_Owners_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  SeatsCount = 'seats_count',
  /** column name */
  Uuid = 'uuid',
}

/** aggregate stddev on columns */
export type Published_Project_Owners_Stddev_Fields = {
  __typename?: 'published_project_owners_stddev_fields';
  seats_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Published_Project_Owners_Stddev_Pop_Fields = {
  __typename?: 'published_project_owners_stddev_pop_fields';
  seats_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Published_Project_Owners_Stddev_Samp_Fields = {
  __typename?: 'published_project_owners_stddev_samp_fields';
  seats_count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Published_Project_Owners_Sum_Fields = {
  __typename?: 'published_project_owners_sum_fields';
  seats_count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Published_Project_Owners_Var_Pop_Fields = {
  __typename?: 'published_project_owners_var_pop_fields';
  seats_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Published_Project_Owners_Var_Samp_Fields = {
  __typename?: 'published_project_owners_var_samp_fields';
  seats_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Published_Project_Owners_Variance_Fields = {
  __typename?: 'published_project_owners_variance_fields';
  seats_count?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "published_projects" */
export type Published_Projects = {
  __typename?: 'published_projects';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  owner?: Maybe<Published_Project_Owners>;
  owner_uuid: Scalars['uuid'];
  scene: Scalars['jsonb'];
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** columns and relationships of "published_projects" */
export type Published_ProjectsSceneArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "published_projects" */
export type Published_Projects_Aggregate = {
  __typename?: 'published_projects_aggregate';
  aggregate?: Maybe<Published_Projects_Aggregate_Fields>;
  nodes: Array<Published_Projects>;
};

/** aggregate fields of "published_projects" */
export type Published_Projects_Aggregate_Fields = {
  __typename?: 'published_projects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Published_Projects_Max_Fields>;
  min?: Maybe<Published_Projects_Min_Fields>;
};

/** aggregate fields of "published_projects" */
export type Published_Projects_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Published_Projects_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Published_Projects_Append_Input = {
  scene?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "published_projects". All fields are combined with a logical 'AND'. */
export type Published_Projects_Bool_Exp = {
  _and?: Maybe<Array<Published_Projects_Bool_Exp>>;
  _not?: Maybe<Published_Projects_Bool_Exp>;
  _or?: Maybe<Array<Published_Projects_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Published_Project_Owners_Bool_Exp>;
  owner_uuid?: Maybe<Uuid_Comparison_Exp>;
  scene?: Maybe<Jsonb_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Published_Projects_Delete_At_Path_Input = {
  scene?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Published_Projects_Delete_Elem_Input = {
  scene?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Published_Projects_Delete_Key_Input = {
  scene?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "published_projects" */
export type Published_Projects_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Published_Project_Owners_Obj_Rel_Insert_Input>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  scene?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Published_Projects_Max_Fields = {
  __typename?: 'published_projects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Published_Projects_Min_Fields = {
  __typename?: 'published_projects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "published_projects" */
export type Published_Projects_Mutation_Response = {
  __typename?: 'published_projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Published_Projects>;
};

/** Ordering options when selecting data from "published_projects". */
export type Published_Projects_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  owner?: Maybe<Published_Project_Owners_Order_By>;
  owner_uuid?: Maybe<Order_By>;
  scene?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Published_Projects_Prepend_Input = {
  scene?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "published_projects" */
export enum Published_Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  Scene = 'scene',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "published_projects" */
export type Published_Projects_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  scene?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "published_video_sources" */
export type Published_Video_Sources = {
  __typename?: 'published_video_sources';
  audio_segments?: Maybe<Scalars['jsonb']>;
  constrain_is_done?: Maybe<Scalars['Boolean']>;
  constrain_is_necessary?: Maybe<Scalars['Boolean']>;
  constrain_percent?: Maybe<Scalars['numeric']>;
  generate_waveform_is_done?: Maybe<Scalars['Boolean']>;
  ingest_failed?: Maybe<Scalars['Boolean']>;
  project_uuid: Scalars['uuid'];
  stream_probe?: Maybe<Scalars['jsonb']>;
  uuid: Scalars['uuid'];
  video_segments?: Maybe<Scalars['jsonb']>;
};

/** columns and relationships of "published_video_sources" */
export type Published_Video_SourcesAudio_SegmentsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "published_video_sources" */
export type Published_Video_SourcesStream_ProbeArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "published_video_sources" */
export type Published_Video_SourcesVideo_SegmentsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "published_video_sources" */
export type Published_Video_Sources_Aggregate = {
  __typename?: 'published_video_sources_aggregate';
  aggregate?: Maybe<Published_Video_Sources_Aggregate_Fields>;
  nodes: Array<Published_Video_Sources>;
};

/** aggregate fields of "published_video_sources" */
export type Published_Video_Sources_Aggregate_Fields = {
  __typename?: 'published_video_sources_aggregate_fields';
  avg?: Maybe<Published_Video_Sources_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Published_Video_Sources_Max_Fields>;
  min?: Maybe<Published_Video_Sources_Min_Fields>;
  stddev?: Maybe<Published_Video_Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Published_Video_Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Published_Video_Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Published_Video_Sources_Sum_Fields>;
  var_pop?: Maybe<Published_Video_Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Published_Video_Sources_Var_Samp_Fields>;
  variance?: Maybe<Published_Video_Sources_Variance_Fields>;
};

/** aggregate fields of "published_video_sources" */
export type Published_Video_Sources_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Published_Video_Sources_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Published_Video_Sources_Append_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  video_segments?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Published_Video_Sources_Avg_Fields = {
  __typename?: 'published_video_sources_avg_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "published_video_sources". All fields are combined with a logical 'AND'. */
export type Published_Video_Sources_Bool_Exp = {
  _and?: Maybe<Array<Published_Video_Sources_Bool_Exp>>;
  _not?: Maybe<Published_Video_Sources_Bool_Exp>;
  _or?: Maybe<Array<Published_Video_Sources_Bool_Exp>>;
  audio_segments?: Maybe<Jsonb_Comparison_Exp>;
  constrain_is_done?: Maybe<Boolean_Comparison_Exp>;
  constrain_is_necessary?: Maybe<Boolean_Comparison_Exp>;
  constrain_percent?: Maybe<Numeric_Comparison_Exp>;
  generate_waveform_is_done?: Maybe<Boolean_Comparison_Exp>;
  ingest_failed?: Maybe<Boolean_Comparison_Exp>;
  project_uuid?: Maybe<Uuid_Comparison_Exp>;
  stream_probe?: Maybe<Jsonb_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
  video_segments?: Maybe<Jsonb_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Published_Video_Sources_Delete_At_Path_Input = {
  audio_segments?: Maybe<Array<Scalars['String']>>;
  stream_probe?: Maybe<Array<Scalars['String']>>;
  video_segments?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Published_Video_Sources_Delete_Elem_Input = {
  audio_segments?: Maybe<Scalars['Int']>;
  stream_probe?: Maybe<Scalars['Int']>;
  video_segments?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Published_Video_Sources_Delete_Key_Input = {
  audio_segments?: Maybe<Scalars['String']>;
  stream_probe?: Maybe<Scalars['String']>;
  video_segments?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "published_video_sources" */
export type Published_Video_Sources_Inc_Input = {
  constrain_percent?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "published_video_sources" */
export type Published_Video_Sources_Insert_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  constrain_is_done?: Maybe<Scalars['Boolean']>;
  constrain_is_necessary?: Maybe<Scalars['Boolean']>;
  constrain_percent?: Maybe<Scalars['numeric']>;
  generate_waveform_is_done?: Maybe<Scalars['Boolean']>;
  ingest_failed?: Maybe<Scalars['Boolean']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  uuid?: Maybe<Scalars['uuid']>;
  video_segments?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Published_Video_Sources_Max_Fields = {
  __typename?: 'published_video_sources_max_fields';
  constrain_percent?: Maybe<Scalars['numeric']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Published_Video_Sources_Min_Fields = {
  __typename?: 'published_video_sources_min_fields';
  constrain_percent?: Maybe<Scalars['numeric']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "published_video_sources" */
export type Published_Video_Sources_Mutation_Response = {
  __typename?: 'published_video_sources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Published_Video_Sources>;
};

/** Ordering options when selecting data from "published_video_sources". */
export type Published_Video_Sources_Order_By = {
  audio_segments?: Maybe<Order_By>;
  constrain_is_done?: Maybe<Order_By>;
  constrain_is_necessary?: Maybe<Order_By>;
  constrain_percent?: Maybe<Order_By>;
  generate_waveform_is_done?: Maybe<Order_By>;
  ingest_failed?: Maybe<Order_By>;
  project_uuid?: Maybe<Order_By>;
  stream_probe?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
  video_segments?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Published_Video_Sources_Prepend_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  video_segments?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "published_video_sources" */
export enum Published_Video_Sources_Select_Column {
  /** column name */
  AudioSegments = 'audio_segments',
  /** column name */
  ConstrainIsDone = 'constrain_is_done',
  /** column name */
  ConstrainIsNecessary = 'constrain_is_necessary',
  /** column name */
  ConstrainPercent = 'constrain_percent',
  /** column name */
  GenerateWaveformIsDone = 'generate_waveform_is_done',
  /** column name */
  IngestFailed = 'ingest_failed',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  StreamProbe = 'stream_probe',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  VideoSegments = 'video_segments',
}

/** input type for updating data in table "published_video_sources" */
export type Published_Video_Sources_Set_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  constrain_is_done?: Maybe<Scalars['Boolean']>;
  constrain_is_necessary?: Maybe<Scalars['Boolean']>;
  constrain_percent?: Maybe<Scalars['numeric']>;
  generate_waveform_is_done?: Maybe<Scalars['Boolean']>;
  ingest_failed?: Maybe<Scalars['Boolean']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  uuid?: Maybe<Scalars['uuid']>;
  video_segments?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Published_Video_Sources_Stddev_Fields = {
  __typename?: 'published_video_sources_stddev_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Published_Video_Sources_Stddev_Pop_Fields = {
  __typename?: 'published_video_sources_stddev_pop_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Published_Video_Sources_Stddev_Samp_Fields = {
  __typename?: 'published_video_sources_stddev_samp_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Published_Video_Sources_Sum_Fields = {
  __typename?: 'published_video_sources_sum_fields';
  constrain_percent?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Published_Video_Sources_Var_Pop_Fields = {
  __typename?: 'published_video_sources_var_pop_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Published_Video_Sources_Var_Samp_Fields = {
  __typename?: 'published_video_sources_var_samp_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Published_Video_Sources_Variance_Fields = {
  __typename?: 'published_video_sources_variance_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth_providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth_providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth_providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth_user_roles" */
  auth_user_roles: Array<Auth_User_Roles>;
  /** fetch aggregated fields from the table: "auth_user_roles" */
  auth_user_roles_aggregate: Auth_User_Roles_Aggregate;
  /** fetch data from the table: "auth_user_roles" using primary key columns */
  auth_user_roles_by_pk?: Maybe<Auth_User_Roles>;
  /** An array relationship */
  auto_assign_domains: Array<Auto_Assign_Domains>;
  /** An aggregate relationship */
  auto_assign_domains_aggregate: Auto_Assign_Domains_Aggregate;
  /** fetch data from the table: "auto_assign_domains" using primary key columns */
  auto_assign_domains_by_pk?: Maybe<Auto_Assign_Domains>;
  /** fetch data from the table: "canceled_licenses" */
  canceled_licenses: Array<Canceled_Licenses>;
  /** fetch aggregated fields from the table: "canceled_licenses" */
  canceled_licenses_aggregate: Canceled_Licenses_Aggregate;
  /** fetch data from the table: "canceled_licenses" using primary key columns */
  canceled_licenses_by_pk?: Maybe<Canceled_Licenses>;
  /** fetch data from the table: "feature_flags" */
  feature_flags: Array<Feature_Flags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  feature_flags_aggregate: Feature_Flags_Aggregate;
  /** fetch data from the table: "feature_flags" using primary key columns */
  feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** fetch data from the table: "invalid_seats" */
  invalid_seats: Array<Invalid_Seats>;
  /** fetch aggregated fields from the table: "invalid_seats" */
  invalid_seats_aggregate: Invalid_Seats_Aggregate;
  /** fetch data from the table: "invalid_seats" using primary key columns */
  invalid_seats_by_pk?: Maybe<Invalid_Seats>;
  /** fetch data from the table: "invalid_seats_reason" */
  invalid_seats_reason: Array<Invalid_Seats_Reason>;
  /** fetch aggregated fields from the table: "invalid_seats_reason" */
  invalid_seats_reason_aggregate: Invalid_Seats_Reason_Aggregate;
  /** fetch data from the table: "invalid_seats_reason" using primary key columns */
  invalid_seats_reason_by_pk?: Maybe<Invalid_Seats_Reason>;
  /** fetch data from the table: "license_seat_roles" */
  license_seat_roles: Array<License_Seat_Roles>;
  /** fetch aggregated fields from the table: "license_seat_roles" */
  license_seat_roles_aggregate: License_Seat_Roles_Aggregate;
  /** fetch data from the table: "license_seat_roles" using primary key columns */
  license_seat_roles_by_pk?: Maybe<License_Seat_Roles>;
  /** fetch data from the table: "license_seat_tiers" */
  license_seat_tiers: Array<License_Seat_Tiers>;
  /** fetch aggregated fields from the table: "license_seat_tiers" */
  license_seat_tiers_aggregate: License_Seat_Tiers_Aggregate;
  /** fetch data from the table: "license_seat_tiers" using primary key columns */
  license_seat_tiers_by_pk?: Maybe<License_Seat_Tiers>;
  /** An array relationship */
  license_seats: Array<License_Seats>;
  /** An aggregate relationship */
  license_seats_aggregate: License_Seats_Aggregate;
  /** An array relationship */
  licenses: Array<Licenses>;
  /** An aggregate relationship */
  licenses_aggregate: Licenses_Aggregate;
  /** fetch data from the table: "licenses" using primary key columns */
  licenses_by_pk?: Maybe<Licenses>;
  /** fetch data from the table: "migration.sync_jobs" */
  migration_sync_jobs: Array<Migration_Sync_Jobs>;
  /** fetch aggregated fields from the table: "migration.sync_jobs" */
  migration_sync_jobs_aggregate: Migration_Sync_Jobs_Aggregate;
  /** fetch data from the table: "migration.sync_jobs" using primary key columns */
  migration_sync_jobs_by_pk?: Maybe<Migration_Sync_Jobs>;
  /** fetch data from the table: "migration.sync_status" */
  migration_sync_status: Array<Migration_Sync_Status>;
  /** fetch aggregated fields from the table: "migration.sync_status" */
  migration_sync_status_aggregate: Migration_Sync_Status_Aggregate;
  /** fetch data from the table: "migration.sync_status" using primary key columns */
  migration_sync_status_by_pk?: Maybe<Migration_Sync_Status>;
  /** fetch data from the table: "organization_owners" */
  organization_owners: Array<Organization_Owners>;
  /** fetch aggregated fields from the table: "organization_owners" */
  organization_owners_aggregate: Organization_Owners_Aggregate;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "owned_licenses" */
  owned_licenses: Array<Owned_Licenses>;
  /** fetch aggregated fields from the table: "owned_licenses" */
  owned_licenses_aggregate: Owned_Licenses_Aggregate;
  /** fetch data from the table: "project_view_permissions" */
  project_view_permissions: Array<Project_View_Permissions>;
  /** fetch aggregated fields from the table: "project_view_permissions" */
  project_view_permissions_aggregate: Project_View_Permissions_Aggregate;
  /** fetch data from the table: "project_view_permissions" using primary key columns */
  project_view_permissions_by_pk?: Maybe<Project_View_Permissions>;
  /** fetch data from the table: "project_view_permissions_types" */
  project_view_permissions_types: Array<Project_View_Permissions_Types>;
  /** fetch aggregated fields from the table: "project_view_permissions_types" */
  project_view_permissions_types_aggregate: Project_View_Permissions_Types_Aggregate;
  /** fetch data from the table: "project_view_permissions_types" using primary key columns */
  project_view_permissions_types_by_pk?: Maybe<Project_View_Permissions_Types>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "published_project_owners" */
  published_project_owners: Array<Published_Project_Owners>;
  /** fetch aggregated fields from the table: "published_project_owners" */
  published_project_owners_aggregate: Published_Project_Owners_Aggregate;
  /** fetch data from the table: "published_projects" */
  published_projects: Array<Published_Projects>;
  /** fetch aggregated fields from the table: "published_projects" */
  published_projects_aggregate: Published_Projects_Aggregate;
  /** fetch data from the table: "published_video_sources" */
  published_video_sources: Array<Published_Video_Sources>;
  /** fetch aggregated fields from the table: "published_video_sources" */
  published_video_sources_aggregate: Published_Video_Sources_Aggregate;
  /** fetch data from the table: "refresh_tokens" */
  refresh_tokens: Array<Refresh_Tokens>;
  /** fetch aggregated fields from the table: "refresh_tokens" */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate;
  /** fetch data from the table: "refresh_tokens" using primary key columns */
  refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** fetch data from the table: "render_types" */
  render_types: Array<Render_Types>;
  /** fetch aggregated fields from the table: "render_types" */
  render_types_aggregate: Render_Types_Aggregate;
  /** fetch data from the table: "render_types" using primary key columns */
  render_types_by_pk?: Maybe<Render_Types>;
  /** fetch data from the table: "renders" */
  renders: Array<Renders>;
  /** fetch aggregated fields from the table: "renders" */
  renders_aggregate: Renders_Aggregate;
  /** fetch data from the table: "renders" using primary key columns */
  renders_by_pk?: Maybe<Renders>;
  /** An array relationship */
  seats: Array<Seats>;
  /** An aggregate relationship */
  seats_aggregate: Seats_Aggregate;
  /** fetch data from the table: "seats" using primary key columns */
  seats_by_pk?: Maybe<Seats>;
  /** fetch data from the table: "simple_export_tasks" */
  simple_export_tasks: Array<Simple_Export_Tasks>;
  /** fetch aggregated fields from the table: "simple_export_tasks" */
  simple_export_tasks_aggregate: Simple_Export_Tasks_Aggregate;
  /** fetch data from the table: "simple_export_tasks" using primary key columns */
  simple_export_tasks_by_pk?: Maybe<Simple_Export_Tasks>;
  /** fetch data from the table: "survey.admin_types" */
  survey_admin_types: Array<Survey_Admin_Types>;
  /** fetch aggregated fields from the table: "survey.admin_types" */
  survey_admin_types_aggregate: Survey_Admin_Types_Aggregate;
  /** fetch data from the table: "survey.admin_types" using primary key columns */
  survey_admin_types_by_pk?: Maybe<Survey_Admin_Types>;
  /** fetch data from the table: "survey.corporate_responses" */
  survey_corporate_responses: Array<Survey_Corporate_Responses>;
  /** fetch aggregated fields from the table: "survey.corporate_responses" */
  survey_corporate_responses_aggregate: Survey_Corporate_Responses_Aggregate;
  /** fetch data from the table: "survey.corporate_responses" using primary key columns */
  survey_corporate_responses_by_pk?: Maybe<Survey_Corporate_Responses>;
  /** fetch data from the table: "survey.corporate_types" */
  survey_corporate_types: Array<Survey_Corporate_Types>;
  /** fetch aggregated fields from the table: "survey.corporate_types" */
  survey_corporate_types_aggregate: Survey_Corporate_Types_Aggregate;
  /** fetch data from the table: "survey.corporate_types" using primary key columns */
  survey_corporate_types_by_pk?: Maybe<Survey_Corporate_Types>;
  /** fetch data from the table: "survey.educator_types" */
  survey_educator_types: Array<Survey_Educator_Types>;
  /** fetch aggregated fields from the table: "survey.educator_types" */
  survey_educator_types_aggregate: Survey_Educator_Types_Aggregate;
  /** fetch data from the table: "survey.educator_types" using primary key columns */
  survey_educator_types_by_pk?: Maybe<Survey_Educator_Types>;
  /** fetch data from the table: "survey.other_types" */
  survey_other_types: Array<Survey_Other_Types>;
  /** fetch aggregated fields from the table: "survey.other_types" */
  survey_other_types_aggregate: Survey_Other_Types_Aggregate;
  /** fetch data from the table: "survey.other_types" using primary key columns */
  survey_other_types_by_pk?: Maybe<Survey_Other_Types>;
  /** fetch data from the table: "survey.survey_responses" */
  survey_survey_responses: Array<Survey_Survey_Responses>;
  /** fetch aggregated fields from the table: "survey.survey_responses" */
  survey_survey_responses_aggregate: Survey_Survey_Responses_Aggregate;
  /** fetch data from the table: "survey.survey_responses" using primary key columns */
  survey_survey_responses_by_pk?: Maybe<Survey_Survey_Responses>;
  /** fetch data from the table: "survey.user_types" */
  survey_user_types: Array<Survey_User_Types>;
  /** fetch aggregated fields from the table: "survey.user_types" */
  survey_user_types_aggregate: Survey_User_Types_Aggregate;
  /** fetch data from the table: "survey.user_types" using primary key columns */
  survey_user_types_by_pk?: Maybe<Survey_User_Types>;
  /** fetch data from the table: "unscheduled_invitations" */
  unscheduled_invitations: Array<Unscheduled_Invitations>;
  /** fetch aggregated fields from the table: "unscheduled_invitations" */
  unscheduled_invitations_aggregate: Unscheduled_Invitations_Aggregate;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table: "user_settings_names" */
  user_settings_names: Array<User_Settings_Names>;
  /** fetch aggregated fields from the table: "user_settings_names" */
  user_settings_names_aggregate: User_Settings_Names_Aggregate;
  /** fetch data from the table: "user_settings_names" using primary key columns */
  user_settings_names_by_pk?: Maybe<User_Settings_Names>;
  /** fetch data from the table: "user_settings_values" */
  user_settings_values: Array<User_Settings_Values>;
  /** fetch aggregated fields from the table: "user_settings_values" */
  user_settings_values_aggregate: User_Settings_Values_Aggregate;
  /** fetch data from the table: "user_settings_values" using primary key columns */
  user_settings_values_by_pk?: Maybe<User_Settings_Values>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  video_sources: Array<Video_Sources>;
  /** An aggregate relationship */
  video_sources_aggregate: Video_Sources_Aggregate;
  /** fetch data from the table: "video_sources" using primary key columns */
  video_sources_by_pk?: Maybe<Video_Sources>;
  /** fetch data from the table: "video_upload_strategies" */
  video_upload_strategies: Array<Video_Upload_Strategies>;
  /** fetch aggregated fields from the table: "video_upload_strategies" */
  video_upload_strategies_aggregate: Video_Upload_Strategies_Aggregate;
  /** fetch data from the table: "video_upload_strategies" using primary key columns */
  video_upload_strategies_by_pk?: Maybe<Video_Upload_Strategies>;
  /** fetch data from the table: "viewer_analytics" */
  viewer_analytics: Array<Viewer_Analytics>;
  /** fetch aggregated fields from the table: "viewer_analytics" */
  viewer_analytics_aggregate: Viewer_Analytics_Aggregate;
  /** fetch data from the table: "viewer_analytics" using primary key columns */
  viewer_analytics_by_pk?: Maybe<Viewer_Analytics>;
};

export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};

export type Query_RootAuth_User_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Roles_Order_By>>;
  where?: Maybe<Auth_User_Roles_Bool_Exp>;
};

export type Query_RootAuth_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Roles_Order_By>>;
  where?: Maybe<Auth_User_Roles_Bool_Exp>;
};

export type Query_RootAuth_User_Roles_By_PkArgs = {
  role: Scalars['String'];
};

export type Query_RootAuto_Assign_DomainsArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

export type Query_RootAuto_Assign_Domains_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

export type Query_RootAuto_Assign_Domains_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootCanceled_LicensesArgs = {
  distinct_on?: Maybe<Array<Canceled_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Canceled_Licenses_Order_By>>;
  where?: Maybe<Canceled_Licenses_Bool_Exp>;
};

export type Query_RootCanceled_Licenses_AggregateArgs = {
  distinct_on?: Maybe<Array<Canceled_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Canceled_Licenses_Order_By>>;
  where?: Maybe<Canceled_Licenses_Bool_Exp>;
};

export type Query_RootCanceled_Licenses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootFeature_FlagsArgs = {
  distinct_on?: Maybe<Array<Feature_Flags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Flags_Order_By>>;
  where?: Maybe<Feature_Flags_Bool_Exp>;
};

export type Query_RootFeature_Flags_AggregateArgs = {
  distinct_on?: Maybe<Array<Feature_Flags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Flags_Order_By>>;
  where?: Maybe<Feature_Flags_Bool_Exp>;
};

export type Query_RootFeature_Flags_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootInvalid_SeatsArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Order_By>>;
  where?: Maybe<Invalid_Seats_Bool_Exp>;
};

export type Query_RootInvalid_Seats_AggregateArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Order_By>>;
  where?: Maybe<Invalid_Seats_Bool_Exp>;
};

export type Query_RootInvalid_Seats_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootInvalid_Seats_ReasonArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Reason_Order_By>>;
  where?: Maybe<Invalid_Seats_Reason_Bool_Exp>;
};

export type Query_RootInvalid_Seats_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Reason_Order_By>>;
  where?: Maybe<Invalid_Seats_Reason_Bool_Exp>;
};

export type Query_RootInvalid_Seats_Reason_By_PkArgs = {
  invalid_reason: Scalars['String'];
};

export type Query_RootLicense_Seat_RolesArgs = {
  distinct_on?: Maybe<Array<License_Seat_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Roles_Order_By>>;
  where?: Maybe<License_Seat_Roles_Bool_Exp>;
};

export type Query_RootLicense_Seat_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seat_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Roles_Order_By>>;
  where?: Maybe<License_Seat_Roles_Bool_Exp>;
};

export type Query_RootLicense_Seat_Roles_By_PkArgs = {
  role: Scalars['String'];
};

export type Query_RootLicense_Seat_TiersArgs = {
  distinct_on?: Maybe<Array<License_Seat_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Tiers_Order_By>>;
  where?: Maybe<License_Seat_Tiers_Bool_Exp>;
};

export type Query_RootLicense_Seat_Tiers_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seat_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Tiers_Order_By>>;
  where?: Maybe<License_Seat_Tiers_Bool_Exp>;
};

export type Query_RootLicense_Seat_Tiers_By_PkArgs = {
  tier: Scalars['String'];
};

export type Query_RootLicense_SeatsArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

export type Query_RootLicense_Seats_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

export type Query_RootLicensesArgs = {
  distinct_on?: Maybe<Array<Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Licenses_Order_By>>;
  where?: Maybe<Licenses_Bool_Exp>;
};

export type Query_RootLicenses_AggregateArgs = {
  distinct_on?: Maybe<Array<Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Licenses_Order_By>>;
  where?: Maybe<Licenses_Bool_Exp>;
};

export type Query_RootLicenses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootMigration_Sync_JobsArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Jobs_Order_By>>;
  where?: Maybe<Migration_Sync_Jobs_Bool_Exp>;
};

export type Query_RootMigration_Sync_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Jobs_Order_By>>;
  where?: Maybe<Migration_Sync_Jobs_Bool_Exp>;
};

export type Query_RootMigration_Sync_Jobs_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootMigration_Sync_StatusArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Status_Order_By>>;
  where?: Maybe<Migration_Sync_Status_Bool_Exp>;
};

export type Query_RootMigration_Sync_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Status_Order_By>>;
  where?: Maybe<Migration_Sync_Status_Bool_Exp>;
};

export type Query_RootMigration_Sync_Status_By_PkArgs = {
  sync_job: Migration_Sync_Jobs_Enum;
};

export type Query_RootOrganization_OwnersArgs = {
  distinct_on?: Maybe<Array<Organization_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Owners_Order_By>>;
  where?: Maybe<Organization_Owners_Bool_Exp>;
};

export type Query_RootOrganization_Owners_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Owners_Order_By>>;
  where?: Maybe<Organization_Owners_Bool_Exp>;
};

export type Query_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

export type Query_RootOrganizations_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootOwned_LicensesArgs = {
  distinct_on?: Maybe<Array<Owned_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Owned_Licenses_Order_By>>;
  where?: Maybe<Owned_Licenses_Bool_Exp>;
};

export type Query_RootOwned_Licenses_AggregateArgs = {
  distinct_on?: Maybe<Array<Owned_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Owned_Licenses_Order_By>>;
  where?: Maybe<Owned_Licenses_Bool_Exp>;
};

export type Query_RootProject_View_PermissionsArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Order_By>>;
  where?: Maybe<Project_View_Permissions_Bool_Exp>;
};

export type Query_RootProject_View_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Order_By>>;
  where?: Maybe<Project_View_Permissions_Bool_Exp>;
};

export type Query_RootProject_View_Permissions_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootProject_View_Permissions_TypesArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Types_Order_By>>;
  where?: Maybe<Project_View_Permissions_Types_Bool_Exp>;
};

export type Query_RootProject_View_Permissions_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Types_Order_By>>;
  where?: Maybe<Project_View_Permissions_Types_Bool_Exp>;
};

export type Query_RootProject_View_Permissions_Types_By_PkArgs = {
  permission: Scalars['String'];
};

export type Query_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};

export type Query_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};

export type Query_RootProjects_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootPublished_Project_OwnersArgs = {
  distinct_on?: Maybe<Array<Published_Project_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Project_Owners_Order_By>>;
  where?: Maybe<Published_Project_Owners_Bool_Exp>;
};

export type Query_RootPublished_Project_Owners_AggregateArgs = {
  distinct_on?: Maybe<Array<Published_Project_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Project_Owners_Order_By>>;
  where?: Maybe<Published_Project_Owners_Bool_Exp>;
};

export type Query_RootPublished_ProjectsArgs = {
  distinct_on?: Maybe<Array<Published_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Projects_Order_By>>;
  where?: Maybe<Published_Projects_Bool_Exp>;
};

export type Query_RootPublished_Projects_AggregateArgs = {
  distinct_on?: Maybe<Array<Published_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Projects_Order_By>>;
  where?: Maybe<Published_Projects_Bool_Exp>;
};

export type Query_RootPublished_Video_SourcesArgs = {
  distinct_on?: Maybe<Array<Published_Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Video_Sources_Order_By>>;
  where?: Maybe<Published_Video_Sources_Bool_Exp>;
};

export type Query_RootPublished_Video_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Published_Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Video_Sources_Order_By>>;
  where?: Maybe<Published_Video_Sources_Bool_Exp>;
};

export type Query_RootRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>;
  where?: Maybe<Refresh_Tokens_Bool_Exp>;
};

export type Query_RootRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>;
  where?: Maybe<Refresh_Tokens_Bool_Exp>;
};

export type Query_RootRefresh_Tokens_By_PkArgs = {
  user_uuid: Scalars['uuid'];
};

export type Query_RootRender_TypesArgs = {
  distinct_on?: Maybe<Array<Render_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Render_Types_Order_By>>;
  where?: Maybe<Render_Types_Bool_Exp>;
};

export type Query_RootRender_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Render_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Render_Types_Order_By>>;
  where?: Maybe<Render_Types_Bool_Exp>;
};

export type Query_RootRender_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootRendersArgs = {
  distinct_on?: Maybe<Array<Renders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Renders_Order_By>>;
  where?: Maybe<Renders_Bool_Exp>;
};

export type Query_RootRenders_AggregateArgs = {
  distinct_on?: Maybe<Array<Renders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Renders_Order_By>>;
  where?: Maybe<Renders_Bool_Exp>;
};

export type Query_RootRenders_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootSeatsArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

export type Query_RootSeats_AggregateArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

export type Query_RootSeats_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootSimple_Export_TasksArgs = {
  distinct_on?: Maybe<Array<Simple_Export_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Export_Tasks_Order_By>>;
  where?: Maybe<Simple_Export_Tasks_Bool_Exp>;
};

export type Query_RootSimple_Export_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Simple_Export_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Export_Tasks_Order_By>>;
  where?: Maybe<Simple_Export_Tasks_Bool_Exp>;
};

export type Query_RootSimple_Export_Tasks_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootSurvey_Admin_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Admin_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Admin_Types_Order_By>>;
  where?: Maybe<Survey_Admin_Types_Bool_Exp>;
};

export type Query_RootSurvey_Admin_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Admin_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Admin_Types_Order_By>>;
  where?: Maybe<Survey_Admin_Types_Bool_Exp>;
};

export type Query_RootSurvey_Admin_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootSurvey_Corporate_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

export type Query_RootSurvey_Corporate_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

export type Query_RootSurvey_Corporate_Responses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootSurvey_Corporate_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Types_Order_By>>;
  where?: Maybe<Survey_Corporate_Types_Bool_Exp>;
};

export type Query_RootSurvey_Corporate_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Types_Order_By>>;
  where?: Maybe<Survey_Corporate_Types_Bool_Exp>;
};

export type Query_RootSurvey_Corporate_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootSurvey_Educator_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Educator_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Educator_Types_Order_By>>;
  where?: Maybe<Survey_Educator_Types_Bool_Exp>;
};

export type Query_RootSurvey_Educator_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Educator_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Educator_Types_Order_By>>;
  where?: Maybe<Survey_Educator_Types_Bool_Exp>;
};

export type Query_RootSurvey_Educator_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootSurvey_Other_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Other_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Other_Types_Order_By>>;
  where?: Maybe<Survey_Other_Types_Bool_Exp>;
};

export type Query_RootSurvey_Other_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Other_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Other_Types_Order_By>>;
  where?: Maybe<Survey_Other_Types_Bool_Exp>;
};

export type Query_RootSurvey_Other_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootSurvey_Survey_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

export type Query_RootSurvey_Survey_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

export type Query_RootSurvey_Survey_Responses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootSurvey_User_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_User_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_User_Types_Order_By>>;
  where?: Maybe<Survey_User_Types_Bool_Exp>;
};

export type Query_RootSurvey_User_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_User_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_User_Types_Order_By>>;
  where?: Maybe<Survey_User_Types_Bool_Exp>;
};

export type Query_RootSurvey_User_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Query_RootUnscheduled_InvitationsArgs = {
  distinct_on?: Maybe<Array<Unscheduled_Invitations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unscheduled_Invitations_Order_By>>;
  where?: Maybe<Unscheduled_Invitations_Bool_Exp>;
};

export type Query_RootUnscheduled_Invitations_AggregateArgs = {
  distinct_on?: Maybe<Array<Unscheduled_Invitations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unscheduled_Invitations_Order_By>>;
  where?: Maybe<Unscheduled_Invitations_Bool_Exp>;
};

export type Query_RootUser_SettingsArgs = {
  distinct_on?: Maybe<Array<User_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Order_By>>;
  where?: Maybe<User_Settings_Bool_Exp>;
};

export type Query_RootUser_Settings_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Order_By>>;
  where?: Maybe<User_Settings_Bool_Exp>;
};

export type Query_RootUser_Settings_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootUser_Settings_NamesArgs = {
  distinct_on?: Maybe<Array<User_Settings_Names_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Names_Order_By>>;
  where?: Maybe<User_Settings_Names_Bool_Exp>;
};

export type Query_RootUser_Settings_Names_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Settings_Names_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Names_Order_By>>;
  where?: Maybe<User_Settings_Names_Bool_Exp>;
};

export type Query_RootUser_Settings_Names_By_PkArgs = {
  setting_name: Scalars['String'];
};

export type Query_RootUser_Settings_ValuesArgs = {
  distinct_on?: Maybe<Array<User_Settings_Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Values_Order_By>>;
  where?: Maybe<User_Settings_Values_Bool_Exp>;
};

export type Query_RootUser_Settings_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Settings_Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Values_Order_By>>;
  where?: Maybe<User_Settings_Values_Bool_Exp>;
};

export type Query_RootUser_Settings_Values_By_PkArgs = {
  setting_value: Scalars['String'];
};

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootVideo_SourcesArgs = {
  distinct_on?: Maybe<Array<Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Sources_Order_By>>;
  where?: Maybe<Video_Sources_Bool_Exp>;
};

export type Query_RootVideo_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Sources_Order_By>>;
  where?: Maybe<Video_Sources_Bool_Exp>;
};

export type Query_RootVideo_Sources_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Query_RootVideo_Upload_StrategiesArgs = {
  distinct_on?: Maybe<Array<Video_Upload_Strategies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Upload_Strategies_Order_By>>;
  where?: Maybe<Video_Upload_Strategies_Bool_Exp>;
};

export type Query_RootVideo_Upload_Strategies_AggregateArgs = {
  distinct_on?: Maybe<Array<Video_Upload_Strategies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Upload_Strategies_Order_By>>;
  where?: Maybe<Video_Upload_Strategies_Bool_Exp>;
};

export type Query_RootVideo_Upload_Strategies_By_PkArgs = {
  video_upload_strategy: Scalars['String'];
};

export type Query_RootViewer_AnalyticsArgs = {
  distinct_on?: Maybe<Array<Viewer_Analytics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Viewer_Analytics_Order_By>>;
  where?: Maybe<Viewer_Analytics_Bool_Exp>;
};

export type Query_RootViewer_Analytics_AggregateArgs = {
  distinct_on?: Maybe<Array<Viewer_Analytics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Viewer_Analytics_Order_By>>;
  where?: Maybe<Viewer_Analytics_Bool_Exp>;
};

export type Query_RootViewer_Analytics_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** refresh tokens comes from google Oauth. we assume that refresh tokens are unique */
export type Refresh_Tokens = {
  __typename?: 'refresh_tokens';
  created_at: Scalars['timestamptz'];
  expired?: Maybe<Scalars['Boolean']>;
  refresh_token: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_uuid: Scalars['uuid'];
};

/** aggregated selection of "refresh_tokens" */
export type Refresh_Tokens_Aggregate = {
  __typename?: 'refresh_tokens_aggregate';
  aggregate?: Maybe<Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Refresh_Tokens>;
};

/** aggregate fields of "refresh_tokens" */
export type Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'refresh_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Refresh_Tokens_Max_Fields>;
  min?: Maybe<Refresh_Tokens_Min_Fields>;
};

/** aggregate fields of "refresh_tokens" */
export type Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Refresh_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "refresh_tokens". All fields are combined with a logical 'AND'. */
export type Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Refresh_Tokens_Bool_Exp>>;
  _not?: Maybe<Refresh_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Refresh_Tokens_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expired?: Maybe<Boolean_Comparison_Exp>;
  refresh_token?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "refresh_tokens" */
export enum Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey',
}

/** input type for inserting data into table "refresh_tokens" */
export type Refresh_Tokens_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expired?: Maybe<Scalars['Boolean']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Refresh_Tokens_Max_Fields = {
  __typename?: 'refresh_tokens_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Refresh_Tokens_Min_Fields = {
  __typename?: 'refresh_tokens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "refresh_tokens" */
export type Refresh_Tokens_Mutation_Response = {
  __typename?: 'refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Refresh_Tokens>;
};

/** on_conflict condition type for table "refresh_tokens" */
export type Refresh_Tokens_On_Conflict = {
  constraint: Refresh_Tokens_Constraint;
  update_columns?: Array<Refresh_Tokens_Update_Column>;
  where?: Maybe<Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "refresh_tokens". */
export type Refresh_Tokens_Order_By = {
  created_at?: Maybe<Order_By>;
  expired?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: refresh_tokens */
export type Refresh_Tokens_Pk_Columns_Input = {
  user_uuid: Scalars['uuid'];
};

/** select columns of table "refresh_tokens" */
export enum Refresh_Tokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expired = 'expired',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUuid = 'user_uuid',
}

/** input type for updating data in table "refresh_tokens" */
export type Refresh_Tokens_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expired?: Maybe<Scalars['Boolean']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "refresh_tokens" */
export enum Refresh_Tokens_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expired = 'expired',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUuid = 'user_uuid',
}

/** enum table for kinds of renders */
export type Render_Types = {
  __typename?: 'render_types';
  comment: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "render_types" */
export type Render_Types_Aggregate = {
  __typename?: 'render_types_aggregate';
  aggregate?: Maybe<Render_Types_Aggregate_Fields>;
  nodes: Array<Render_Types>;
};

/** aggregate fields of "render_types" */
export type Render_Types_Aggregate_Fields = {
  __typename?: 'render_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Render_Types_Max_Fields>;
  min?: Maybe<Render_Types_Min_Fields>;
};

/** aggregate fields of "render_types" */
export type Render_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Render_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "render_types". All fields are combined with a logical 'AND'. */
export type Render_Types_Bool_Exp = {
  _and?: Maybe<Array<Render_Types_Bool_Exp>>;
  _not?: Maybe<Render_Types_Bool_Exp>;
  _or?: Maybe<Array<Render_Types_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "render_types" */
export enum Render_Types_Constraint {
  /** unique or primary key constraint */
  RenderTypesPkey = 'render_types_pkey',
}

export enum Render_Types_Enum {
  /** flattened mp4 file */
  Mp4 = 'mp4',
}

/** Boolean expression to compare columns of type "render_types_enum". All fields are combined with logical 'AND'. */
export type Render_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Render_Types_Enum>;
  _in?: Maybe<Array<Render_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Render_Types_Enum>;
  _nin?: Maybe<Array<Render_Types_Enum>>;
};

/** input type for inserting data into table "render_types" */
export type Render_Types_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Render_Types_Max_Fields = {
  __typename?: 'render_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Render_Types_Min_Fields = {
  __typename?: 'render_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "render_types" */
export type Render_Types_Mutation_Response = {
  __typename?: 'render_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Render_Types>;
};

/** on_conflict condition type for table "render_types" */
export type Render_Types_On_Conflict = {
  constraint: Render_Types_Constraint;
  update_columns?: Array<Render_Types_Update_Column>;
  where?: Maybe<Render_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "render_types". */
export type Render_Types_Order_By = {
  comment?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: render_types */
export type Render_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "render_types" */
export enum Render_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "render_types" */
export type Render_Types_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "render_types" */
export enum Render_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value',
}

/** represents render jobs requested by the user */
export type Renders = {
  __typename?: 'renders';
  asset_generation_complete?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  duration_ms: Scalars['Int'];
  mp4_asset?: Maybe<Scalars['String']>;
  owner_uuid: Scalars['uuid'];
  project_uuid: Scalars['uuid'];
  render_failed?: Maybe<Scalars['Boolean']>;
  render_type: Render_Types_Enum;
  scene_snapshot: Scalars['jsonb'];
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  snapshot_md5: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** represents render jobs requested by the user */
export type RendersScene_SnapshotArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "renders" */
export type Renders_Aggregate = {
  __typename?: 'renders_aggregate';
  aggregate?: Maybe<Renders_Aggregate_Fields>;
  nodes: Array<Renders>;
};

/** aggregate fields of "renders" */
export type Renders_Aggregate_Fields = {
  __typename?: 'renders_aggregate_fields';
  avg?: Maybe<Renders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Renders_Max_Fields>;
  min?: Maybe<Renders_Min_Fields>;
  stddev?: Maybe<Renders_Stddev_Fields>;
  stddev_pop?: Maybe<Renders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Renders_Stddev_Samp_Fields>;
  sum?: Maybe<Renders_Sum_Fields>;
  var_pop?: Maybe<Renders_Var_Pop_Fields>;
  var_samp?: Maybe<Renders_Var_Samp_Fields>;
  variance?: Maybe<Renders_Variance_Fields>;
};

/** aggregate fields of "renders" */
export type Renders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Renders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Renders_Append_Input = {
  scene_snapshot?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Renders_Avg_Fields = {
  __typename?: 'renders_avg_fields';
  duration_ms?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "renders". All fields are combined with a logical 'AND'. */
export type Renders_Bool_Exp = {
  _and?: Maybe<Array<Renders_Bool_Exp>>;
  _not?: Maybe<Renders_Bool_Exp>;
  _or?: Maybe<Array<Renders_Bool_Exp>>;
  asset_generation_complete?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  duration_ms?: Maybe<Int_Comparison_Exp>;
  mp4_asset?: Maybe<String_Comparison_Exp>;
  owner_uuid?: Maybe<Uuid_Comparison_Exp>;
  project_uuid?: Maybe<Uuid_Comparison_Exp>;
  render_failed?: Maybe<Boolean_Comparison_Exp>;
  render_type?: Maybe<Render_Types_Enum_Comparison_Exp>;
  scene_snapshot?: Maybe<Jsonb_Comparison_Exp>;
  scheduled_at?: Maybe<Timestamptz_Comparison_Exp>;
  snapshot_md5?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "renders" */
export enum Renders_Constraint {
  /** unique or primary key constraint */
  RendersPkey = 'renders_pkey',
  /** unique or primary key constraint */
  RendersSnapshotMd5ProjectUuidKey = 'renders_snapshot_md5_project_uuid_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Renders_Delete_At_Path_Input = {
  scene_snapshot?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Renders_Delete_Elem_Input = {
  scene_snapshot?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Renders_Delete_Key_Input = {
  scene_snapshot?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "renders" */
export type Renders_Inc_Input = {
  duration_ms?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "renders" */
export type Renders_Insert_Input = {
  asset_generation_complete?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration_ms?: Maybe<Scalars['Int']>;
  mp4_asset?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  render_failed?: Maybe<Scalars['Boolean']>;
  render_type?: Maybe<Render_Types_Enum>;
  scene_snapshot?: Maybe<Scalars['jsonb']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  snapshot_md5?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Renders_Max_Fields = {
  __typename?: 'renders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  duration_ms?: Maybe<Scalars['Int']>;
  mp4_asset?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  snapshot_md5?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Renders_Min_Fields = {
  __typename?: 'renders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  duration_ms?: Maybe<Scalars['Int']>;
  mp4_asset?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  snapshot_md5?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "renders" */
export type Renders_Mutation_Response = {
  __typename?: 'renders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Renders>;
};

/** on_conflict condition type for table "renders" */
export type Renders_On_Conflict = {
  constraint: Renders_Constraint;
  update_columns?: Array<Renders_Update_Column>;
  where?: Maybe<Renders_Bool_Exp>;
};

/** Ordering options when selecting data from "renders". */
export type Renders_Order_By = {
  asset_generation_complete?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  duration_ms?: Maybe<Order_By>;
  mp4_asset?: Maybe<Order_By>;
  owner_uuid?: Maybe<Order_By>;
  project_uuid?: Maybe<Order_By>;
  render_failed?: Maybe<Order_By>;
  render_type?: Maybe<Order_By>;
  scene_snapshot?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  snapshot_md5?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: renders */
export type Renders_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Renders_Prepend_Input = {
  scene_snapshot?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "renders" */
export enum Renders_Select_Column {
  /** column name */
  AssetGenerationComplete = 'asset_generation_complete',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DurationMs = 'duration_ms',
  /** column name */
  Mp4Asset = 'mp4_asset',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  RenderFailed = 'render_failed',
  /** column name */
  RenderType = 'render_type',
  /** column name */
  SceneSnapshot = 'scene_snapshot',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  SnapshotMd5 = 'snapshot_md5',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "renders" */
export type Renders_Set_Input = {
  asset_generation_complete?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration_ms?: Maybe<Scalars['Int']>;
  mp4_asset?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  render_failed?: Maybe<Scalars['Boolean']>;
  render_type?: Maybe<Render_Types_Enum>;
  scene_snapshot?: Maybe<Scalars['jsonb']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  snapshot_md5?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Renders_Stddev_Fields = {
  __typename?: 'renders_stddev_fields';
  duration_ms?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Renders_Stddev_Pop_Fields = {
  __typename?: 'renders_stddev_pop_fields';
  duration_ms?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Renders_Stddev_Samp_Fields = {
  __typename?: 'renders_stddev_samp_fields';
  duration_ms?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Renders_Sum_Fields = {
  __typename?: 'renders_sum_fields';
  duration_ms?: Maybe<Scalars['Int']>;
};

/** update columns of table "renders" */
export enum Renders_Update_Column {
  /** column name */
  AssetGenerationComplete = 'asset_generation_complete',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DurationMs = 'duration_ms',
  /** column name */
  Mp4Asset = 'mp4_asset',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  RenderFailed = 'render_failed',
  /** column name */
  RenderType = 'render_type',
  /** column name */
  SceneSnapshot = 'scene_snapshot',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  SnapshotMd5 = 'snapshot_md5',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** aggregate var_pop on columns */
export type Renders_Var_Pop_Fields = {
  __typename?: 'renders_var_pop_fields';
  duration_ms?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Renders_Var_Samp_Fields = {
  __typename?: 'renders_var_samp_fields';
  duration_ms?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Renders_Variance_Fields = {
  __typename?: 'renders_variance_fields';
  duration_ms?: Maybe<Scalars['Float']>;
};

/** This table holds claimed and unclaimed seats. A claimed seat has a user associated with it on the user_uuid column. */
export type Seats = {
  __typename?: 'seats';
  created_at: Scalars['timestamptz'];
  /** This is the email that a user manually inputs. This may not map directly to the google validated account email. */
  invited_email: Scalars['String'];
  /** An object relationship */
  inviter?: Maybe<Users>;
  inviter_uuid?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  license: Licenses;
  /** An object relationship */
  license_seat?: Maybe<License_Seats>;
  license_uuid: Scalars['uuid'];
  role: License_Seat_Roles_Enum;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  tier: License_Seat_Tiers_Enum;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "seats" */
export type Seats_Aggregate = {
  __typename?: 'seats_aggregate';
  aggregate?: Maybe<Seats_Aggregate_Fields>;
  nodes: Array<Seats>;
};

/** aggregate fields of "seats" */
export type Seats_Aggregate_Fields = {
  __typename?: 'seats_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Seats_Max_Fields>;
  min?: Maybe<Seats_Min_Fields>;
};

/** aggregate fields of "seats" */
export type Seats_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Seats_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "seats" */
export type Seats_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Seats_Max_Order_By>;
  min?: Maybe<Seats_Min_Order_By>;
};

/** input type for inserting array relation for remote table "seats" */
export type Seats_Arr_Rel_Insert_Input = {
  data: Array<Seats_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Seats_On_Conflict>;
};

/** Boolean expression to filter rows from the table "seats". All fields are combined with a logical 'AND'. */
export type Seats_Bool_Exp = {
  _and?: Maybe<Array<Seats_Bool_Exp>>;
  _not?: Maybe<Seats_Bool_Exp>;
  _or?: Maybe<Array<Seats_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  invited_email?: Maybe<String_Comparison_Exp>;
  inviter?: Maybe<Users_Bool_Exp>;
  inviter_uuid?: Maybe<Uuid_Comparison_Exp>;
  license?: Maybe<Licenses_Bool_Exp>;
  license_seat?: Maybe<License_Seats_Bool_Exp>;
  license_uuid?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<License_Seat_Roles_Enum_Comparison_Exp>;
  scheduled_at?: Maybe<Timestamptz_Comparison_Exp>;
  tier?: Maybe<License_Seat_Tiers_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "seats" */
export enum Seats_Constraint {
  /** unique or primary key constraint */
  SeatsLicenseUuidInvitedEmailKey = 'seats_license_uuid_invited_email_key',
  /** unique or primary key constraint */
  SeatsLicenseUuidUserUuidKey = 'seats_license_uuid_user_uuid_key',
  /** unique or primary key constraint */
  SeatsPkey = 'seats_pkey',
}

/** input type for inserting data into table "seats" */
export type Seats_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  /** This is the email that a user manually inputs. This may not map directly to the google validated account email. */
  invited_email?: Maybe<Scalars['String']>;
  inviter?: Maybe<Users_Obj_Rel_Insert_Input>;
  inviter_uuid?: Maybe<Scalars['uuid']>;
  license?: Maybe<Licenses_Obj_Rel_Insert_Input>;
  license_seat?: Maybe<License_Seats_Obj_Rel_Insert_Input>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<License_Seat_Roles_Enum>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Seats_Max_Fields = {
  __typename?: 'seats_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** This is the email that a user manually inputs. This may not map directly to the google validated account email. */
  invited_email?: Maybe<Scalars['String']>;
  inviter_uuid?: Maybe<Scalars['uuid']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "seats" */
export type Seats_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  /** This is the email that a user manually inputs. This may not map directly to the google validated account email. */
  invited_email?: Maybe<Order_By>;
  inviter_uuid?: Maybe<Order_By>;
  license_uuid?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Seats_Min_Fields = {
  __typename?: 'seats_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** This is the email that a user manually inputs. This may not map directly to the google validated account email. */
  invited_email?: Maybe<Scalars['String']>;
  inviter_uuid?: Maybe<Scalars['uuid']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "seats" */
export type Seats_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  /** This is the email that a user manually inputs. This may not map directly to the google validated account email. */
  invited_email?: Maybe<Order_By>;
  inviter_uuid?: Maybe<Order_By>;
  license_uuid?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "seats" */
export type Seats_Mutation_Response = {
  __typename?: 'seats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Seats>;
};

/** input type for inserting object relation for remote table "seats" */
export type Seats_Obj_Rel_Insert_Input = {
  data: Seats_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Seats_On_Conflict>;
};

/** on_conflict condition type for table "seats" */
export type Seats_On_Conflict = {
  constraint: Seats_Constraint;
  update_columns?: Array<Seats_Update_Column>;
  where?: Maybe<Seats_Bool_Exp>;
};

/** Ordering options when selecting data from "seats". */
export type Seats_Order_By = {
  created_at?: Maybe<Order_By>;
  invited_email?: Maybe<Order_By>;
  inviter?: Maybe<Users_Order_By>;
  inviter_uuid?: Maybe<Order_By>;
  license?: Maybe<Licenses_Order_By>;
  license_seat?: Maybe<License_Seats_Order_By>;
  license_uuid?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: seats */
export type Seats_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "seats" */
export enum Seats_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvitedEmail = 'invited_email',
  /** column name */
  InviterUuid = 'inviter_uuid',
  /** column name */
  LicenseUuid = 'license_uuid',
  /** column name */
  Role = 'role',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  Tier = 'tier',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "seats" */
export type Seats_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  /** This is the email that a user manually inputs. This may not map directly to the google validated account email. */
  invited_email?: Maybe<Scalars['String']>;
  inviter_uuid?: Maybe<Scalars['uuid']>;
  license_uuid?: Maybe<Scalars['uuid']>;
  role?: Maybe<License_Seat_Roles_Enum>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  tier?: Maybe<License_Seat_Tiers_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "seats" */
export enum Seats_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvitedEmail = 'invited_email',
  /** column name */
  InviterUuid = 'inviter_uuid',
  /** column name */
  LicenseUuid = 'license_uuid',
  /** column name */
  Role = 'role',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  Tier = 'tier',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** Table for recording and watching progress of simple (source-only) export tasks */
export type Simple_Export_Tasks = {
  __typename?: 'simple_export_tasks';
  completed_export_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  enqueued_at?: Maybe<Scalars['timestamptz']>;
  export_format: Scalars['String'];
  manifest_url: Scalars['String'];
  owner_uuid: Scalars['uuid'];
  progress_percent?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  project: Projects;
  project_uuid: Scalars['uuid'];
  success?: Maybe<Scalars['Boolean']>;
  trim_in: Scalars['numeric'];
  trim_out?: Maybe<Scalars['numeric']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  users: Users;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "simple_export_tasks" */
export type Simple_Export_Tasks_Aggregate = {
  __typename?: 'simple_export_tasks_aggregate';
  aggregate?: Maybe<Simple_Export_Tasks_Aggregate_Fields>;
  nodes: Array<Simple_Export_Tasks>;
};

/** aggregate fields of "simple_export_tasks" */
export type Simple_Export_Tasks_Aggregate_Fields = {
  __typename?: 'simple_export_tasks_aggregate_fields';
  avg?: Maybe<Simple_Export_Tasks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Simple_Export_Tasks_Max_Fields>;
  min?: Maybe<Simple_Export_Tasks_Min_Fields>;
  stddev?: Maybe<Simple_Export_Tasks_Stddev_Fields>;
  stddev_pop?: Maybe<Simple_Export_Tasks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Simple_Export_Tasks_Stddev_Samp_Fields>;
  sum?: Maybe<Simple_Export_Tasks_Sum_Fields>;
  var_pop?: Maybe<Simple_Export_Tasks_Var_Pop_Fields>;
  var_samp?: Maybe<Simple_Export_Tasks_Var_Samp_Fields>;
  variance?: Maybe<Simple_Export_Tasks_Variance_Fields>;
};

/** aggregate fields of "simple_export_tasks" */
export type Simple_Export_Tasks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Simple_Export_Tasks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Simple_Export_Tasks_Avg_Fields = {
  __typename?: 'simple_export_tasks_avg_fields';
  progress_percent?: Maybe<Scalars['Float']>;
  trim_in?: Maybe<Scalars['Float']>;
  trim_out?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "simple_export_tasks". All fields are combined with a logical 'AND'. */
export type Simple_Export_Tasks_Bool_Exp = {
  _and?: Maybe<Array<Simple_Export_Tasks_Bool_Exp>>;
  _not?: Maybe<Simple_Export_Tasks_Bool_Exp>;
  _or?: Maybe<Array<Simple_Export_Tasks_Bool_Exp>>;
  completed_export_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  enqueued_at?: Maybe<Timestamptz_Comparison_Exp>;
  export_format?: Maybe<String_Comparison_Exp>;
  manifest_url?: Maybe<String_Comparison_Exp>;
  owner_uuid?: Maybe<Uuid_Comparison_Exp>;
  progress_percent?: Maybe<Numeric_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_uuid?: Maybe<Uuid_Comparison_Exp>;
  success?: Maybe<Boolean_Comparison_Exp>;
  trim_in?: Maybe<Numeric_Comparison_Exp>;
  trim_out?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "simple_export_tasks" */
export enum Simple_Export_Tasks_Constraint {
  /** unique or primary key constraint */
  SimpleExportTasksPkey = 'simple_export_tasks_pkey',
}

/** input type for incrementing numeric columns in table "simple_export_tasks" */
export type Simple_Export_Tasks_Inc_Input = {
  progress_percent?: Maybe<Scalars['numeric']>;
  trim_in?: Maybe<Scalars['numeric']>;
  trim_out?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "simple_export_tasks" */
export type Simple_Export_Tasks_Insert_Input = {
  completed_export_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  enqueued_at?: Maybe<Scalars['timestamptz']>;
  export_format?: Maybe<Scalars['String']>;
  manifest_url?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  progress_percent?: Maybe<Scalars['numeric']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_uuid?: Maybe<Scalars['uuid']>;
  success?: Maybe<Scalars['Boolean']>;
  trim_in?: Maybe<Scalars['numeric']>;
  trim_out?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Users_Obj_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Simple_Export_Tasks_Max_Fields = {
  __typename?: 'simple_export_tasks_max_fields';
  completed_export_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  enqueued_at?: Maybe<Scalars['timestamptz']>;
  export_format?: Maybe<Scalars['String']>;
  manifest_url?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  progress_percent?: Maybe<Scalars['numeric']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  trim_in?: Maybe<Scalars['numeric']>;
  trim_out?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Simple_Export_Tasks_Min_Fields = {
  __typename?: 'simple_export_tasks_min_fields';
  completed_export_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  enqueued_at?: Maybe<Scalars['timestamptz']>;
  export_format?: Maybe<Scalars['String']>;
  manifest_url?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  progress_percent?: Maybe<Scalars['numeric']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  trim_in?: Maybe<Scalars['numeric']>;
  trim_out?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "simple_export_tasks" */
export type Simple_Export_Tasks_Mutation_Response = {
  __typename?: 'simple_export_tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Simple_Export_Tasks>;
};

/** on_conflict condition type for table "simple_export_tasks" */
export type Simple_Export_Tasks_On_Conflict = {
  constraint: Simple_Export_Tasks_Constraint;
  update_columns?: Array<Simple_Export_Tasks_Update_Column>;
  where?: Maybe<Simple_Export_Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "simple_export_tasks". */
export type Simple_Export_Tasks_Order_By = {
  completed_export_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  enqueued_at?: Maybe<Order_By>;
  export_format?: Maybe<Order_By>;
  manifest_url?: Maybe<Order_By>;
  owner_uuid?: Maybe<Order_By>;
  progress_percent?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_uuid?: Maybe<Order_By>;
  success?: Maybe<Order_By>;
  trim_in?: Maybe<Order_By>;
  trim_out?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users?: Maybe<Users_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: simple_export_tasks */
export type Simple_Export_Tasks_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "simple_export_tasks" */
export enum Simple_Export_Tasks_Select_Column {
  /** column name */
  CompletedExportUrl = 'completed_export_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  EnqueuedAt = 'enqueued_at',
  /** column name */
  ExportFormat = 'export_format',
  /** column name */
  ManifestUrl = 'manifest_url',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  ProgressPercent = 'progress_percent',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  Success = 'success',
  /** column name */
  TrimIn = 'trim_in',
  /** column name */
  TrimOut = 'trim_out',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "simple_export_tasks" */
export type Simple_Export_Tasks_Set_Input = {
  completed_export_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  enqueued_at?: Maybe<Scalars['timestamptz']>;
  export_format?: Maybe<Scalars['String']>;
  manifest_url?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  progress_percent?: Maybe<Scalars['numeric']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  success?: Maybe<Scalars['Boolean']>;
  trim_in?: Maybe<Scalars['numeric']>;
  trim_out?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Simple_Export_Tasks_Stddev_Fields = {
  __typename?: 'simple_export_tasks_stddev_fields';
  progress_percent?: Maybe<Scalars['Float']>;
  trim_in?: Maybe<Scalars['Float']>;
  trim_out?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Simple_Export_Tasks_Stddev_Pop_Fields = {
  __typename?: 'simple_export_tasks_stddev_pop_fields';
  progress_percent?: Maybe<Scalars['Float']>;
  trim_in?: Maybe<Scalars['Float']>;
  trim_out?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Simple_Export_Tasks_Stddev_Samp_Fields = {
  __typename?: 'simple_export_tasks_stddev_samp_fields';
  progress_percent?: Maybe<Scalars['Float']>;
  trim_in?: Maybe<Scalars['Float']>;
  trim_out?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Simple_Export_Tasks_Sum_Fields = {
  __typename?: 'simple_export_tasks_sum_fields';
  progress_percent?: Maybe<Scalars['numeric']>;
  trim_in?: Maybe<Scalars['numeric']>;
  trim_out?: Maybe<Scalars['numeric']>;
};

/** update columns of table "simple_export_tasks" */
export enum Simple_Export_Tasks_Update_Column {
  /** column name */
  CompletedExportUrl = 'completed_export_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  EnqueuedAt = 'enqueued_at',
  /** column name */
  ExportFormat = 'export_format',
  /** column name */
  ManifestUrl = 'manifest_url',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  ProgressPercent = 'progress_percent',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  Success = 'success',
  /** column name */
  TrimIn = 'trim_in',
  /** column name */
  TrimOut = 'trim_out',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
}

/** aggregate var_pop on columns */
export type Simple_Export_Tasks_Var_Pop_Fields = {
  __typename?: 'simple_export_tasks_var_pop_fields';
  progress_percent?: Maybe<Scalars['Float']>;
  trim_in?: Maybe<Scalars['Float']>;
  trim_out?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Simple_Export_Tasks_Var_Samp_Fields = {
  __typename?: 'simple_export_tasks_var_samp_fields';
  progress_percent?: Maybe<Scalars['Float']>;
  trim_in?: Maybe<Scalars['Float']>;
  trim_out?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Simple_Export_Tasks_Variance_Fields = {
  __typename?: 'simple_export_tasks_variance_fields';
  progress_percent?: Maybe<Scalars['Float']>;
  trim_in?: Maybe<Scalars['Float']>;
  trim_out?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth_providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth_providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth_providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth_user_roles" */
  auth_user_roles: Array<Auth_User_Roles>;
  /** fetch aggregated fields from the table: "auth_user_roles" */
  auth_user_roles_aggregate: Auth_User_Roles_Aggregate;
  /** fetch data from the table: "auth_user_roles" using primary key columns */
  auth_user_roles_by_pk?: Maybe<Auth_User_Roles>;
  /** An array relationship */
  auto_assign_domains: Array<Auto_Assign_Domains>;
  /** An aggregate relationship */
  auto_assign_domains_aggregate: Auto_Assign_Domains_Aggregate;
  /** fetch data from the table: "auto_assign_domains" using primary key columns */
  auto_assign_domains_by_pk?: Maybe<Auto_Assign_Domains>;
  /** fetch data from the table: "canceled_licenses" */
  canceled_licenses: Array<Canceled_Licenses>;
  /** fetch aggregated fields from the table: "canceled_licenses" */
  canceled_licenses_aggregate: Canceled_Licenses_Aggregate;
  /** fetch data from the table: "canceled_licenses" using primary key columns */
  canceled_licenses_by_pk?: Maybe<Canceled_Licenses>;
  /** fetch data from the table: "feature_flags" */
  feature_flags: Array<Feature_Flags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  feature_flags_aggregate: Feature_Flags_Aggregate;
  /** fetch data from the table: "feature_flags" using primary key columns */
  feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** fetch data from the table: "invalid_seats" */
  invalid_seats: Array<Invalid_Seats>;
  /** fetch aggregated fields from the table: "invalid_seats" */
  invalid_seats_aggregate: Invalid_Seats_Aggregate;
  /** fetch data from the table: "invalid_seats" using primary key columns */
  invalid_seats_by_pk?: Maybe<Invalid_Seats>;
  /** fetch data from the table: "invalid_seats_reason" */
  invalid_seats_reason: Array<Invalid_Seats_Reason>;
  /** fetch aggregated fields from the table: "invalid_seats_reason" */
  invalid_seats_reason_aggregate: Invalid_Seats_Reason_Aggregate;
  /** fetch data from the table: "invalid_seats_reason" using primary key columns */
  invalid_seats_reason_by_pk?: Maybe<Invalid_Seats_Reason>;
  /** fetch data from the table: "license_seat_roles" */
  license_seat_roles: Array<License_Seat_Roles>;
  /** fetch aggregated fields from the table: "license_seat_roles" */
  license_seat_roles_aggregate: License_Seat_Roles_Aggregate;
  /** fetch data from the table: "license_seat_roles" using primary key columns */
  license_seat_roles_by_pk?: Maybe<License_Seat_Roles>;
  /** fetch data from the table: "license_seat_tiers" */
  license_seat_tiers: Array<License_Seat_Tiers>;
  /** fetch aggregated fields from the table: "license_seat_tiers" */
  license_seat_tiers_aggregate: License_Seat_Tiers_Aggregate;
  /** fetch data from the table: "license_seat_tiers" using primary key columns */
  license_seat_tiers_by_pk?: Maybe<License_Seat_Tiers>;
  /** An array relationship */
  license_seats: Array<License_Seats>;
  /** An aggregate relationship */
  license_seats_aggregate: License_Seats_Aggregate;
  /** An array relationship */
  licenses: Array<Licenses>;
  /** An aggregate relationship */
  licenses_aggregate: Licenses_Aggregate;
  /** fetch data from the table: "licenses" using primary key columns */
  licenses_by_pk?: Maybe<Licenses>;
  /** fetch data from the table: "migration.sync_jobs" */
  migration_sync_jobs: Array<Migration_Sync_Jobs>;
  /** fetch aggregated fields from the table: "migration.sync_jobs" */
  migration_sync_jobs_aggregate: Migration_Sync_Jobs_Aggregate;
  /** fetch data from the table: "migration.sync_jobs" using primary key columns */
  migration_sync_jobs_by_pk?: Maybe<Migration_Sync_Jobs>;
  /** fetch data from the table: "migration.sync_status" */
  migration_sync_status: Array<Migration_Sync_Status>;
  /** fetch aggregated fields from the table: "migration.sync_status" */
  migration_sync_status_aggregate: Migration_Sync_Status_Aggregate;
  /** fetch data from the table: "migration.sync_status" using primary key columns */
  migration_sync_status_by_pk?: Maybe<Migration_Sync_Status>;
  /** fetch data from the table: "organization_owners" */
  organization_owners: Array<Organization_Owners>;
  /** fetch aggregated fields from the table: "organization_owners" */
  organization_owners_aggregate: Organization_Owners_Aggregate;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "owned_licenses" */
  owned_licenses: Array<Owned_Licenses>;
  /** fetch aggregated fields from the table: "owned_licenses" */
  owned_licenses_aggregate: Owned_Licenses_Aggregate;
  /** fetch data from the table: "project_view_permissions" */
  project_view_permissions: Array<Project_View_Permissions>;
  /** fetch aggregated fields from the table: "project_view_permissions" */
  project_view_permissions_aggregate: Project_View_Permissions_Aggregate;
  /** fetch data from the table: "project_view_permissions" using primary key columns */
  project_view_permissions_by_pk?: Maybe<Project_View_Permissions>;
  /** fetch data from the table: "project_view_permissions_types" */
  project_view_permissions_types: Array<Project_View_Permissions_Types>;
  /** fetch aggregated fields from the table: "project_view_permissions_types" */
  project_view_permissions_types_aggregate: Project_View_Permissions_Types_Aggregate;
  /** fetch data from the table: "project_view_permissions_types" using primary key columns */
  project_view_permissions_types_by_pk?: Maybe<Project_View_Permissions_Types>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "published_project_owners" */
  published_project_owners: Array<Published_Project_Owners>;
  /** fetch aggregated fields from the table: "published_project_owners" */
  published_project_owners_aggregate: Published_Project_Owners_Aggregate;
  /** fetch data from the table: "published_projects" */
  published_projects: Array<Published_Projects>;
  /** fetch aggregated fields from the table: "published_projects" */
  published_projects_aggregate: Published_Projects_Aggregate;
  /** fetch data from the table: "published_video_sources" */
  published_video_sources: Array<Published_Video_Sources>;
  /** fetch aggregated fields from the table: "published_video_sources" */
  published_video_sources_aggregate: Published_Video_Sources_Aggregate;
  /** fetch data from the table: "refresh_tokens" */
  refresh_tokens: Array<Refresh_Tokens>;
  /** fetch aggregated fields from the table: "refresh_tokens" */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate;
  /** fetch data from the table: "refresh_tokens" using primary key columns */
  refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** fetch data from the table: "render_types" */
  render_types: Array<Render_Types>;
  /** fetch aggregated fields from the table: "render_types" */
  render_types_aggregate: Render_Types_Aggregate;
  /** fetch data from the table: "render_types" using primary key columns */
  render_types_by_pk?: Maybe<Render_Types>;
  /** fetch data from the table: "renders" */
  renders: Array<Renders>;
  /** fetch aggregated fields from the table: "renders" */
  renders_aggregate: Renders_Aggregate;
  /** fetch data from the table: "renders" using primary key columns */
  renders_by_pk?: Maybe<Renders>;
  /** An array relationship */
  seats: Array<Seats>;
  /** An aggregate relationship */
  seats_aggregate: Seats_Aggregate;
  /** fetch data from the table: "seats" using primary key columns */
  seats_by_pk?: Maybe<Seats>;
  /** fetch data from the table: "simple_export_tasks" */
  simple_export_tasks: Array<Simple_Export_Tasks>;
  /** fetch aggregated fields from the table: "simple_export_tasks" */
  simple_export_tasks_aggregate: Simple_Export_Tasks_Aggregate;
  /** fetch data from the table: "simple_export_tasks" using primary key columns */
  simple_export_tasks_by_pk?: Maybe<Simple_Export_Tasks>;
  /** fetch data from the table: "survey.admin_types" */
  survey_admin_types: Array<Survey_Admin_Types>;
  /** fetch aggregated fields from the table: "survey.admin_types" */
  survey_admin_types_aggregate: Survey_Admin_Types_Aggregate;
  /** fetch data from the table: "survey.admin_types" using primary key columns */
  survey_admin_types_by_pk?: Maybe<Survey_Admin_Types>;
  /** fetch data from the table: "survey.corporate_responses" */
  survey_corporate_responses: Array<Survey_Corporate_Responses>;
  /** fetch aggregated fields from the table: "survey.corporate_responses" */
  survey_corporate_responses_aggregate: Survey_Corporate_Responses_Aggregate;
  /** fetch data from the table: "survey.corporate_responses" using primary key columns */
  survey_corporate_responses_by_pk?: Maybe<Survey_Corporate_Responses>;
  /** fetch data from the table: "survey.corporate_types" */
  survey_corporate_types: Array<Survey_Corporate_Types>;
  /** fetch aggregated fields from the table: "survey.corporate_types" */
  survey_corporate_types_aggregate: Survey_Corporate_Types_Aggregate;
  /** fetch data from the table: "survey.corporate_types" using primary key columns */
  survey_corporate_types_by_pk?: Maybe<Survey_Corporate_Types>;
  /** fetch data from the table: "survey.educator_types" */
  survey_educator_types: Array<Survey_Educator_Types>;
  /** fetch aggregated fields from the table: "survey.educator_types" */
  survey_educator_types_aggregate: Survey_Educator_Types_Aggregate;
  /** fetch data from the table: "survey.educator_types" using primary key columns */
  survey_educator_types_by_pk?: Maybe<Survey_Educator_Types>;
  /** fetch data from the table: "survey.other_types" */
  survey_other_types: Array<Survey_Other_Types>;
  /** fetch aggregated fields from the table: "survey.other_types" */
  survey_other_types_aggregate: Survey_Other_Types_Aggregate;
  /** fetch data from the table: "survey.other_types" using primary key columns */
  survey_other_types_by_pk?: Maybe<Survey_Other_Types>;
  /** fetch data from the table: "survey.survey_responses" */
  survey_survey_responses: Array<Survey_Survey_Responses>;
  /** fetch aggregated fields from the table: "survey.survey_responses" */
  survey_survey_responses_aggregate: Survey_Survey_Responses_Aggregate;
  /** fetch data from the table: "survey.survey_responses" using primary key columns */
  survey_survey_responses_by_pk?: Maybe<Survey_Survey_Responses>;
  /** fetch data from the table: "survey.user_types" */
  survey_user_types: Array<Survey_User_Types>;
  /** fetch aggregated fields from the table: "survey.user_types" */
  survey_user_types_aggregate: Survey_User_Types_Aggregate;
  /** fetch data from the table: "survey.user_types" using primary key columns */
  survey_user_types_by_pk?: Maybe<Survey_User_Types>;
  /** fetch data from the table: "unscheduled_invitations" */
  unscheduled_invitations: Array<Unscheduled_Invitations>;
  /** fetch aggregated fields from the table: "unscheduled_invitations" */
  unscheduled_invitations_aggregate: Unscheduled_Invitations_Aggregate;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table: "user_settings_names" */
  user_settings_names: Array<User_Settings_Names>;
  /** fetch aggregated fields from the table: "user_settings_names" */
  user_settings_names_aggregate: User_Settings_Names_Aggregate;
  /** fetch data from the table: "user_settings_names" using primary key columns */
  user_settings_names_by_pk?: Maybe<User_Settings_Names>;
  /** fetch data from the table: "user_settings_values" */
  user_settings_values: Array<User_Settings_Values>;
  /** fetch aggregated fields from the table: "user_settings_values" */
  user_settings_values_aggregate: User_Settings_Values_Aggregate;
  /** fetch data from the table: "user_settings_values" using primary key columns */
  user_settings_values_by_pk?: Maybe<User_Settings_Values>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  video_sources: Array<Video_Sources>;
  /** An aggregate relationship */
  video_sources_aggregate: Video_Sources_Aggregate;
  /** fetch data from the table: "video_sources" using primary key columns */
  video_sources_by_pk?: Maybe<Video_Sources>;
  /** fetch data from the table: "video_upload_strategies" */
  video_upload_strategies: Array<Video_Upload_Strategies>;
  /** fetch aggregated fields from the table: "video_upload_strategies" */
  video_upload_strategies_aggregate: Video_Upload_Strategies_Aggregate;
  /** fetch data from the table: "video_upload_strategies" using primary key columns */
  video_upload_strategies_by_pk?: Maybe<Video_Upload_Strategies>;
  /** fetch data from the table: "viewer_analytics" */
  viewer_analytics: Array<Viewer_Analytics>;
  /** fetch aggregated fields from the table: "viewer_analytics" */
  viewer_analytics_aggregate: Viewer_Analytics_Aggregate;
  /** fetch data from the table: "viewer_analytics" using primary key columns */
  viewer_analytics_by_pk?: Maybe<Viewer_Analytics>;
};

export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};

export type Subscription_RootAuth_User_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Roles_Order_By>>;
  where?: Maybe<Auth_User_Roles_Bool_Exp>;
};

export type Subscription_RootAuth_User_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Roles_Order_By>>;
  where?: Maybe<Auth_User_Roles_Bool_Exp>;
};

export type Subscription_RootAuth_User_Roles_By_PkArgs = {
  role: Scalars['String'];
};

export type Subscription_RootAuto_Assign_DomainsArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

export type Subscription_RootAuto_Assign_Domains_AggregateArgs = {
  distinct_on?: Maybe<Array<Auto_Assign_Domains_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auto_Assign_Domains_Order_By>>;
  where?: Maybe<Auto_Assign_Domains_Bool_Exp>;
};

export type Subscription_RootAuto_Assign_Domains_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootCanceled_LicensesArgs = {
  distinct_on?: Maybe<Array<Canceled_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Canceled_Licenses_Order_By>>;
  where?: Maybe<Canceled_Licenses_Bool_Exp>;
};

export type Subscription_RootCanceled_Licenses_AggregateArgs = {
  distinct_on?: Maybe<Array<Canceled_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Canceled_Licenses_Order_By>>;
  where?: Maybe<Canceled_Licenses_Bool_Exp>;
};

export type Subscription_RootCanceled_Licenses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootFeature_FlagsArgs = {
  distinct_on?: Maybe<Array<Feature_Flags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Flags_Order_By>>;
  where?: Maybe<Feature_Flags_Bool_Exp>;
};

export type Subscription_RootFeature_Flags_AggregateArgs = {
  distinct_on?: Maybe<Array<Feature_Flags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feature_Flags_Order_By>>;
  where?: Maybe<Feature_Flags_Bool_Exp>;
};

export type Subscription_RootFeature_Flags_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootInvalid_SeatsArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Order_By>>;
  where?: Maybe<Invalid_Seats_Bool_Exp>;
};

export type Subscription_RootInvalid_Seats_AggregateArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Order_By>>;
  where?: Maybe<Invalid_Seats_Bool_Exp>;
};

export type Subscription_RootInvalid_Seats_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootInvalid_Seats_ReasonArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Reason_Order_By>>;
  where?: Maybe<Invalid_Seats_Reason_Bool_Exp>;
};

export type Subscription_RootInvalid_Seats_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Invalid_Seats_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invalid_Seats_Reason_Order_By>>;
  where?: Maybe<Invalid_Seats_Reason_Bool_Exp>;
};

export type Subscription_RootInvalid_Seats_Reason_By_PkArgs = {
  invalid_reason: Scalars['String'];
};

export type Subscription_RootLicense_Seat_RolesArgs = {
  distinct_on?: Maybe<Array<License_Seat_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Roles_Order_By>>;
  where?: Maybe<License_Seat_Roles_Bool_Exp>;
};

export type Subscription_RootLicense_Seat_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seat_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Roles_Order_By>>;
  where?: Maybe<License_Seat_Roles_Bool_Exp>;
};

export type Subscription_RootLicense_Seat_Roles_By_PkArgs = {
  role: Scalars['String'];
};

export type Subscription_RootLicense_Seat_TiersArgs = {
  distinct_on?: Maybe<Array<License_Seat_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Tiers_Order_By>>;
  where?: Maybe<License_Seat_Tiers_Bool_Exp>;
};

export type Subscription_RootLicense_Seat_Tiers_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seat_Tiers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seat_Tiers_Order_By>>;
  where?: Maybe<License_Seat_Tiers_Bool_Exp>;
};

export type Subscription_RootLicense_Seat_Tiers_By_PkArgs = {
  tier: Scalars['String'];
};

export type Subscription_RootLicense_SeatsArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

export type Subscription_RootLicense_Seats_AggregateArgs = {
  distinct_on?: Maybe<Array<License_Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<License_Seats_Order_By>>;
  where?: Maybe<License_Seats_Bool_Exp>;
};

export type Subscription_RootLicensesArgs = {
  distinct_on?: Maybe<Array<Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Licenses_Order_By>>;
  where?: Maybe<Licenses_Bool_Exp>;
};

export type Subscription_RootLicenses_AggregateArgs = {
  distinct_on?: Maybe<Array<Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Licenses_Order_By>>;
  where?: Maybe<Licenses_Bool_Exp>;
};

export type Subscription_RootLicenses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootMigration_Sync_JobsArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Jobs_Order_By>>;
  where?: Maybe<Migration_Sync_Jobs_Bool_Exp>;
};

export type Subscription_RootMigration_Sync_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Jobs_Order_By>>;
  where?: Maybe<Migration_Sync_Jobs_Bool_Exp>;
};

export type Subscription_RootMigration_Sync_Jobs_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootMigration_Sync_StatusArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Status_Order_By>>;
  where?: Maybe<Migration_Sync_Status_Bool_Exp>;
};

export type Subscription_RootMigration_Sync_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Migration_Sync_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Migration_Sync_Status_Order_By>>;
  where?: Maybe<Migration_Sync_Status_Bool_Exp>;
};

export type Subscription_RootMigration_Sync_Status_By_PkArgs = {
  sync_job: Migration_Sync_Jobs_Enum;
};

export type Subscription_RootOrganization_OwnersArgs = {
  distinct_on?: Maybe<Array<Organization_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Owners_Order_By>>;
  where?: Maybe<Organization_Owners_Bool_Exp>;
};

export type Subscription_RootOrganization_Owners_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Owners_Order_By>>;
  where?: Maybe<Organization_Owners_Bool_Exp>;
};

export type Subscription_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

export type Subscription_RootOrganizations_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootOwned_LicensesArgs = {
  distinct_on?: Maybe<Array<Owned_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Owned_Licenses_Order_By>>;
  where?: Maybe<Owned_Licenses_Bool_Exp>;
};

export type Subscription_RootOwned_Licenses_AggregateArgs = {
  distinct_on?: Maybe<Array<Owned_Licenses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Owned_Licenses_Order_By>>;
  where?: Maybe<Owned_Licenses_Bool_Exp>;
};

export type Subscription_RootProject_View_PermissionsArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Order_By>>;
  where?: Maybe<Project_View_Permissions_Bool_Exp>;
};

export type Subscription_RootProject_View_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Order_By>>;
  where?: Maybe<Project_View_Permissions_Bool_Exp>;
};

export type Subscription_RootProject_View_Permissions_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootProject_View_Permissions_TypesArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Types_Order_By>>;
  where?: Maybe<Project_View_Permissions_Types_Bool_Exp>;
};

export type Subscription_RootProject_View_Permissions_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_View_Permissions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_View_Permissions_Types_Order_By>>;
  where?: Maybe<Project_View_Permissions_Types_Bool_Exp>;
};

export type Subscription_RootProject_View_Permissions_Types_By_PkArgs = {
  permission: Scalars['String'];
};

export type Subscription_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};

export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};

export type Subscription_RootProjects_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootPublished_Project_OwnersArgs = {
  distinct_on?: Maybe<Array<Published_Project_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Project_Owners_Order_By>>;
  where?: Maybe<Published_Project_Owners_Bool_Exp>;
};

export type Subscription_RootPublished_Project_Owners_AggregateArgs = {
  distinct_on?: Maybe<Array<Published_Project_Owners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Project_Owners_Order_By>>;
  where?: Maybe<Published_Project_Owners_Bool_Exp>;
};

export type Subscription_RootPublished_ProjectsArgs = {
  distinct_on?: Maybe<Array<Published_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Projects_Order_By>>;
  where?: Maybe<Published_Projects_Bool_Exp>;
};

export type Subscription_RootPublished_Projects_AggregateArgs = {
  distinct_on?: Maybe<Array<Published_Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Projects_Order_By>>;
  where?: Maybe<Published_Projects_Bool_Exp>;
};

export type Subscription_RootPublished_Video_SourcesArgs = {
  distinct_on?: Maybe<Array<Published_Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Video_Sources_Order_By>>;
  where?: Maybe<Published_Video_Sources_Bool_Exp>;
};

export type Subscription_RootPublished_Video_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Published_Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Published_Video_Sources_Order_By>>;
  where?: Maybe<Published_Video_Sources_Bool_Exp>;
};

export type Subscription_RootRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>;
  where?: Maybe<Refresh_Tokens_Bool_Exp>;
};

export type Subscription_RootRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Refresh_Tokens_Order_By>>;
  where?: Maybe<Refresh_Tokens_Bool_Exp>;
};

export type Subscription_RootRefresh_Tokens_By_PkArgs = {
  user_uuid: Scalars['uuid'];
};

export type Subscription_RootRender_TypesArgs = {
  distinct_on?: Maybe<Array<Render_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Render_Types_Order_By>>;
  where?: Maybe<Render_Types_Bool_Exp>;
};

export type Subscription_RootRender_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Render_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Render_Types_Order_By>>;
  where?: Maybe<Render_Types_Bool_Exp>;
};

export type Subscription_RootRender_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootRendersArgs = {
  distinct_on?: Maybe<Array<Renders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Renders_Order_By>>;
  where?: Maybe<Renders_Bool_Exp>;
};

export type Subscription_RootRenders_AggregateArgs = {
  distinct_on?: Maybe<Array<Renders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Renders_Order_By>>;
  where?: Maybe<Renders_Bool_Exp>;
};

export type Subscription_RootRenders_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootSeatsArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

export type Subscription_RootSeats_AggregateArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

export type Subscription_RootSeats_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootSimple_Export_TasksArgs = {
  distinct_on?: Maybe<Array<Simple_Export_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Export_Tasks_Order_By>>;
  where?: Maybe<Simple_Export_Tasks_Bool_Exp>;
};

export type Subscription_RootSimple_Export_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Simple_Export_Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simple_Export_Tasks_Order_By>>;
  where?: Maybe<Simple_Export_Tasks_Bool_Exp>;
};

export type Subscription_RootSimple_Export_Tasks_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootSurvey_Admin_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Admin_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Admin_Types_Order_By>>;
  where?: Maybe<Survey_Admin_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Admin_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Admin_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Admin_Types_Order_By>>;
  where?: Maybe<Survey_Admin_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Admin_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootSurvey_Corporate_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

export type Subscription_RootSurvey_Corporate_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

export type Subscription_RootSurvey_Corporate_Responses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootSurvey_Corporate_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Types_Order_By>>;
  where?: Maybe<Survey_Corporate_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Corporate_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Types_Order_By>>;
  where?: Maybe<Survey_Corporate_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Corporate_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootSurvey_Educator_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Educator_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Educator_Types_Order_By>>;
  where?: Maybe<Survey_Educator_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Educator_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Educator_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Educator_Types_Order_By>>;
  where?: Maybe<Survey_Educator_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Educator_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootSurvey_Other_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_Other_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Other_Types_Order_By>>;
  where?: Maybe<Survey_Other_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Other_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Other_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Other_Types_Order_By>>;
  where?: Maybe<Survey_Other_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_Other_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootSurvey_Survey_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

export type Subscription_RootSurvey_Survey_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

export type Subscription_RootSurvey_Survey_Responses_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootSurvey_User_TypesArgs = {
  distinct_on?: Maybe<Array<Survey_User_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_User_Types_Order_By>>;
  where?: Maybe<Survey_User_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_User_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_User_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_User_Types_Order_By>>;
  where?: Maybe<Survey_User_Types_Bool_Exp>;
};

export type Subscription_RootSurvey_User_Types_By_PkArgs = {
  value: Scalars['String'];
};

export type Subscription_RootUnscheduled_InvitationsArgs = {
  distinct_on?: Maybe<Array<Unscheduled_Invitations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unscheduled_Invitations_Order_By>>;
  where?: Maybe<Unscheduled_Invitations_Bool_Exp>;
};

export type Subscription_RootUnscheduled_Invitations_AggregateArgs = {
  distinct_on?: Maybe<Array<Unscheduled_Invitations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Unscheduled_Invitations_Order_By>>;
  where?: Maybe<Unscheduled_Invitations_Bool_Exp>;
};

export type Subscription_RootUser_SettingsArgs = {
  distinct_on?: Maybe<Array<User_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Order_By>>;
  where?: Maybe<User_Settings_Bool_Exp>;
};

export type Subscription_RootUser_Settings_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Order_By>>;
  where?: Maybe<User_Settings_Bool_Exp>;
};

export type Subscription_RootUser_Settings_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootUser_Settings_NamesArgs = {
  distinct_on?: Maybe<Array<User_Settings_Names_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Names_Order_By>>;
  where?: Maybe<User_Settings_Names_Bool_Exp>;
};

export type Subscription_RootUser_Settings_Names_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Settings_Names_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Names_Order_By>>;
  where?: Maybe<User_Settings_Names_Bool_Exp>;
};

export type Subscription_RootUser_Settings_Names_By_PkArgs = {
  setting_name: Scalars['String'];
};

export type Subscription_RootUser_Settings_ValuesArgs = {
  distinct_on?: Maybe<Array<User_Settings_Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Values_Order_By>>;
  where?: Maybe<User_Settings_Values_Bool_Exp>;
};

export type Subscription_RootUser_Settings_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Settings_Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Settings_Values_Order_By>>;
  where?: Maybe<User_Settings_Values_Bool_Exp>;
};

export type Subscription_RootUser_Settings_Values_By_PkArgs = {
  setting_value: Scalars['String'];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootVideo_SourcesArgs = {
  distinct_on?: Maybe<Array<Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Sources_Order_By>>;
  where?: Maybe<Video_Sources_Bool_Exp>;
};

export type Subscription_RootVideo_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Video_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Sources_Order_By>>;
  where?: Maybe<Video_Sources_Bool_Exp>;
};

export type Subscription_RootVideo_Sources_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_RootVideo_Upload_StrategiesArgs = {
  distinct_on?: Maybe<Array<Video_Upload_Strategies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Upload_Strategies_Order_By>>;
  where?: Maybe<Video_Upload_Strategies_Bool_Exp>;
};

export type Subscription_RootVideo_Upload_Strategies_AggregateArgs = {
  distinct_on?: Maybe<Array<Video_Upload_Strategies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Video_Upload_Strategies_Order_By>>;
  where?: Maybe<Video_Upload_Strategies_Bool_Exp>;
};

export type Subscription_RootVideo_Upload_Strategies_By_PkArgs = {
  video_upload_strategy: Scalars['String'];
};

export type Subscription_RootViewer_AnalyticsArgs = {
  distinct_on?: Maybe<Array<Viewer_Analytics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Viewer_Analytics_Order_By>>;
  where?: Maybe<Viewer_Analytics_Bool_Exp>;
};

export type Subscription_RootViewer_Analytics_AggregateArgs = {
  distinct_on?: Maybe<Array<Viewer_Analytics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Viewer_Analytics_Order_By>>;
  where?: Maybe<Viewer_Analytics_Bool_Exp>;
};

export type Subscription_RootViewer_Analytics_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** enum table with admin response types */
export type Survey_Admin_Types = {
  __typename?: 'survey_admin_types';
  /** An array relationship */
  survey_responses: Array<Survey_Survey_Responses>;
  /** An aggregate relationship */
  survey_responses_aggregate: Survey_Survey_Responses_Aggregate;
  value: Scalars['String'];
};

/** enum table with admin response types */
export type Survey_Admin_TypesSurvey_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** enum table with admin response types */
export type Survey_Admin_TypesSurvey_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** aggregated selection of "survey.admin_types" */
export type Survey_Admin_Types_Aggregate = {
  __typename?: 'survey_admin_types_aggregate';
  aggregate?: Maybe<Survey_Admin_Types_Aggregate_Fields>;
  nodes: Array<Survey_Admin_Types>;
};

/** aggregate fields of "survey.admin_types" */
export type Survey_Admin_Types_Aggregate_Fields = {
  __typename?: 'survey_admin_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Survey_Admin_Types_Max_Fields>;
  min?: Maybe<Survey_Admin_Types_Min_Fields>;
};

/** aggregate fields of "survey.admin_types" */
export type Survey_Admin_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Survey_Admin_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "survey.admin_types". All fields are combined with a logical 'AND'. */
export type Survey_Admin_Types_Bool_Exp = {
  _and?: Maybe<Array<Survey_Admin_Types_Bool_Exp>>;
  _not?: Maybe<Survey_Admin_Types_Bool_Exp>;
  _or?: Maybe<Array<Survey_Admin_Types_Bool_Exp>>;
  survey_responses?: Maybe<Survey_Survey_Responses_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey.admin_types" */
export enum Survey_Admin_Types_Constraint {
  /** unique or primary key constraint */
  AdminTypesPkey = 'admin_types_pkey',
}

export enum Survey_Admin_Types_Enum {
  District = 'DISTRICT',
  School = 'SCHOOL',
}

/** Boolean expression to compare columns of type "survey_admin_types_enum". All fields are combined with logical 'AND'. */
export type Survey_Admin_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Survey_Admin_Types_Enum>;
  _in?: Maybe<Array<Survey_Admin_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Survey_Admin_Types_Enum>;
  _nin?: Maybe<Array<Survey_Admin_Types_Enum>>;
};

/** input type for inserting data into table "survey.admin_types" */
export type Survey_Admin_Types_Insert_Input = {
  survey_responses?: Maybe<Survey_Survey_Responses_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Survey_Admin_Types_Max_Fields = {
  __typename?: 'survey_admin_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Survey_Admin_Types_Min_Fields = {
  __typename?: 'survey_admin_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "survey.admin_types" */
export type Survey_Admin_Types_Mutation_Response = {
  __typename?: 'survey_admin_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_Admin_Types>;
};

/** input type for inserting object relation for remote table "survey.admin_types" */
export type Survey_Admin_Types_Obj_Rel_Insert_Input = {
  data: Survey_Admin_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Survey_Admin_Types_On_Conflict>;
};

/** on_conflict condition type for table "survey.admin_types" */
export type Survey_Admin_Types_On_Conflict = {
  constraint: Survey_Admin_Types_Constraint;
  update_columns?: Array<Survey_Admin_Types_Update_Column>;
  where?: Maybe<Survey_Admin_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "survey.admin_types". */
export type Survey_Admin_Types_Order_By = {
  survey_responses_aggregate?: Maybe<Survey_Survey_Responses_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: survey_admin_types */
export type Survey_Admin_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "survey.admin_types" */
export enum Survey_Admin_Types_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "survey.admin_types" */
export type Survey_Admin_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "survey.admin_types" */
export enum Survey_Admin_Types_Update_Column {
  /** column name */
  Value = 'value',
}

/** A join table of survey responses and corporate user types */
export type Survey_Corporate_Responses = {
  __typename?: 'survey_corporate_responses';
  /** An object relationship */
  corporateTypeByCorporateType: Survey_Corporate_Types;
  corporate_type: Survey_Corporate_Types_Enum;
  /** An object relationship */
  survey_response: Survey_Survey_Responses;
  survey_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "survey.corporate_responses" */
export type Survey_Corporate_Responses_Aggregate = {
  __typename?: 'survey_corporate_responses_aggregate';
  aggregate?: Maybe<Survey_Corporate_Responses_Aggregate_Fields>;
  nodes: Array<Survey_Corporate_Responses>;
};

/** aggregate fields of "survey.corporate_responses" */
export type Survey_Corporate_Responses_Aggregate_Fields = {
  __typename?: 'survey_corporate_responses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Survey_Corporate_Responses_Max_Fields>;
  min?: Maybe<Survey_Corporate_Responses_Min_Fields>;
};

/** aggregate fields of "survey.corporate_responses" */
export type Survey_Corporate_Responses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "survey.corporate_responses" */
export type Survey_Corporate_Responses_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Survey_Corporate_Responses_Max_Order_By>;
  min?: Maybe<Survey_Corporate_Responses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "survey.corporate_responses" */
export type Survey_Corporate_Responses_Arr_Rel_Insert_Input = {
  data: Array<Survey_Corporate_Responses_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Survey_Corporate_Responses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "survey.corporate_responses". All fields are combined with a logical 'AND'. */
export type Survey_Corporate_Responses_Bool_Exp = {
  _and?: Maybe<Array<Survey_Corporate_Responses_Bool_Exp>>;
  _not?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
  _or?: Maybe<Array<Survey_Corporate_Responses_Bool_Exp>>;
  corporateTypeByCorporateType?: Maybe<Survey_Corporate_Types_Bool_Exp>;
  corporate_type?: Maybe<Survey_Corporate_Types_Enum_Comparison_Exp>;
  survey_response?: Maybe<Survey_Survey_Responses_Bool_Exp>;
  survey_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey.corporate_responses" */
export enum Survey_Corporate_Responses_Constraint {
  /** unique or primary key constraint */
  CorporateResponsesPkey = 'corporate_responses_pkey',
  /** unique or primary key constraint */
  CorporateResponsesSurveyUuidCorporateTypeKey10 = 'corporate_responses_survey_uuid_corporate_type_key10',
}

/** input type for inserting data into table "survey.corporate_responses" */
export type Survey_Corporate_Responses_Insert_Input = {
  corporateTypeByCorporateType?: Maybe<Survey_Corporate_Types_Obj_Rel_Insert_Input>;
  corporate_type?: Maybe<Survey_Corporate_Types_Enum>;
  survey_response?: Maybe<Survey_Survey_Responses_Obj_Rel_Insert_Input>;
  survey_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Survey_Corporate_Responses_Max_Fields = {
  __typename?: 'survey_corporate_responses_max_fields';
  survey_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "survey.corporate_responses" */
export type Survey_Corporate_Responses_Max_Order_By = {
  survey_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Survey_Corporate_Responses_Min_Fields = {
  __typename?: 'survey_corporate_responses_min_fields';
  survey_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "survey.corporate_responses" */
export type Survey_Corporate_Responses_Min_Order_By = {
  survey_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "survey.corporate_responses" */
export type Survey_Corporate_Responses_Mutation_Response = {
  __typename?: 'survey_corporate_responses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_Corporate_Responses>;
};

/** on_conflict condition type for table "survey.corporate_responses" */
export type Survey_Corporate_Responses_On_Conflict = {
  constraint: Survey_Corporate_Responses_Constraint;
  update_columns?: Array<Survey_Corporate_Responses_Update_Column>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

/** Ordering options when selecting data from "survey.corporate_responses". */
export type Survey_Corporate_Responses_Order_By = {
  corporateTypeByCorporateType?: Maybe<Survey_Corporate_Types_Order_By>;
  corporate_type?: Maybe<Order_By>;
  survey_response?: Maybe<Survey_Survey_Responses_Order_By>;
  survey_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: survey_corporate_responses */
export type Survey_Corporate_Responses_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "survey.corporate_responses" */
export enum Survey_Corporate_Responses_Select_Column {
  /** column name */
  CorporateType = 'corporate_type',
  /** column name */
  SurveyUuid = 'survey_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "survey.corporate_responses" */
export type Survey_Corporate_Responses_Set_Input = {
  corporate_type?: Maybe<Survey_Corporate_Types_Enum>;
  survey_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "survey.corporate_responses" */
export enum Survey_Corporate_Responses_Update_Column {
  /** column name */
  CorporateType = 'corporate_type',
  /** column name */
  SurveyUuid = 'survey_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** Enum options if user selects business type */
export type Survey_Corporate_Types = {
  __typename?: 'survey_corporate_types';
  /** An array relationship */
  corporate_responses: Array<Survey_Corporate_Responses>;
  /** An aggregate relationship */
  corporate_responses_aggregate: Survey_Corporate_Responses_Aggregate;
  value: Scalars['String'];
};

/** Enum options if user selects business type */
export type Survey_Corporate_TypesCorporate_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

/** Enum options if user selects business type */
export type Survey_Corporate_TypesCorporate_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

/** aggregated selection of "survey.corporate_types" */
export type Survey_Corporate_Types_Aggregate = {
  __typename?: 'survey_corporate_types_aggregate';
  aggregate?: Maybe<Survey_Corporate_Types_Aggregate_Fields>;
  nodes: Array<Survey_Corporate_Types>;
};

/** aggregate fields of "survey.corporate_types" */
export type Survey_Corporate_Types_Aggregate_Fields = {
  __typename?: 'survey_corporate_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Survey_Corporate_Types_Max_Fields>;
  min?: Maybe<Survey_Corporate_Types_Min_Fields>;
};

/** aggregate fields of "survey.corporate_types" */
export type Survey_Corporate_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Survey_Corporate_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "survey.corporate_types". All fields are combined with a logical 'AND'. */
export type Survey_Corporate_Types_Bool_Exp = {
  _and?: Maybe<Array<Survey_Corporate_Types_Bool_Exp>>;
  _not?: Maybe<Survey_Corporate_Types_Bool_Exp>;
  _or?: Maybe<Array<Survey_Corporate_Types_Bool_Exp>>;
  corporate_responses?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey.corporate_types" */
export enum Survey_Corporate_Types_Constraint {
  /** unique or primary key constraint */
  CorporateTypesPkey = 'corporate_types_pkey',
}

export enum Survey_Corporate_Types_Enum {
  Hr = 'HR',
  Marketing = 'MARKETING',
  Other = 'OTHER',
  Product = 'PRODUCT',
  Sales = 'SALES',
  Support = 'SUPPORT',
}

/** Boolean expression to compare columns of type "survey_corporate_types_enum". All fields are combined with logical 'AND'. */
export type Survey_Corporate_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Survey_Corporate_Types_Enum>;
  _in?: Maybe<Array<Survey_Corporate_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Survey_Corporate_Types_Enum>;
  _nin?: Maybe<Array<Survey_Corporate_Types_Enum>>;
};

/** input type for inserting data into table "survey.corporate_types" */
export type Survey_Corporate_Types_Insert_Input = {
  corporate_responses?: Maybe<Survey_Corporate_Responses_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Survey_Corporate_Types_Max_Fields = {
  __typename?: 'survey_corporate_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Survey_Corporate_Types_Min_Fields = {
  __typename?: 'survey_corporate_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "survey.corporate_types" */
export type Survey_Corporate_Types_Mutation_Response = {
  __typename?: 'survey_corporate_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_Corporate_Types>;
};

/** input type for inserting object relation for remote table "survey.corporate_types" */
export type Survey_Corporate_Types_Obj_Rel_Insert_Input = {
  data: Survey_Corporate_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Survey_Corporate_Types_On_Conflict>;
};

/** on_conflict condition type for table "survey.corporate_types" */
export type Survey_Corporate_Types_On_Conflict = {
  constraint: Survey_Corporate_Types_Constraint;
  update_columns?: Array<Survey_Corporate_Types_Update_Column>;
  where?: Maybe<Survey_Corporate_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "survey.corporate_types". */
export type Survey_Corporate_Types_Order_By = {
  corporate_responses_aggregate?: Maybe<Survey_Corporate_Responses_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: survey_corporate_types */
export type Survey_Corporate_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "survey.corporate_types" */
export enum Survey_Corporate_Types_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "survey.corporate_types" */
export type Survey_Corporate_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "survey.corporate_types" */
export enum Survey_Corporate_Types_Update_Column {
  /** column name */
  Value = 'value',
}

/** Enum table with more detailed educator types */
export type Survey_Educator_Types = {
  __typename?: 'survey_educator_types';
  /** An array relationship */
  survey_responses: Array<Survey_Survey_Responses>;
  /** An aggregate relationship */
  survey_responses_aggregate: Survey_Survey_Responses_Aggregate;
  value: Scalars['String'];
};

/** Enum table with more detailed educator types */
export type Survey_Educator_TypesSurvey_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** Enum table with more detailed educator types */
export type Survey_Educator_TypesSurvey_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** aggregated selection of "survey.educator_types" */
export type Survey_Educator_Types_Aggregate = {
  __typename?: 'survey_educator_types_aggregate';
  aggregate?: Maybe<Survey_Educator_Types_Aggregate_Fields>;
  nodes: Array<Survey_Educator_Types>;
};

/** aggregate fields of "survey.educator_types" */
export type Survey_Educator_Types_Aggregate_Fields = {
  __typename?: 'survey_educator_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Survey_Educator_Types_Max_Fields>;
  min?: Maybe<Survey_Educator_Types_Min_Fields>;
};

/** aggregate fields of "survey.educator_types" */
export type Survey_Educator_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Survey_Educator_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "survey.educator_types". All fields are combined with a logical 'AND'. */
export type Survey_Educator_Types_Bool_Exp = {
  _and?: Maybe<Array<Survey_Educator_Types_Bool_Exp>>;
  _not?: Maybe<Survey_Educator_Types_Bool_Exp>;
  _or?: Maybe<Array<Survey_Educator_Types_Bool_Exp>>;
  survey_responses?: Maybe<Survey_Survey_Responses_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey.educator_types" */
export enum Survey_Educator_Types_Constraint {
  /** unique or primary key constraint */
  EducatorTypesPkey = 'educator_types_pkey',
}

export enum Survey_Educator_Types_Enum {
  ElementarySchool = 'ELEMENTARY_SCHOOL',
  HigherEd = 'HIGHER_ED',
  HighSchool = 'HIGH_SCHOOL',
  MiddleSchool = 'MIDDLE_SCHOOL',
}

/** Boolean expression to compare columns of type "survey_educator_types_enum". All fields are combined with logical 'AND'. */
export type Survey_Educator_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Survey_Educator_Types_Enum>;
  _in?: Maybe<Array<Survey_Educator_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Survey_Educator_Types_Enum>;
  _nin?: Maybe<Array<Survey_Educator_Types_Enum>>;
};

/** input type for inserting data into table "survey.educator_types" */
export type Survey_Educator_Types_Insert_Input = {
  survey_responses?: Maybe<Survey_Survey_Responses_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Survey_Educator_Types_Max_Fields = {
  __typename?: 'survey_educator_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Survey_Educator_Types_Min_Fields = {
  __typename?: 'survey_educator_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "survey.educator_types" */
export type Survey_Educator_Types_Mutation_Response = {
  __typename?: 'survey_educator_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_Educator_Types>;
};

/** input type for inserting object relation for remote table "survey.educator_types" */
export type Survey_Educator_Types_Obj_Rel_Insert_Input = {
  data: Survey_Educator_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Survey_Educator_Types_On_Conflict>;
};

/** on_conflict condition type for table "survey.educator_types" */
export type Survey_Educator_Types_On_Conflict = {
  constraint: Survey_Educator_Types_Constraint;
  update_columns?: Array<Survey_Educator_Types_Update_Column>;
  where?: Maybe<Survey_Educator_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "survey.educator_types". */
export type Survey_Educator_Types_Order_By = {
  survey_responses_aggregate?: Maybe<Survey_Survey_Responses_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: survey_educator_types */
export type Survey_Educator_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "survey.educator_types" */
export enum Survey_Educator_Types_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "survey.educator_types" */
export type Survey_Educator_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "survey.educator_types" */
export enum Survey_Educator_Types_Update_Column {
  /** column name */
  Value = 'value',
}

/** Enum table with options if user selects other */
export type Survey_Other_Types = {
  __typename?: 'survey_other_types';
  /** An array relationship */
  survey_responses: Array<Survey_Survey_Responses>;
  /** An aggregate relationship */
  survey_responses_aggregate: Survey_Survey_Responses_Aggregate;
  value: Scalars['String'];
};

/** Enum table with options if user selects other */
export type Survey_Other_TypesSurvey_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** Enum table with options if user selects other */
export type Survey_Other_TypesSurvey_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** aggregated selection of "survey.other_types" */
export type Survey_Other_Types_Aggregate = {
  __typename?: 'survey_other_types_aggregate';
  aggregate?: Maybe<Survey_Other_Types_Aggregate_Fields>;
  nodes: Array<Survey_Other_Types>;
};

/** aggregate fields of "survey.other_types" */
export type Survey_Other_Types_Aggregate_Fields = {
  __typename?: 'survey_other_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Survey_Other_Types_Max_Fields>;
  min?: Maybe<Survey_Other_Types_Min_Fields>;
};

/** aggregate fields of "survey.other_types" */
export type Survey_Other_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Survey_Other_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "survey.other_types". All fields are combined with a logical 'AND'. */
export type Survey_Other_Types_Bool_Exp = {
  _and?: Maybe<Array<Survey_Other_Types_Bool_Exp>>;
  _not?: Maybe<Survey_Other_Types_Bool_Exp>;
  _or?: Maybe<Array<Survey_Other_Types_Bool_Exp>>;
  survey_responses?: Maybe<Survey_Survey_Responses_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey.other_types" */
export enum Survey_Other_Types_Constraint {
  /** unique or primary key constraint */
  OtherTypesPkey = 'other_types_pkey',
}

export enum Survey_Other_Types_Enum {
  Gaming = 'GAMING',
  Other = 'OTHER',
  PersonalBrand = 'PERSONAL_BRAND',
}

/** Boolean expression to compare columns of type "survey_other_types_enum". All fields are combined with logical 'AND'. */
export type Survey_Other_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Survey_Other_Types_Enum>;
  _in?: Maybe<Array<Survey_Other_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Survey_Other_Types_Enum>;
  _nin?: Maybe<Array<Survey_Other_Types_Enum>>;
};

/** input type for inserting data into table "survey.other_types" */
export type Survey_Other_Types_Insert_Input = {
  survey_responses?: Maybe<Survey_Survey_Responses_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Survey_Other_Types_Max_Fields = {
  __typename?: 'survey_other_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Survey_Other_Types_Min_Fields = {
  __typename?: 'survey_other_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "survey.other_types" */
export type Survey_Other_Types_Mutation_Response = {
  __typename?: 'survey_other_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_Other_Types>;
};

/** input type for inserting object relation for remote table "survey.other_types" */
export type Survey_Other_Types_Obj_Rel_Insert_Input = {
  data: Survey_Other_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Survey_Other_Types_On_Conflict>;
};

/** on_conflict condition type for table "survey.other_types" */
export type Survey_Other_Types_On_Conflict = {
  constraint: Survey_Other_Types_Constraint;
  update_columns?: Array<Survey_Other_Types_Update_Column>;
  where?: Maybe<Survey_Other_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "survey.other_types". */
export type Survey_Other_Types_Order_By = {
  survey_responses_aggregate?: Maybe<Survey_Survey_Responses_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: survey_other_types */
export type Survey_Other_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "survey.other_types" */
export enum Survey_Other_Types_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "survey.other_types" */
export type Survey_Other_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "survey.other_types" */
export enum Survey_Other_Types_Update_Column {
  /** column name */
  Value = 'value',
}

/** User onboarding survey responses */
export type Survey_Survey_Responses = {
  __typename?: 'survey_survey_responses';
  /** An object relationship */
  adminTypeByAdminType?: Maybe<Survey_Admin_Types>;
  admin_type?: Maybe<Survey_Admin_Types_Enum>;
  /** An array relationship */
  corporate_responses: Array<Survey_Corporate_Responses>;
  /** An aggregate relationship */
  corporate_responses_aggregate: Survey_Corporate_Responses_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  educatorTypeByEducatorType?: Maybe<Survey_Educator_Types>;
  educator_type?: Maybe<Survey_Educator_Types_Enum>;
  legacy_birthdate?: Maybe<Scalars['Int']>;
  legacy_under_13?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  otherTypeByOtherType?: Maybe<Survey_Other_Types>;
  other_type?: Maybe<Survey_Other_Types_Enum>;
  send_marketing_emails: Scalars['Boolean'];
  terms_privacy_accepted_v1?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userTypeByUserType?: Maybe<Survey_User_Types>;
  user_type?: Maybe<Survey_User_Types_Enum>;
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** User onboarding survey responses */
export type Survey_Survey_ResponsesCorporate_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

/** User onboarding survey responses */
export type Survey_Survey_ResponsesCorporate_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Corporate_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Corporate_Responses_Order_By>>;
  where?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
};

/** aggregated selection of "survey.survey_responses" */
export type Survey_Survey_Responses_Aggregate = {
  __typename?: 'survey_survey_responses_aggregate';
  aggregate?: Maybe<Survey_Survey_Responses_Aggregate_Fields>;
  nodes: Array<Survey_Survey_Responses>;
};

/** aggregate fields of "survey.survey_responses" */
export type Survey_Survey_Responses_Aggregate_Fields = {
  __typename?: 'survey_survey_responses_aggregate_fields';
  avg?: Maybe<Survey_Survey_Responses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Survey_Survey_Responses_Max_Fields>;
  min?: Maybe<Survey_Survey_Responses_Min_Fields>;
  stddev?: Maybe<Survey_Survey_Responses_Stddev_Fields>;
  stddev_pop?: Maybe<Survey_Survey_Responses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Survey_Survey_Responses_Stddev_Samp_Fields>;
  sum?: Maybe<Survey_Survey_Responses_Sum_Fields>;
  var_pop?: Maybe<Survey_Survey_Responses_Var_Pop_Fields>;
  var_samp?: Maybe<Survey_Survey_Responses_Var_Samp_Fields>;
  variance?: Maybe<Survey_Survey_Responses_Variance_Fields>;
};

/** aggregate fields of "survey.survey_responses" */
export type Survey_Survey_Responses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "survey.survey_responses" */
export type Survey_Survey_Responses_Aggregate_Order_By = {
  avg?: Maybe<Survey_Survey_Responses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Survey_Survey_Responses_Max_Order_By>;
  min?: Maybe<Survey_Survey_Responses_Min_Order_By>;
  stddev?: Maybe<Survey_Survey_Responses_Stddev_Order_By>;
  stddev_pop?: Maybe<Survey_Survey_Responses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Survey_Survey_Responses_Stddev_Samp_Order_By>;
  sum?: Maybe<Survey_Survey_Responses_Sum_Order_By>;
  var_pop?: Maybe<Survey_Survey_Responses_Var_Pop_Order_By>;
  var_samp?: Maybe<Survey_Survey_Responses_Var_Samp_Order_By>;
  variance?: Maybe<Survey_Survey_Responses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "survey.survey_responses" */
export type Survey_Survey_Responses_Arr_Rel_Insert_Input = {
  data: Array<Survey_Survey_Responses_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Survey_Survey_Responses_On_Conflict>;
};

/** aggregate avg on columns */
export type Survey_Survey_Responses_Avg_Fields = {
  __typename?: 'survey_survey_responses_avg_fields';
  legacy_birthdate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Avg_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "survey.survey_responses". All fields are combined with a logical 'AND'. */
export type Survey_Survey_Responses_Bool_Exp = {
  _and?: Maybe<Array<Survey_Survey_Responses_Bool_Exp>>;
  _not?: Maybe<Survey_Survey_Responses_Bool_Exp>;
  _or?: Maybe<Array<Survey_Survey_Responses_Bool_Exp>>;
  adminTypeByAdminType?: Maybe<Survey_Admin_Types_Bool_Exp>;
  admin_type?: Maybe<Survey_Admin_Types_Enum_Comparison_Exp>;
  corporate_responses?: Maybe<Survey_Corporate_Responses_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  educatorTypeByEducatorType?: Maybe<Survey_Educator_Types_Bool_Exp>;
  educator_type?: Maybe<Survey_Educator_Types_Enum_Comparison_Exp>;
  legacy_birthdate?: Maybe<Int_Comparison_Exp>;
  legacy_under_13?: Maybe<Boolean_Comparison_Exp>;
  otherTypeByOtherType?: Maybe<Survey_Other_Types_Bool_Exp>;
  other_type?: Maybe<Survey_Other_Types_Enum_Comparison_Exp>;
  send_marketing_emails?: Maybe<Boolean_Comparison_Exp>;
  terms_privacy_accepted_v1?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userTypeByUserType?: Maybe<Survey_User_Types_Bool_Exp>;
  user_type?: Maybe<Survey_User_Types_Enum_Comparison_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey.survey_responses" */
export enum Survey_Survey_Responses_Constraint {
  /** unique or primary key constraint */
  SurveyResponsesPkey = 'survey_responses_pkey',
  /** unique or primary key constraint */
  SurveyResponsesUserUuidKey = 'survey_responses_user_uuid_key',
}

/** input type for incrementing numeric columns in table "survey.survey_responses" */
export type Survey_Survey_Responses_Inc_Input = {
  legacy_birthdate?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "survey.survey_responses" */
export type Survey_Survey_Responses_Insert_Input = {
  adminTypeByAdminType?: Maybe<Survey_Admin_Types_Obj_Rel_Insert_Input>;
  admin_type?: Maybe<Survey_Admin_Types_Enum>;
  corporate_responses?: Maybe<Survey_Corporate_Responses_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  educatorTypeByEducatorType?: Maybe<Survey_Educator_Types_Obj_Rel_Insert_Input>;
  educator_type?: Maybe<Survey_Educator_Types_Enum>;
  legacy_birthdate?: Maybe<Scalars['Int']>;
  legacy_under_13?: Maybe<Scalars['Boolean']>;
  otherTypeByOtherType?: Maybe<Survey_Other_Types_Obj_Rel_Insert_Input>;
  other_type?: Maybe<Survey_Other_Types_Enum>;
  send_marketing_emails?: Maybe<Scalars['Boolean']>;
  terms_privacy_accepted_v1?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userTypeByUserType?: Maybe<Survey_User_Types_Obj_Rel_Insert_Input>;
  user_type?: Maybe<Survey_User_Types_Enum>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Survey_Survey_Responses_Max_Fields = {
  __typename?: 'survey_survey_responses_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  legacy_birthdate?: Maybe<Scalars['Int']>;
  terms_privacy_accepted_v1?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  legacy_birthdate?: Maybe<Order_By>;
  terms_privacy_accepted_v1?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Survey_Survey_Responses_Min_Fields = {
  __typename?: 'survey_survey_responses_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  legacy_birthdate?: Maybe<Scalars['Int']>;
  terms_privacy_accepted_v1?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  legacy_birthdate?: Maybe<Order_By>;
  terms_privacy_accepted_v1?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "survey.survey_responses" */
export type Survey_Survey_Responses_Mutation_Response = {
  __typename?: 'survey_survey_responses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_Survey_Responses>;
};

/** input type for inserting object relation for remote table "survey.survey_responses" */
export type Survey_Survey_Responses_Obj_Rel_Insert_Input = {
  data: Survey_Survey_Responses_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Survey_Survey_Responses_On_Conflict>;
};

/** on_conflict condition type for table "survey.survey_responses" */
export type Survey_Survey_Responses_On_Conflict = {
  constraint: Survey_Survey_Responses_Constraint;
  update_columns?: Array<Survey_Survey_Responses_Update_Column>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** Ordering options when selecting data from "survey.survey_responses". */
export type Survey_Survey_Responses_Order_By = {
  adminTypeByAdminType?: Maybe<Survey_Admin_Types_Order_By>;
  admin_type?: Maybe<Order_By>;
  corporate_responses_aggregate?: Maybe<Survey_Corporate_Responses_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  educatorTypeByEducatorType?: Maybe<Survey_Educator_Types_Order_By>;
  educator_type?: Maybe<Order_By>;
  legacy_birthdate?: Maybe<Order_By>;
  legacy_under_13?: Maybe<Order_By>;
  otherTypeByOtherType?: Maybe<Survey_Other_Types_Order_By>;
  other_type?: Maybe<Order_By>;
  send_marketing_emails?: Maybe<Order_By>;
  terms_privacy_accepted_v1?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userTypeByUserType?: Maybe<Survey_User_Types_Order_By>;
  user_type?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: survey_survey_responses */
export type Survey_Survey_Responses_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "survey.survey_responses" */
export enum Survey_Survey_Responses_Select_Column {
  /** column name */
  AdminType = 'admin_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EducatorType = 'educator_type',
  /** column name */
  LegacyBirthdate = 'legacy_birthdate',
  /** column name */
  LegacyUnder_13 = 'legacy_under_13',
  /** column name */
  OtherType = 'other_type',
  /** column name */
  SendMarketingEmails = 'send_marketing_emails',
  /** column name */
  TermsPrivacyAcceptedV1 = 'terms_privacy_accepted_v1',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserType = 'user_type',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "survey.survey_responses" */
export type Survey_Survey_Responses_Set_Input = {
  admin_type?: Maybe<Survey_Admin_Types_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  educator_type?: Maybe<Survey_Educator_Types_Enum>;
  legacy_birthdate?: Maybe<Scalars['Int']>;
  legacy_under_13?: Maybe<Scalars['Boolean']>;
  other_type?: Maybe<Survey_Other_Types_Enum>;
  send_marketing_emails?: Maybe<Scalars['Boolean']>;
  terms_privacy_accepted_v1?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_type?: Maybe<Survey_User_Types_Enum>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Survey_Survey_Responses_Stddev_Fields = {
  __typename?: 'survey_survey_responses_stddev_fields';
  legacy_birthdate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Stddev_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Survey_Survey_Responses_Stddev_Pop_Fields = {
  __typename?: 'survey_survey_responses_stddev_pop_fields';
  legacy_birthdate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Stddev_Pop_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Survey_Survey_Responses_Stddev_Samp_Fields = {
  __typename?: 'survey_survey_responses_stddev_samp_fields';
  legacy_birthdate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Stddev_Samp_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Survey_Survey_Responses_Sum_Fields = {
  __typename?: 'survey_survey_responses_sum_fields';
  legacy_birthdate?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Sum_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** update columns of table "survey.survey_responses" */
export enum Survey_Survey_Responses_Update_Column {
  /** column name */
  AdminType = 'admin_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EducatorType = 'educator_type',
  /** column name */
  LegacyBirthdate = 'legacy_birthdate',
  /** column name */
  LegacyUnder_13 = 'legacy_under_13',
  /** column name */
  OtherType = 'other_type',
  /** column name */
  SendMarketingEmails = 'send_marketing_emails',
  /** column name */
  TermsPrivacyAcceptedV1 = 'terms_privacy_accepted_v1',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserType = 'user_type',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** aggregate var_pop on columns */
export type Survey_Survey_Responses_Var_Pop_Fields = {
  __typename?: 'survey_survey_responses_var_pop_fields';
  legacy_birthdate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Var_Pop_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Survey_Survey_Responses_Var_Samp_Fields = {
  __typename?: 'survey_survey_responses_var_samp_fields';
  legacy_birthdate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Var_Samp_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Survey_Survey_Responses_Variance_Fields = {
  __typename?: 'survey_survey_responses_variance_fields';
  legacy_birthdate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "survey.survey_responses" */
export type Survey_Survey_Responses_Variance_Order_By = {
  legacy_birthdate?: Maybe<Order_By>;
};

/** an enum table with possible user types */
export type Survey_User_Types = {
  __typename?: 'survey_user_types';
  /** An array relationship */
  survey_responses: Array<Survey_Survey_Responses>;
  /** An aggregate relationship */
  survey_responses_aggregate: Survey_Survey_Responses_Aggregate;
  value: Scalars['String'];
};

/** an enum table with possible user types */
export type Survey_User_TypesSurvey_ResponsesArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** an enum table with possible user types */
export type Survey_User_TypesSurvey_Responses_AggregateArgs = {
  distinct_on?: Maybe<Array<Survey_Survey_Responses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Survey_Survey_Responses_Order_By>>;
  where?: Maybe<Survey_Survey_Responses_Bool_Exp>;
};

/** aggregated selection of "survey.user_types" */
export type Survey_User_Types_Aggregate = {
  __typename?: 'survey_user_types_aggregate';
  aggregate?: Maybe<Survey_User_Types_Aggregate_Fields>;
  nodes: Array<Survey_User_Types>;
};

/** aggregate fields of "survey.user_types" */
export type Survey_User_Types_Aggregate_Fields = {
  __typename?: 'survey_user_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Survey_User_Types_Max_Fields>;
  min?: Maybe<Survey_User_Types_Min_Fields>;
};

/** aggregate fields of "survey.user_types" */
export type Survey_User_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Survey_User_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "survey.user_types". All fields are combined with a logical 'AND'. */
export type Survey_User_Types_Bool_Exp = {
  _and?: Maybe<Array<Survey_User_Types_Bool_Exp>>;
  _not?: Maybe<Survey_User_Types_Bool_Exp>;
  _or?: Maybe<Array<Survey_User_Types_Bool_Exp>>;
  survey_responses?: Maybe<Survey_Survey_Responses_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey.user_types" */
export enum Survey_User_Types_Constraint {
  /** unique or primary key constraint */
  UserTypesPkey = 'user_types_pkey',
}

export enum Survey_User_Types_Enum {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  Other = 'OTHER',
  Student = 'STUDENT',
  Teacher = 'TEACHER',
}

/** Boolean expression to compare columns of type "survey_user_types_enum". All fields are combined with logical 'AND'. */
export type Survey_User_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Survey_User_Types_Enum>;
  _in?: Maybe<Array<Survey_User_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Survey_User_Types_Enum>;
  _nin?: Maybe<Array<Survey_User_Types_Enum>>;
};

/** input type for inserting data into table "survey.user_types" */
export type Survey_User_Types_Insert_Input = {
  survey_responses?: Maybe<Survey_Survey_Responses_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Survey_User_Types_Max_Fields = {
  __typename?: 'survey_user_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Survey_User_Types_Min_Fields = {
  __typename?: 'survey_user_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "survey.user_types" */
export type Survey_User_Types_Mutation_Response = {
  __typename?: 'survey_user_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_User_Types>;
};

/** input type for inserting object relation for remote table "survey.user_types" */
export type Survey_User_Types_Obj_Rel_Insert_Input = {
  data: Survey_User_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Survey_User_Types_On_Conflict>;
};

/** on_conflict condition type for table "survey.user_types" */
export type Survey_User_Types_On_Conflict = {
  constraint: Survey_User_Types_Constraint;
  update_columns?: Array<Survey_User_Types_Update_Column>;
  where?: Maybe<Survey_User_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "survey.user_types". */
export type Survey_User_Types_Order_By = {
  survey_responses_aggregate?: Maybe<Survey_Survey_Responses_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: survey_user_types */
export type Survey_User_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "survey.user_types" */
export enum Survey_User_Types_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "survey.user_types" */
export type Survey_User_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "survey.user_types" */
export enum Survey_User_Types_Update_Column {
  /** column name */
  Value = 'value',
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "unscheduled_invitations" */
export type Unscheduled_Invitations = {
  __typename?: 'unscheduled_invitations';
  email?: Maybe<Scalars['String']>;
  invitation_uuid?: Maybe<Scalars['uuid']>;
  organization_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

/** aggregated selection of "unscheduled_invitations" */
export type Unscheduled_Invitations_Aggregate = {
  __typename?: 'unscheduled_invitations_aggregate';
  aggregate?: Maybe<Unscheduled_Invitations_Aggregate_Fields>;
  nodes: Array<Unscheduled_Invitations>;
};

/** aggregate fields of "unscheduled_invitations" */
export type Unscheduled_Invitations_Aggregate_Fields = {
  __typename?: 'unscheduled_invitations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Unscheduled_Invitations_Max_Fields>;
  min?: Maybe<Unscheduled_Invitations_Min_Fields>;
};

/** aggregate fields of "unscheduled_invitations" */
export type Unscheduled_Invitations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Unscheduled_Invitations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "unscheduled_invitations". All fields are combined with a logical 'AND'. */
export type Unscheduled_Invitations_Bool_Exp = {
  _and?: Maybe<Array<Unscheduled_Invitations_Bool_Exp>>;
  _not?: Maybe<Unscheduled_Invitations_Bool_Exp>;
  _or?: Maybe<Array<Unscheduled_Invitations_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  invitation_uuid?: Maybe<Uuid_Comparison_Exp>;
  organization_name?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  tier?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Unscheduled_Invitations_Max_Fields = {
  __typename?: 'unscheduled_invitations_max_fields';
  email?: Maybe<Scalars['String']>;
  invitation_uuid?: Maybe<Scalars['uuid']>;
  organization_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Unscheduled_Invitations_Min_Fields = {
  __typename?: 'unscheduled_invitations_min_fields';
  email?: Maybe<Scalars['String']>;
  invitation_uuid?: Maybe<Scalars['uuid']>;
  organization_name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "unscheduled_invitations". */
export type Unscheduled_Invitations_Order_By = {
  email?: Maybe<Order_By>;
  invitation_uuid?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tier?: Maybe<Order_By>;
};

/** select columns of table "unscheduled_invitations" */
export enum Unscheduled_Invitations_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  InvitationUuid = 'invitation_uuid',
  /** column name */
  OrganizationName = 'organization_name',
  /** column name */
  Role = 'role',
  /** column name */
  Tier = 'tier',
}

/** a table using the entity, attribute, value pattern to model user settings.  Each row user have a user_uuid, setting_name, and setting_value.  All settings for a user will the combination of all rows including their user_uuid as a foreign key. */
export type User_Settings = {
  __typename?: 'user_settings';
  setting_name: User_Settings_Names_Enum;
  setting_value: User_Settings_Values_Enum;
  user_uuid: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "user_settings" */
export type User_Settings_Aggregate = {
  __typename?: 'user_settings_aggregate';
  aggregate?: Maybe<User_Settings_Aggregate_Fields>;
  nodes: Array<User_Settings>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_Fields = {
  __typename?: 'user_settings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Settings_Max_Fields>;
  min?: Maybe<User_Settings_Min_Fields>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Settings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_settings". All fields are combined with a logical 'AND'. */
export type User_Settings_Bool_Exp = {
  _and?: Maybe<Array<User_Settings_Bool_Exp>>;
  _not?: Maybe<User_Settings_Bool_Exp>;
  _or?: Maybe<Array<User_Settings_Bool_Exp>>;
  setting_name?: Maybe<User_Settings_Names_Enum_Comparison_Exp>;
  setting_value?: Maybe<User_Settings_Values_Enum_Comparison_Exp>;
  user_uuid?: Maybe<Uuid_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_settings" */
export enum User_Settings_Constraint {
  /** unique or primary key constraint */
  UserSettingsPkey = 'user_settings_pkey',
  /** unique or primary key constraint */
  UserSettingsUserUuidSettingNameKey = 'user_settings_user_uuid_setting_name_key',
}

/** input type for inserting data into table "user_settings" */
export type User_Settings_Insert_Input = {
  setting_name?: Maybe<User_Settings_Names_Enum>;
  setting_value?: Maybe<User_Settings_Values_Enum>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Settings_Max_Fields = {
  __typename?: 'user_settings_max_fields';
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Settings_Min_Fields = {
  __typename?: 'user_settings_min_fields';
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_settings" */
export type User_Settings_Mutation_Response = {
  __typename?: 'user_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings>;
};

/** An enum table of the possible values for setting_name on the user_settings table */
export type User_Settings_Names = {
  __typename?: 'user_settings_names';
  comment: Scalars['String'];
  setting_name: Scalars['String'];
};

/** aggregated selection of "user_settings_names" */
export type User_Settings_Names_Aggregate = {
  __typename?: 'user_settings_names_aggregate';
  aggregate?: Maybe<User_Settings_Names_Aggregate_Fields>;
  nodes: Array<User_Settings_Names>;
};

/** aggregate fields of "user_settings_names" */
export type User_Settings_Names_Aggregate_Fields = {
  __typename?: 'user_settings_names_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Settings_Names_Max_Fields>;
  min?: Maybe<User_Settings_Names_Min_Fields>;
};

/** aggregate fields of "user_settings_names" */
export type User_Settings_Names_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Settings_Names_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_settings_names". All fields are combined with a logical 'AND'. */
export type User_Settings_Names_Bool_Exp = {
  _and?: Maybe<Array<User_Settings_Names_Bool_Exp>>;
  _not?: Maybe<User_Settings_Names_Bool_Exp>;
  _or?: Maybe<Array<User_Settings_Names_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  setting_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_settings_names" */
export enum User_Settings_Names_Constraint {
  /** unique or primary key constraint */
  UserSettingsNamesPkey = 'user_settings_names_pkey',
}

export enum User_Settings_Names_Enum {
  /** The platform which the extension should target during video upload */
  IngestDestination = 'ingest_destination',
}

/** Boolean expression to compare columns of type "user_settings_names_enum". All fields are combined with logical 'AND'. */
export type User_Settings_Names_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Settings_Names_Enum>;
  _in?: Maybe<Array<User_Settings_Names_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Settings_Names_Enum>;
  _nin?: Maybe<Array<User_Settings_Names_Enum>>;
};

/** input type for inserting data into table "user_settings_names" */
export type User_Settings_Names_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  setting_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Settings_Names_Max_Fields = {
  __typename?: 'user_settings_names_max_fields';
  comment?: Maybe<Scalars['String']>;
  setting_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Settings_Names_Min_Fields = {
  __typename?: 'user_settings_names_min_fields';
  comment?: Maybe<Scalars['String']>;
  setting_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_settings_names" */
export type User_Settings_Names_Mutation_Response = {
  __typename?: 'user_settings_names_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings_Names>;
};

/** on_conflict condition type for table "user_settings_names" */
export type User_Settings_Names_On_Conflict = {
  constraint: User_Settings_Names_Constraint;
  update_columns?: Array<User_Settings_Names_Update_Column>;
  where?: Maybe<User_Settings_Names_Bool_Exp>;
};

/** Ordering options when selecting data from "user_settings_names". */
export type User_Settings_Names_Order_By = {
  comment?: Maybe<Order_By>;
  setting_name?: Maybe<Order_By>;
};

/** primary key columns input for table: user_settings_names */
export type User_Settings_Names_Pk_Columns_Input = {
  setting_name: Scalars['String'];
};

/** select columns of table "user_settings_names" */
export enum User_Settings_Names_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  SettingName = 'setting_name',
}

/** input type for updating data in table "user_settings_names" */
export type User_Settings_Names_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  setting_name?: Maybe<Scalars['String']>;
};

/** update columns of table "user_settings_names" */
export enum User_Settings_Names_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  SettingName = 'setting_name',
}

/** on_conflict condition type for table "user_settings" */
export type User_Settings_On_Conflict = {
  constraint: User_Settings_Constraint;
  update_columns?: Array<User_Settings_Update_Column>;
  where?: Maybe<User_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "user_settings". */
export type User_Settings_Order_By = {
  setting_name?: Maybe<Order_By>;
  setting_value?: Maybe<Order_By>;
  user_uuid?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: user_settings */
export type User_Settings_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "user_settings" */
export enum User_Settings_Select_Column {
  /** column name */
  SettingName = 'setting_name',
  /** column name */
  SettingValue = 'setting_value',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "user_settings" */
export type User_Settings_Set_Input = {
  setting_name?: Maybe<User_Settings_Names_Enum>;
  setting_value?: Maybe<User_Settings_Values_Enum>;
  user_uuid?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "user_settings" */
export enum User_Settings_Update_Column {
  /** column name */
  SettingName = 'setting_name',
  /** column name */
  SettingValue = 'setting_value',
  /** column name */
  UserUuid = 'user_uuid',
  /** column name */
  Uuid = 'uuid',
}

/** An enum table of the possible values for setting_value on the user_settings table */
export type User_Settings_Values = {
  __typename?: 'user_settings_values';
  comment: Scalars['String'];
  setting_value: Scalars['String'];
};

/** aggregated selection of "user_settings_values" */
export type User_Settings_Values_Aggregate = {
  __typename?: 'user_settings_values_aggregate';
  aggregate?: Maybe<User_Settings_Values_Aggregate_Fields>;
  nodes: Array<User_Settings_Values>;
};

/** aggregate fields of "user_settings_values" */
export type User_Settings_Values_Aggregate_Fields = {
  __typename?: 'user_settings_values_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Settings_Values_Max_Fields>;
  min?: Maybe<User_Settings_Values_Min_Fields>;
};

/** aggregate fields of "user_settings_values" */
export type User_Settings_Values_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Settings_Values_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_settings_values". All fields are combined with a logical 'AND'. */
export type User_Settings_Values_Bool_Exp = {
  _and?: Maybe<Array<User_Settings_Values_Bool_Exp>>;
  _not?: Maybe<User_Settings_Values_Bool_Exp>;
  _or?: Maybe<Array<User_Settings_Values_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  setting_value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_settings_values" */
export enum User_Settings_Values_Constraint {
  /** unique or primary key constraint */
  UserSettingsValuesPkey = 'user_settings_values_pkey',
}

export enum User_Settings_Values_Enum {
  /** Option for ingest_destination. The extension should target the legacy platform for uploads of new videos */
  LegacyIngest = 'legacy_ingest',
  /** Option for ingest_destination. The extension should target the studio platform (internal name for our new react platform) for uploads of new videos */
  StudioIngest = 'studio_ingest',
}

/** Boolean expression to compare columns of type "user_settings_values_enum". All fields are combined with logical 'AND'. */
export type User_Settings_Values_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Settings_Values_Enum>;
  _in?: Maybe<Array<User_Settings_Values_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Settings_Values_Enum>;
  _nin?: Maybe<Array<User_Settings_Values_Enum>>;
};

/** input type for inserting data into table "user_settings_values" */
export type User_Settings_Values_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  setting_value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Settings_Values_Max_Fields = {
  __typename?: 'user_settings_values_max_fields';
  comment?: Maybe<Scalars['String']>;
  setting_value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Settings_Values_Min_Fields = {
  __typename?: 'user_settings_values_min_fields';
  comment?: Maybe<Scalars['String']>;
  setting_value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_settings_values" */
export type User_Settings_Values_Mutation_Response = {
  __typename?: 'user_settings_values_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings_Values>;
};

/** on_conflict condition type for table "user_settings_values" */
export type User_Settings_Values_On_Conflict = {
  constraint: User_Settings_Values_Constraint;
  update_columns?: Array<User_Settings_Values_Update_Column>;
  where?: Maybe<User_Settings_Values_Bool_Exp>;
};

/** Ordering options when selecting data from "user_settings_values". */
export type User_Settings_Values_Order_By = {
  comment?: Maybe<Order_By>;
  setting_value?: Maybe<Order_By>;
};

/** primary key columns input for table: user_settings_values */
export type User_Settings_Values_Pk_Columns_Input = {
  setting_value: Scalars['String'];
};

/** select columns of table "user_settings_values" */
export enum User_Settings_Values_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  SettingValue = 'setting_value',
}

/** input type for updating data in table "user_settings_values" */
export type User_Settings_Values_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  setting_value?: Maybe<Scalars['String']>;
};

/** update columns of table "user_settings_values" */
export enum User_Settings_Values_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  SettingValue = 'setting_value',
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  auth_provider?: Maybe<Auth_Providers_Enum>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  google_uid?: Maybe<Scalars['String']>;
  legacy_analytics_enabled?: Maybe<Scalars['Boolean']>;
  legacy_analytics_uuid?: Maybe<Scalars['String']>;
  legacy_app_user?: Maybe<Scalars['Boolean']>;
  /** User creation date from the legacy Screencastify application */
  legacy_user_created_at?: Maybe<Scalars['timestamptz']>;
  password_hash?: Maybe<Scalars['String']>;
  provider_uid?: Maybe<Scalars['String']>;
  /** An array relationship */
  seats: Array<Seats>;
  /** An aggregate relationship */
  seats_aggregate: Seats_Aggregate;
  temp_token?: Maybe<Scalars['String']>;
  token_exp?: Maybe<Scalars['timestamp']>;
  updated_at: Scalars['timestamptz'];
  user_role?: Maybe<Auth_User_Roles_Enum>;
  uuid: Scalars['uuid'];
};

/** columns and relationships of "users" */
export type UsersSeatsArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSeats_AggregateArgs = {
  distinct_on?: Maybe<Array<Seats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seats_Order_By>>;
  where?: Maybe<Seats_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  auth_provider?: Maybe<Auth_Providers_Enum_Comparison_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  district_id?: Maybe<String_Comparison_Exp>;
  domain?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_verified?: Maybe<Boolean_Comparison_Exp>;
  google_uid?: Maybe<String_Comparison_Exp>;
  legacy_analytics_enabled?: Maybe<Boolean_Comparison_Exp>;
  legacy_analytics_uuid?: Maybe<String_Comparison_Exp>;
  legacy_app_user?: Maybe<Boolean_Comparison_Exp>;
  legacy_user_created_at?: Maybe<Timestamptz_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  provider_uid?: Maybe<String_Comparison_Exp>;
  seats?: Maybe<Seats_Bool_Exp>;
  temp_token?: Maybe<String_Comparison_Exp>;
  token_exp?: Maybe<Timestamp_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_role?: Maybe<Auth_User_Roles_Enum_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersGoogleUidKey = 'users_google_uid_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersProviderUidKey = 'users_provider_uid_key',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  auth_provider?: Maybe<Auth_Providers_Enum>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  google_uid?: Maybe<Scalars['String']>;
  legacy_analytics_enabled?: Maybe<Scalars['Boolean']>;
  legacy_analytics_uuid?: Maybe<Scalars['String']>;
  legacy_app_user?: Maybe<Scalars['Boolean']>;
  /** User creation date from the legacy Screencastify application */
  legacy_user_created_at?: Maybe<Scalars['timestamptz']>;
  password_hash?: Maybe<Scalars['String']>;
  provider_uid?: Maybe<Scalars['String']>;
  seats?: Maybe<Seats_Arr_Rel_Insert_Input>;
  temp_token?: Maybe<Scalars['String']>;
  token_exp?: Maybe<Scalars['timestamp']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_role?: Maybe<Auth_User_Roles_Enum>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  google_uid?: Maybe<Scalars['String']>;
  legacy_analytics_uuid?: Maybe<Scalars['String']>;
  /** User creation date from the legacy Screencastify application */
  legacy_user_created_at?: Maybe<Scalars['timestamptz']>;
  password_hash?: Maybe<Scalars['String']>;
  provider_uid?: Maybe<Scalars['String']>;
  temp_token?: Maybe<Scalars['String']>;
  token_exp?: Maybe<Scalars['timestamp']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  google_uid?: Maybe<Scalars['String']>;
  legacy_analytics_uuid?: Maybe<Scalars['String']>;
  /** User creation date from the legacy Screencastify application */
  legacy_user_created_at?: Maybe<Scalars['timestamptz']>;
  password_hash?: Maybe<Scalars['String']>;
  provider_uid?: Maybe<Scalars['String']>;
  temp_token?: Maybe<Scalars['String']>;
  token_exp?: Maybe<Scalars['timestamp']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  auth_provider?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  domain?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_verified?: Maybe<Order_By>;
  google_uid?: Maybe<Order_By>;
  legacy_analytics_enabled?: Maybe<Order_By>;
  legacy_analytics_uuid?: Maybe<Order_By>;
  legacy_app_user?: Maybe<Order_By>;
  legacy_user_created_at?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  provider_uid?: Maybe<Order_By>;
  seats_aggregate?: Maybe<Seats_Aggregate_Order_By>;
  temp_token?: Maybe<Order_By>;
  token_exp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_role?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Domain = 'domain',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  GoogleUid = 'google_uid',
  /** column name */
  LegacyAnalyticsEnabled = 'legacy_analytics_enabled',
  /** column name */
  LegacyAnalyticsUuid = 'legacy_analytics_uuid',
  /** column name */
  LegacyAppUser = 'legacy_app_user',
  /** column name */
  LegacyUserCreatedAt = 'legacy_user_created_at',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  ProviderUid = 'provider_uid',
  /** column name */
  TempToken = 'temp_token',
  /** column name */
  TokenExp = 'token_exp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserRole = 'user_role',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth_provider?: Maybe<Auth_Providers_Enum>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  google_uid?: Maybe<Scalars['String']>;
  legacy_analytics_enabled?: Maybe<Scalars['Boolean']>;
  legacy_analytics_uuid?: Maybe<Scalars['String']>;
  legacy_app_user?: Maybe<Scalars['Boolean']>;
  /** User creation date from the legacy Screencastify application */
  legacy_user_created_at?: Maybe<Scalars['timestamptz']>;
  password_hash?: Maybe<Scalars['String']>;
  provider_uid?: Maybe<Scalars['String']>;
  temp_token?: Maybe<Scalars['String']>;
  token_exp?: Maybe<Scalars['timestamp']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_role?: Maybe<Auth_User_Roles_Enum>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  GoogleUid = 'google_uid',
  /** column name */
  LegacyAnalyticsEnabled = 'legacy_analytics_enabled',
  /** column name */
  LegacyAnalyticsUuid = 'legacy_analytics_uuid',
  /** column name */
  LegacyAppUser = 'legacy_app_user',
  /** column name */
  LegacyUserCreatedAt = 'legacy_user_created_at',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  ProviderUid = 'provider_uid',
  /** column name */
  TempToken = 'temp_token',
  /** column name */
  TokenExp = 'token_exp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserRole = 'user_role',
  /** column name */
  Uuid = 'uuid',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "video_sources" */
export type Video_Sources = {
  __typename?: 'video_sources';
  audio_segments: Scalars['jsonb'];
  constrain_is_done: Scalars['Boolean'];
  constrain_is_necessary?: Maybe<Scalars['Boolean']>;
  constrain_percent?: Maybe<Scalars['numeric']>;
  created_at: Scalars['timestamptz'];
  generate_playback_total_count?: Maybe<Scalars['Int']>;
  generate_scrub_total_count?: Maybe<Scalars['Int']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Int']>;
  generate_waveform_is_done: Scalars['Boolean'];
  ingest_failed: Scalars['Boolean'];
  object_md5sum?: Maybe<Scalars['String']>;
  owner_uuid: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_uuid: Scalars['uuid'];
  remote_object_key?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  stream_probe: Scalars['jsonb'];
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
  video_segments: Scalars['jsonb'];
  video_upload_strategy: Video_Upload_Strategies_Enum;
};

/** columns and relationships of "video_sources" */
export type Video_SourcesAudio_SegmentsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "video_sources" */
export type Video_SourcesStream_ProbeArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "video_sources" */
export type Video_SourcesVideo_SegmentsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "video_sources" */
export type Video_Sources_Aggregate = {
  __typename?: 'video_sources_aggregate';
  aggregate?: Maybe<Video_Sources_Aggregate_Fields>;
  nodes: Array<Video_Sources>;
};

/** aggregate fields of "video_sources" */
export type Video_Sources_Aggregate_Fields = {
  __typename?: 'video_sources_aggregate_fields';
  avg?: Maybe<Video_Sources_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Video_Sources_Max_Fields>;
  min?: Maybe<Video_Sources_Min_Fields>;
  stddev?: Maybe<Video_Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Video_Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Video_Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Video_Sources_Sum_Fields>;
  var_pop?: Maybe<Video_Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Video_Sources_Var_Samp_Fields>;
  variance?: Maybe<Video_Sources_Variance_Fields>;
};

/** aggregate fields of "video_sources" */
export type Video_Sources_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Video_Sources_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "video_sources" */
export type Video_Sources_Aggregate_Order_By = {
  avg?: Maybe<Video_Sources_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Video_Sources_Max_Order_By>;
  min?: Maybe<Video_Sources_Min_Order_By>;
  stddev?: Maybe<Video_Sources_Stddev_Order_By>;
  stddev_pop?: Maybe<Video_Sources_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Video_Sources_Stddev_Samp_Order_By>;
  sum?: Maybe<Video_Sources_Sum_Order_By>;
  var_pop?: Maybe<Video_Sources_Var_Pop_Order_By>;
  var_samp?: Maybe<Video_Sources_Var_Samp_Order_By>;
  variance?: Maybe<Video_Sources_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Video_Sources_Append_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  video_segments?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "video_sources" */
export type Video_Sources_Arr_Rel_Insert_Input = {
  data: Array<Video_Sources_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Video_Sources_On_Conflict>;
};

/** aggregate avg on columns */
export type Video_Sources_Avg_Fields = {
  __typename?: 'video_sources_avg_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
  generate_playback_total_count?: Maybe<Scalars['Float']>;
  generate_scrub_total_count?: Maybe<Scalars['Float']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "video_sources" */
export type Video_Sources_Avg_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "video_sources". All fields are combined with a logical 'AND'. */
export type Video_Sources_Bool_Exp = {
  _and?: Maybe<Array<Video_Sources_Bool_Exp>>;
  _not?: Maybe<Video_Sources_Bool_Exp>;
  _or?: Maybe<Array<Video_Sources_Bool_Exp>>;
  audio_segments?: Maybe<Jsonb_Comparison_Exp>;
  constrain_is_done?: Maybe<Boolean_Comparison_Exp>;
  constrain_is_necessary?: Maybe<Boolean_Comparison_Exp>;
  constrain_percent?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  generate_playback_total_count?: Maybe<Int_Comparison_Exp>;
  generate_scrub_total_count?: Maybe<Int_Comparison_Exp>;
  generate_thumbnails_total_count?: Maybe<Int_Comparison_Exp>;
  generate_waveform_is_done?: Maybe<Boolean_Comparison_Exp>;
  ingest_failed?: Maybe<Boolean_Comparison_Exp>;
  object_md5sum?: Maybe<String_Comparison_Exp>;
  owner_uuid?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Projects_Bool_Exp>;
  project_uuid?: Maybe<Uuid_Comparison_Exp>;
  remote_object_key?: Maybe<String_Comparison_Exp>;
  scheduled_at?: Maybe<Timestamptz_Comparison_Exp>;
  stream_probe?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
  video_segments?: Maybe<Jsonb_Comparison_Exp>;
  video_upload_strategy?: Maybe<Video_Upload_Strategies_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "video_sources" */
export enum Video_Sources_Constraint {
  /** unique or primary key constraint */
  VideoSourcesPkey = 'video_sources_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Video_Sources_Delete_At_Path_Input = {
  audio_segments?: Maybe<Array<Scalars['String']>>;
  stream_probe?: Maybe<Array<Scalars['String']>>;
  video_segments?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Video_Sources_Delete_Elem_Input = {
  audio_segments?: Maybe<Scalars['Int']>;
  stream_probe?: Maybe<Scalars['Int']>;
  video_segments?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Video_Sources_Delete_Key_Input = {
  audio_segments?: Maybe<Scalars['String']>;
  stream_probe?: Maybe<Scalars['String']>;
  video_segments?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "video_sources" */
export type Video_Sources_Inc_Input = {
  constrain_percent?: Maybe<Scalars['numeric']>;
  generate_playback_total_count?: Maybe<Scalars['Int']>;
  generate_scrub_total_count?: Maybe<Scalars['Int']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "video_sources" */
export type Video_Sources_Insert_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  constrain_is_done?: Maybe<Scalars['Boolean']>;
  constrain_is_necessary?: Maybe<Scalars['Boolean']>;
  constrain_percent?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  generate_playback_total_count?: Maybe<Scalars['Int']>;
  generate_scrub_total_count?: Maybe<Scalars['Int']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Int']>;
  generate_waveform_is_done?: Maybe<Scalars['Boolean']>;
  ingest_failed?: Maybe<Scalars['Boolean']>;
  object_md5sum?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  project_uuid?: Maybe<Scalars['uuid']>;
  remote_object_key?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
  video_segments?: Maybe<Scalars['jsonb']>;
  video_upload_strategy?: Maybe<Video_Upload_Strategies_Enum>;
};

/** aggregate max on columns */
export type Video_Sources_Max_Fields = {
  __typename?: 'video_sources_max_fields';
  constrain_percent?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  generate_playback_total_count?: Maybe<Scalars['Int']>;
  generate_scrub_total_count?: Maybe<Scalars['Int']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Int']>;
  object_md5sum?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  remote_object_key?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "video_sources" */
export type Video_Sources_Max_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
  object_md5sum?: Maybe<Order_By>;
  owner_uuid?: Maybe<Order_By>;
  project_uuid?: Maybe<Order_By>;
  remote_object_key?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Video_Sources_Min_Fields = {
  __typename?: 'video_sources_min_fields';
  constrain_percent?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  generate_playback_total_count?: Maybe<Scalars['Int']>;
  generate_scrub_total_count?: Maybe<Scalars['Int']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Int']>;
  object_md5sum?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  remote_object_key?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "video_sources" */
export type Video_Sources_Min_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
  object_md5sum?: Maybe<Order_By>;
  owner_uuid?: Maybe<Order_By>;
  project_uuid?: Maybe<Order_By>;
  remote_object_key?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "video_sources" */
export type Video_Sources_Mutation_Response = {
  __typename?: 'video_sources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Video_Sources>;
};

/** on_conflict condition type for table "video_sources" */
export type Video_Sources_On_Conflict = {
  constraint: Video_Sources_Constraint;
  update_columns?: Array<Video_Sources_Update_Column>;
  where?: Maybe<Video_Sources_Bool_Exp>;
};

/** Ordering options when selecting data from "video_sources". */
export type Video_Sources_Order_By = {
  audio_segments?: Maybe<Order_By>;
  constrain_is_done?: Maybe<Order_By>;
  constrain_is_necessary?: Maybe<Order_By>;
  constrain_percent?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
  generate_waveform_is_done?: Maybe<Order_By>;
  ingest_failed?: Maybe<Order_By>;
  object_md5sum?: Maybe<Order_By>;
  owner_uuid?: Maybe<Order_By>;
  project?: Maybe<Projects_Order_By>;
  project_uuid?: Maybe<Order_By>;
  remote_object_key?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  stream_probe?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
  video_segments?: Maybe<Order_By>;
  video_upload_strategy?: Maybe<Order_By>;
};

/** primary key columns input for table: video_sources */
export type Video_Sources_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Video_Sources_Prepend_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  video_segments?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "video_sources" */
export enum Video_Sources_Select_Column {
  /** column name */
  AudioSegments = 'audio_segments',
  /** column name */
  ConstrainIsDone = 'constrain_is_done',
  /** column name */
  ConstrainIsNecessary = 'constrain_is_necessary',
  /** column name */
  ConstrainPercent = 'constrain_percent',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GeneratePlaybackTotalCount = 'generate_playback_total_count',
  /** column name */
  GenerateScrubTotalCount = 'generate_scrub_total_count',
  /** column name */
  GenerateThumbnailsTotalCount = 'generate_thumbnails_total_count',
  /** column name */
  GenerateWaveformIsDone = 'generate_waveform_is_done',
  /** column name */
  IngestFailed = 'ingest_failed',
  /** column name */
  ObjectMd5sum = 'object_md5sum',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  RemoteObjectKey = 'remote_object_key',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  StreamProbe = 'stream_probe',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  VideoSegments = 'video_segments',
  /** column name */
  VideoUploadStrategy = 'video_upload_strategy',
}

/** input type for updating data in table "video_sources" */
export type Video_Sources_Set_Input = {
  audio_segments?: Maybe<Scalars['jsonb']>;
  constrain_is_done?: Maybe<Scalars['Boolean']>;
  constrain_is_necessary?: Maybe<Scalars['Boolean']>;
  constrain_percent?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  generate_playback_total_count?: Maybe<Scalars['Int']>;
  generate_scrub_total_count?: Maybe<Scalars['Int']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Int']>;
  generate_waveform_is_done?: Maybe<Scalars['Boolean']>;
  ingest_failed?: Maybe<Scalars['Boolean']>;
  object_md5sum?: Maybe<Scalars['String']>;
  owner_uuid?: Maybe<Scalars['uuid']>;
  project_uuid?: Maybe<Scalars['uuid']>;
  remote_object_key?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  stream_probe?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
  video_segments?: Maybe<Scalars['jsonb']>;
  video_upload_strategy?: Maybe<Video_Upload_Strategies_Enum>;
};

/** aggregate stddev on columns */
export type Video_Sources_Stddev_Fields = {
  __typename?: 'video_sources_stddev_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
  generate_playback_total_count?: Maybe<Scalars['Float']>;
  generate_scrub_total_count?: Maybe<Scalars['Float']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "video_sources" */
export type Video_Sources_Stddev_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Video_Sources_Stddev_Pop_Fields = {
  __typename?: 'video_sources_stddev_pop_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
  generate_playback_total_count?: Maybe<Scalars['Float']>;
  generate_scrub_total_count?: Maybe<Scalars['Float']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "video_sources" */
export type Video_Sources_Stddev_Pop_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Video_Sources_Stddev_Samp_Fields = {
  __typename?: 'video_sources_stddev_samp_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
  generate_playback_total_count?: Maybe<Scalars['Float']>;
  generate_scrub_total_count?: Maybe<Scalars['Float']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "video_sources" */
export type Video_Sources_Stddev_Samp_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Video_Sources_Sum_Fields = {
  __typename?: 'video_sources_sum_fields';
  constrain_percent?: Maybe<Scalars['numeric']>;
  generate_playback_total_count?: Maybe<Scalars['Int']>;
  generate_scrub_total_count?: Maybe<Scalars['Int']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "video_sources" */
export type Video_Sources_Sum_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** update columns of table "video_sources" */
export enum Video_Sources_Update_Column {
  /** column name */
  AudioSegments = 'audio_segments',
  /** column name */
  ConstrainIsDone = 'constrain_is_done',
  /** column name */
  ConstrainIsNecessary = 'constrain_is_necessary',
  /** column name */
  ConstrainPercent = 'constrain_percent',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GeneratePlaybackTotalCount = 'generate_playback_total_count',
  /** column name */
  GenerateScrubTotalCount = 'generate_scrub_total_count',
  /** column name */
  GenerateThumbnailsTotalCount = 'generate_thumbnails_total_count',
  /** column name */
  GenerateWaveformIsDone = 'generate_waveform_is_done',
  /** column name */
  IngestFailed = 'ingest_failed',
  /** column name */
  ObjectMd5sum = 'object_md5sum',
  /** column name */
  OwnerUuid = 'owner_uuid',
  /** column name */
  ProjectUuid = 'project_uuid',
  /** column name */
  RemoteObjectKey = 'remote_object_key',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  StreamProbe = 'stream_probe',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  VideoSegments = 'video_segments',
  /** column name */
  VideoUploadStrategy = 'video_upload_strategy',
}

/** aggregate var_pop on columns */
export type Video_Sources_Var_Pop_Fields = {
  __typename?: 'video_sources_var_pop_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
  generate_playback_total_count?: Maybe<Scalars['Float']>;
  generate_scrub_total_count?: Maybe<Scalars['Float']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "video_sources" */
export type Video_Sources_Var_Pop_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Video_Sources_Var_Samp_Fields = {
  __typename?: 'video_sources_var_samp_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
  generate_playback_total_count?: Maybe<Scalars['Float']>;
  generate_scrub_total_count?: Maybe<Scalars['Float']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "video_sources" */
export type Video_Sources_Var_Samp_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Video_Sources_Variance_Fields = {
  __typename?: 'video_sources_variance_fields';
  constrain_percent?: Maybe<Scalars['Float']>;
  generate_playback_total_count?: Maybe<Scalars['Float']>;
  generate_scrub_total_count?: Maybe<Scalars['Float']>;
  generate_thumbnails_total_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "video_sources" */
export type Video_Sources_Variance_Order_By = {
  constrain_percent?: Maybe<Order_By>;
  generate_playback_total_count?: Maybe<Order_By>;
  generate_scrub_total_count?: Maybe<Order_By>;
  generate_thumbnails_total_count?: Maybe<Order_By>;
};

/** columns and relationships of "video_upload_strategies" */
export type Video_Upload_Strategies = {
  __typename?: 'video_upload_strategies';
  comment: Scalars['String'];
  video_upload_strategy: Scalars['String'];
};

/** aggregated selection of "video_upload_strategies" */
export type Video_Upload_Strategies_Aggregate = {
  __typename?: 'video_upload_strategies_aggregate';
  aggregate?: Maybe<Video_Upload_Strategies_Aggregate_Fields>;
  nodes: Array<Video_Upload_Strategies>;
};

/** aggregate fields of "video_upload_strategies" */
export type Video_Upload_Strategies_Aggregate_Fields = {
  __typename?: 'video_upload_strategies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Video_Upload_Strategies_Max_Fields>;
  min?: Maybe<Video_Upload_Strategies_Min_Fields>;
};

/** aggregate fields of "video_upload_strategies" */
export type Video_Upload_Strategies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Video_Upload_Strategies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "video_upload_strategies". All fields are combined with a logical 'AND'. */
export type Video_Upload_Strategies_Bool_Exp = {
  _and?: Maybe<Array<Video_Upload_Strategies_Bool_Exp>>;
  _not?: Maybe<Video_Upload_Strategies_Bool_Exp>;
  _or?: Maybe<Array<Video_Upload_Strategies_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  video_upload_strategy?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "video_upload_strategies" */
export enum Video_Upload_Strategies_Constraint {
  /** unique or primary key constraint */
  VideoUploadStrategiesPkey = 'video_upload_strategies_pkey',
}

export enum Video_Upload_Strategies_Enum {
  /** Video uploaded through Google Cloud Storage Resumable Uploads */
  GcsResumable = 'gcs_resumable',
  /** Videos uploaded through Google Drive */
  GoogleDrive = 'google_drive',
}

/** Boolean expression to compare columns of type "video_upload_strategies_enum". All fields are combined with logical 'AND'. */
export type Video_Upload_Strategies_Enum_Comparison_Exp = {
  _eq?: Maybe<Video_Upload_Strategies_Enum>;
  _in?: Maybe<Array<Video_Upload_Strategies_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Video_Upload_Strategies_Enum>;
  _nin?: Maybe<Array<Video_Upload_Strategies_Enum>>;
};

/** input type for inserting data into table "video_upload_strategies" */
export type Video_Upload_Strategies_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  video_upload_strategy?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Video_Upload_Strategies_Max_Fields = {
  __typename?: 'video_upload_strategies_max_fields';
  comment?: Maybe<Scalars['String']>;
  video_upload_strategy?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Video_Upload_Strategies_Min_Fields = {
  __typename?: 'video_upload_strategies_min_fields';
  comment?: Maybe<Scalars['String']>;
  video_upload_strategy?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "video_upload_strategies" */
export type Video_Upload_Strategies_Mutation_Response = {
  __typename?: 'video_upload_strategies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Video_Upload_Strategies>;
};

/** on_conflict condition type for table "video_upload_strategies" */
export type Video_Upload_Strategies_On_Conflict = {
  constraint: Video_Upload_Strategies_Constraint;
  update_columns?: Array<Video_Upload_Strategies_Update_Column>;
  where?: Maybe<Video_Upload_Strategies_Bool_Exp>;
};

/** Ordering options when selecting data from "video_upload_strategies". */
export type Video_Upload_Strategies_Order_By = {
  comment?: Maybe<Order_By>;
  video_upload_strategy?: Maybe<Order_By>;
};

/** primary key columns input for table: video_upload_strategies */
export type Video_Upload_Strategies_Pk_Columns_Input = {
  video_upload_strategy: Scalars['String'];
};

/** select columns of table "video_upload_strategies" */
export enum Video_Upload_Strategies_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  VideoUploadStrategy = 'video_upload_strategy',
}

/** input type for updating data in table "video_upload_strategies" */
export type Video_Upload_Strategies_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  video_upload_strategy?: Maybe<Scalars['String']>;
};

/** update columns of table "video_upload_strategies" */
export enum Video_Upload_Strategies_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  VideoUploadStrategy = 'video_upload_strategy',
}

/** columns and relationships of "viewer_analytics" */
export type Viewer_Analytics = {
  __typename?: 'viewer_analytics';
  created_at: Scalars['timestamptz'];
  display_name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  last_viewed?: Maybe<Scalars['timestamptz']>;
  project_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_identifier: Scalars['String'];
  uuid: Scalars['uuid'];
  view_count: Scalars['Int'];
};

/** aggregated selection of "viewer_analytics" */
export type Viewer_Analytics_Aggregate = {
  __typename?: 'viewer_analytics_aggregate';
  aggregate?: Maybe<Viewer_Analytics_Aggregate_Fields>;
  nodes: Array<Viewer_Analytics>;
};

/** aggregate fields of "viewer_analytics" */
export type Viewer_Analytics_Aggregate_Fields = {
  __typename?: 'viewer_analytics_aggregate_fields';
  avg?: Maybe<Viewer_Analytics_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Viewer_Analytics_Max_Fields>;
  min?: Maybe<Viewer_Analytics_Min_Fields>;
  stddev?: Maybe<Viewer_Analytics_Stddev_Fields>;
  stddev_pop?: Maybe<Viewer_Analytics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Viewer_Analytics_Stddev_Samp_Fields>;
  sum?: Maybe<Viewer_Analytics_Sum_Fields>;
  var_pop?: Maybe<Viewer_Analytics_Var_Pop_Fields>;
  var_samp?: Maybe<Viewer_Analytics_Var_Samp_Fields>;
  variance?: Maybe<Viewer_Analytics_Variance_Fields>;
};

/** aggregate fields of "viewer_analytics" */
export type Viewer_Analytics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Viewer_Analytics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Viewer_Analytics_Avg_Fields = {
  __typename?: 'viewer_analytics_avg_fields';
  view_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "viewer_analytics". All fields are combined with a logical 'AND'. */
export type Viewer_Analytics_Bool_Exp = {
  _and?: Maybe<Array<Viewer_Analytics_Bool_Exp>>;
  _not?: Maybe<Viewer_Analytics_Bool_Exp>;
  _or?: Maybe<Array<Viewer_Analytics_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  last_viewed?: Maybe<Timestamptz_Comparison_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_identifier?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
  view_count?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "viewer_analytics" */
export enum Viewer_Analytics_Constraint {
  /** unique or primary key constraint */
  ViewerAnalyticsPkey = 'viewer_analytics_pkey',
  /** unique or primary key constraint */
  ViewerAnalyticsProjectIdUserIdentifierKey = 'viewer_analytics_project_id_user_identifier_key',
}

/** input type for incrementing numeric columns in table "viewer_analytics" */
export type Viewer_Analytics_Inc_Input = {
  view_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "viewer_analytics" */
export type Viewer_Analytics_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  last_viewed?: Maybe<Scalars['timestamptz']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_identifier?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  view_count?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Viewer_Analytics_Max_Fields = {
  __typename?: 'viewer_analytics_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  last_viewed?: Maybe<Scalars['timestamptz']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_identifier?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  view_count?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Viewer_Analytics_Min_Fields = {
  __typename?: 'viewer_analytics_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  last_viewed?: Maybe<Scalars['timestamptz']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_identifier?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  view_count?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "viewer_analytics" */
export type Viewer_Analytics_Mutation_Response = {
  __typename?: 'viewer_analytics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Viewer_Analytics>;
};

/** on_conflict condition type for table "viewer_analytics" */
export type Viewer_Analytics_On_Conflict = {
  constraint: Viewer_Analytics_Constraint;
  update_columns?: Array<Viewer_Analytics_Update_Column>;
  where?: Maybe<Viewer_Analytics_Bool_Exp>;
};

/** Ordering options when selecting data from "viewer_analytics". */
export type Viewer_Analytics_Order_By = {
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  last_viewed?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_identifier?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
  view_count?: Maybe<Order_By>;
};

/** primary key columns input for table: viewer_analytics */
export type Viewer_Analytics_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "viewer_analytics" */
export enum Viewer_Analytics_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  LastViewed = 'last_viewed',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserIdentifier = 'user_identifier',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  ViewCount = 'view_count',
}

/** input type for updating data in table "viewer_analytics" */
export type Viewer_Analytics_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  last_viewed?: Maybe<Scalars['timestamptz']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_identifier?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  view_count?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Viewer_Analytics_Stddev_Fields = {
  __typename?: 'viewer_analytics_stddev_fields';
  view_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Viewer_Analytics_Stddev_Pop_Fields = {
  __typename?: 'viewer_analytics_stddev_pop_fields';
  view_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Viewer_Analytics_Stddev_Samp_Fields = {
  __typename?: 'viewer_analytics_stddev_samp_fields';
  view_count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Viewer_Analytics_Sum_Fields = {
  __typename?: 'viewer_analytics_sum_fields';
  view_count?: Maybe<Scalars['Int']>;
};

/** update columns of table "viewer_analytics" */
export enum Viewer_Analytics_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  LastViewed = 'last_viewed',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserIdentifier = 'user_identifier',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  ViewCount = 'view_count',
}

/** aggregate var_pop on columns */
export type Viewer_Analytics_Var_Pop_Fields = {
  __typename?: 'viewer_analytics_var_pop_fields';
  view_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Viewer_Analytics_Var_Samp_Fields = {
  __typename?: 'viewer_analytics_var_samp_fields';
  view_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Viewer_Analytics_Variance_Fields = {
  __typename?: 'viewer_analytics_variance_fields';
  view_count?: Maybe<Scalars['Float']>;
};
