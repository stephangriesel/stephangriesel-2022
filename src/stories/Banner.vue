<template>
<aside></aside>
</template>

<script>
import './banner.css';
// import { reactive, computed } from 'vue';

export default {
  name: 'my-banner',

  props: {
    variant: "info" | "congrats" | "documentation" | "danger",
  },
};
</script>
