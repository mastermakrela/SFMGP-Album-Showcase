<script lang="ts">
  import { blur } from "svelte/transition";

  import { albumData as songs } from "./_data";
  import Song from "../../components/song/Song.svelte";
  import Chevron from "../../components/Chevron.svelte";
  import Switch from "../../components/Switch.svelte";
  import { bind } from "svelte/internal";

  let currentSong = 0;
  let autoplay = false;
  const nextSong = () => (currentSong = currentSong + 1 >= songs.length ? 0 : currentSong + 1);
  const previousSong = () => (currentSong = currentSong - 1 < 0 ? songs.length - 1 : currentSong - 1);

  const onSongEnd = () => {
    if (currentSong === songs.length - 1) autoplay = false;
    else autoplay = true;

    nextSong();
  };

  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<Chevron side="left" on:click={previousSong} />
<Chevron side="right" on:click={nextSong} />

<span class="autoplay">
  <Switch bind:checked={autoplay} />
  Autoplay
</span>

{#each songs as song, idx}
  {#if currentSong === idx}
    <div in:blur={{ delay: 400, amount: 10 }} out:blur={{ amount: 10 }}>
      <Song {song} {autoplay} on:ended={onSongEnd} />
    </div>
  {/if}
{/each}

<style>
  div {
    height: calc(100 * var(--vh));
    width: calc(100 * var(--vw));
  }

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
