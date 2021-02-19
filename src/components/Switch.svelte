<script lang="ts">
  export let checked: boolean;
</script>

<label class="switch">
  <input type="checkbox" bind:checked />
  <span class="slider" />
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 2.65em;
    height: 1.5em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 1.5em;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.1em;
    width: 1.1em;
    left: 0.2em;
    bottom: 0.2em;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #ac0066;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #ac0066;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1.1em);
    -ms-transform: translateX(1.1em);
    transform: translateX(1.1em);
  }
</style>
