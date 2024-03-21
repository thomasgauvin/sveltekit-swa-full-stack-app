import { CosmosClient } from '@azure/cosmos';
import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';

const client = new CosmosClient({
    endpoint: env.COSMOSDB_ENDPOINT,
    key: env.COSMOSDB_KEY
});

export const actions = {
    default: async ({ cookies, request }) => {
        console.log('SvelteKit create action processed a request.');

        const data = await request.formData();
        const id = data.get('id');
        const title = data.get('title');
        const price = data.get('price');
        
        const database = client.database('SWAStore');
        const container = database.container('Items');

        try {
            await container.items.create({ id, title, price });
        } catch (error) {
            return fail(500, 'Failed to create item.');
        }

        redirect(303, '/items');
    }
};
