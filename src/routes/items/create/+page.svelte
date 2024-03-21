<h1 class="text-gray-500">Items > Create</h1>
<div>
  <form method="POST">
    <div class="mb-4">
      <label for="id" class="block text-gray-700 font-bold mb-2"
        >ID</label
      >
      <input
        placeholder="101"
        type="text"
        id="id"
        name="id"
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
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Item
      </button>
    </div>
  </form>
</div>
