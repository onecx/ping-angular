/**
 * Generated API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountSettingsDTO } from './accountSettingsDTO';
import { UserPersonDTO } from './userPersonDTO';
import { MembershipDTO } from './membershipDTO';


export interface UserProfileDTO { 
    guid?: string;
    persisted?: boolean;
    version?: number;
    controlTraceabilityManual?: boolean;
    creationDate?: string;
    creationUser?: string;
    modificationDate?: string;
    modificationUser?: string;
    accountSettings?: AccountSettingsDTO;
    identityProvider?: string;
    identityProviderId?: string;
    memberships?: Array<MembershipDTO>;
    organization?: string;
    person?: UserPersonDTO;
    roles?: Array<string>;
    userId?: string;
}
