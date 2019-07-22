<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-md-6 col-xs-12">
        <!-- Content will be placed here -->
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MinimalLayout',
};
</script>
