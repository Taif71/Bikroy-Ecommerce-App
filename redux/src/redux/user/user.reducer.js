// this won't be a .jsx file  since it doesn't contain any jsx. So, it will be a .js file

// A reducer is just a function that gets 2 properties. It gets state object, which represents the last state or an initial state Which is just an object which represents what we want to store.
// And then it receives an action. Action is just an object that has a type which is a string value

// {
//     type: string,
//     // specific it means we are going to write a bunch of actions.We will name them whatever it is we want.
//     // Make sure that our reducers are aware of the specific type of action that's coming
//     //and it will be based off this type property

//     payload: 
//     // payload can be anything. Anything because maybe we want to do something with it in order to update our state
//     // we might pass an object that we literally set as the value in our state or we might use this value
//     // to make some transformations on our state
// }

// actions are just an object that have these 2 properties


const INITIAL_STATE = {
    currentUser: null
    // we will use this as default parameter value
}

// Default parameter value: state = INITAL_STATE 
const userReducer = (state = INITIAL_STATE , action) => {
    // The State -> is going to something that the redux store is going to pass to this reducer whenever an action fires
    // and the state will be whatever the state is currently when that action gets fire. First time, State = nothing
    
    //so we have to set an initial state



    // swicth statement:
    switch(action.type) {
        // action.type will be a string
        // we could use if-else statments too


        case 'SET_CURRENT_USER':
            // if the case is what we want, then we will render something
            // whenever SET_CURRENT_USER is the action type that gets fired, return a new object which represents the new state that our user
            return {

                ...state, // we're spreading everything on the state.Always
                currentUser: action.payload // we're just setting the currentUser value with the payload
                 
            }
        default:
            //  otherwise just return the state
            //  The caveat to remember: 
            //  every single reducer gets every single action that ever gets fire. Even if those actions are not related this reducer    
            
            return state; // currentState what the  
        }   

}

export default userReducer;