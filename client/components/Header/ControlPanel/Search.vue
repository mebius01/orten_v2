<template>
  <div class="search">
    <form role="search">
      <input type="text" placeholder="Search..." name="search" />
    </form>
  </div>  
</template>

<style lang="scss" scoped>
.search {
  width: 80vw;
  margin: 0 5px;
  input {
    width: 100%;
    height: 32px;
    padding: 5px;
    outline: none;
    border: none;
  }
}
</style>