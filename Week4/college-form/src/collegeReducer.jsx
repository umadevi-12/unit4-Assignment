export const initialState = {
    name : '',
    establishment_year:'',
    address: {
      building : '',
      street : '',
      city: {
        name : '',
         locality: {
              pinCode:'',
              landmark:''
            }
      },
      state : '',
      coordinates: {
         latitude : "",
         longitude : ""
         }
    },
  courses_offered: [],
  error : null
  
};

 export function collegeReducer(state,action){
    switch(action.type){
        case 'SET_FIELD':
            return {...state,[action.field] : action.payload};
        case 'SET_ADDRESS_FIELD':
            return{
                ...state,
                address:{
                    ...state.address,
                [action.field] : action.payload
            }
            }
        case 'SET_CITY_FIELD':
            return {...state,
                address:{
                    ...state.address,
                    city:{
                        ...state.address.city,
                        [action.field] : action.payload
                    }
                }
            }
        case "SET_LOCALITY_FIELD":
            return{...state,
                address:{
                    ...state.address,
                    city:{
                        ...state.address.city,
                        locality:{
                            ...state.address.city.locality,
                            [action.field] : action.payload
                        }
                    }
                }
                }
        case "SET_COORDINATES":
            return {
                ...state,
                address:{
                    ...state.address,
                    coordinates:{
                        ...state.address.coordinates,
                        [action.field]:action.payload
                    }
                }
            };
        case 'ADD_COURSE':
         return {
        ...state,
        courses_offered: [...state.courses_offered, action.payload]
        };

        case 'REMOVE_COURSE':
         return {
        ...state,
        courses_offered: state.courses_offered.filter((_, i) => i !== action.index)
        };

        case 'reset':
        return initialState;

       case 'error':
        return {
        ...state,
        error: action.payload
      };

      default:
      throw new Error('invalid action type');
  }
}

    
