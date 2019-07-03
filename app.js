new Vue({
  el:'#vue-app',
  data: {
    name : 'Joshi Jingesh',
    job: 'Developer',
    website: 'http://joshijigneshit.000webhostapp.com/',
    websiteTag: '<a href="http://joshijigneshit.000webhostapp.com/"> Dynamic Profile</a>',
    age: 25,
    x: 0,
    y: 0,
    enterd_name:'',
    enterd_age:''
  },
  methods:{
    greeting: function(time){
      return 'Good  '+time+' '+ this.name;
    },
    add: function(inc){
      this.age += inc;
    },
    substract: function(dec){
      this.age += dec;
    },
    updateXY: function(event){
        this.x= event.offsetX;
        this.y = event.offsetY;
    },
    click: function(){
      alert('You Clicked Button');
    }
  }
});
