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
import { SubjectLink } from './subjectLink';
import { PortalAddress } from './portalAddress';


export interface PortalDTO {
    address?: PortalAddress;
    companyName?: string;
    creationDate?: string;
    creationUser?: string;
    themeName?: string;
    description?: string;
    guid?: string;
    homePage?: string;
    id?: string;
    imageUrls?: Array<string>;
    modificationDate?: string;
    modificationUser?: string;
    phoneNumber?: string;
    rssFeedUrl?: string;
    subjectLinks?: Array<SubjectLink>;
}

