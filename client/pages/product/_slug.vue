<template>
  <div>
    <h1>Data {{$router.params}}</h1>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^[a-z0-9-]+$/.test(params)
  }
}
</script>