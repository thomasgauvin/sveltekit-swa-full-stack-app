import { env } from '$env/dynamic/private';

export const load = ({ cookies, url }) => {
    console.log(cookies, url)
    console.log(COSMOSDB_KEY, COSMOSDB_ENDPOINT)
    return { info: `keys: ${env}` }
}