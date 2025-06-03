<script>
  export let classes = "";
  export let styles = "";
</script>

<div
  class="ck_spinner-border text-success {classes}"
  style={styles}
  role="status"
/>

<style>
  .text-success {
    color: #4cfff9 !important;
  }
  .ck_spinner-border {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 40px;
    vertical-align: text-bottom;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: ck_spinner-border 0.75s linear infinite;
    animation: ck_spinner-border 0.75s linear infinite;
  }
  @keyframes ck_spinner-border {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
