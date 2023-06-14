import { User_Settings_Values_Enum } from './generated-types';

/**
 * User_Settings_Values Types
 * User_Settings_Values Enums are created in order to help limit
 * which values we expect someone to be able to use for a particular
 * User_Settings_Name.  We are writing this ourselves because technically
 * any value from User_Settings_Values_Enum is a valid value in our database
 * schema.  In practical use we want some means of limiting which values go
 * with which setting name, hence these types
 */
export enum User_Settings_Values_Ingest_Destination_Enum {
  /** Option for ingest_destination. The extension should target the legacy platform for uploads of new videos */
  LegacyIngest = User_Settings_Values_Enum.LegacyIngest,
  /** Option for ingest_destination. The extension should target the studio platform (internal name for our new react platform) for uploads of new videos */
  StudioIngest = User_Settings_Values_Enum.StudioIngest,
}

/**
 * end User_Settings_Values Types
 */
