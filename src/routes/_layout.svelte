<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";

  const updateCSSVariables = () => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    document.documentElement.style.setProperty("--vw", `${window.innerWidth * 0.01}px`);
  };

  onMount(() => {
    updateCSSVariables();
    window.addEventListener("resize", updateCSSVariables);
  });
</script>

<main>
  <slot />
</main>
<Footer />

<style>
  main {
    height: calc(100 * var(--vh));
    width: calc(100 * var(--vw));
    overflow: hidden;
  }
</style>
