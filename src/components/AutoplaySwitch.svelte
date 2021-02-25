<script lang="ts">
  import Switch from "./Switch.svelte";
  export let autoplay: boolean;
</script>

<span class="autoplay">
  <Switch bind:checked={autoplay} />
  <span class="text">Autoplay</span>
</span>

<style>
  .autoplay {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;

    z-index: 75;

    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.7em;
    align-items: center;

    font-weight: 500;
    color: white;
    opacity: 0.6;
  }
</style>
