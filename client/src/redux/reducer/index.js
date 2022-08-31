
const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    details: []
}

function rootReducer(state= initialState, action) {
    switch (action.type) {
        case "GET_COUNTRIES":
        return {
            ...state,
            countries: action.payload, //Primero estaba vacio y ahora le digo, manda a countries todo lo que te mande la accion de countries.
            allCountries: action.payload
        }
        case "FILTER_COUNTRIES_BY_CONTINENT":
        // const allCountries = state.countries
        // const statusFiltered = action.payload === 'all'? allCountries : allCountries.filter(e => e.region === action.payload)
        // console.log(statusFiltered)
        const allCountries = state.allCountries
        const continentsFiltered = allCountries.filter(e => e.subregion.includes(action.payload) || e.continents.includes(action.payload) )
        return {
            ...state,
            countries: continentsFiltered
            }

        case "ORDER_BY_NAME":
            const sortedArr = action.payload === 'asc' ?
                state.countries.sort(function(a, b) {
                    if(a.name > b.name) {
                        return 1;
                    }
                    if(b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function(a, b) {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
                return {
                    ...state,
                    countries: sortedArr
                }
            case 'GET_NAME_COUNTRIES':
                return {
                    ...state,
                    countries: action.payload
                }
            // case 'POST_ACTIVITY':
            //     return {
            //         ...state,
            //         countries: action.payload
            //     }
            case 'GET_ACTIVITIES':
                return {
                    ...state,
                    activities: action.payload
                }
            case 'FILTER_BY_POPULATION':
            const filterPopulation = action.payload === 'ascpop' ?
            state.countries.sort(function(a, b) {
                if(a.population > b.population) {
                    return 1;
                }
                if(b.population > a.population) {
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function(a, b) {
                if(a.population > b.population) {
                    return -1;
                }
                if(b.population > a.population) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                countries: filterPopulation
            }
        case 'GET_COUNTRY_DETAILS':
            return {
                ...state,
                details: action.payload
            }
        case 'CLEAN_DETAILS':
            return {
                ...state,
                details:[]
            }
            
            default: return state;
    }
}

export default rootReducer;