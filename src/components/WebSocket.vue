<script>

export default {

  name: "WebSocket",
  data() {
    return {
      socket: null,
    }
  },
  created() {
    this.socket = new WebSocket('ws://127.0.0.9:3019/');
    this.$store.dispatch('socket_activate');
  },
  mounted() {
    this.$nextTick(function () {
        
          this.addSocketEventListeners();
          console.log("socketIsActive = ", this.$store.state.WS.socketIsActive);

    });

  },
  methods: {
    addSocketEventListeners() {

      // const appEl = document.getElementById('app');

      const sckt = this.socket;

      this.socket.addEventListener('open', function (event) {
              sckt.send(`${event}Hello Server!`)
              });
      this.socket.addEventListener('message', function (event) {
            console.log(event.data);  });

    },
  }
}
</script>