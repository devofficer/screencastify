import {
  License_Seat_Roles_Enum,
  License_Seat_Tiers_Enum,
} from '@castify/studio/database-clients/graphql';
import { Instance, types } from 'mobx-state-tree';

export const UserState = types
  .model('UserState', {
    userId: types.optional(types.string, ''),
    userEmail: types.optional(types.string, ''),
    userCastLimit: types.optional(types.number, 0),
    userCastCount: types.optional(types.number, 0),
    // TODO: evaluate if this is correct for users who are on multiple licenses
    // as of writing this it has no effect on the app working
    licenseRole: types.optional(
      types.union(
        types.literal(License_Seat_Roles_Enum.Admin),
        types.literal(License_Seat_Roles_Enum.Member),
        types.literal(License_Seat_Roles_Enum.Restricted),
      ),
      License_Seat_Roles_Enum.Restricted,
    ),
    userPlanTier: types.optional(
      types.union(
        types.literal(License_Seat_Tiers_Enum.Free),
        types.literal(License_Seat_Tiers_Enum.Pro),
        types.literal(License_Seat_Tiers_Enum.Standard),
      ),
      License_Seat_Tiers_Enum.Free,
    ),
  })
  .views((self) => {
    return {
      get freeTierEnabled() {
        return self.userPlanTier === License_Seat_Tiers_Enum.Free;
      },
    };
  })
  .actions((self) => {
    return {
      setUserId(userId: string) {
        self.userId = userId;
      },
      setUserPlanTier(tier: License_Seat_Tiers_Enum) {
        self.userPlanTier = tier;
      },
      setUserCastCount(count: number) {
        self.userCastCount = count;
      },
      setUserCastLimit(limit: number) {
        self.userCastLimit = limit;
      },
      setUserLicenseRole(tier: License_Seat_Roles_Enum) {
        self.licenseRole = tier;
      },
    };
  });

export type IUserState = Instance<typeof UserState>;
