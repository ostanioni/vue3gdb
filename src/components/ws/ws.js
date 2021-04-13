// src/components/UserRepositories.vue `setup` function
// import { fetchUserRepositories } from '@/api/repositories'
// import { ref, onMounted, watch, toRefs } from 'vue';

function createWebSocket() {  
  const wsClient = new WebSocket('ws://127.0.0.9:3019/');
  return wsClient;
}
const wsClient = createWebSocket();
wsClient.onerror(
  ()=>{}
);
wsClient.onopen(
  ()=>{}
);
wsClient.onclose(
  ()=>{}
);
wsClient.onmessage(
  (event)=>{
    return event.data
  }
);
wsClient.send(
  ()=>{}
);
wsClient.close();
/*
setup (props) {
  // using `toRefs` to create a Reactive Reference to the `user` property of props
  const { user } = toRefs(props)

  const repositories = ref([])
  const getUserRepositories = async () => {
    // update `props.user` to `user.value` to access the Reference value
    repositories.value = await fetchUserRepositories(user.value)
  }

  onMounted(getUserRepositories)

  // set a watcher on the Reactive Reference to user prop
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}
*/