<script>
  export let data;

</script>

<h1>Items</h1>
<div>
  {#if data.items.length > 0}
    {#each data.items as item}
      <form method="POST">
        <div key={item.id} class="border-b py-2">
          <div class="flex justify-between">
            <div class="text-lg font-semibold">#{item.id} - {item.title}</div>
            <div class="text-gray-600">${item.price}</div>
            <input hidden name="id" value={item.id} />
          </div>
          <div class="flex justify-end">
            <a href={`/items/edit/${item.id}`} class="text-blue-500 hover:text-blue-700 mr-4">Edit</a>
            <button formaction="?/delete" class="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </div>
      </form>
    {/each}
  {:else}
    <p>No items found.</p>
  {/if}
</div>
<div class="mt-4">
  <a href="/items/create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New Item</a>
</div>