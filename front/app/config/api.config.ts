export const apiUrl = `${process.env.APP_URL}/api`;
export const serverApiUrl = `${process.env.APP_SERVER_URL}/api`
export const getAuthUrl = (string:string) => `/auth/${string}`;
export const getUsersUrl = (string:string) => `/users/${string}`;
export const getMoviessUrl = (string:string) => `/movies/${string}`;
export const getGanresUrl = (string:string) => `/genres/${string}`;
export const getActorssUrl = (string:string) => `/actors/${string}`;
export const getActorsBySlugUrl = (string:string) => `/actors/by-slug/${string}/`;
export const getActorUrl = (string:string) => `/actor/${string}`;
export const getRatingssUrl = (string:string) => `/ratings/${string}`;

