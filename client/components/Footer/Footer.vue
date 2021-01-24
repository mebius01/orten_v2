<template>
  <div>
    <footer class="footer">
      <Map />
      <div class="menu-sched-contact">
        <Schedule />
        <Contact />
      </div>
    </footer>
    <div class="copyright">
      <p class="copyright__item" style="color: #e74c3c;">
        orten.in.ua <span style="color: white;">© 2020</span>
      </p>
      <a style="text-decoration: none; color: #e74c3c;"
        href="mailto:8th.port@gmail.com"
        class="copyright__link">
        <span style="color: #3498db;">created 😄</span>
        <span style="color: white;">:</span>
        <span style="color: #e74c3c;"></span> 8-th Port</a
      >
    </div>
  </div>
</template>

<script>
import Map from "../../components/SmallComponents/Map"
import Contact from "../../components/Header/Contact"
import Schedule from "../../components/Header/Schedule"
export default {
  components: {
    Map,
    Contact,
    Schedule
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';

.footer {
  @extend .padding-12;
  @extend .space-between;
  justify-content: flex-start;
  background-color: $green_color;
  display: flex;
  justify-content: space-between;
  color: $text_color;
  @media (max-width: 850px) {
    display: none;
  }
  .menu-sched-contact {
    @extend .space-between;
    @media (max-width: 650px) {
      padding: 12px 0;
    }
    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

}
.copyright {
  @extend .padding-12;
  padding-top: 2px;
  padding-bottom: 2px;
  @extend .space-between;
  align-items: center;
  font-size: 12px;
  background-color: $text_color;
  color: white;
}
.header-for-block {
  padding-left: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  color: $text_color;
  background-color: $green_color;
  i {
    margin-right: 5px;
  }
}
</style>