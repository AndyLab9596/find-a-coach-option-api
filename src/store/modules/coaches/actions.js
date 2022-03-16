import { config } from "@/common/config"

export default {
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return
        }

        const response = await fetch(`${config.BASE_URL}/coaches.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(response.message || 'Failed to fetch');
            throw error
        }

        const coaches = [];
        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                hourlyRate: responseData[key].hourlyRate,
                description: responseData[key].description,
                areas: responseData[key].areas,
            }
            coaches.push(coach)
        }

        context.commit('setCoaches', coaches)
        context.commit('setFetchTimestamp')
    }
}