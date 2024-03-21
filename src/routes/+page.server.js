import { env } from '$env/dynamic/private';

export const load = ({ cookies, url }) => {
    console.log(cookies, url)
    console.log(env)
    return { info: 'Hello world from server!' }
}