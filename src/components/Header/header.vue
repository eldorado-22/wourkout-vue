<script>
export default {
  data() {
    return {
      mainText: "workout",
      navOne: "exercises",
      navTwo: "trainers",
      navThree: "pricing",
      navFour: "login",
    }
  }
}

</script>

<template>
  <header id="header">
    <div class="container">
      <div class="header">
        <h1 class="header-text">{{ mainText }}</h1>
        <nav class="header-nav">
          <a href="#">{{ navOne }}</a>
          <a href="#">{{ navTwo }}</a>
          <a href="#">{{ navThree }}</a>
          <a href="#">{{ navFour }}</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style>
#header {
}

.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 30px 0;
}
h1 {
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}
.header-nav a{
  color: #FFF;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1.5px;
  margin: 0 30px;
  text-transform: uppercase;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  box-shadow: inset 0 0 0 0 #54b3d6;
}
.header-nav a:hover{
  text-line-through: single;
  box-shadow: inset 200px 0 0 0 #54b3d6
}

</style>