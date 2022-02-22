
import ActionType from "./ActionType";


const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.LOGIN: {
      // console.log('SIniii')
      return {...state,token:action.token,name:action.name
      };
    }
    case ActionType.CHECK: {
      // console.log('nowstsatae',state);
      return state
    }
    case ActionType.LOGOUT: {
      return {
        ...state,
        nilai: state.nilai - 1,
      };
    }

    default:
      return state;
  }
};
  
  export default reducer