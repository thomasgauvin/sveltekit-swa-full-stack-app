<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-gray-500">Items > Create</h1>
<div>
  <form method="POST">
    <div class="mb-4">
      <label for="id" class="block text-gray-700 font-bold mb-2"
        >ID</label
      >
      <input
        readonly
        placeholder="101"
        type="text"
        id="id"
        name="id"
        value={data.item.id}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label for="title" class="block text-gray-700 font-bold mb-2"
        >Title</label
      >
      <input
        placeholder="Marvelous Mug"
        type="text"
        id="title"
        name="title"
        value={data.item.title}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label for="price" class="block text-gray-700 font-bold mb-2"
        >Price</label
      >
      <input
        placeholder="10.99"
        type="text"
        id="price"
        name="price"
        value={data.item.price}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update Item
      </button>
    </div>
  </form>
</div>
