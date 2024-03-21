export const prerender = false;

import { CosmosClient } from '@azure/cosmos';
import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, request }) => {
        fail(401, 'Unauthorized')
        //Uncomment to enable mutations (and remove line above)
        // const client = new CosmosClient({
        //     endpoint: env.COSMOSDB_ENDPOINT,
        //     key: env.COSMOSDB_KEY
        // });

        // console.log('SvelteKit create action processed a request.');

        // const data = await request.formData();
        // const id = data.get('id');
        // const title = data.get('title');
        // const price = data.get('price');
        
        // const database = client.database('SWAStore');
        // const container = database.container('Items');

        // try {
        //     await container.items.create({ id, title, price });
        // } catch (error) {
        //     return fail(500, 'Failed to create item.');
        // }

        // redirect(303, '/items');
    }
};
