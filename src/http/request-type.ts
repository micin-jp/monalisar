export type RequestType = 'get' | 'post' | 'patch' | 'put' | 'delete';

export namespace RequestType {
  export const GET: RequestType = 'get';
  export const POST: RequestType = 'post';
  export const PATCH: RequestType = 'patch';
  export const PUT: RequestType = 'put';
  export const DELETE: RequestType = 'delete';
}
