<script lang="ts">
  import type { Song } from "../../types/types";
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";

  export let song: Song;
  export let paused = true;
  export let percentPlayed = 0;

  let scale = spring(1, { damping: 0.5 });

  const onClick = () => {
    scale.set(0.9).then(() => {
      scale.set(1);
      setTimeout(() => {
        showPlay = false;
        showPause = false;
      }, 700);
    });

    if (paused) {
      showPlay = true;
    } else {
      showPause = true;
    }

    paused = !paused;
  };

  let showPlay = false;
  let showPause = false;
</script>

<div style={`transform: scale(${$scale});`}>
  <div class="wrapper">
    <div class="cover" style={`background-image: url(${song.coverImage});`} on:click={onClick} />
    <div class="loading" style={`width: ${percentPlayed}%;`} />
  </div>
</div>
{#if showPlay}
  <svg
    transition:fade
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="play"
    class="icon svg-inline--fa fa-play fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
  </svg>
{/if}
{#if showPause}
  <svg
    transition:fade
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="pause"
    class="icon svg-inline--fa fa-pause fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
    />
  </svg>
{/if}

<style>
  .cover {
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: center center;

    width: 60vw;
    height: 60vw;
    max-width: 600px;
    max-height: 600px;
  }

  .icon {
    position: absolute;
    top: calc(50% - 5vh);
    left: 0;

    width: 100vw;
    height: 10vh;
  }

  path {
    fill: #cccccca4;
  }

  .wrapper {
    position: relative;
    z-index: 10;
    box-shadow: 0 0 10px 2px #a09898b3;

    border-radius: 5px;
    overflow: hidden;
  }

  .loading {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background: #ac0066bf;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
