<template>
    <div>
      <footer class="footer">
      <div class="header-row">
      <div>
        <Map />
      </div>
      <div class="menu-sched-contact">
        <Schedule />
        <Contact />
      </div>
      </div>
    </footer>
    <div class="copyright">
      <p class="copyright__item" style="color: #e74c3c;">
        orten.in.ua <span style="color: white;">© 2008 - 2021</span>
      </p>
    </div>
    </div>
</template>

<script>
import Map from "@/components/SmallComponents/Map"
import Contact from "@/components/Header/Contact"
import Schedule from "@/components/Header/Schedule"
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
  // background-color: green;
  background-color: $green_color;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    display: flex;
    // justify-content: center;
    align-items: center;
  }
  .header-row {
    @extend .padding-12;
    @extend .space-between;
    @media (max-width: 650px) {
      flex-direction: column;
    }
    .menu-sched-contact {
      @extend .space-between;
    }
  }
}
@media (min-width: 1200px){
  .footer {
    grid-template-columns: auto 195px 230px;
  }
}
@media (min-width: 992px) and (max-width: 1199px){
    .footer {
        grid-template-columns:auto 195px 230px;
    }

}
@media (min-width: 749px) and (max-width: 991px){
  .footer {
    grid-template-columns: auto auto;
  }
  .column {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
  }

}

@media (min-width: 300px) and (max-width: 750px){
  .menu-sched-contact {
    display: none;
  }
  .footer {
      grid-template-columns: auto;
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
</style>