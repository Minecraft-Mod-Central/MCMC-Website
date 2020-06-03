export interface APIEndpoint {
    method: string,
    path: string,
    auth_level: string,
    cache: number,
    description: string,
}

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