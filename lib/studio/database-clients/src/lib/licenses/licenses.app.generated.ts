import * as Types from '../generated-types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetMyLicensesSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetMyLicensesSubscription = {
  __typename?: 'subscription_root';
  licenses: Array<{
    __typename?: 'licenses';
    uuid: string;
    max_pro_member_seats: number;
    max_pro_restricted_seats: number;
    max_standard_member_seats: number;
    max_standard_restricted_seats: number;
    organization?:
      | {
          __typename?: 'organizations';
          name: string;
          is_edu: boolean;
          chargebee_customer_email?: string | null | undefined;
        }
      | null
      | undefined;
    seats: Array<{
      __typename?: 'seats';
      role: Types.License_Seat_Roles_Enum;
      tier: Types.License_Seat_Tiers_Enum;
    }>;
  }>;
};

export type GetMyOwnedLicensesSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetMyOwnedLicensesSubscription = {
  __typename?: 'subscription_root';
  owned_licenses: Array<{
    __typename?: 'owned_licenses';
    uuid?: string | null | undefined;
    max_pro_member_seats?: number | null | undefined;
    max_pro_restricted_seats?: number | null | undefined;
    max_standard_member_seats?: number | null | undefined;
    max_standard_restricted_seats?: number | null | undefined;
    organization?:
      | {
          __typename?: 'organizations';
          name: string;
          is_edu: boolean;
          chargebee_customer_email?: string | null | undefined;
        }
      | null
      | undefined;
    seats: Array<{
      __typename?: 'seats';
      role: Types.License_Seat_Roles_Enum;
      tier: Types.License_Seat_Tiers_Enum;
    }>;
  }>;
};

export type GetManagedLicensesSubscriptionVariables = Types.Exact<{
  license_uuid: Types.Scalars['uuid'];
  paginationSize?: Types.Maybe<Types.Scalars['Int']>;
  paginationOffset?: Types.Maybe<Types.Scalars['Int']>;
  orderBy?: Types.Maybe<
    Array<Types.License_Seats_Order_By> | Types.License_Seats_Order_By
  >;
  whereClause?: Types.Maybe<Types.License_Seats_Bool_Exp>;
  licenseOwnerEmail: Types.Scalars['String'];
}>;

export type GetManagedLicensesSubscription = {
  __typename?: 'subscription_root';
  licenses_by_pk?:
    | {
        __typename?: 'licenses';
        license_seats: Array<{
          __typename?: 'license_seats';
          uuid?: string | null | undefined;
          email?: string | null | undefined;
          role?: string | null | undefined;
          tier?: string | null | undefined;
          license_uuid?: string | null | undefined;
          user_uuid?: string | null | undefined;
          user_provider_uid?: string | null | undefined;
        }>;
        license_seats_aggregate: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
        non_admin_seats_aggregate: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type GetManagedLicenseAutoAssignDomainsQueryVariables = Types.Exact<{
  license_uuid: Types.Scalars['uuid'];
}>;

export type GetManagedLicenseAutoAssignDomainsQuery = {
  __typename?: 'query_root';
  licenses_by_pk?:
    | {
        __typename?: 'licenses';
        uuid: string;
        auto_assign_domains: Array<{
          __typename?: 'auto_assign_domains';
          domain: string;
          role: Types.License_Seat_Roles_Enum;
          uuid: string;
          is_active: boolean;
        }>;
      }
    | null
    | undefined;
};

export type SeatDetailsSubscriptionVariables = Types.Exact<{
  license_uuid: Types.Scalars['uuid'];
}>;

export type SeatDetailsSubscription = {
  __typename?: 'subscription_root';
  licenses_by_pk?:
    | {
        __typename?: 'licenses';
        pro_member_users: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
        pro_restricted_users: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
        pro_admin_users: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
        standard_member_users: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
        standard_admin_users: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
        standard_restricted_users: {
          __typename?: 'license_seats_aggregate';
          aggregate?:
            | { __typename?: 'license_seats_aggregate_fields'; count: number }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export const GetMyLicensesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'getMyLicenses' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'licenses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'max_pro_member_seats' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'max_pro_restricted_seats' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'max_standard_member_seats' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'max_standard_restricted_seats',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'organization' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'is_edu' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'chargebee_customer_email',
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seats' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'tier' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyLicensesSubscription,
  GetMyLicensesSubscriptionVariables
>;
export const GetMyOwnedLicensesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'getMyOwnedLicenses' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'owned_licenses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'max_pro_member_seats' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'max_pro_restricted_seats' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'max_standard_member_seats' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'max_standard_restricted_seats',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'organization' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'is_edu' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'chargebee_customer_email',
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seats' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'tier' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyOwnedLicensesSubscription,
  GetMyOwnedLicensesSubscriptionVariables
>;
export const GetManagedLicensesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'GetManagedLicenses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'license_uuid' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'paginationSize' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'paginationOffset' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'license_seats_order_by' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'whereClause' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'license_seats_bool_exp' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'licenseOwnerEmail' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'licenses_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uuid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'license_uuid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'license_seats' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'whereClause' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'paginationSize' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'offset' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'paginationOffset' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'order_by' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'orderBy' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'tier' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'license_uuid' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user_uuid' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user_provider_uid' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'whereClause' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'non_admin_seats_aggregate' },
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_and' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'role' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_neq' },
                                        value: {
                                          kind: 'StringValue',
                                          value: 'admin',
                                          block: false,
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'email' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_neq' },
                                        value: {
                                          kind: 'Variable',
                                          name: {
                                            kind: 'Name',
                                            value: 'licenseOwnerEmail',
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManagedLicensesSubscription,
  GetManagedLicensesSubscriptionVariables
>;
export const GetManagedLicenseAutoAssignDomainsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManagedLicenseAutoAssignDomains' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'license_uuid' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'licenses_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uuid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'license_uuid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'auto_assign_domains' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'is_active' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManagedLicenseAutoAssignDomainsQuery,
  GetManagedLicenseAutoAssignDomainsQueryVariables
>;
export const SeatDetailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'SeatDetails' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'license_uuid' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'uuid' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'licenses_by_pk' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uuid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'license_uuid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'pro_member_users' },
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'user_uuid' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_is_null' },
                                  value: { kind: 'BooleanValue', value: false },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'role' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'member',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'tier' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'pro',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'pro_restricted_users' },
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'user_uuid' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_is_null' },
                                  value: { kind: 'BooleanValue', value: false },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'role' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'restricted',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'tier' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'pro',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'pro_admin_users' },
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'user_uuid' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_is_null' },
                                  value: { kind: 'BooleanValue', value: false },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'role' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'admin',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'tier' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'pro',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'standard_member_users' },
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'user_uuid' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_is_null' },
                                  value: { kind: 'BooleanValue', value: false },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'role' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'member',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'tier' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'standard',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'standard_admin_users' },
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'user_uuid' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_is_null' },
                                  value: { kind: 'BooleanValue', value: false },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'role' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'admin',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'tier' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'standard',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'standard_restricted_users' },
                  name: { kind: 'Name', value: 'license_seats_aggregate' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'user_uuid' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_is_null' },
                                  value: { kind: 'BooleanValue', value: false },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'role' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'restricted',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'tier' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: '_eq' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'standard',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aggregate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'count' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SeatDetailsSubscription,
  SeatDetailsSubscriptionVariables
>;
