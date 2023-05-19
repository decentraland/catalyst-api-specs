/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * API Specification for the Decentraland Catalyst Server (BETA)
 * A Catalyst is a Server that runs different services. These services currently work as the backbone for Decentraland and work in a decentralized network. The current specification details the following services: <br/><br/>- Comms Service <br/>- Content Server <br/>- Lambdas Service <br/> <br/>WARNING: We are working to close the version 1.0 of the Catalyst Protocol defined by this API. So far this is what we have and it's public but we are still working on refinement and during this process we may decided to deprecate or change some of the endpoints.
 * OpenAPI spec version: 1.0
 */
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type {
  GetAboutCatalystInfo200,
  GetStatsParcels200,
  GetEntityAuditInformation200,
  GetIfPartOfTheDAO200,
  GetAvailableContent200Item,
  GetAvailableContentParams,
  PostEntity200,
  PostEntityBody,
  GetEntitiesByPointerPrefix200Item,
  GetActiveEntities200Item,
  GetActiveEntitiesBody,
  GetFailedDeployments200Item,
  GetPointerChanges200,
  GetPointerChangesParams,
  GetSnapshots200Item,
  GetContentStatus200,
  GetLambdaStatus200,
  GetCollections200,
  GetStandardErc721200,
  GetPaginatedWearables200,
  GetPaginatedWearablesParams,
  GetPaginatedEmotes200,
  GetPaginatedEmotesParams,
  GetPaginatedNames200,
  GetPaginatedNamesParams,
  GetPaginatedLands200,
  GetPaginatedLandsParams,
  GetWearables200,
  GetWearablesParams,
  GetWearablesByOwner200Item,
  GetWearablesByOwnerParams,
  GetServers200Item,
  ValidateSignature200,
  ValidateSignatureBody,
  GetHotScenes200Item,
  GetRealms200Item,
  GetAvatarsDetailsByPost200Item,
  GetAvatarsDetailsByPostBody,
  GetAvatarDetails200,
  GetIslands200,
  GetIsland200,
  GetPeers200
} from './client.schemas'

/**
 * Retrieve detailed information about the services health and its configuration
 * @summary Catalyst Server Configs and health
 */
export const getAboutCatalystInfo = <TData = AxiosResponse<GetAboutCatalystInfo200>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/about`, options)
}

/**
 * Retrieves the amount of users on each parcel
 * @summary The stats from all parcels
 */
export const getStatsParcels = <TData = AxiosResponse<GetStatsParcels200>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/stats/parcels`, options)
}

/**
 * Get information about an entity, such us Scenes Profiles or Wearables, with the specified entityId.
 * @summary Get information about an entity
 */
export const getEntityAuditInformation = <TData = AxiosResponse<GetEntityAuditInformation200>>(
  entityType: 'profile' | 'scene' | 'wearable',
  entityId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/audit/${entityType}/${entityId}`, options)
}

/**
 * Used by the Server to figure out their identity on the DAO by themselves, so they will generate a random challenge text, and then query each server for it. If the text matches, then they have found themselves.
 * @summary Validate if the Server is part of the DAO
 */
export const getIfPartOfTheDAO = <TData = AxiosResponse<GetIfPartOfTheDAO200>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/challenge`, options)
}

/**
 * Download the binary file associated with the specified hashId
 * @summary Download content file
 */
export const getContentFile = <TData = AxiosResponse<Blob>>(
  hashId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/contents/${hashId}`, {
    responseType: 'blob',
    ...options
  })
}

/**
 * Check if a content file exists
 * @summary Check if a content file exists
 */
export const headContentFile = <TData = AxiosResponse<void>>(
  hashId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.head(`/content/contents/${hashId}`, options)
}

/**
 * Get the list of entity ids whose deployments are associated with the specified content hash. This endpoint is currently intended for troubleshooting as there is no specific use case for it.
 * @summary List of entityIds associated with a hashId
 */
export const getListEntityIdsByHashId = <TData = AxiosResponse<string[]>>(
  hashId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/contents/${hashId}/active-entities`, options)
}

/**
 * Given a list of hashes, validates if the corresponding files exist in the storage of the server
 * @summary Validates if file exists on the Server
 */
export const getAvailableContent = <TData = AxiosResponse<GetAvailableContent200Item[]>>(
  params: GetAvailableContentParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/available-content`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Deploys an entity in the content server. This request must contain a file with the entity itself and also the files associated with it, such as 3D models, as well as information about the entity and requester. This request will succeed only if the hash of the entity file matches the entityId and also if the signature is valid has the correct permission to modify the pointers associated with it.
 * @summary Deploys an entity
 */
export const postEntity = <TData = AxiosResponse<PostEntity200>>(
  postEntityBody: PostEntityBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  const formData = new FormData()
  if (postEntityBody.files !== undefined) {
    postEntityBody.files.forEach((value) => formData.append('files', value))
  }
  if (postEntityBody.entityId !== undefined) {
    formData.append('entityId', postEntityBody.entityId)
  }
  if (postEntityBody.authChain !== undefined) {
    formData.append('authChain', postEntityBody.authChain)
  }
  if (postEntityBody.ethAddress !== undefined) {
    formData.append('ethAddress', postEntityBody.ethAddress)
  }
  if (postEntityBody.signature !== undefined) {
    formData.append('signature', postEntityBody.signature)
  }

  return axios.post(`/content/entities`, formData, options)
}

/**
 * Returns the list of active entities which have at least one pointer that matches the prefix given
 * @summary List of active entities matching urn prefix
 */
export const getEntitiesByPointerPrefix = <TData = AxiosResponse<GetEntitiesByPointerPrefix200Item[]>>(
  collectionUrn: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/entities/active/collections/${collectionUrn}`, options)
}

/**
 * Returns the list of entities of the specified type with the specified id or pointers. Only one of these filters must be specified in the body.
 * @summary List active entities by pointers or ids
 */
export const getActiveEntities = <TData = AxiosResponse<GetActiveEntities200Item[]>>(
  getActiveEntitiesBody: GetActiveEntitiesBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/content/entities/active`, getActiveEntitiesBody, options)
}

/**
 * Retrieves a list of the failed deployments
 * @summary List of failed deployments
 */
export const getFailedDeployments = <TData = AxiosResponse<GetFailedDeployments200Item[]>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/failed-deployments`, options)
}

/**
 * List of all deltas from the deployments inside the filters that affect the given pointers. It returns a list of changes with the `before` field (the entity that was overridden with this deployment) and `after` (the entity that overrides the current one if present).
 * @summary List of changes made to a pointer
 */
export const getPointerChanges = <TData = AxiosResponse<GetPointerChanges200>>(
  params?: GetPointerChangesParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/pointer-changes`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Lists all active deployments stored in the database in multiple snapshots for different time ranges. If the information needed is front in time of the most recent snapshot, you may use the `/content/pointer-changes` endpoint with the necessary `from` filter.
 * @summary Snapshots with a list of active entities
 */
export const getSnapshots = <TData = AxiosResponse<GetSnapshots200Item[]>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/snapshots`, options)
}

/**
 * Retrieve deteailed information about the content server status
 * @summary Content Server status
 */
export const getContentStatus = <TData = AxiosResponse<GetContentStatus200>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/content/status`, options)
}

/**
 * Retrieve detailed information about the services
 * @summary Catalyst Server status
 */
export const getLambdaStatus = <TData = AxiosResponse<GetLambdaStatus200>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/status`, options)
}

/**
 * Retrieve the list of collections URNs
 * @summary Get Collections
 */
export const getCollections = <TData = AxiosResponse<GetCollections200>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/collections`, options)
}

/**
 * Downloads a thumbnail image for the specified urn
 * @summary Download thumbnail image
 */
export const getThumbnail = <TData = AxiosResponse<Blob>>(
  urn: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/collections/contents/${urn}/thumbnail`, {
    responseType: 'blob',
    ...options
  })
}

/**
 * Downloads the image for the specified urn
 * @summary Download URN image
 */
export const getImage = <TData = AxiosResponse<Blob>>(urn: string, options?: AxiosRequestConfig): Promise<TData> => {
  return axios.get(`/lambdas/collections/contents/${urn}/image`, {
    responseType: 'blob',
    ...options
  })
}

/**
 * Retrieve ERC721/NFT Entity details
 * @summary Get ERC721 Entity
 */
export const getStandardErc721 = <TData = AxiosResponse<GetStandardErc721200>>(
  chainId: string,
  contract: string,
  option: string,
  emission: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/collections/standard/erc721/${chainId}/${contract}/${option}/${emission}`, options)
}

/**
 * Get a list of wearables owned by the given address
 * @summary Get list of wearables for an address
 */
export const getPaginatedWearables = <TData = AxiosResponse<GetPaginatedWearables200>>(
  address: string,
  params?: GetPaginatedWearablesParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/users/${address}/wearables`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Get a list of emotes owned by the given address
 * @summary Get list of emotes for an address
 */
export const getPaginatedEmotes = <TData = AxiosResponse<GetPaginatedEmotes200>>(
  address: string,
  params?: GetPaginatedEmotesParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/users/${address}/emotes`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Get a list of names owned by the given address
 * @summary Get list of names for an address
 */
export const getPaginatedNames = <TData = AxiosResponse<GetPaginatedNames200>>(
  address: string,
  params?: GetPaginatedNamesParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/users/${address}/names`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Get a list of lands owned by the given address
 * @summary Get list of lands for an address
 */
export const getPaginatedLands = <TData = AxiosResponse<GetPaginatedLands200>>(
  address: string,
  params?: GetPaginatedLandsParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/users/${address}/lands`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Search for wearables based on the applied filters and retrieve detailed information
 * @summary Search Wearables
 */
export const getWearables = <TData = AxiosResponse<GetWearables200>>(
  params?: GetWearablesParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/collections/wearables`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Get a list of wearables URNs and the amount owned by the given address
 * @deprecated
 * @summary Get list of wearables by owner
 */
export const getWearablesByOwner = <TData = AxiosResponse<GetWearablesByOwner200Item[]>>(
  address: string,
  params?: GetWearablesByOwnerParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/collections/wearables-by-owner/${address}`, {
    ...options,
    params: { ...params, ...options?.params }
  })
}

/**
 * Retrieve the list of Catalyst Servers
 * @summary Get Servers list
 */
export const getServers = <TData = AxiosResponse<GetServers200Item[]>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/contracts/servers`, options)
}

/**
 * Retrieve the Point of Interest list of coordinates
 * @summary Retrieve DCL Point of Interests
 */
export const getPois = <TData = AxiosResponse<string[]>>(options?: AxiosRequestConfig): Promise<TData> => {
  return axios.get(`/lambdas/contracts/pois`, options)
}

/**
 * Retrieve list of forbidden user names. The prohibition of these names is decided through the DAO and need to be voted, the list lives in a Smart Contract and the Catalyst just consumes this information to present it to the client. In order to add a new name a new proposal needs to be created, approved and a transaction should be sent by a DAO committee member.
 * @summary Denylisted user names
 */
export const getDenylistedUserNames = <TData = AxiosResponse<string[]>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/contracts/denylisted-names`, options)
}

/**
 * Given a signed message and it's AuthChain, validate it's authenticity. A message can be signed, for example, to prove ownership of the Entity pointers that they want to modify.
 * @deprecated
 * @summary Validate signed message
 */
export const validateSignature = <TData = AxiosResponse<ValidateSignature200>>(
  validateSignatureBody: ValidateSignatureBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/lambdas/crypto/validate-signature`, validateSignatureBody, options)
}

/**
 * Returns the list of scenes where there are more users with coordinates and the list of parcels that compose the scene.
 * @summary Hot Scenes
 */
export const getHotScenes = <TData = AxiosResponse<GetHotScenes200Item[]>>(
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/explore/hot-scenes`, options)
}

/**
 * Returns the list of realms with details about the users in it
 * @summary Get Realms status
 */
export const getRealms = <TData = AxiosResponse<GetRealms200Item[]>>(options?: AxiosRequestConfig): Promise<TData> => {
  return axios.get(`/lambdas/explore/realms`, options)
}

/**
 * Returns all the Avatars details associated with the Ethereum addresses in the body
 * @summary Get Avatars details
 */
export const getAvatarsDetailsByPost = <TData = AxiosResponse<GetAvatarsDetailsByPost200Item[]>>(
  getAvatarsDetailsByPostBody: GetAvatarsDetailsByPostBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/lambdas/profiles`, getAvatarsDetailsByPostBody, options)
}

/**
 * Given a Ethereum address of a user, return the Avatars details associated with it.
 * @summary Get Avatar details
 */
export const getAvatarDetails = <TData = AxiosResponse<GetAvatarDetails200>>(
  id: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/lambdas/profiles/${id}`, options)
}

/**
 * Retrieves the list of communication islands in the server with details about the peers present in each island.
 * @summary List of islands
 */
export const getIslands = <TData = AxiosResponse<GetIslands200>>(options?: AxiosRequestConfig): Promise<TData> => {
  return axios.get(`/comms/islands`, options)
}

/**
 * Retrieve information about the specified islandId
 * @summary Island Details
 */
export const getIsland = <TData = AxiosResponse<GetIsland200>>(
  islandId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/comms/islands/${islandId}`, options)
}

/**
 * Retrieves the list peers in the server with details about their positions and islands.
 * @summary List of peers
 */
export const getPeers = <TData = AxiosResponse<GetPeers200>>(options?: AxiosRequestConfig): Promise<TData> => {
  return axios.get(`/comms/peers`, options)
}

export type GetAboutCatalystInfoResult = AxiosResponse<GetAboutCatalystInfo200>
export type GetStatsParcelsResult = AxiosResponse<GetStatsParcels200>
export type GetEntityAuditInformationResult = AxiosResponse<GetEntityAuditInformation200>
export type GetIfPartOfTheDAOResult = AxiosResponse<GetIfPartOfTheDAO200>
export type GetContentFileResult = AxiosResponse<Blob>
export type HeadContentFileResult = AxiosResponse<void>
export type GetListEntityIdsByHashIdResult = AxiosResponse<string[]>
export type GetAvailableContentResult = AxiosResponse<GetAvailableContent200Item[]>
export type PostEntityResult = AxiosResponse<PostEntity200>
export type GetEntitiesByPointerPrefixResult = AxiosResponse<GetEntitiesByPointerPrefix200Item[]>
export type GetActiveEntitiesResult = AxiosResponse<GetActiveEntities200Item[]>
export type GetFailedDeploymentsResult = AxiosResponse<GetFailedDeployments200Item[]>
export type GetPointerChangesResult = AxiosResponse<GetPointerChanges200>
export type GetSnapshotsResult = AxiosResponse<GetSnapshots200Item[]>
export type GetContentStatusResult = AxiosResponse<GetContentStatus200>
export type GetLambdaStatusResult = AxiosResponse<GetLambdaStatus200>
export type GetCollectionsResult = AxiosResponse<GetCollections200>
export type GetThumbnailResult = AxiosResponse<Blob>
export type GetImageResult = AxiosResponse<Blob>
export type GetStandardErc721Result = AxiosResponse<GetStandardErc721200>
export type GetPaginatedWearablesResult = AxiosResponse<GetPaginatedWearables200>
export type GetPaginatedEmotesResult = AxiosResponse<GetPaginatedEmotes200>
export type GetPaginatedNamesResult = AxiosResponse<GetPaginatedNames200>
export type GetPaginatedLandsResult = AxiosResponse<GetPaginatedLands200>
export type GetWearablesResult = AxiosResponse<GetWearables200>
export type GetWearablesByOwnerResult = AxiosResponse<GetWearablesByOwner200Item[]>
export type GetServersResult = AxiosResponse<GetServers200Item[]>
export type GetPoisResult = AxiosResponse<string[]>
export type GetDenylistedUserNamesResult = AxiosResponse<string[]>
export type ValidateSignatureResult = AxiosResponse<ValidateSignature200>
export type GetHotScenesResult = AxiosResponse<GetHotScenes200Item[]>
export type GetRealmsResult = AxiosResponse<GetRealms200Item[]>
export type GetAvatarsDetailsByPostResult = AxiosResponse<GetAvatarsDetailsByPost200Item[]>
export type GetAvatarDetailsResult = AxiosResponse<GetAvatarDetails200>
export type GetIslandsResult = AxiosResponse<GetIslands200>
export type GetIslandResult = AxiosResponse<GetIsland200>
export type GetPeersResult = AxiosResponse<GetPeers200>
