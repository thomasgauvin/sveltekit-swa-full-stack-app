<script>
  import "../app.css";
  import Navbar from "../lib/components/Navbar.svelte";
</script>

<div class="bg-gray-100 min-h-screen">
  <div class="container mx-auto flex bg-white min-h-screen p-2">
    <div class="w-1/4 border-r-2 border-gray-100">
      <Navbar />
    </div>

    <div class="w-3/4 ml-4">
      <main>
        <slot />
      </main>
    </div>
  </div>
</div>
