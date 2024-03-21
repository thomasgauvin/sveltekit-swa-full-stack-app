import { CosmosClient } from '@azure/cosmos';
import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';

const client = new CosmosClient({
    endpoint: env.COSMOSDB_ENDPOINT,
    key: env.COSMOSDB_KEY
});

export async function load({ params }) {
    console.log('SvelteKit load function processed a request.');
    
    const database = client.database('SWAStore');
    const container = database.container('Items');
    const itemId = params.id;
    
    const { resource: item } = await container.item(itemId, itemId).read();
    return {
        item: item
    };
}

export const actions = {
    default: async ({ cookies, request }) => {
        console.log('SvelteKit create action processed a request.');

        const data = await request.formData();
        console.log(data);
        const itemId = data.get('id');
        const title = data.get('title');
        const price = data.get('price');
        const updatedItem = { id: itemId, title: title, price: price };
        console.log(JSON.stringify(updatedItem))
        
        const database = client.database('SWAStore');
        const container = database.container('Items');

        try {
            const { resource: replacedItem } = await container.item(itemId, itemId).replace(updatedItem);
        } catch (error) {
            return fail(500, `Failed to updated item. ${error}`);
        }

        redirect(303, '/items');
    }
};
