<template>
  <div class="pagination">
    <a href="#" title="1">First</a>
    <a href="#">&laquo;</a>

    <a href="#">1</a>
    <a class="active">2</a>
    <a href="#">3</a>

    <a href="#">&raquo;</a>
    <a href="#" title="812">Last</a>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
// Paginator
$text-color: #2E4053;
$green-color: #85C987;
$global_blue: #428bca;
$color-red: #d9534f;

.pagination {
  display: flex;
  justify-content: center;
  width:auto;
  padding: 24px;
  a {
    color: $text-color;
    float: center;
    padding: 8px 16px;
    text-decoration: none;
    &.active {
      background-color: $green-color;
      color: white;
    }
  }
}
</style>