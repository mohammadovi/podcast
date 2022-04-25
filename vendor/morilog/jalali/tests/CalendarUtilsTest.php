ageSessionFromLocation
2022-04-17 03:58:12, Info                  DISM   DISM Manager: PID=7136 TID=8848 Successfully loaded the ImageSession at "C:\windows\TEMP\030E4B46-1E20-472A-9A00-98E33031944B" - CDISMManager::LoadRemoteImageSession
2022-04-17 03:58:12, Info                  DISM   DISM Image Session: PID=7144 TID=2448 Instantiating the Provider Store. - CDISMImageSession::get_ProviderStore
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Initializing a provider store for the IMAGE session type. - CDISMProviderStore::Final_OnConnect
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Connecting to the provider located at C:\windows\TEMP\030E4B46-1E20-472A-9A00-98E33031944B\OSProvider.dll. - CDISMProviderStore::Internal_LoadProvider
2022-04-17 03:58:12, Info                  DISM   DISM OS Provider: PID=7144 TID=2448 Defaulting SystemPath to C:\ - CDISMOSServiceManager::Final_OnConnect
2022-04-17 03:58:12, Info                  DISM   DISM OS Provider: PID=7144 TID=2448 Defaulting Windows folder to C:\Windows - CDISMOSServiceManager::Final_OnConnect
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Attempting to initialize the logger from the Image Session. - CDISMProviderStore::Final_OnConnect
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Connecting to the provider located at C:\windows\TEMP\030E4B46-1E20-472A-9A00-98E33031944B\LogProvider.dll. - CDISMProviderStore::Internal_LoadProvider
2022-04-17 03:58:12, Info                  DISM   Initialized Panther logging at C:\windows\Logs\DISM\dism.log
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Found and Initialized the DISM Logger. - CDISMProviderStore::Internal_InitializeLogger
2022-04-17 03:58:12, Warning               DISM   DISM Provider Store: PID=7144 TID=2448 Failed to load the provider: C:\windows\TEMP\030E4B46-1E20-472A-9A00-98E33031944B\PEProvider.dll. - CDISMProviderStore::Internal_GetProvider(hr:0x8007007e)
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Failed to get and initialize the PE Provider.  Continuing by assuming that it is not a WinPE image. - CDISMProviderStore::Final_OnConnect
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Finished initializing the Provider Map. - CDISMProviderStore::Final_OnConnect
2022-04-17 03:58:12, Info                  DISM   Initialized Panther logging at C:\windows\Logs\DISM\dism.log
2022-04-17 03:58:12, Info                  DISM   Initialized Panther logging at C:\windows\Logs\DISM\dism.log
2022-04-17 03:58:12, Info                  DISM   DISM Manager: PID=7136 TID=8848 Image session successfully loaded from the temporary location: C:\windows\TEMP\030E4B46-1E20-472A-9A00-98E33031944B - CDISMManager::CreateImageSession
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8848 Target image information: OS Version=10.0.17763.2061, Image architecture=amd64 - CDismCore::LogImageSessionDetails
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8600 Leave DismOpenSessionInternal - DismOpenSessionInternal
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8600 Session id is: 2 - DismOpenSessionInternal
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8600 Enter DismGetFeaturesExInternal - DismGetFeaturesExInternal
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8600 Input parameters: Session: 2, Identifier: @Foundation, PackageIdentifier: 1 - DismGetFeaturesExInternal
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8600 Successfully enqueued command object - CCommandThread::EnqueueCommandObject
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8848 ExecuteLoop: CommandQueue signaled - CCommandThread::ExecuteLoop
2022-04-17 03:58:12, Info                  DISM   API: PID=7136 TID=8848 Successfully dequeued command object - CCommandThread::DequeueCommandObject
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Connecting to the provider located at C:\windows\TEMP\030E4B46-1E20-472A-9A00-98E33031944B\CbsProvider.dll. - CDISMProviderStore::Internal_LoadProvider
2022-04-17 03:58:12, Info                  DISM   DISM Provider Store: PID=7144 TID=2448 Encountered a servicing provider, performing additional servicing initializations. - CDISMProviderStore::Internal_LoadProvider
2022-04-17 03:58:12, Info                  CS