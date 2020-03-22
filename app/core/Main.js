import React from 'react';
import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    ToastAndroidStatic as ToastAndroid,
    View,
} from 'react-native';
import AppHeader from './AppHeader';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import StatisticComponent from '../components/statisticComponent';
import {webservice} from '../lib/webservices';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(): void {
        console.log('fetching stats');
        this.fetchData();
    }

    fetchData =() => {
        webservice.call({url: 'https://www.hpb.health.gov.lk/api/get-current-statistical'}).then((result) => {
            console.log(result);
            this.setState({
                data: result.data.data,
                refreshing: false
            })
        }).catch((error) => {
            this.setState({
                refreshing: false
            })
        });
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <AppHeader/>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}
                        refreshControl={
                            <RefreshControl
                              refreshing={this.state.refreshing}
                              onRefresh={() => {
                                  this.setState({refreshing: true}, () => {
                                      this.fetchData()
                                  })
                              }} />
                        }>

                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '600',
                                    color: Colors.black,
                                }}>Last Updated: {this.state.data.update_date_time}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '600',
                                    color: Colors.black,
                                }}>Source: http://hpb.health.gov.lk/api-documentation</Text>
                            </View>
                            <StatisticComponent iconName={'hospital'} iconSize={35} iconColor={'#abac36'} text='Total Cases' count={this.state.data.local_total_cases}></StatisticComponent>
                            <StatisticComponent iconName={'ambulance'} iconSize={35} iconColor={'#ac7991'} text='New Cases' count={this.state.data.local_new_cases}></StatisticComponent>
                            <StatisticComponent iconName={'procedures'} iconSize={35} iconColor={'#2d5aac'} text='Total in hospitals' count={this.state.data.local_total_number_of_individuals_in_hospitals}></StatisticComponent>
                            <StatisticComponent iconName={'bed'} iconSize={35} iconColor={'#ac0700'} text='Deaths' count={this.state.data.local_deaths}></StatisticComponent>
                            <StatisticComponent iconName={'running'} iconSize={35} iconColor={'#12ac3a'} text='Recovered & Discharged' count={this.state.data.local_recovered}></StatisticComponent>
                            <StatisticComponent iconName={'running'} iconSize={35} iconColor={'#12ac3a'}></StatisticComponent>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
});


export default Main;
