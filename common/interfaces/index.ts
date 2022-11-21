
export interface CRUD {
    list: (limit: number, page: number, query: string) => Promise<any>;
}

export interface API {
    getAll?: (endpoint: string, query: string, limit: number | string) => Promise<any>,
    getById?: (endpoint: string, id: number) => Promise<any>,
    getByUrl?: (url: string) => Promise<any>,
    create?: (endpoint: string, payload: any) => Promise<any>
}