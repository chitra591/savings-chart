import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
import {stringConstants} from '../constants';

const BAR_HEIGHT = stringConstants.SCREEN_HEIGHT * 0.7;
const BAR_WIDTH = stringConstants.SCREEN_WIDTH * 0.9;
const moment = require('moment');

export default class SavingsScreen extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            message: ''
        }
    }
    componentWillMount() {
        this.props.getTotalSavings((error, response) => {
            this.setState({isLoading: false});
        });
    }

    setVelocity = (count) => {
        this.setState({savings_velocity_drop_item: count+1});
    }
    render() {
        const {savings_list, max_savings, y_index_unit} = this.props.total_savings;
        return(
            <View style={styles.container}>
                <Text style={styles.header}>
                    {'Total Savings'}
                </Text>
                <View style={styles.barChartContainer}>
                    <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                        <Text style={styles.yAxis}>{y_index_unit*4}</Text>
                        <View style={styles.horizonatlLine} />
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                        <Text style={styles.yAxis}>{y_index_unit*3}</Text>
                        <View style={styles.horizonatlLine} />
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                        <Text style={styles.yAxis}>{y_index_unit*2}</Text>
                        <View style={styles.horizonatlLine} />
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                        <Text style={styles.yAxis}>{y_index_unit*1}</Text>
                        <View style={styles.horizonatlLine} />
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                        <Text style={styles.yAxis}>{'0'}</Text>
                        
                        <View style={styles.horizonatlLine}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%', alignItems: 'flex-end'}}>
                                {savings_list.length > 0 ? <Bar count={0} color={stringConstants.APP_COLOR_BLUE_1} savings_list={savings_list} max_savings={max_savings} toast={this.refs.toast} /> : null}
                                {savings_list.length > 1 ? <Bar count={1} color={stringConstants.APP_COLOR_BLUE_2} savings_list={savings_list} max_savings={max_savings} toast={this.refs.toast} /> : null}
                                {savings_list.length > 2 ? <Bar count={2} color={stringConstants.APP_COLOR_BLUE_3} savings_list={savings_list} max_savings={max_savings} toast={this.refs.toast} /> : null}
                                {savings_list.length > 3 ? <Bar count={3} color={stringConstants.APP_COLOR_BLUE_4} savings_list={savings_list} max_savings={max_savings} toast={this.refs.toast} /> : null}
                                {savings_list.length > 4 ? <Bar count={4} color={stringConstants.APP_COLOR_BLUE_5} savings_list={savings_list} max_savings={max_savings} toast={this.refs.toast} /> : null}
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems: 'flex-end'}}>
                        <Text style={styles.yAxis}>
                            {''}
                        </Text>
                        <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {savings_list.length > 0 ? <Text style={styles.xAxis}>{moment(new Date(savings_list[0].node.date)).format('MMM')}</Text> : null}
                            {savings_list.length > 1 ? <Text style={styles.xAxis}>{moment(new Date(savings_list[1].node.date)).format('MMM')}</Text> : null}
                            {savings_list.length > 2 ? <Text style={styles.xAxis}>{moment(new Date(savings_list[2].node.date)).format('MMM')}</Text> : null}
                            {savings_list.length > 3 ? <Text style={styles.xAxis}>{moment(new Date(savings_list[3].node.date)).format('MMM')}</Text> : null}
                            {savings_list.length > 4 ? <Text style={styles.xAxis}>{moment(new Date(savings_list[4].node.date)).format('MMM')}</Text> : null}
                        </View>
                    </View>
                </View>
                <Toast ref="toast"/>
            </View>
        );
    }
}

const Bar = (props) => {
    const {count, color, savings_list, max_savings, toast} = props;
    var savings_velocity = 0;
    if (count != 0) {
        savings_velocity =  savings_list[count].node.velocity - savings_list[count-1].node.velocity;
    }
    
    if(savings_velocity < 0) {
        return(
            <TouchableOpacity 
                style={styles.xAxis}
                onPress={()=>{
                    toast.show('The savings velocity has decresed by $'+(savings_velocity*-1), 600);
                }}>
                <LottieView source={require('../../assets/arrow-blue.json')} autoPlay loop style={{width : '60%', alignSelf: 'center'}} />
                <View style={{backgroundColor: color,width: '100%', height: BAR_HEIGHT * (savings_list[count].node.amount / max_savings)}} />     
            </TouchableOpacity>
        );
    }
    return(
        <View style={{backgroundColor: color,width: '15%', height: BAR_HEIGHT * (savings_list[count].node.amount / max_savings)}} />     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: stringConstants.BASE_FONT_SIZE+4, 
        fontWeight: 'bold', 
        justifyContent: 'center'
    },
    barChartContainer: {
        height: BAR_HEIGHT,
        width: BAR_WIDTH
    },
    xAxis: {
        width: '15%'
    },
    yAxis: {
        width: '10%'
    },
    horizonatlLine: {
        borderBottomColor: '#CDCDCD', 
        borderBottomWidth: 1, 
        height: BAR_HEIGHT/4, 
        width: '90%'
    }
})