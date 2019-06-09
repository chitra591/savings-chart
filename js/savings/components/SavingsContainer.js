import {connect} from 'react-redux';
import SavingsScreen from './SavingsScreen';
import {getTotalSavings} from '../action';

const mapStateToProps = (state, ownProps = {}) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTotalSavings: (callback) => {
            dispatch(getTotalSavings(callback))
        }
    };
};

const SavingsContainer = connect(mapStateToProps, mapDispatchToProps)(SavingsScreen);

export default SavingsContainer;