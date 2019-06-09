const INITIAL_STATE = {
    savings_list: [],
    message: '',
    max_savings: 0,
    max_month: 0,
    y_index_unit: 0
}

sortFunction = (a,b) => {  
    var dateA = new Date(a.node.date).getTime();
    var dateB = new Date(b.node.date).getTime();
    return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;  
}; 

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_TOTAL_SAVINGS_SUCCESS": 
            var savings_list = action.payload.data.totalSavings.edges;
            var new_savings_list = savings_list.sort(this.sortFunction);
            new_savings_list = new_savings_list.slice(0, 5);
            var max_savings = Math.max.apply(Math, new_savings_list.map(function(savings) { return savings.node.amount; }));
            var y_index_unit = max_savings/4;
            new_savings_list = new_savings_list.map((edge, index) => {
                if (index == 0) {
                    var new_node = edge.node;
                    new_node.velocity = 0;
                    return {...edge, node: new_node};
                } else {
                    var new_node = edge.node;
                    new_node.velocity = edge.node.amount - new_savings_list[index-1].node.amount;
                    return {...edge, node: new_node};
                }
            })
            return { ...state, savings_list: new_savings_list, max_savings, y_index_unit};
            break;  
        case "GET_TOTAL_SAVINGS_FAILURE":
            return { ...state, savings_list: [], message: 'Sorry, could not fetch data. Please try again'};
            break;
        default: 
            return state;
    }
}