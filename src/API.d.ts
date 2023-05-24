declare namespace API {
    export namespace GetAboutCatalystInfo {
        export type Output = Responses.$200 | Responses.$503;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getAboutCatalystInfoResponse200<200>;
            export type $503 = Components.Responses.getAboutCatalystInfoResponse503<503>;
        }
    }
    export namespace GetStatsParcels {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getStatsParcelsResponse200<200>;
        }
    }
    export namespace GetEntityAuditInformation {
        export type Output = Responses.$200 | Responses.$400 | Responses.$404;
        export type Input = {
            readonly entityType: Parameters.EntityType;
            readonly entityId: Parameters.EntityId;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getEntityAuditInformationResponse200<200>;
            export type $400 = Components.Responses.getEntityAuditInformationResponse400<400>;
            export type $404 = Components.Responses.getEntityAuditInformationResponse404<404>;
        }
        export namespace Parameters {
            export type EntityType = Components.Parameters.GetEntityAuditInformation0;
            export type EntityId = Components.Parameters.GetEntityAuditInformation1;
        }
    }
    export namespace GetChallenge {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getChallengeResponse200<200>;
        }
    }
    export namespace GetContentFile {
        export type Output = Responses.$200 | Responses.$404;
        export type Input = {
            readonly hashId: Parameters.HashId;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getContentFileResponse200<200>;
            export type $404 = Components.Responses.getContentFileResponse404<404>;
        }
        export namespace Parameters {
            export type HashId = Components.Parameters.GetContentFile0;
        }
    }
    export namespace HeadContentFile {
        export type Output = Responses.$200 | Responses.$404;
        export type Input = {
            readonly hashId: Parameters.HashId;
        };
        export namespace Responses {
            export type $200 = Components.Responses.headContentFileResponse200<200>;
            export type $404 = Components.Responses.headContentFileResponse404<404>;
        }
        export namespace Parameters {
            export type HashId = Components.Parameters.HeadContentFile0;
        }
    }
    export namespace GetEntityIdsByHashId {
        export type Output = Responses.$200 | Responses.$404;
        export type Input = {
            readonly hashId: Parameters.HashId;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getEntityIdsByHashIdResponse200<200>;
            export type $404 = Components.Responses.getEntityIdsByHashIdResponse404<404>;
        }
        export namespace Parameters {
            export type HashId = Components.Parameters.GetEntityIdsByHashId0;
        }
    }
    export namespace GetAvailableContent {
        export type Output = Responses.$200 | Responses.$400;
        export type Input = {
            readonly cid: Parameters.Cid;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getAvailableContentResponse200<200>;
            export type $400 = Components.Responses.getAvailableContentResponse400<400>;
        }
        export namespace Parameters {
            export type Cid = Components.Parameters.GetAvailableContent0;
        }
    }
    export namespace PostEntity {
        export type Body = Components.RequestBodies.PostEntityRequestBody;
        export type Output = Responses.$200 | Responses.$400;
        export type Input = {
            readonly body?: Body;
        };
        export namespace Responses {
            export type $200 = Components.Responses.postEntityResponse200<200>;
            export type $400 = Components.Responses.postEntityResponse400<400>;
        }
    }
    export namespace GetEntitiesByPointerPrefix {
        export type Output = Responses.$200;
        export type Input = {
            readonly collectionUrn: Parameters.CollectionUrn;
            readonly pageSize?: Parameters.PageSize;
            readonly pageNumber?: Parameters.PageNumber;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getEntitiesByPointerPrefixResponse200<200>;
        }
        export namespace Parameters {
            export type CollectionUrn = Components.Parameters.GetEntitiesByPointerPrefix0;
            export type PageSize = Components.Parameters.GetEntitiesByPointerPrefix1;
            export type PageNumber = Components.Parameters.GetEntitiesByPointerPrefix2;
        }
    }
    export namespace GetActiveEntities {
        export type Body = Components.RequestBodies.GetActiveEntitiesRequestBody;
        export type Output = Responses.$200 | Responses.$400;
        export type Input = {
            readonly body?: Body;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getActiveEntitiesResponse200<200>;
            export type $400 = Components.Responses.getActiveEntitiesResponse400<400>;
        }
    }
    export namespace GetFailedDeployments {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getFailedDeploymentsResponse200<200>;
        }
    }
    export namespace GetPointerChanges {
        export type Output = Responses.$200 | Responses.$400;
        export type Input = {
            readonly from?: Parameters.From;
            readonly to?: Parameters.To;
            readonly lastId?: Parameters.LastId;
            readonly limit?: Parameters.Limit;
            readonly entityType?: Parameters.EntityType;
            readonly sortingField?: Parameters.SortingField;
            readonly sortingOrder?: Parameters.SortingOrder;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getPointerChangesResponse200<200>;
            export type $400 = Components.Responses.getPointerChangesResponse400<400>;
        }
        export namespace Parameters {
            export type From = Components.Parameters.GetPointerChanges0;
            export type To = Components.Parameters.GetPointerChanges1;
            export type LastId = Components.Parameters.GetPointerChanges2;
            export type Limit = Components.Parameters.GetPointerChanges3;
            export type EntityType = Components.Parameters.GetPointerChanges4;
            export type SortingField = Components.Parameters.GetPointerChanges5;
            export type SortingOrder = Components.Parameters.GetPointerChanges6;
        }
    }
    export namespace GetSnapshots {
        export type Output = Responses.$200 | Responses.$503;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getSnapshotsResponse200<200>;
            export type $503 = Components.Responses.getSnapshotsResponse503<503>;
        }
    }
    export namespace GetContentStatus {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getContentStatusResponse200<200>;
        }
    }
    export namespace GetLambdaStatus {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getLambdaStatusResponse200<200>;
        }
    }
    export namespace GetCollections {
        export type Output = Responses.$200 | Responses.$500;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getCollectionsResponse200<200>;
            export type $500 = Components.Responses.getCollectionsResponse500<500>;
        }
    }
    export namespace GetThumbnail {
        export type Output = Responses.$200;
        export type Input = {
            readonly urn: Parameters.Urn;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getThumbnailResponse200<200>;
        }
        export namespace Parameters {
            export type Urn = Components.Parameters.GetThumbnail0;
        }
    }
    export namespace GetImage {
        export type Output = Responses.$200;
        export type Input = {
            readonly urn: Parameters.Urn;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getImageResponse200<200>;
        }
        export namespace Parameters {
            export type Urn = Components.Parameters.GetImage0;
        }
    }
    export namespace GetStandardErc721 {
        export type Output = Responses.$200 | Responses.$400 | Responses.$404 | Responses.$500;
        export type Input = {
            readonly chainId: Parameters.ChainId;
            readonly contract: Parameters.Contract;
            readonly option: Parameters.Option;
            readonly emission: Parameters.Emission;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getStandardErc721Response200<200>;
            export type $400 = Components.Responses.getStandardErc721Response400<400>;
            export type $404 = Components.Responses.getStandardErc721Response404<404>;
            export type $500 = Components.Responses.getStandardErc721Response500<500>;
        }
        export namespace Parameters {
            export type ChainId = Components.Parameters.GetStandardErc7210;
            export type Contract = Components.Parameters.GetStandardErc7211;
            export type Option = Components.Parameters.GetStandardErc7212;
            export type Emission = Components.Parameters.GetStandardErc7213;
        }
    }
    export namespace GetWearables {
        export type Output = Responses.$200 | Responses.$503;
        export type Input = {
            readonly address: Parameters.Address;
            readonly includeEntities?: Parameters.IncludeEntities;
            readonly includeThirdParty?: Parameters.IncludeThirdParty;
            readonly pageNum?: Parameters.PageNum;
            readonly pageSize?: Parameters.PageSize;
            readonly orderBy?: Parameters.OrderBy;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getWearablesResponse200<200>;
            export type $503 = Components.Responses.getWearablesResponse503<503>;
        }
        export namespace Parameters {
            export type Address = Components.Parameters.GetWearables0;
            export type IncludeEntities = Components.Parameters.GetWearables1;
            export type IncludeThirdParty = Components.Parameters.GetWearables2;
            export type PageNum = Components.Parameters.GetWearables3;
            export type PageSize = Components.Parameters.GetWearables4;
            export type OrderBy = Components.Parameters.GetWearables5;
        }
    }
    export namespace GetEmotes {
        export type Output = Responses.$200 | Responses.$500;
        export type Input = {
            readonly collectionId?: Parameters.CollectionId;
            readonly includeEntities?: Parameters.IncludeEntities;
            readonly address: Parameters.Address;
            readonly pageNum?: Parameters.PageNum;
            readonly pageSize?: Parameters.PageSize;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getEmotesResponse200<200>;
            export type $500 = Components.Responses.getEmotesResponse500<500>;
        }
        export namespace Parameters {
            export type CollectionId = Components.Parameters.GetEmotes0;
            export type IncludeEntities = Components.Parameters.GetEmotes1;
            export type Address = Components.Parameters.GetEmotes2;
            export type PageNum = Components.Parameters.GetEmotes3;
            export type PageSize = Components.Parameters.GetEmotes4;
        }
    }
    export namespace GetNames {
        export type Output = Responses.$200 | Responses.$500;
        export type Input = {
            readonly address: Parameters.Address;
            readonly pageNum?: Parameters.PageNum;
            readonly pageSize?: Parameters.PageSize;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getNamesResponse200<200>;
            export type $500 = Components.Responses.getNamesResponse500<500>;
        }
        export namespace Parameters {
            export type Address = Components.Parameters.GetNames0;
            export type PageNum = Components.Parameters.GetNames1;
            export type PageSize = Components.Parameters.GetNames2;
        }
    }
    export namespace GetLands {
        export type Output = Responses.$200 | Responses.$500;
        export type Input = {
            readonly address: Parameters.Address;
            readonly pageNum?: Parameters.PageNum;
            readonly pageSize?: Parameters.PageSize;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getLandsResponse200<200>;
            export type $500 = Components.Responses.getLandsResponse500<500>;
        }
        export namespace Parameters {
            export type Address = Components.Parameters.GetLands0;
            export type PageNum = Components.Parameters.GetLands1;
            export type PageSize = Components.Parameters.GetLands2;
        }
    }
    export namespace GetThirdPartyWearables {
        export type Output = Responses.$200;
        export type Input = {
            readonly address: Parameters.Address;
            readonly pageNum?: Parameters.PageNum;
            readonly pageSize?: Parameters.PageSize;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getThirdPartyWearablesResponse200<200>;
        }
        export namespace Parameters {
            export type Address = Components.Parameters.GetThirdPartyWearables0;
            export type PageNum = Components.Parameters.GetThirdPartyWearables1;
            export type PageSize = Components.Parameters.GetThirdPartyWearables2;
        }
    }
    export namespace GetThirdPartyCollection {
        export type Output = Responses.$200;
        export type Input = {
            readonly address: Parameters.Address;
            readonly collectionId: Parameters.CollectionId;
            readonly pageNum?: Parameters.PageNum;
            readonly pageSize?: Parameters.PageSize;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getThirdPartyCollectionResponse200<200>;
        }
        export namespace Parameters {
            export type Address = Components.Parameters.GetThirdPartyCollection0;
            export type CollectionId = Components.Parameters.GetThirdPartyCollection1;
            export type PageNum = Components.Parameters.GetThirdPartyCollection2;
            export type PageSize = Components.Parameters.GetThirdPartyCollection3;
        }
    }
    export namespace SearchWearables {
        export type Output = Responses.$200 | Responses.$400;
        export type Input = {
            readonly collectionId?: Parameters.CollectionId;
            readonly wearableId?: Parameters.WearableId;
            readonly textSearch?: Parameters.TextSearch;
            readonly limit?: Parameters.Limit;
            readonly lastId?: Parameters.LastId;
        };
        export namespace Responses {
            export type $200 = Components.Responses.searchWearablesResponse200<200>;
            export type $400 = Components.Responses.searchWearablesResponse400<400>;
        }
        export namespace Parameters {
            export type CollectionId = Components.Parameters.SearchWearables0;
            export type WearableId = Components.Parameters.SearchWearables1;
            export type TextSearch = Components.Parameters.SearchWearables2;
            export type Limit = Components.Parameters.SearchWearables3;
            export type LastId = Components.Parameters.SearchWearables4;
        }
    }
    export namespace GetServers {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getServersResponse200<200>;
        }
    }
    export namespace GetPois {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getPoisResponse200<200>;
        }
    }
    export namespace GetDenylistedUserNames {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getDenylistedUserNamesResponse200<200>;
        }
    }
    export namespace ValidateSignature {
        export type Body = Components.RequestBodies.ValidateSignatureRequestBody;
        export type Output = Responses.$200 | Responses.$400;
        export type Input = {
            readonly body?: Body;
        };
        export namespace Responses {
            export type $200 = Components.Responses.validateSignatureResponse200<200>;
            export type $400 = Components.Responses.validateSignatureResponse400<400>;
        }
    }
    export namespace GetHotScenes {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getHotScenesResponse200<200>;
        }
    }
    export namespace GetRealms {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getRealmsResponse200<200>;
        }
    }
    export namespace GetAvatarsDetailsByPost {
        export type Body = Components.RequestBodies.GetAvatarsDetailsByPostRequestBody;
        export type Output = Responses.$200 | Responses.$304;
        export type Input = {
            readonly body?: Body;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getAvatarsDetailsByPostResponse200<200>;
            export type $304 = Components.Responses.getAvatarsDetailsByPostResponse304<304>;
        }
    }
    export namespace GetAvatarDetails {
        export type Output = Responses.$200;
        export type Input = {
            readonly id: Parameters.Id;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getAvatarDetailsResponse200<200>;
        }
        export namespace Parameters {
            export type Id = Components.Parameters.GetAvatarDetails0;
        }
    }
    export namespace GetThirdPartyIntegrations {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getThirdPartyIntegrationsResponse200<200>;
        }
    }
    export namespace GetIslands {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getIslandsResponse200<200>;
        }
    }
    export namespace GetIsland {
        export type Output = Responses.$200;
        export type Input = {
            readonly islandId: Parameters.IslandId;
        };
        export namespace Responses {
            export type $200 = Components.Responses.getIslandResponse200<200>;
        }
        export namespace Parameters {
            export type IslandId = Components.Parameters.GetIsland0;
        }
    }
    export namespace GetPeers {
        export type Output = Responses.$200;
        export type Input = {};
        export namespace Responses {
            export type $200 = Components.Responses.getPeersResponse200<200>;
        }
    }
}
declare namespace Components {
    export namespace RequestBodies {
        export type PostEntityRequestBody = Components.Schemas.RequestBodiespostEntityRequestBodyBody0;
        export type GetActiveEntitiesRequestBody = Components.Schemas.RequestBodiesgetActiveEntitiesRequestBodyBody0;
        export type ValidateSignatureRequestBody = Components.Schemas.RequestBodiesvalidateSignatureRequestBodyBody0;
        export type GetAvatarsDetailsByPostRequestBody = Components.Schemas.PostProfiles;
    }
    export namespace Parameters {
        export type GetEntityAuditInformation0 = "profile" | "scene" | "wearable";
        export type GetPointerChanges4 = "scene" | "profile" | "wearable";
        export type GetPointerChanges5 = "local_timestamp" | "entity_timestamp";
        export type GetPointerChanges6 = "ASC" | "DESC";
        export type GetEntityAuditInformation1 = NonNullable<string>;
        export type GetContentFile0 = NonNullable<string>;
        export type HeadContentFile0 = NonNullable<string>;
        export type GetEntityIdsByHashId0 = NonNullable<string>;
        export type GetEntitiesByPointerPrefix0 = NonNullable<string>;
        export type GetEntitiesByPointerPrefix1 = NonNullable<number>;
        export type GetEntitiesByPointerPrefix2 = NonNullable<number>;
        export type GetPointerChanges0 = NonNullable<number>;
        export type GetPointerChanges1 = NonNullable<number>;
        export type GetPointerChanges2 = NonNullable<string>;
        export type GetPointerChanges3 = NonNullable<number>;
        export type GetThumbnail0 = NonNullable<string>;
        export type GetImage0 = NonNullable<string>;
        export type GetStandardErc7210 = NonNullable<string>;
        export type GetStandardErc7211 = NonNullable<string>;
        export type GetStandardErc7212 = NonNullable<string>;
        export type GetStandardErc7213 = NonNullable<string>;
        export type GetWearables0 = NonNullable<string>;
        export type GetWearables1 = NonNullable<boolean>;
        export type GetWearables2 = NonNullable<boolean>;
        export type GetWearables3 = NonNullable<string>;
        export type GetWearables4 = NonNullable<string>;
        export type GetWearables5 = NonNullable<string>;
        export type GetEmotes0 = NonNullable<string>;
        export type GetEmotes1 = NonNullable<boolean>;
        export type GetEmotes2 = NonNullable<string>;
        export type GetEmotes3 = NonNullable<string>;
        export type GetEmotes4 = NonNullable<string>;
        export type GetNames0 = NonNullable<string>;
        export type GetNames1 = NonNullable<string>;
        export type GetNames2 = NonNullable<string>;
        export type GetLands0 = NonNullable<string>;
        export type GetLands1 = NonNullable<string>;
        export type GetLands2 = NonNullable<string>;
        export type GetThirdPartyWearables0 = NonNullable<string>;
        export type GetThirdPartyWearables1 = NonNullable<string>;
        export type GetThirdPartyWearables2 = NonNullable<string>;
        export type GetThirdPartyCollection0 = NonNullable<string>;
        export type GetThirdPartyCollection1 = NonNullable<string>;
        export type GetThirdPartyCollection2 = NonNullable<string>;
        export type GetThirdPartyCollection3 = NonNullable<string>;
        export type SearchWearables2 = NonNullable<string>;
        export type SearchWearables3 = NonNullable<number>;
        export type SearchWearables4 = NonNullable<string>;
        export type GetAvatarDetails0 = NonNullable<string>;
        export type GetIsland0 = NonNullable<string>;
        export type GetAvailableContent0 = NonNullable<NonNullable<string>[]>;
        export type SearchWearables0 = NonNullable<NonNullable<string>[]>;
        export type SearchWearables1 = NonNullable<NonNullable<string>[]>;
    }
    export namespace Responses {
        export type getSnapshotsResponse503<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getCollectionsResponse500<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getStandardErc721Response400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getStandardErc721Response404<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getStandardErc721Response500<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getEmotesResponse500<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getNamesResponse500<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getLandsResponse500<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type validateSignatureResponse400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getAvatarsDetailsByPostResponse304<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type getAboutCatalystInfoResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.About;
        };
        export type getAboutCatalystInfoResponse503<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.About;
        };
        export type getStatsParcelsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.StatsParcels;
        };
        export type getEntityAuditInformationResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.AuditResponse;
        };
        export type getEntityAuditInformationResponse400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Error;
        };
        export type getEntityAuditInformationResponse404<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Error;
        };
        export type getChallengeResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetChallengeResponse200Body0;
        };
        export type getContentFileResponse404<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetContentFileResponse404Body0;
        };
        export type headContentFileResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly "etag"?: Components.Headers.HeadContentFileResponse200HeadersETag;
                readonly "access-control-expose-headers"?: Components.Headers.HeadContentFileResponse200HeadersAccessControlExposeHeaders;
                readonly "cache-control"?: Components.Headers.HeadContentFileResponse200HeadersCacheControl;
                readonly [name: string]: unknown;
            };
            readonly body?: NonNullable<unknown>;
        };
        export type headContentFileResponse404<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesheadContentFileResponse404Body0;
        };
        export type getEntityIdsByHashIdResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetEntityIdsByHashIdResponse200Body0;
        };
        export type getEntityIdsByHashIdResponse404<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetEntityIdsByHashIdResponse404Body0;
        };
        export type getAvailableContentResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.AvailableContent;
        };
        export type getAvailableContentResponse400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Error;
        };
        export type postEntityResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsespostEntityResponse200Body0;
        };
        export type postEntityResponse400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsespostEntityResponse400Body0;
        };
        export type getEntitiesByPointerPrefixResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetEntitiesByPointerPrefixResponse200Body0;
        };
        export type getActiveEntitiesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetActiveEntitiesResponse200Body0;
        };
        export type getActiveEntitiesResponse400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Error;
        };
        export type getFailedDeploymentsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.FailedDeployments;
        };
        export type getPointerChangesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.PointerChanges;
        };
        export type getPointerChangesResponse400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Error;
        };
        export type getSnapshotsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Snapshots;
        };
        export type getContentStatusResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.StatusContent;
        };
        export type getLambdaStatusResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.StatusLambdas;
        };
        export type getCollectionsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetCollectionsResponse200Body0;
        };
        export type getStandardErc721Response200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Erc721;
        };
        export type getWearablesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetWearablesResponse200Body0;
        };
        export type getWearablesResponse503<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.LambdasError;
        };
        export type getEmotesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetEmotesResponse200Body0;
        };
        export type getNamesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.NamesPaginated;
        };
        export type getLandsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.LandsPaginated;
        };
        export type getThirdPartyWearablesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetThirdPartyWearablesResponse200Body0;
        };
        export type getThirdPartyCollectionResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetThirdPartyCollectionResponse200Body0;
        };
        export type searchWearablesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Wearables;
        };
        export type searchWearablesResponse400<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsessearchWearablesResponse400Body0;
        };
        export type getServersResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Servers;
        };
        export type getPoisResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Pois;
        };
        export type getDenylistedUserNamesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.DenylistedUsernames;
        };
        export type validateSignatureResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesvalidateSignatureResponse200Body0;
        };
        export type getHotScenesResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.HotScenes;
        };
        export type getRealmsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Realms;
        };
        export type getAvatarsDetailsByPostResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetAvatarsDetailsByPostResponse200Body0;
        };
        export type getAvatarDetailsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Profile;
        };
        export type getThirdPartyIntegrationsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ThirdPartyIntegrations;
        };
        export type getIslandsResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Islands;
        };
        export type getIslandResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.IslandId;
        };
        export type getPeersResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.Peers;
        };
        export type getContentFileResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly "etag"?: Components.Headers.GetContentFileResponse200HeadersETag;
                readonly "access-control-expose-headers"?: Components.Headers.GetContentFileResponse200HeadersAccessControlExposeHeaders;
                readonly "cache-control"?: Components.Headers.GetContentFileResponse200HeadersCacheControl;
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetContentFileResponse200Body0;
        };
        export type getThumbnailResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly "etag"?: Components.Headers.GetThumbnailResponse200HeadersETag;
                readonly "cache-control"?: Components.Headers.GetThumbnailResponse200HeadersCacheControl;
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetThumbnailResponse200Body0;
        };
        export type getImageResponse200<S extends number> = {
            readonly status: S;
            readonly headers?: {
                readonly "etag"?: Components.Headers.GetImageResponse200HeadersETag;
                readonly "cache-control"?: Components.Headers.GetImageResponse200HeadersCacheControl;
                readonly [name: string]: unknown;
            };
            readonly body: Components.Schemas.ResponsesgetImageResponse200Body0;
        };
    }
    export namespace Headers {
        export type HeadContentFileResponse200HeadersETag = NonNullable<string>;
        export type HeadContentFileResponse200HeadersAccessControlExposeHeaders = NonNullable<string>;
        export type HeadContentFileResponse200HeadersCacheControl = NonNullable<string>;
        export type GetContentFileResponse200HeadersETag = NonNullable<string>;
        export type GetContentFileResponse200HeadersAccessControlExposeHeaders = NonNullable<string>;
        export type GetContentFileResponse200HeadersCacheControl = NonNullable<string>;
        export type GetThumbnailResponse200HeadersETag = NonNullable<string>;
        export type GetThumbnailResponse200HeadersCacheControl = NonNullable<string>;
        export type GetImageResponse200HeadersETag = NonNullable<string>;
        export type GetImageResponse200HeadersCacheControl = NonNullable<string>;
    }
    export namespace Schemas {
        export type RequestBodiespostEntityRequestBodyBody0 = NonNullable<{
            files?: NonNullable<NonNullable<string>[]>;
            entityId?: NonNullable<string>;
            authChain?: NonNullable<string>;
            ethAddress?: NonNullable<string>;
            signature?: NonNullable<string>;
        }>;
        export type RequestBodiesgetActiveEntitiesRequestBodyBody0 = NonNullable<{
            pointers?: NonNullable<NonNullable<string>[]>;
            ids?: NonNullable<NonNullable<string>[]>;
        }>;
        export type RequestBodiesvalidateSignatureRequestBodyBody0 = NonNullable<{}>;
        export type PostProfiles = NonNullable<{
            ids?: NonNullable<NonNullable<string>[]>;
        }>;
        export type About = NonNullable<{
            healthy: NonNullable<boolean>;
            configurations: NonNullable<{
                realmName?: NonNullable<string>;
            }>;
            content: NonNullable<{
                healthy?: NonNullable<boolean>;
                commitHash?: NonNullable<string>;
                version?: NonNullable<string>;
            }>;
            comms: NonNullable<{
                healthy?: NonNullable<boolean>;
                protocol?: NonNullable<string>;
                commitHash?: NonNullable<string>;
            }>;
            lambdas: NonNullable<{
                healthy?: NonNullable<boolean>;
                commitHash?: NonNullable<string>;
                version?: NonNullable<string>;
            }>;
            bff?: NonNullable<{
                healthy?: NonNullable<boolean>;
                commitHash?: NonNullable<string>;
                usersCount?: NonNullable<number>;
            }>;
        }>;
        export type StatsParcels = NonNullable<{
            parcels?: NonNullable<NonNullable<{
                peersCount?: NonNullable<number>;
                parcel?: NonNullable<{
                    x?: NonNullable<number>;
                    y?: NonNullable<number>;
                }>;
            }>[]>;
        }>;
        export type AuditResponse = NonNullable<{
            version: NonNullable<string>;
            localTimestamp: NonNullable<number>;
            authChain: Components.Schemas.AuthChain;
            overwrittenBy?: NonNullable<string>;
            isDenylisted?: NonNullable<boolean>;
            denylistedContent?: NonNullable<NonNullable<string>[]>;
        }>;
        export type Error = NonNullable<{
            error: NonNullable<string>;
        }>;
        export type ResponsesgetChallengeResponse200Body0 = NonNullable<{
            challengeText: NonNullable<string>;
        }>;
        export type ResponsesgetContentFileResponse200Body0 = NonNullable<string>;
        export type ResponsesgetContentFileResponse404Body0 = NonNullable<string>;
        export type ResponsesheadContentFileResponse404Body0 = NonNullable<string>;
        export type ResponsesgetEntityIdsByHashIdResponse200Body0 = NonNullable<NonNullable<string>[]>;
        export type ResponsesgetEntityIdsByHashIdResponse404Body0 = NonNullable<{
            error: NonNullable<string>;
        }>;
        export type AvailableContent = NonNullable<NonNullable<{
            cid: NonNullable<string>;
            available: NonNullable<boolean>;
        }>[]>;
        export type ResponsespostEntityResponse200Body0 = NonNullable<{
            creationTimestamp: NonNullable<number>;
        }>;
        export type ResponsespostEntityResponse400Body0 = Components.Schemas.Error | Components.Schemas.Errors;
        export type ResponsesgetEntitiesByPointerPrefixResponse200Body0 = NonNullable<{
            total: NonNullable<number>;
            entities: NonNullable<Components.Schemas.Entity[]>;
        }>;
        export type ResponsesgetActiveEntitiesResponse200Body0 = NonNullable<Components.Schemas.Entity[]>;
        export type FailedDeployments = NonNullable<NonNullable<{
            failedDeploymentsRepo?: NonNullable<string>;
            entityType: NonNullable<string>;
            entityId: NonNullable<string>;
            reason: NonNullable<string>;
            errorDescription: NonNullable<string>;
        }>[]>;
        export type PointerChanges = NonNullable<{
            deltas: NonNullable<NonNullable<{
                entityType: NonNullable<string>;
                entityId: NonNullable<string>;
                localTimestamp: NonNullable<number>;
                pointers: NonNullable<NonNullable<string>[]>;
                authChain: Components.Schemas.AuthChain;
            }>[]>;
        }>;
        export type Snapshots = NonNullable<NonNullable<{
            hash: NonNullable<string>;
            timeRange: NonNullable<{
                initTimestamp: NonNullable<number>;
                endTimestamp: NonNullable<number>;
            }>;
            replacedSnapshotHashes?: NonNullable<NonNullable<string>[]>;
            numberOfEntities: NonNullable<number>;
            generationTimestamp: NonNullable<number>;
        }>[]>;
        export type StatusContent = NonNullable<{
            name?: NonNullable<string>;
            version: NonNullable<string>;
            currentTime?: NonNullable<number>;
            lastImmutableTime?: NonNullable<number>;
            historySize?: NonNullable<number>;
            synchronizationStatus: NonNullable<{
                otherServers?: NonNullable<NonNullable<{
                    address: NonNullable<string>;
                    connectionState: NonNullable<string>;
                    lastDeploymentTimestamp: NonNullable<number>;
                }>[]>;
                lastSyncWithDAO: NonNullable<number>;
                synchronizationState: NonNullable<string>;
                lastSyncWithOtherServers?: NonNullable<number>;
            }>;
            commitHash: NonNullable<string>;
            catalystVersion: NonNullable<string>;
            ethNetwork: NonNullable<string>;
        }>;
        export type StatusLambdas = NonNullable<{
            version?: NonNullable<string>;
            currentTime?: NonNullable<number>;
            contentServerUrl?: NonNullable<string>;
            commitHash?: NonNullable<string>;
            catalystVersion?: NonNullable<string>;
        }>;
        export type ResponsesgetCollectionsResponse200Body0 = NonNullable<{
            collections?: NonNullable<NonNullable<{
                id: NonNullable<string>;
                name: NonNullable<string>;
            }>[]>;
        }>;
        export type ResponsesgetThumbnailResponse200Body0 = NonNullable<string>;
        export type ResponsesgetImageResponse200Body0 = NonNullable<string>;
        export type Erc721 = NonNullable<{
            id?: NonNullable<string>;
            name?: NonNullable<string>;
            description?: NonNullable<string>;
            language?: NonNullable<string>;
            image?: NonNullable<string>;
            thumbnail?: NonNullable<string>;
            attributes?: NonNullable<NonNullable<{
                trait_type?: NonNullable<string>;
                value?: NonNullable<string>;
            }>[]>;
        }>;
        export type ResponsesgetWearablesResponse200Body0 = NonNullable<{
            elements: NonNullable<Components.Schemas.Wearable[]>;
            totalAmount: NonNullable<number>;
            pageNum: NonNullable<number>;
            pageSize: NonNullable<number>;
        }>;
        export type LambdasError = NonNullable<{
            error: NonNullable<string>;
            message: NonNullable<string>;
        }>;
        export type ResponsesgetEmotesResponse200Body0 = NonNullable<{
            elements: NonNullable<Components.Schemas.Emote[]>;
            totalAmount: NonNullable<number>;
            pageNum: NonNullable<number>;
            pageSize: NonNullable<number>;
        }>;
        export type NamesPaginated = NonNullable<{
            elements: NonNullable<NonNullable<{
                name: NonNullable<string>;
                contractAddress: NonNullable<string>;
                tokenId: NonNullable<string>;
                price?: NonNullable<number>;
            }>[]>;
            totalAmount: NonNullable<number>;
            pageNum: NonNullable<number>;
            pageSize: NonNullable<number>;
        }>;
        export type LandsPaginated = NonNullable<{
            elements: NonNullable<NonNullable<{
                name?: NonNullable<string>;
                contractAddress: NonNullable<string>;
                tokenId: NonNullable<string>;
                price?: NonNullable<number>;
                category: NonNullable<string>;
                x?: NonNullable<string>;
                y?: NonNullable<string>;
                image?: NonNullable<string>;
                description?: NonNullable<string>;
            }>[]>;
            totalAmount: NonNullable<number>;
            pageNum: NonNullable<number>;
            pageSize: NonNullable<number>;
        }>;
        export type ResponsesgetThirdPartyWearablesResponse200Body0 = NonNullable<{
            elements: NonNullable<Components.Schemas.ThirdPartyWearable[]>;
            totalAmount: NonNullable<number>;
            pageNum: NonNullable<number>;
            pageSize: NonNullable<number>;
        }>;
        export type ResponsesgetThirdPartyCollectionResponse200Body0 = NonNullable<{
            elements: NonNullable<Components.Schemas.ThirdPartyWearable[]>;
            totalAmount: NonNullable<number>;
            pageNum: NonNullable<number>;
            pageSize: NonNullable<number>;
        }>;
        export type Wearables = NonNullable<{
            wearables?: NonNullable<NonNullable<{
                id?: NonNullable<string>;
                description?: NonNullable<string>;
                image?: NonNullable<string>;
                thumbnail?: NonNullable<string>;
                collectionAddress?: NonNullable<string>;
                rarity?: NonNullable<string>;
                data?: NonNullable<{
                    replaces?: NonNullable<NonNullable<string>[]>;
                    hides?: NonNullable<NonNullable<string>[]>;
                    tags?: NonNullable<NonNullable<string>[]>;
                    category?: NonNullable<string>;
                    representations?: NonNullable<NonNullable<{
                        bodyShapes?: NonNullable<NonNullable<string>[]>;
                        mainFile?: NonNullable<string>;
                        overrideReplaces?: NonNullable<NonNullable<{}>[]>;
                        overrideHides?: NonNullable<NonNullable<{}>[]>;
                        contents?: NonNullable<NonNullable<{
                            key?: NonNullable<string>;
                            url?: NonNullable<string>;
                        }>[]>;
                    }>[]>;
                }>;
                i18n?: NonNullable<NonNullable<{
                    code?: NonNullable<string>;
                    text?: NonNullable<string>;
                }>[]>;
                createdAt?: NonNullable<number>;
                updatedAt?: NonNullable<number>;
            }>[]>;
            filters?: NonNullable<{
                textSearch?: NonNullable<string>;
            }>;
            pagination?: NonNullable<{
                limit?: NonNullable<number>;
                next?: NonNullable<string>;
            }>;
        }>;
        export type ResponsessearchWearablesResponse400Body0 = NonNullable<string>;
        export type Servers = NonNullable<NonNullable<{
            baseUrl?: NonNullable<string>;
            owner?: NonNullable<string>;
            id?: NonNullable<string>;
        }>[]>;
        export type Pois = NonNullable<NonNullable<string>[]>;
        export type DenylistedUsernames = NonNullable<NonNullable<string>[]>;
        export type ResponsesvalidateSignatureResponse200Body0 = NonNullable<{}>;
        export type HotScenes = NonNullable<NonNullable<{
            id?: NonNullable<string>;
            name?: NonNullable<string>;
            baseCoords?: NonNullable<NonNullable<number>[]>;
            usersTotalCount?: NonNullable<number>;
            parcels?: NonNullable<NonNullable<NonNullable<number>[]>[]>;
            thumbnail?: NonNullable<string>;
            creator?: NonNullable<string>;
            description?: NonNullable<string>;
            realms?: NonNullable<NonNullable<{
                serverName?: NonNullable<string>;
                url?: NonNullable<string>;
                layer?: NonNullable<string>;
                usersCount?: NonNullable<number>;
                maxUsers?: NonNullable<number>;
                userParcels?: NonNullable<NonNullable<NonNullable<number>[]>[]>;
            }>[]>;
        }>[]>;
        export type Realms = NonNullable<NonNullable<{
            serverName?: NonNullable<string>;
            url?: NonNullable<string>;
            layer?: NonNullable<string>;
            usersCount?: NonNullable<number>;
            maxUsers?: NonNullable<number>;
            userParcels?: NonNullable<NonNullable<NonNullable<number>[]>[]>;
        }>[]>;
        export type ResponsesgetAvatarsDetailsByPostResponse200Body0 = NonNullable<Components.Schemas.Profile[]>;
        export type Profile = NonNullable<{
            avatars?: NonNullable<NonNullable<{
                userId?: NonNullable<string>;
                email?: NonNullable<string>;
                name?: NonNullable<string>;
                hasClaimedName?: NonNullable<boolean>;
                description?: NonNullable<string>;
                ethAddress?: NonNullable<string>;
                version?: NonNullable<number>;
                avatar?: NonNullable<{
                    bodyShape?: NonNullable<string>;
                    snapshots?: NonNullable<{
                        face?: NonNullable<string>;
                        face128?: NonNullable<string>;
                        face256?: NonNullable<string>;
                        body?: NonNullable<string>;
                    }>;
                    eyes?: NonNullable<{
                        color?: NonNullable<{
                            r?: NonNullable<number>;
                            g?: NonNullable<number>;
                            b?: NonNullable<number>;
                        }>;
                    }>;
                    hair?: NonNullable<{
                        color?: NonNullable<{
                            r?: NonNullable<number>;
                            g?: NonNullable<number>;
                            b?: NonNullable<number>;
                        }>;
                    }>;
                    skin?: NonNullable<{
                        color?: NonNullable<{
                            r?: NonNullable<number>;
                            g?: NonNullable<number>;
                            b?: NonNullable<number>;
                        }>;
                    }>;
                    wearables?: NonNullable<NonNullable<string>[]>;
                }>;
                tutorialStep?: NonNullable<number>;
                interests?: NonNullable<NonNullable<string>[]>;
                unclaimedName?: NonNullable<string>;
            }>[]>;
        }>;
        export type ThirdPartyIntegrations = NonNullable<{
            data: NonNullable<NonNullable<{
                urn: NonNullable<string>;
                name?: NonNullable<string>;
                description?: NonNullable<string>;
            }>[]>;
        }>;
        export type Islands = NonNullable<{
            ok?: NonNullable<boolean>;
            islands?: NonNullable<NonNullable<{
                id?: NonNullable<string>;
                peers?: NonNullable<NonNullable<{
                    id?: NonNullable<string>;
                    address?: NonNullable<string>;
                    parcel?: NonNullable<NonNullable<number>[]>;
                    position?: NonNullable<NonNullable<number>[]>;
                    lastPing?: NonNullable<number>;
                    preferedIslandId?: NonNullable<string>;
                }>[]>;
                maxPeers?: NonNullable<number>;
                center?: NonNullable<NonNullable<number>[]>;
                radius?: NonNullable<number>;
            }>[]>;
        }>;
        export type IslandId = NonNullable<{
            id?: NonNullable<string>;
            peers?: NonNullable<NonNullable<{
                id?: NonNullable<string>;
                address?: NonNullable<string>;
                parcel?: NonNullable<NonNullable<number>[]>;
                position?: NonNullable<NonNullable<number>[]>;
                lastPing?: NonNullable<number>;
                preferedIslandId?: NonNullable<string>;
            }>[]>;
            maxPeers?: NonNullable<number>;
            center?: NonNullable<NonNullable<number>[]>;
            radius?: NonNullable<number>;
        }>;
        export type Peers = NonNullable<{
            ok?: NonNullable<boolean>;
            peers?: NonNullable<NonNullable<{
                id?: NonNullable<string>;
                address?: NonNullable<string>;
                parcel?: NonNullable<NonNullable<number>[]>;
                position?: NonNullable<NonNullable<number>[]>;
                lastPing?: NonNullable<number>;
            }>[]>;
        }>;
        export type AuthChain = NonNullable<NonNullable<{
            type: NonNullable<string>;
            payload: NonNullable<string>;
            signature?: NonNullable<string>;
        }>[]>;
        export type Errors = NonNullable<{
            errors: NonNullable<NonNullable<string>[]>;
        }>;
        export type Entity = NonNullable<{
            version: NonNullable<string>;
            id: NonNullable<string>;
            type: NonNullable<string>;
            timestamp: NonNullable<number>;
            pointers: NonNullable<NonNullable<string>[]>;
            content: NonNullable<NonNullable<{
                file: NonNullable<string>;
                hash: NonNullable<string>;
            }>[]>;
            metadata?: NonNullable<{}>;
        }>;
        export type Wearable = NonNullable<{
            urn: NonNullable<string>;
            amount?: NonNullable<number>;
            name: NonNullable<string>;
            rarity: NonNullable<string>;
            category: NonNullable<string>;
            entity?: Components.Schemas.Entity;
            individualData?: NonNullable<NonNullable<{
                id?: NonNullable<string>;
                tokenId?: NonNullable<string>;
                transferredAt?: NonNullable<number>;
                price?: NonNullable<number>;
            }>[]>;
        }>;
        export type Emote = NonNullable<{
            urn: NonNullable<string>;
            amount?: NonNullable<number>;
            category: NonNullable<string>;
            entity?: Components.Schemas.Entity;
            name: unknown;
        }>;
        export type ThirdPartyWearable = NonNullable<{
            urn: NonNullable<string>;
            amount?: NonNullable<number>;
            name: NonNullable<string>;
            category: NonNullable<string>;
            entity: Components.Schemas.Entity;
            individualData?: NonNullable<NonNullable<{
                id?: NonNullable<string>;
            }>[]>;
        }>;
    }
}