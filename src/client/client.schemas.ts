/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * API Specification for the Decentraland Catalyst Server (BETA)
 * A Catalyst is a Server that runs different services. These services currently work as the backbone for Decentraland and work in a decentralized network. The current specification details the following services: <br/><br/>- Archipelago <br/>- Content Server <br/>- Lambdas Service <br/> <br/>WARNING: We are working to close the version 1.0 of the Catalyst Protocol defined by this API. So far this is what we have and it's public but we are still working on refinement and during this process we may decided to deprecate or change some of the endpoints.
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

export type GetThirdPartyIntegrations200DataItem = {
  urn: string
  name?: string
  description?: string
}

export type GetThirdPartyIntegrations200 = {
  data: GetThirdPartyIntegrations200DataItem[]
}

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
  interests?: string[]
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

export type GetAvatarsDetailsByPost200ItemAvatarsItemAvatar = {
  bodyShape?: string
  snapshots?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSnapshots
  eyes?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarEyes
  hair?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarHair
  skin?: GetAvatarsDetailsByPost200ItemAvatarsItemAvatarSkin
  wearables?: string[]
}

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
  interests?: string[]
  unclaimedName?: string
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

export type SearchWearables200Pagination = {
  limit?: number
  next?: string
}

export type SearchWearables200Filters = {
  textSearch?: string
}

export type SearchWearables200 = {
  wearables?: SearchWearables200WearablesItem[]
  filters?: SearchWearables200Filters
  pagination?: SearchWearables200Pagination
}

export type SearchWearables200WearablesItemI18nItem = {
  code?: string
  text?: string
}

export type SearchWearables200WearablesItem = {
  id?: string
  description?: string
  image?: string
  thumbnail?: string
  collectionAddress?: string
  rarity?: string
  data?: SearchWearables200WearablesItemData
  i18n?: SearchWearables200WearablesItemI18nItem[]
  createdAt?: number
  updatedAt?: number
}

export type SearchWearables200WearablesItemDataRepresentationsItemContentsItem = {
  key?: string
  url?: string
}

export type SearchWearables200WearablesItemDataRepresentationsItemOverrideHidesItem = { [key: string]: any }

export type SearchWearables200WearablesItemDataRepresentationsItemOverrideReplacesItem = { [key: string]: any }

export type SearchWearables200WearablesItemDataRepresentationsItem = {
  bodyShapes?: string[]
  mainFile?: string
  overrideReplaces?: SearchWearables200WearablesItemDataRepresentationsItemOverrideReplacesItem[]
  overrideHides?: SearchWearables200WearablesItemDataRepresentationsItemOverrideHidesItem[]
  contents?: SearchWearables200WearablesItemDataRepresentationsItemContentsItem[]
}

export type SearchWearables200WearablesItemData = {
  replaces?: string[]
  hides?: string[]
  tags?: string[]
  category?: string
  representations?: SearchWearables200WearablesItemDataRepresentationsItem[]
}

export type SearchWearablesParams = {
  /**
   * Lis of URNs that identify the collection. Maximum amount of ids allowed is 500.
   */
  collectionId?: string[]
  /**
   * List of wearables URNs to search. Maximum amount of ids allowed is 500.
   */
  wearableId?: string[]
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

export type GetThirdPartyCollection200ElementsItemIndividualDataItem = {
  id?: string
}

export type GetThirdPartyCollection200ElementsItem = {
  urn: string
  amount?: number
  name: string
  category: string
  entity: GetThirdPartyCollection200ElementsItemEntity
  individualData?: GetThirdPartyCollection200ElementsItemIndividualDataItem[]
}

export type GetThirdPartyCollection200 = {
  elements: GetThirdPartyCollection200ElementsItem[]
  totalAmount: number
  pageNum: number
  pageSize: number
}

export type GetThirdPartyCollection200ElementsItemEntityMetadata = { [key: string]: any }

export type GetThirdPartyCollection200ElementsItemEntityContentItem = {
  file: string
  hash: string
}

export type GetThirdPartyCollection200ElementsItemEntity = {
  version: string
  id: string
  type: string
  timestamp: number
  pointers: string[]
  content: GetThirdPartyCollection200ElementsItemEntityContentItem[]
  metadata?: GetThirdPartyCollection200ElementsItemEntityMetadata
}

export type GetThirdPartyCollectionParams = {
  /**
   * The number of the requested page.
   */
  pageNum?: string
  /**
   * The size of the requested page.
   */
  pageSize?: string
}

export type GetThirdPartyWearables200ElementsItemIndividualDataItem = {
  id?: string
}

export type GetThirdPartyWearables200ElementsItemEntityMetadata = { [key: string]: any }

export type GetThirdPartyWearables200ElementsItemEntityContentItem = {
  file: string
  hash: string
}

export type GetThirdPartyWearables200ElementsItemEntity = {
  version: string
  id: string
  type: string
  timestamp: number
  pointers: string[]
  content: GetThirdPartyWearables200ElementsItemEntityContentItem[]
  metadata?: GetThirdPartyWearables200ElementsItemEntityMetadata
}

export type GetThirdPartyWearables200ElementsItem = {
  urn: string
  amount?: number
  name: string
  category: string
  entity: GetThirdPartyWearables200ElementsItemEntity
  individualData?: GetThirdPartyWearables200ElementsItemIndividualDataItem[]
}

export type GetThirdPartyWearables200 = {
  elements: GetThirdPartyWearables200ElementsItem[]
  totalAmount: number
  pageNum: number
  pageSize: number
}

export type GetThirdPartyWearablesParams = {
  /**
   * The number of the requested page.
   */
  pageNum?: string
  /**
   * The size of the requested page.
   */
  pageSize?: string
}

export type GetLands200ElementsItem = {
  name?: string
  contractAddress: string
  tokenId: string
  price?: number
  category: string
  x?: string
  y?: string
  image?: string
  description?: string
}

export type GetLands200 = {
  elements: GetLands200ElementsItem[]
  totalAmount: number
  pageNum: number
  pageSize: number
}

export type GetLandsParams = {
  /**
   * The number of the requested page. It needs `pageSize` to be present to enable a paginated response.
   */
  pageNum?: string
  /**
   * The size of the requested page. It needs `pageNum` to be present to enable a paginated response.
   */
  pageSize?: string
}

export type GetNames200ElementsItem = {
  name: string
  contractAddress: string
  tokenId: string
  price?: number
}

export type GetNames200 = {
  elements: GetNames200ElementsItem[]
  totalAmount: number
  pageNum: number
  pageSize: number
}

export type GetNamesParams = {
  /**
   * The number of the requested page. It needs `pageSize` to be present to enable a paginated response.
   */
  pageNum?: string
  /**
   * The size of the requested page. It needs `pageNum` to be present to enable a paginated response.
   */
  pageSize?: string
}

export type GetEmotes200ElementsItemEntityMetadata = { [key: string]: any }

export type GetEmotes200ElementsItemEntity = {
  version: string
  id: string
  type: string
  timestamp: number
  pointers: string[]
  content: GetEmotes200ElementsItemEntityContentItem[]
  metadata?: GetEmotes200ElementsItemEntityMetadata
}

export type GetEmotes200ElementsItem = {
  urn: string
  amount?: number
  category: string
  entity?: GetEmotes200ElementsItemEntity
}

export type GetEmotes200 = {
  elements: GetEmotes200ElementsItem[]
  totalAmount: number
  pageNum: number
  pageSize: number
}

export type GetEmotes200ElementsItemEntityContentItem = {
  file: string
  hash: string
}

export type GetEmotesParams = {
  /**
   * Third Party collection Id to filter emotes, if this param is not sent then the 3rd parties emotes are not shown. If it is sent, only the 3rd parties emotes are shown.
   */
  collectionId?: string
  /**
   * If present, response will be extended with the entity data.
   */
  includeEntities?: boolean
  /**
   * The number of the requested page.
   */
  pageNum?: string
  /**
   * The size of the requested page
   */
  pageSize?: string
}

export type GetWearables503 = {
  error: string
  message: string
}

export type GetWearables200ElementsItemIndividualDataItem = {
  id?: string
  tokenId?: string
  transferredAt?: number
  price?: number
}

export type GetWearables200ElementsItemEntityMetadata = { [key: string]: any }

export type GetWearables200ElementsItemEntityContentItem = {
  file: string
  hash: string
}

export type GetWearables200ElementsItemEntity = {
  version: string
  id: string
  type: string
  timestamp: number
  pointers: string[]
  content: GetWearables200ElementsItemEntityContentItem[]
  metadata?: GetWearables200ElementsItemEntityMetadata
}

export type GetWearables200ElementsItem = {
  urn: string
  amount?: number
  name: string
  rarity: string
  category: string
  entity?: GetWearables200ElementsItemEntity
  individualData?: GetWearables200ElementsItemIndividualDataItem[]
}

export type GetWearables200 = {
  elements: GetWearables200ElementsItem[]
  totalAmount: number
  pageNum: number
  pageSize: number
}

export type GetWearablesParams = {
  /**
   * If present, response will be extended with the entity data.
   */
  includeEntities?: boolean
  /**
   * If present, response will include the third-party wearables owned by the address. They will appear before other wearables if the response is paginated.
   */
  includeThirdParty?: boolean
  /**
   * The number of the requested page.
   */
  pageNum?: string
  /**
   * The size of the requested page.
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
  id: string
  name: string
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

export type GetContentStatus200SynchronizationStatusOtherServersItem = {
  address: string
  connectionState: string
  lastDeploymentTimestamp: number
}

export type GetContentStatus200SynchronizationStatus = {
  otherServers?: GetContentStatus200SynchronizationStatusOtherServersItem[]
  lastSyncWithDAO: number
  synchronizationState: string
  lastSyncWithOtherServers?: number
}

export type GetContentStatus200 = {
  name?: string
  version: string
  currentTime?: number
  lastImmutableTime?: number
  historySize?: number
  synchronizationStatus: GetContentStatus200SynchronizationStatus
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
  replacedSnapshotHashes?: string[]
  numberOfEntities: number
  generationTimestamp: number
}

export type GetPointerChanges400 = {
  error: string
}

export type GetPointerChanges200DeltasItemAuthChainItem = {
  type: string
  payload: string
  signature?: string
}

export type GetPointerChanges200DeltasItem = {
  entityType: string
  entityId: string
  localTimestamp: number
  pointers: string[]
  authChain: GetPointerChanges200DeltasItemAuthChainItem[]
}

export type GetPointerChanges200 = {
  deltas: GetPointerChanges200DeltasItem[]
}

export type GetPointerChangesSortingOrder =
  (typeof GetPointerChangesSortingOrder)[keyof typeof GetPointerChangesSortingOrder]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetPointerChangesSortingOrder = {
  ASC: 'ASC',
  DESC: 'DESC'
} as const

export type GetPointerChangesSortingField =
  (typeof GetPointerChangesSortingField)[keyof typeof GetPointerChangesSortingField]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetPointerChangesSortingField = {
  local_timestamp: 'local_timestamp',
  entity_timestamp: 'entity_timestamp'
} as const

export type GetPointerChangesEntityType = (typeof GetPointerChangesEntityType)[keyof typeof GetPointerChangesEntityType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetPointerChangesEntityType = {
  scene: 'scene',
  profile: 'profile',
  wearable: 'wearable'
} as const

export type GetPointerChangesParams = {
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
  entityType?: GetPointerChangesEntityType
  /**
   * This value is used as the field to order all the deployments in the collection. If no parameter is sent, then the default field to order with will be local_timestamp.
   */
  sortingField?: GetPointerChangesSortingField
  /**
   * This value is used as the order for all the deployments in the collection. If no parameter is sent, then the default field to order with will be DESC.
   */
  sortingOrder?: GetPointerChangesSortingOrder
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

export type GetEntitiesByPointerPrefix200EntitiesItem = {
  version: string
  id: string
  type: string
  timestamp: number
  pointers: string[]
  content: GetEntitiesByPointerPrefix200EntitiesItemContentItem[]
  metadata?: GetEntitiesByPointerPrefix200EntitiesItemMetadata
}

export type GetEntitiesByPointerPrefix200 = {
  total: number
  entities: GetEntitiesByPointerPrefix200EntitiesItem[]
}

export type GetEntitiesByPointerPrefix200EntitiesItemMetadata = { [key: string]: any }

export type GetEntitiesByPointerPrefix200EntitiesItemContentItem = {
  file: string
  hash: string
}

export type GetEntitiesByPointerPrefixParams = {
  /**
   * Page size (max 1000)
   */
  pageSize?: number
  /**
   * Page number (default: 1)
   */
  pageNumber?: number
}

export type PostEntity400OneOfTwo = {
  errors: string[]
}

export type PostEntity400OneOf = {
  error: string
}

export type PostEntity400 = PostEntity400OneOf | PostEntity400OneOfTwo

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

export type GetAvailableContent400 = {
  error: string
}

export type GetAvailableContent200Item = {
  cid: string
  available: boolean
}

export type GetAvailableContentParams = {
  /**
   * Hash of the content file
   */
  cid: string[]
}

export type GetEntityIdsByHashId404 = {
  error: string
}

export type GetChallenge200 = {
  challengeText: string
}

export type GetEntityAuditInformation404 = {
  error: string
}

export type GetEntityAuditInformation400 = {
  error: string
}

export type GetEntityAuditInformation200AuthChainItem = {
  type: string
  payload: string
  signature?: string
}

export type GetEntityAuditInformation200 = {
  version: string
  localTimestamp: number
  authChain: GetEntityAuditInformation200AuthChainItem[]
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
  healthy: boolean
  commitHash?: string
  usersCount?: number
  publicUrl: string
  protocolVersion: string
}

export type GetAboutCatalystInfo503Lambdas = {
  healthy: boolean
  commitHash?: string
  version?: string
  publicUrl: string
}

export type GetAboutCatalystInfo503Comms = {
  healthy: boolean
  protocol?: string
  commitHash?: string
  userCount?: string
}

export type GetAboutCatalystInfo503Content = {
  healthy: boolean
  commitHash?: string
  version?: string
  publicUrl: string
}

export type GetAboutCatalystInfo503 = {
  healthy: boolean
  acceptingUsers: boolean
  configurations: GetAboutCatalystInfo503Configurations
  content: GetAboutCatalystInfo503Content
  comms: GetAboutCatalystInfo503Comms
  lambdas: GetAboutCatalystInfo503Lambdas
  bff?: GetAboutCatalystInfo503Bff
}

export type GetAboutCatalystInfo503ConfigurationsSkybox = {
  fixedHour?: number
}

export type GetAboutCatalystInfo503ConfigurationsMinimap = {
  enabled: boolean
  dataImage?: string
  estateImage?: string
}

export type GetAboutCatalystInfo503Configurations = {
  realmName?: string
  networkId: number
  globalScenesUrn: string[]
  scenesUrn: string[]
  minimap?: GetAboutCatalystInfo503ConfigurationsMinimap
  skybox?: GetAboutCatalystInfo503ConfigurationsSkybox
}

export type GetAboutCatalystInfo200Bff = {
  healthy: boolean
  commitHash?: string
  usersCount?: number
  publicUrl: string
  protocolVersion: string
}

export type GetAboutCatalystInfo200Lambdas = {
  healthy: boolean
  commitHash?: string
  version?: string
  publicUrl: string
}

export type GetAboutCatalystInfo200Comms = {
  healthy: boolean
  protocol?: string
  commitHash?: string
  userCount?: string
}

export type GetAboutCatalystInfo200Content = {
  healthy: boolean
  commitHash?: string
  version?: string
  publicUrl: string
}

export type GetAboutCatalystInfo200 = {
  healthy: boolean
  acceptingUsers: boolean
  configurations: GetAboutCatalystInfo200Configurations
  content: GetAboutCatalystInfo200Content
  comms: GetAboutCatalystInfo200Comms
  lambdas: GetAboutCatalystInfo200Lambdas
  bff?: GetAboutCatalystInfo200Bff
}

export type GetAboutCatalystInfo200ConfigurationsSkybox = {
  fixedHour?: number
}

export type GetAboutCatalystInfo200ConfigurationsMinimap = {
  enabled: boolean
  dataImage?: string
  estateImage?: string
}

export type GetAboutCatalystInfo200Configurations = {
  realmName?: string
  networkId: number
  globalScenesUrn: string[]
  scenesUrn: string[]
  minimap?: GetAboutCatalystInfo200ConfigurationsMinimap
  skybox?: GetAboutCatalystInfo200ConfigurationsSkybox
}
