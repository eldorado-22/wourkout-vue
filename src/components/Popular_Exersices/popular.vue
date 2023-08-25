<script>

</script>

<template>
  <section id="popular">
    <div class="container">
      <div class="popular">
        <div class="popular-text">
          <h1>Popular Exercises</h1>
          <span>see more  exercises</span>
        </div>
        <div class="popular-block">
          <div class="popular-one">
            <div class="videos">
              <a target="_blank" href="https://youtu.be/F6-kAQW2meI?si=vvSAdJ-WM0p-4qv2">
                <img id="images" src="./../../assets/popular_one.svg" alt="img">
              </a>
            </div>
            <div class="second-block">
              <h4>Treadmill</h4>
              <div class="time">58:24</div>
            </div>
            <p>250 est calories </p>
          </div>
          <div class="popular-one">
            <div class="videos">
              <a target="_blank" href="https://youtu.be/g47n-5DJcwo?si=YxSOuIKAkXJxYjiW">
                <img id="images" src="./../../assets/popular_two.svg" alt="img">
              </a>
            </div>
            <div class="second-block">
              <h4>Treadmill</h4>
              <div class="time">58:24</div>
            </div>
            <p>250 est calories </p>
          </div>
          <div class="popular-one">
            <div class="videos">
              <a target="_blank" href="https://youtu.be/ciCYd9B2UWQ?si=_-BgJyYP4DhigaWR">
                <img id="images" src="./../../assets/popular_three.svg" alt="img">

              </a>
            </div>
            <div class="second-block">
              <h4>Treadmill</h4>
              <div class="time">58:24</div>
            </div>
            <p>250 est calories </p>
          </div>
          <div class="popular-one">
            <div class="videos">
              <a target="_blank" href="https://youtu.be/oyGL591b_0Q?si=KLciME4dp0SteGwO">
                <img id="images" src="./../../assets/popular_four.svg" alt="img">
              </a>
            </div>
            <div class="second-block">
              <h4>Treadmill</h4>
              <div class="time">58:24</div>
            </div>
            <p>250 est calories </p>
          </div>
          <div class="popular-one">
            <div class="videos">
              <a target="_blank" href="https://youtu.be/CC96LGPWRVU?si=fy4B0pKdy3Rzppk_">
                <img id="images" src="./../../assets/popular_five.svg" alt="img">
              </a>
            </div>
            <div class="second-block">
              <h4>Treadmill</h4>
              <div class="time">58:24</div>
            </div>
            <p>250 est calories </p>
          </div>
          <div class="popular-one">
            <div class="videos">
              <a target="_blank" href="https://youtu.be/UiOL7kTTeWc?si=kYdl90YJmCb7aLS6">
                <img id="images" src="./../../assets/popular_six.svg" alt="img">
              </a>
            </div>
            <div class="second-block">
              <h4>Treadmill</h4>
              <div class="time">58:24</div>
            </div>
            <p>250 est calories </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#popular {
  margin: 10% 0;
}

.popular-block {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  gap: 90px;
  padding: 0 100px 0 20px;
}

.popular-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popular-text span {
  color: #949191;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.popular h1 {
  color: #FFF;
  font-size: 35px;
  font-weight: 600;
  padding-bottom: 30px;
  letter-spacing: 0.3px;
}

.popular-one {
  position: relative;
}

.second-block h4 {
  position: absolute;
  bottom: 0;
  left: 10px;
  top: -50px;
  color: #FFF;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.popular-one p {
  color: #949191;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 20px;
}

.time {
  position: absolute;
  left: 18.90rem;
  bottom: 0;
  top: -30px;
  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.367px;
  background: #000;
  border-radius: 10px;
  padding: 5px 10px;
}

#images {
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
  -webkit-box-shadow: 0 5px 100px 600px rgba(0, 0, 0, 0.78) inset;
  -moz-box-shadow: 0 5px 100px 600px rgba(0, 0, 0, 0.78) inset;
  box-shadow: 0 5px 10px 600px rgba(0, 0, 0, 0.78) inset;
  opacity: .4;
  transition: .5s;
  cursor: pointer;
}

#images:hover {
  opacity: .8;

}

.second-block {
  position: absolute;
  display: flex;
  align-items: center;
}
</style>
