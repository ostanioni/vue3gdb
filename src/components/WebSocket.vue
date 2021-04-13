<script>
import { mapState } from 'vuex';

export default {

  name: "WebSocket",
  data() {
    return {
      socket: null,
    }
  },
  created() {
    this.socket = new WebSocket('ws://127.0.0.9:3019/');
  },
  mounted() {
    this.$nextTick(function () {
      if (this.socket) {
        this.addSocketEventListeners();
        console.log("socketIsActive = ", this.socketIsActive);
        this.$store.dispatch('socket_activate');
      }
    });
  },
  methods: {
    addSocketEventListeners() {

      // const appEl = document.getElementById('app');

      const Socket = this.socket;

      Socket.addEventListener('open', function (event) {
              Socket.send(`${event}Hello Server!`)
              });
      Socket.addEventListener('message', function (event) {
            console.log(event.data);  });

    },
  },
  computed: mapState({
    socketIsActive: state => state.WS.socketIsActive,
    Socket: state => state.WS.socket,
    deactivateReason: state => state.WS.deactivateReason,
  }),
}
</script>