<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { prevent_default } from "svelte/internal";
  import type { Song } from "../../types/types";
  import SongCover from "./SongCover.svelte";
  const dispatch = createEventDispatcher();

  export let song: Song;
  export let autoplay: boolean;
  export let isFirstPlay: boolean;

  let paused: boolean = true;
  let duration: number, currentTime: number;

  const onPlay = () => {
    if (!isFirstPlay) return;
    autoplay = true;
    isFirstPlay = false;
  };

  const ended = () => {
    dispatch("ended");
  };

  const onSpacePress = (e) => {
    if (e.keyCode !== 32) return;
    console.log("🚀 ~ file: Song.svelte ~ line 28 ~ onSpacePress ~ e", e);
    paused = !paused;
  };
</script>

<svelte:window on:keydown|preventDefault={onSpacePress} />

<svelte:head>
  <title>{`${song.title} | SFMGP`}</title>
  <link rel="shortcut icon" type="image/jpg" href={song.coverImage} />
</svelte:head>

<div class="background" style={`background-image: url(${song.backgroundImage});`} />
<article>
  <SongCover {song} percentPlayed={(100 * currentTime) / duration} bind:paused />
</article>

<!-- svelte-ignore a11y-media-has-caption -->
<audio src={song.file} preload="auto" {autoplay} bind:paused bind:duration bind:currentTime on:ended={ended} on:play={onPlay} />

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
