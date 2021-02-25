<script lang="ts">
  import { blur } from "svelte/transition";

  import { albumData as songs } from "./_data";
  import Song from "../../components/song/Song.svelte";

  import Chevron from "../../components/Chevron.svelte";
  import AutoplaySwitch from "../../components/AutoplaySwitch.svelte";
  import VolumeSlider from "../../components/VolumeSlider.svelte";

  let currentSong = 4;
  let autoplay = false;
  let isFirstPlay = true;
  let volume: number;

  const nextSong = () => (currentSong = currentSong + 1 >= songs.length ? 0 : currentSong + 1);
  const previousSong = () => (currentSong = currentSong - 1 < 0 ? songs.length - 1 : currentSong - 1);

  const onSongEnd = () => {
    if (currentSong === songs.length - 1) autoplay = false;

    nextSong();
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 65) autoplay = !autoplay;
  };
</script>

<svelte:window on:keydown|preventDefault={onKeyPress} />

<Chevron side="left" on:click={previousSong} />
<Chevron side="right" on:click={nextSong} />

<AutoplaySwitch bind:autoplay />
<VolumeSlider bind:volume />

{#each songs as song, idx}
  {#if currentSong === idx}
    <div in:blur={{ delay: 400, amount: 10 }} out:blur={{ amount: 10 }}>
      <Song {song} bind:autoplay bind:isFirstPlay on:ended={onSongEnd} bind:volume />
    </div>
  {/if}
{/each}

<style>
  div {
    height: calc(100 * var(--vh));
    width: calc(100 * var(--vw));
  }
</style>
