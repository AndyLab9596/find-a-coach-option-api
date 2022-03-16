import { createStore } from "vuex";
import authModule from './modules/auth';
import coachesModule from './modules/coaches'

const store = createStore({
    modules: {
        auth: authModule,
        coaches: coachesModule
    }
})

export default store;