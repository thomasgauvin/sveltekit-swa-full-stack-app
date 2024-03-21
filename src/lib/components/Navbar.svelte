<!-- Navbar.svelte -->

<script>
  import { page } from "$app/stores";

  const paths = [
    { name: "Home", url: "/" },
    { name: "Items", url: "/items" },
    { name: "Sales", url: "/sales" },
  ];
</script>

<div class="bg-white px-4 py-[0.65rem]">
  <div class="container mx-auto text-gray-800 text-2xl font-bold">Contoso</div>
</div>

<nav>
  {#each paths as path, index}
    <div key={index}>
      <a
        href={path.url}
        class="text-lg mb-4 hover:bg-gray-50"
        class:bg-gray-100={($page.url.pathname.includes(path.url) &&
          path.url !== "/") ||
          (path.url === "/" && $page.url.pathname === "/")}
        class:font-semibold={($page.url.pathname.includes(path.url) &&
          path.url !== "/") ||
          (path.url === "/" && $page.url.pathname === "/")}
      >
        <div class="py-2 px-4 m-2 rounded-md bg-inherit">
          {path.name}
        </div>
      </a>
    </div>
  {/each}
</nav>
