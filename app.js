const app = Vue.createApp({
  data: () => {
    return {
      name: "vue 3",
      count: 0,
      status:false,
      green:false,
      blue:false,
      yellow:false,
      white:false,
      x:0,
      y:0,
      customers:["a","b","c","d"],
      ninja_vue:"https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=4",
      image: "asset/1.png",
      alt:"1.png",
      line:false
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    alert_mess(){
        console.log("alert");
    },
    mouseover(e){
        console.log(e.type);
        this.green = !this.green
    },
    mouseleave(e){
        console.log(e.type);
        this.blue = !this.blue
    },
    doubleclick(e){
        console.log(e.type);
        this.yellow = !this.yellow 
    },
    click(e,data){
        this.white = !this.white
        console.log(e,e.type);
        if(data){
            console.log(data);    
        } 
    },
    mousemove(e){
        // console.log(e.offsetX);
        this.x = e.offsetX;
        this.y -= e.offsetY
    },
    underline(){
        this.line = !this.line
    }

  },
  computed: {
    filter_test(){
        return this.customers.filter((c)=>c==="c");
    }
  },
  mounted() {
    console.log("this is mouted hook!");
    this.count = 10
  },
  beforeMount() {
    console.log("this is beforeMoutd");
  },
  
});

app.mount("#app");
