
const initstate={
    signUp:false
}

export const signUpReducer=(state=initstate, action)=>{
    switch(action.type){
        case "SIGNUP":{
            return{
                ...state,
                signUp:action.payload
            }
        }
        default:{
            return state
        }
    }
}