<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Song } from "../../types/types";
  import SongCover from "./SongCover.svelte";
  const dispatch = createEventDispatcher();

  export let song: Song;
  export let autoplay: boolean;

  let paused: boolean = true;
  let duration: number, currentTime: number;

  const ended = () => {
    dispatch("ended");
  };
</script>

<div class="background" style={`background-image: url(${song.backgroundImage});`} />
<article>
  <SongCover {song} percentPlayed={(100 * currentTime) / duration} bind:paused />
</article>

<!-- svelte-ignore a11y-media-has-caption -->
<audio src={song.file} preload="auto" {autoplay} bind:paused bind:duration bind:currentTime on:ended={ended} />

<!-- svelte-ignore a11y-media-has-caption -->
<style>
  article {
    height: calc(100 * var(--vh));
    width: calc(100 * var(--vw));

    display: grid;
    justify-content: center;
    align-items: center;
  }

  .background {
    position: absolute;
    height: calc(100 * var(--vh));
    width: calc(100 * var(--vw));

    z-index: 0;

    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: center center;

    filter: blur(15px);
  }
</style>
