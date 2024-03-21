import { CosmosClient } from '@azure/cosmos';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

const client = new CosmosClient({
    endpoint: env.COSMOSDB_ENDPOINT,
    key: env.COSMOSDB_KEY
});

export async function load({ params }) {
    console.log('SvelteKit load function processed a request.');
    
    const database = client.database('SWAStore');
    const container = database.container('Items');
    
    const { resources: items } = await container.items.readAll().fetchAll();
    return {
        items: items
    };
}

export const actions = {
    delete: async ({ cookies, request }) => {
        console.log('SvelteKit delete action processed a request.');

        const data = await request.formData();
        const itemId = data.get('id');
        
        const database = client.database('SWAStore');
        const container = database.container('Items');

        try{
            await container.item(itemId, itemId).delete();
            return {
                success: true
            };
        }
        catch (error){
            return fail(500, 'Failed to delete item.')
        }
    }
}