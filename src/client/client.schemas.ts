/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * API Specification for the Decentraland Catalyst Server (BETA)
 * A Catalyst is a Server that runs different services. These services currently work as the backbone for Decentraland and work in a decentralized network. The current specification details the following services: <br/><br/>- Comms Service <br/>- Content Server <br/>- Lambdas Service <br/> <br/>WARNING: We are working to close the version 1.0 of the Catalyst Protocol defined by this API. So far this is what we have and it's public but we are still working on refinement and during this process we may decided to deprecate or change some of the endpoints.
 * OpenAPI spec version: 1.0
 */
export type GetPeers200PeersItem = {
  id?: string
  address?: string
  parcel?: number[]
  position?: number[]
  lastPing?: number
}

export type GetPeers200 = {
  ok?: boolean
  peers?: GetPeers200PeersItem[]
}

export type GetIsland200PeersItem = {
  id?: string
  address?: string
  parcel?: number[]
  position?: number[]
  lastPing?: number
  preferedIslandId?: string
}

export type GetIsland200 = {
  id?: string
  peers?: GetIsland200PeersItem[]
  maxPeers?: number
  center?: number[]
  radius?: number
}

export type GetIslands200IslandsItemPeersItem = {
  id?: string
  address?: string
  parcel?: number[]
  position?: number[]
  lastPing?: number
  preferedIslandId?: string
}

export type GetIslands200IslandsItem = {
  id?: string
  peers?: GetIslands200IslandsItemPeersItem[]
  maxPeers?: number
  center?: number[]
  radius?: number
}

export type GetIslands200 = {
  ok?: boolean
  islands?: GetIslands200IslandsItem[]
}

export type GetAvatarDetails200AvatarsItemInterestsItem = { [key: string]: any }

export type GetAvatarDetails200AvatarsItem = {
  userId?: string
  email?: string
  name?: string
  hasClaimedName?: boolean
  description?: string
  ethAddress?: string
  version?: number
  avatar?: GetAvatarDetails200AvatarsItemAvatar
  tutorialStep?: number
  interests?: GetAvatarDetails200AvatarsItemInterestsItem[]
  unclaimedName?: string
}

export type GetAvatarDetails200 = {
  avatars?: GetAvatarDetails200AvatarsItem[]
}

export type GetAvatarDetails200AvatarsItemAvatarSkinColor = {
  r?: number
  g?: number
  b?: number
}

export type GetAvatarDetails200AvatarsItemAvatarSkin = {
  color?: GetAvatarDetails200AvatarsItemAvatarSkinColor
}

export type GetAvatarDetails200AvatarsItemAvatarHairColor = {
  r?: number
  g?: number
  b?: number
}

export type GetAvatarDetails200AvatarsItemAvatarHair = {
  color?: GetAvatarDetails200AvatarsItemAvatarHairColor
}

export type GetAvatarDetails200AvatarsItemAvatarEyesColor = {
  r?: number
  g?: number
  b?: number
}

export type GetAvatarDetails200AvatarsItemAvatarEyes = {
  color?: GetAvatarDetails200AvatarsItemAvatarEyesColor
}

export type GetAvatarDetails200AvatarsItemAvatarSnapshots = {
  face?: string
  face128?: string
  face256?: string
  body?: string
}

export type GetAvatarDetails200AvatarsItemAvatar = {
  bodyShape?: string
  snapshots?: GetAvatarDetails200AvatarsItemAvatarSnapshots
  eyes?: GetAvatarDetails200AvatarsItemAvatarEyes
  hair?: GetAvatarDetails200AvatarsItemAvatarHair
  skin?: GetAvatarDetails200AvatarsItemAvatarSkin
  wearables?: string[]
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemInterestsItem = { [key: string]: any }

export type GetAvatarsDetailsByPost200ItemAvatarsItem = {
  userId?: string
  email?: string
  name?: string
  hasClaimedName?: boolean
  description?: string
  ethAddress?: string
  version?: number
  avatar?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatar
  tutorialStep?: number
  interests?: GetAvatarsDetailsByPost200ItemAvatarsItemInterestsItem[]
  unclaimedName?: string
}

export type GetAvatarsDetailsByPost200Item = {
  avatars?: GetAvatarsDetailsByPost200ItemAvatarsItem[]
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSkinColor = {
  r?: number
  g?: number
  b?: number
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSkin = {
  color?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSkinColor
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatar = {
  bodyShape?: string
  snapshots?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSnapshots
  eyes?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarEyes
  hair?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarHair
  skin?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSkin
  wearables?: string[]
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatarHairColor = {
  r?: number
  g?: number
  b?: number
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatarHair = {
  color?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarHairColor
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatarEyesColor = {
  r?: number
  g?: number
  b?: number
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatarEyes = {
  color?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarEyesColor
}

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSnapshots = {
  face?: string
  face128?: string
  face256?: string
  body?: string
}

export type GetAvatarsDetailsByPostBody = {
  ids?: string[]
}

export type GetRealms200Item = {
  serverName?: string
  url?: string
  layer?: string
  usersCount?: number
  maxUsers?: number
  userParcels?: number[][]
}

export type GetHotScenes200ItemRealmsItem = {
  serverName?: string
  url?: string
  layer?: string
  usersCount?: number
  maxUsers?: number
  userParcels?: number[][]
}

export type GetHotScenes200Item = {
  id?: string
  name?: string
  baseCoords?: number[]
  usersTotalCount?: number
  parcels?: number[][]
  thumbnail?: string
  creator?: string
  description?: string
  realms?: GetHotScenes200ItemRealmsItem[]
}

export type ValidateSignature200 = { [key: string]: any }

export type ValidateSignatureBody = { [key: string]: any }

export type GetServers200Item = {
  baseUrl?: string
  owner?: string
  id?: string
}

export type GetWearablesByOwner200Item = {
  urn?: string
  amount?: number
}

export type GetWearablesByOwnerParams = {
  /**
   * Third Party collection Id to filter wearables, if this param is not sent then the 3rd parties wearables are not shown
   */
  collectionId?: string
}

export type GetWearables200Pagination = {
  limit?: number
  next?: string
}

export type GetWearables200Filters = {
  textSearch?: string
}

export type GetWearables200 = {
  wearables?: GetWearables200WearablesItem[]
  filters?: GetWearables200Filters
  pagination?: GetWearables200Pagination
}

export type GetWearables200WearablesItemI18nItem = {
  code?: string
  text?: string
}

export type GetWearables200WearablesItem = {
  id?: string
  description?: string
  image?: string
  thumbnail?: string
  collectionAddress?: string
  rarity?: string
  data?: GetWearables200WearablesItemData
  i18n?: GetWearables200WearablesItemI18nItem[]
  createdAt?: number
  updatedAt?: number
}

export type GetWearables200WearablesItemDataRepresentationsItemContentsItem = {
  key?: string
  url?: string
}

export type GetWearables200WearablesItemDataRepresentationsItemOverrideHidesItem = { [key: string]: any }

export type GetWearables200WearablesItemDataRepresentationsItemOverrideReplacesItem = { [key: string]: any }

export type GetWearables200WearablesItemDataRepresentationsItem = {
  bodyShapes?: string[]
  mainFile?: string
  overrideReplaces?: GetWearables200WearablesItemDataRepresentationsItemOverrideReplacesItem[]
  overrideHides?: GetWearables200WearablesItemDataRepresentationsItemOverrideHidesItem[]
  contents?: GetWearables200WearablesItemDataRepresentationsItemContentsItem[]
}

export type GetWearables200WearablesItemData = {
  replaces?: string[]
  hides?: string[]
  tags?: string[]
  category?: string
  representations?: GetWearables200WearablesItemDataRepresentationsItem[]
}

export type GetWearablesParams = {
  /**
   * Lis of URNs that identify the collection. Maximum amount of ids allowed is 500.
   */
  collectionId?: unknown[]
  /**
   * List of wearables URNs to search. Maximum amount of ids allowed is 500.
   */
  wearableId?: unknown[]
  /**
   * Search text
   */
  textSearch?: string
  /**
   * Limit the quantity of results that will be returned by the request. You can only request up to 500 results.
   */
  limit?: number
  /**
   * The result will always be ordered by the local timestamp fields but in case of timestamp collisions, you can use the lastId field to filter the result
   */
  lastId?: string
}

export type GetPaginatedLands200LandsItem = {
  name?: string
  contractAddress?: string
  tokenId?: string
  price?: string
  category?: string
  x?: string
  y?: string
  image?: string
  description?: string
}

export type GetPaginatedLands200 = {
  lands?: GetPaginatedLands200LandsItem[]
  totalAmount?: number
  pageNum?: string
  pageSize?: string
}

export type GetPaginatedLandsParams = {
  /**
   * The number of the requested page. It needs `pageSize` to be present to enable a paginated response.
   */
  pageNum?: string
  /**
   * The size of the requested page. It needs `pageNum` to be present to enable a paginated response.
   */
  pageSize?: string
}

export type GetPaginatedNames200NamesItem = {
  name?: string
  contractAddress?: string
  tokenId?: string
  price?: string
}

export type GetPaginatedNames200 = {
  names?: GetPaginatedNames200NamesItem[]
  totalAmount?: number
  pageNum?: string
  pageSize?: string
}

export type GetPaginatedNamesParams = {
  /**
   * The number of the requested page. It needs `pageSize` to be present to enable a paginated response.
   */
  pageNum?: string
  /**
   * The size of the requested page. It needs `pageNum` to be present to enable a paginated response.
   */
  pageSize?: string
}

export type GetPaginatedEmotes200EmotesItem = {
  urn?: string
  amount?: number
}

export type GetPaginatedEmotes200 = {
  emotes?: GetPaginatedEmotes200EmotesItem[]
  totalAmount?: number
  pageNum?: string
  pageSize?: string
}

export type GetPaginatedEmotesParams = {
  /**
   * Third Party collection Id to filter emotes, if this param is not sent then the 3rd parties emotes are not shown. If it is sent, only the 3rd parties emotes are shown.
   */
  collectionId?: string
  /**
   * If present, response will be extended with the entity data.
   */
  includeEntities?: boolean
  /**
   * The number of the requested page. It needs `pageSize` to be present to enable a paginated response.
   */
  pageNum?: string
  /**
   * The size of the requested page. It needs `pageNum` to be present to enable a paginated response.
   */
  pageSize?: string
}

export type GetPaginatedWearables200WearablesItemIndividualDataItem = {
  id?: string
  tokenId?: string
  transferredAt?: string
  price?: string
}

export type GetPaginatedWearables200WearablesItem = {
  urn?: string
  amount?: number
  individualData?: GetPaginatedWearables200WearablesItemIndividualDataItem[]
}

export type GetPaginatedWearables200 = {
  wearables?: GetPaginatedWearables200WearablesItem[]
  totalAmount?: number
  pageNum?: string
  pageSize?: string
}

export type GetPaginatedWearablesParams = {
  /**
   * Third Party collection Id to filter wearables, if this param is not sent then the 3rd parties wearables are not shown. If it is sent, only the 3rd parties wearables are shown.
   */
  collectionId?: string
  /**
   * If present, response will be extended with the entity data.
   */
  includeEntities?: boolean
  /**
   * If present, response will include the third-party wearables owned by the address. They will appear before other wearables if the response is paginated.
   */
  includeThirdParty?: boolean
  /**
   * The number of the requested page. It needs `pageSize` to be present to enable a paginated response.
   */
  pageNum?: string
  /**
   * The size of the requested page. It needs `pageNum` to be present to enable a paginated response.
   */
  pageSize?: string
  /**
   * Determines the field to be sort by. By default it will be by `transferredAt`. Possible values: `transferredAt` and `rarity`.
   */
  orderBy?: string
}

export type GetStandardErc721200AttributesItem = {
  trait_type?: string
  value?: string
}

export type GetStandardErc721200 = {
  id?: string
  name?: string
  description?: string
  language?: string
  image?: string
  thumbnail?: string
  attributes?: GetStandardErc721200AttributesItem[]
}

export type GetCollections200CollectionsItem = {
  id?: string
  name?: string
}

export type GetCollections200 = {
  collections?: GetCollections200CollectionsItem[]
}

export type GetLambdaStatus200 = {
  version?: string
  currentTime?: number
  contentServerUrl?: string
  commitHash?: string
  catalystVersion?: string
}

export type GetStatus200SynchronizationStatusOtherServersItem = {
  address: string
  connectionState: string
  lastDeploymentTimestamp: number
}

export type GetStatus200SynchronizationStatus = {
  otherServers?: GetStatus200SynchronizationStatusOtherServersItem[]
  lastSyncWithDAO: number
  synchronizationState: string
  lastSyncWithOtherServers?: number
}

export type GetStatus200 = {
  name?: string
  version: string
  currentTime?: number
  lastImmutableTime?: number
  historySize?: number
  synchronizationStatus: GetStatus200SynchronizationStatus
  commitHash: string
  catalystVersion: string
  ethNetwork: string
}

export type GetSnapshots200ItemTimeRange = {
  initTimestamp: number
  endTimestamp: number
}

export type GetSnapshots200Item = {
  hash: string
  timeRange: GetSnapshots200ItemTimeRange
  replacedSnapshotHashes: string[]
  numberOfEntities: number
  generationTimestamp: number
}

export type GetListPointerChanges400 = {
  error: string
}

export type GetListPointerChanges200DeltasItemAuthChainItem = {
  type: string
  payload: string
  signature: string
}

export type GetListPointerChanges200DeltasItem = {
  entityType: string
  entityId: string
  localTimestamp: number
  pointers: string[]
  authChain: GetListPointerChanges200DeltasItemAuthChainItem[]
}

export type GetListPointerChanges200 = {
  deltas: GetListPointerChanges200DeltasItem[]
}

export type GetListPointerChangesSortingOrder =
  (typeof GetListPointerChangesSortingOrder)[keyof typeof GetListPointerChangesSortingOrder]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListPointerChangesSortingOrder = {
  ASC: 'ASC',
  DESC: 'DESC'
} as const

export type GetListPointerChangesSortingField =
  (typeof GetListPointerChangesSortingField)[keyof typeof GetListPointerChangesSortingField]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListPointerChangesSortingField = {
  local_timestamp: 'local_timestamp',
  entity_timestamp: 'entity_timestamp'
} as const

export type GetListPointerChangesEntityType =
  (typeof GetListPointerChangesEntityType)[keyof typeof GetListPointerChangesEntityType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetListPointerChangesEntityType = {
  scene: 'scene',
  profile: 'profile',
  wearable: 'wearable'
} as const

export type GetListPointerChangesParams = {
  /**
   * Acts as a filter in the collection of deployments, this value is the minimum value of local timestamp that any deployment in the collection will have.
   */
  from?: number
  /**
   * Acts as a filter in the collection of deployments, this value is the maximum value of local timestamp that any deployment in the collection will have.
   */
  to?: number
  /**
   * It is the last entity id that was visited, so it will be skipped when showing current page.
   */
  lastId?: string
  /**
   * The deployments are a paginated collection, this parameter corresponds to the limit for each page. The default value is 500.
   */
  limit?: number
  /**
   * The type of entities that will be shown in the collection, many values can be sent. Valid values are: profile, scene and wearable.
   */
  entityType?: GetListPointerChangesEntityType
  /**
   * This value is used as the field to order all the deployments in the collection. If no parameter is sent, then the default field to order with will be local_timestamp.
   */
  sortingField?: GetListPointerChangesSortingField
  /**
   * This value is used as the order for all the deployments in the collection. If no parameter is sent, then the default field to order with will be DESC.
   */
  sortingOrder?: GetListPointerChangesSortingOrder
}

export type GetFailedDeployments200Item = {
  failedDeploymentsRepo?: string
  entityType: string
  entityId: string
  reason: string
  errorDescription: string
}

export type GetActiveEntities400 = {
  error: string
}

export type GetActiveEntities200ItemMetadata = { [key: string]: any }

export type GetActiveEntities200ItemContentItem = {
  file: string
  hash: string
}

export type GetActiveEntities200Item = {
  version: string
  id: string
  type: string
  timestamp: number
  pointers: string[]
  content: GetActiveEntities200ItemContentItem[]
  metadata?: GetActiveEntities200ItemMetadata
}

export type GetActiveEntitiesBody = {
  /** Entities must be filtered by pointer XOR entityId (ids). Use this parameter if you want to retrieve an entity of the specified type with this pointer. */
  pointers?: string[]
  /** Entities must be filtered by pointer (pointers) XOR entityId. Use this parameter if you want to retrieve an entity of the specified type with this entityId. */
  ids?: string[]
}

export type GetEntitiesByPointerPrefix200Item = {
  pointer: string
  entityId: string
}

export type PostEntity400 = {
  errors: string[]
}

export type PostEntity200 = {
  creationTimestamp: number
}

export type PostEntityBody = {
  files?: Blob[]
  entityId?: string
  authChain?: string
  ethAddress?: string
  signature?: string
}

export type GetIfFileExists200Item = {
  cid: string
  available: boolean
}

export type GetIfFileExistsParams = {
  /**
   * Hash of the content file
   */
  cid: unknown[]
}

export type GetListEntityIdsByHashId404 = {
  error: string
}

export type GetIfPartOfTheDAO200 = {
  challengeText: string
}

export type GetEntityInformation404 = {
  error: string
}

export type GetEntityInformation400 = {
  error: string
}

export type GetEntityInformation200AuthChainItem = {
  type: string
  payload: string
  signature: string
}

export type GetEntityInformation200 = {
  version: string
  localTimestamp: number
  authChain: GetEntityInformation200AuthChainItem[]
  overwrittenBy?: string
  isDenylisted?: boolean
  denylistedContent?: string[]
}

export type GetStatsParcels200ParcelsItemParcel = {
  x?: number
  y?: number
}

export type GetStatsParcels200ParcelsItem = {
  peersCount?: number
  parcel?: GetStatsParcels200ParcelsItemParcel
}

export type GetStatsParcels200 = {
  parcels?: GetStatsParcels200ParcelsItem[]
}

export type GetAboutCatalystInfo503Bff = {
  healthy?: boolean
  commitHash?: string
  usersCount?: number
}

export type GetAboutCatalystInfo503Lambdas = {
  healthy?: boolean
  commitHash?: string
  version?: string
}

export type GetAboutCatalystInfo503Comms = {
  healthy?: boolean
  protocol?: string
  commitHash?: string
}

export type GetAboutCatalystInfo503Content = {
  healthy?: boolean
  commitHash?: string
  version?: string
}

export type GetAboutCatalystInfo503Configurations = {
  realmName?: string
}

export type GetAboutCatalystInfo503 = {
  healthy: boolean
  configurations: GetAboutCatalystInfo503Configurations
  content: GetAboutCatalystInfo503Content
  comms: GetAboutCatalystInfo503Comms
  lambdas: GetAboutCatalystInfo503Lambdas
  bff?: GetAboutCatalystInfo503Bff
}

export type GetAboutCatalystInfo200Bff = {
  healthy?: boolean
  commitHash?: string
  usersCount?: number
}

export type GetAboutCatalystInfo200Lambdas = {
  healthy?: boolean
  commitHash?: string
  version?: string
}

export type GetAboutCatalystInfo200Comms = {
  healthy?: boolean
  protocol?: string
  commitHash?: string
}

export type GetAboutCatalystInfo200Content = {
  healthy?: boolean
  commitHash?: string
  version?: string
}

export type GetAboutCatalystInfo200Configurations = {
  realmName?: string
}

export type GetAboutCatalystInfo200 = {
  healthy: boolean
  configurations: GetAboutCatalystInfo200Configurations
  content: GetAboutCatalystInfo200Content
  comms: GetAboutCatalystInfo200Comms
  lambdas: GetAboutCatalystInfo200Lambdas
  bff?: GetAboutCatalystInfo200Bff
}