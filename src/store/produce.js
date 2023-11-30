import produceData from '../mockData/produce.json'//get the mock data for the produce

const POPULATE = 'produce/POPULATE';//this is the unique type key

export const populateProduce = () => {
    return {
      type: POPULATE,//unique type key again but using variable at line 3 
      produce: produceData //produce is the payload key, redux interprets this additional kvp as the payload
    };//this is the action object
  };


export default function produceReducer(state = {}, action){
    switch(action.type){
        case POPULATE:{//this is setting up a new action.type case, when we see this action type, we will proceed to run the following lines of code contained in these curly braces
            const newState = {};
            action.produce.forEach(produce => {//produce is an obj
                newState[produce.id] = produce;
                //lines 16-18 where we convert the array of produce objects into a new object with id's in the object structure is called normalizing data, easier to search by id in obj
            });
            // console.log("newState", newState);//automatically in console with previous state and action
            return newState;
        }
        default:
            return state;
    }
}//this is the conventional reducer function structure
