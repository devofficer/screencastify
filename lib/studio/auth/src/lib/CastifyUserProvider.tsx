import { createCtx } from '@castify/fe-common';
import {
  GetUsersDocument,
  GetUsersQuery,
} from '@castify/studio/database-clients/graphql';
import { FC } from 'react';
import { useQuery } from 'urql';

interface CastifyUser {
  displayName?: string | null;
  avatarURL?: string | null;
  email?: string;
  providerUID: string;
  domain?: string | null;
  isSignedIn: boolean;
  // authProvider should probably not be null in actual use but we removed the constraint that made it required in order to
  // support running a script to populate that data over time leading up to adding clever sso.  If the constraint
  // were to be added again we could remove null from the type of auth provider but at the moment null is possible
  // based on the generated types
  authProvider?: string | null;
  isLegacyAppUser?: boolean | null;
  legacyUserCreatedAtDate?: string | null;
}

const [useCastifyUser, Provider] = createCtx<CastifyUser>('CastifyUser');

const CastifyUserProvider: FC = (props) => {
  const [{ data, fetching }] = useQuery<GetUsersQuery>({
    query: GetUsersDocument,
    requestPolicy: 'cache-and-network',
  });

  const castifyUserData = data?.users[0] ?? null;

  const castifyUser = castifyUserData
    ? {
        providerUID: castifyUserData.provider_uid ?? '',
        email: castifyUserData.email,
        isSignedIn: true,
        displayName: castifyUserData.display_name ?? '',
        avatarURL: castifyUserData.avatar_url ?? '',
        domain: castifyUserData.domain ?? '',
        authProvider: castifyUserData.auth_provider,
        isLegacyAppUser: castifyUserData.legacy_app_user ?? false,
        legacyUserCreatedAtDate: castifyUserData.legacy_user_created_at,
      }
    : {
        providerUID: '',
        email: '',
        isSignedIn: false,
      };

  if (fetching) return null;

  return <Provider value={castifyUser}> {props.children}</Provider>;
};

export {
  CastifyUserProvider,
  useCastifyUser,
  Provider as RawCastifyUserProvider,
};
