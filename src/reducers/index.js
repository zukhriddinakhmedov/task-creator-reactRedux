export default function(state= {}, action) {
    switch(action.type){
        // ADD TO TASK LIST 
        case "ADD_TASK": 
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        // REMOVE FROM TASK LIST
       case "REMOVE_TASK": 
       return {
           ...state,
           tasks: state.tasks.fitler(x => x !== action.payload)
       }
        default: return state
    }
}