// API

export interface APIEndpoint {
    method: string,
    path: string,
    auth_level: string,
    cache: number,
    description: string,
}

// Crash

export interface APIClientCrash {
    created: string,
    similar: number,
    original_error: string,
    modpack: string,
    modpack_name: string,
    version: string,
    version_name: string,
    type: string,
    error: string,
    stack: Array<APICrashStack>,
    mods: Array<APICrashMod>,
    coremods: Array<APICrashCoremod>,
    error_checksum: string,
    mods_checksum: string,
}

export interface APICrashStack {
    package: string,
    class: string,
    method: string,
    line: number,
}

export interface APICrashMod {
    id: string,
    version: string,
    changed: number,
}

export interface APICrashCoremod {
    name: string,
    type: string,
    file: string,
    changed: number,
}

// Global Stats

export interface APIGlobalStats {
    launches: number,
    total_time: number,
    world_joins: number,
    ticks: number,
    frames: number,
    multiplayer: number,
    lan: number,
    hardcore: number,
    creative_ticks: number,
    ext_caps: Array<APIStatCapability>,
    arb_caps: Array<APIStatCapability>,
    client_crashes: number,
    server_crashes: number,
    database: APIStatDatabase
}

export interface APIStatCapability {
    id: string,
    time: number,
}

export interface APIStatDatabase {
    users: number,
    modpacks: number,
    modpack_versions: number,
    mods: number,
    mod_versions: number,
}