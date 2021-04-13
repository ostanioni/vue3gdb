<script>

export default {

  name: "WebSocket",
  data() {
    return {
      socket: null,
    }
  },
  created() {
    this.socket = new WebSocket('ws://127.0.0.9:3019/') 
  },
  mounted() {
    this.$nextTick(function () {
        
          this.addSocketEventListeners();
          console.log(this.$store);
      
    });

  },
  methods: {
    addSocketEventListeners() {

      const appEl = document.getElementById('app');

      this.socket.addEventListener('open', function (event) {
              alert(event);
              //socket.send('Hello Server!')
              });
      this.socket.addEventListener('message', function (event) {
            appEl.innerText += event.data;  });

    },
  }
}
</script>