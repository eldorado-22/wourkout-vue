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

  <section id="hero">
    <div class="container">
      <div class="hero">
        <div class="hero-text">
          <div class="block">
            <button>new</button>
            <h5>High Intensity workout to burn calories</h5>
          </div>
          <h1>Cardio <br> Exercise</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do <br> eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div class="btn-group">
            <button class="btn-get">Get Started</button>
            <button class="btn-prev">Preview</button>
          </div>
        </div>
        <img class="hero-img" src="./../../assets/her-d.png" alt="img">
        <div class="hero-blocks">
          <div class="block-one">
            <h3>38:14</h3>
            <p>time</p>
          </div>
          <div class="block-one">
            <h3 class="block-g">165</h3>
            <p>est calories</p>
          </div>

        </div>
      </div>
    </div>
  </section>


</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 30px 0;
}

.header h1 {
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}

.header-nav a {
  color: #FFF;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1.5px;
  margin: 0 30px;
  text-transform: uppercase;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  box-shadow: inset 0 0 0 0 #54b3d6;
}

.header-nav a:hover {
  text-line-through: single;
  box-shadow: inset 200px 0 0 0 #54b3d6
}

.hero {
  display: flex;
  justify-content: space-between;
}

.block {
  display: flex;
  gap: 15px;
  border-radius: 200px;
  opacity: 2;
  background: rgba(100, 99, 99, 0.88);
  padding: 7px 10px;
  width: 340px;
  height: 36px;
  margin: 20px 0;
}

.block button {
  color: #FFF;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 200px;
  background: #25AB75;
  padding: 7px 10px;
  border: none;
  outline: none;
  text-align: center;
}

.block h5 {
  color: #FFF;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.hero-text {
  position: relative;
  z-index: 1;

}

.hero-img {
  position: absolute;
  top: -58px;
  width: 50%;
  left: 40%;
  z-index: 99;
  object-fit: cover;
}

.hero-text h1 {
  color: #FFF;
  font-size: 190px;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 170px; /* 85% */
  padding: 30px 0;
}

.hero-text p {
  color: rgba(255, 255, 255, 0.65);
  font-size: 16px;
  font-weight: 400;
  line-height: 29px; /* 181.25% */
  letter-spacing: 0.5px;
  padding: 20px 0;
}

.btn-group {
  display: flex;
  padding: 30px 0;
  gap: 20px;
}

.btn-get {
  padding: 24px 43px;
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 10px;
  background: #25AB75;
  outline: none;
  border: 1px solid #25AB75;
  cursor: pointer;
  transition: .5s;
}

.btn-get:hover {
  transition: .5s;
  background: #1f1f1f;
}

.block-one h3 {
  color: #FFE642;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
}

.block-one .block-g {
  color: #FB1351;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
}

.block-one p {
  color: #FFF;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.block-one {
  border-radius: 20px;
  background: #232222;
  width: 166px;
  height: 100px;
  padding-top: 8px;
  padding-left: 20px;
}
.hero-blocks{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}
.btn-prev {
  cursor: pointer;
  padding: 24px 43px;
  outline: none;
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #1f1f1f;
  letter-spacing: 1px;
  border-radius: 10px;
  background: #1f1f1f;
  transition: .5s;
}

.btn-prev:active {
  transition: .5s;
  background: #25AB75;
}

</style>