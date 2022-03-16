// context can be access context.state context.getters context.dispatch context.commit

export default {
    async registerCoach(context, data) {
      const userId = context.rootGetters.userId;
      const coachData = {
        // id: context.rootGetters.userId,
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas,
      };
      const token = context.rootGetters.token
      // sending to firebase must include [key].json in the end of the url
      // store data in server
      const response = await fetch(
        `https://findacoach-9543b-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
        {
          method: 'PUT',
          body: JSON.stringify(coachData),
        }
      );
  
      const responseData = await response.json();
  
      if (!response.ok) {
        // error...
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }
  
      context.commit('registerCoach', {
        ...coachData,
        id: userId,
      });
    },
    async loadCoaches(context, payload) {
      if (!payload.forceRefresh && !context.getters.shouldUpdate) {
        return
      }
  
      const response = await fetch(
        `https://findacoach-9543b-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
      );
  
      const responseData = await response.json();
  
      if (!response.ok) {
        // error...
        const error = new Error(response.message || 'Failed to fetch!');
        throw error;
      }
  
      const coaches = [];
  
      for (const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          description: responseData[key].description,
          hourlyRate: responseData[key].hourlyRate,
          areas: responseData[key].areas,
        };
        coaches.push(coach);
      }
  
      context.commit('setCoaches', coaches);
      context.commit('setFetchTimestamp');
    },
  };
  