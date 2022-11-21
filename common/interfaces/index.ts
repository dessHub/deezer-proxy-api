
export interface CRUD {
    list: (limit: number, page: number, query: string) => Promise<any>;
}

export interface API {
    get: (endpoint: string, query: string, limit: number | string) => Promise<any>,
    post?: (endpoint: string, payload: any) => Promise<any>
}