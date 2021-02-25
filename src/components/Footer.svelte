<script lang="ts"></script>

<footer>
  <span>
    © SFMGP Music: <a href="https://www.youtube.com/channel/UCw9iJU7m6Eq9WyLF2MrvUtQ">BatoRec</a>
    Images: <a href="https://www.instagram.com/strakkas">strakkas</a>
  </span>
  <span>
    Website: <a href="https://github.com/Mastermakrela">@mastermakrela</a>
  </span>
  <span>
    All icons used come from <a href="https://fontawesome.com/license">FontAwesome</a>
  </span>
</footer>

<style>
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 8px;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto auto;
    grid-gap: 2.5em;

    text-align: center;
    font-weight: 300;
    font-size: 0.7em;
    color: #dcdcdc80;
    mix-blend-mode: difference;
  }

  @media (max-width: 600px) {
    footer {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-gap: 0.2em;
      margin-bottom: 4px;
    }
  }

  footer a {
    color: inherit;
  }
</style>
