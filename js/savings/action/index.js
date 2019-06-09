import NetworkManager from '../../NetworkManager';

export const getTotalSavings = (callback) => {
    return(dispatch) => {
        NetworkManager.getTotalSavings((error, response) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, response);
                dispatch({type: "GET_TOTAL_SAVINGS_SUCCESS", payload: response});
            }
        });
    }   
}