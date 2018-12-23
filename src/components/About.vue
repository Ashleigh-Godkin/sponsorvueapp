<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <h6>{{paragraph}}</h6>

  </div>

</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        messagetitle: ' About ',
        paragraph: '\n' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ornare augue. Cras varius ullamcorper mauris vitae gravida. Morbi cursus, ante ac facilisis ultricies, sem erat dapibus dui, vel pulvinar velit turpis et odio. Duis id hendrerit leo. Fusce laoreet eget nibh euismod rhoncus. Nunc accumsan turpis mauris, non maximus nulla aliquet et. Praesent pellentesque, nibh sed rutrum faucibus, arcu lorem volutpat felis, at pharetra urna tortor sed sapien. Duis dolor ligula, molestie vitae elit at, auctor rutrum nibh. Donec condimentum orci venenatis ex ullamcorper ultrices. Nulla venenatis gravida dolor, posuere pulvinar ex. Nulla vitae tempor ligula, et interdum ex. Nunc volutpat quam quis dolor cursus ornare. Ut ultrices varius feugiat. Suspendisse volutpat lobortis lorem, vitae imperdiet nulla lobortis ut. Sed dignissim molestie enim eu pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }
    }
  }
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
