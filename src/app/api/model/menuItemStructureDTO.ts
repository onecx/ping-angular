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


export interface MenuItemStructureDTO {
    applicationId?: string;
    badge?: string;
    children?: Array<MenuItemStructureDTO>;
    description?: string;
    disabled?: boolean;
    guid?: string;
    i18n?: { [key: string]: string; };
    key?: string;
    name?: string;
    parentItemGuid?: string;
    portalExit?: boolean;
    portalId?: string;
    position?: number;
    url?: string;
}

