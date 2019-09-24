import React from 'react';
import { View, FlatList, Text, Button as AddButton, ScrollView } from 'react-native';
import { ScreenWrapper, LabelRow, Separator, HeaderTitle } from '../../components';
import s from './styles';
import { getParam } from '../../utils/navHelpers';
import DeleteButton from './DeleteButton';
const LoadsDetails = (props) => {
    const {
        load
    } = props;
    const fromLocation = load.fromLocation ? `${load.fromLocation.city || ''}, ${load.fromLocation.state || ''}` : '';
    const toLocation = load.toLocation ? `${load.toLocation.city || ''}, ${load.toLocation.state || ''}` : '';
    const customer = load.customer ? `${load.customer.name || ''}` : '';
    const consignor = load.consignor ? `${load.consignor.name || ''}` : '';
    const consignee = load.consignee ? `${load.consignee.name || ''}` : '';
    const driver = load.driver ? `${load.driver.name || ''}` : '';
    const truck = load.truck ? `${load.consignee.carrierNo || ''}` : '';
    const valueWithoutGst = (Number(load.freight) || 0) + (Number(load.hamali) || 0) + (Number(load.haltage) || 0) + (Number(load.otherCharges) || 0);
    const totalFreight = (valueWithoutGst || 0) + ((valueWithoutGst || 0) * (load.gst || 0) * 0.01);

    const _renderItem = ({ item }) => (
        <View style={s.itemContainer}>
            <Text>Item name: {item.name}</Text>
            <Text>Weight: {item.weight} {item.unit}</Text>
        </View>
    );
    return (
        <View style={[s.root, s.loadDetails]}>
            <ScrollView>
                <View style={[s.container, s.secondContainer]}>
                    <View style={s.addButton}>
                        <AddButton
                            onPress={props.goEditLoad}
                            title='Edit Load'
                        />
                    </View>
                    <AddButton
                        onPress={props.generateBilty}
                        title='Bilty'
                    />
                </View>
                <View style={s.container}>
                    <LabelRow
                        leftText="Load No#"
                        rightText={load.loadNo}
                        style={s.flex50}
                    />
                    <LabelRow
                        leftText="Date"
                        rightText={load.date}
                        style={s.flex50}
                    />
                </View>
                <View style={s.container}>
                    <LabelRow
                        leftText="From"
                        rightText={fromLocation}
                        style={s.flex50}
                    />
                    <LabelRow
                        leftText="To"
                        rightText={toLocation}
                        style={s.flex50}
                    />
                </View>
                <View style={s.container}>
                    <LabelRow
                        leftText="Customer"
                        rightText={customer}
                        style={s.flex50}
                    />
                </View>
                <View style={s.container}>
                    <LabelRow
                        leftText="Consignor"
                        rightText={consignor}
                        style={s.flex50}
                    />
                    <LabelRow
                        leftText="Consignee"
                        rightText={consignee}
                        style={s.flex50}
                    />
                </View>
                <View style={s.container}>
                    <LabelRow
                        leftText="Driver"
                        rightText={driver}
                        style={s.flex50}
                    />
                    <LabelRow
                        leftText="Carrier"
                        rightText={truck}
                        style={s.flex50}
                    />
                </View>
                <View>
                    <Text style={s.label}>Items</Text>
                    <FlatList
                        data={load.items}
                        renderItem={_renderItem}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={Separator}
                        ListEmptyComponent={<View containerStyle={s.emptyList}><Text>No Items</Text></View>}
                        ListFooterComponent={load.items.length ? <View style={s.footer}><Separator /></View> : null}>
                    </FlatList>
                </View>
                <View style={s.container}>
                    <LabelRow
                        leftText="Goods Value"
                        rightText={load.goodsValue || ''}
                        style={s.flex50}
                    />
                </View>
                <View style={s.container}>
                    <LabelRow
                        leftText="Freight By"
                        rightText={load.freightBy || ''}
                        style={s.flex50}
                    />
                    <LabelRow
                        leftText="GST By"
                        rightText={load.gstBy || ''}
                        style={s.flex50}
                    />
                </View>
                <View style={s.freight}>
                    <View style={s.container}>
                        <LabelRow
                            leftText="Freight"
                            rightText={load.freight || ''}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="Hamali"
                            rightText={load.hamali || ''}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="Haltage"
                            rightText={load.haltage || ''}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="Other Charges"
                            rightText={load.otherCharges || ''}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="Freight Without GST"
                            rightText={valueWithoutGst || ''}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="GST %"
                            rightText={(Number(load.gst) || 0)}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="Total Freight"
                            rightText={totalFreight || 0}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="Advance Payment"
                            rightText={load.advancePaid || 0}
                            style={s.flex50}
                        />
                    </View>
                    <View style={s.container}>
                        <LabelRow
                            leftText="To Pay"
                            rightText={totalFreight - (load.advancePaid || 0)}
                            style={s.flex50}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

LoadsDetails.navigationOptions = ({ navigation }) => ({
    headerTitle:
        <HeaderTitle title={getParam('load')(navigation) ? 'View Load' : 'New Load'} />,
    headerRight: (
        <View style={[s.saveButton]}>
            <AddButton
                navigation={navigation}
                onPress={navigation.getParam('goEditLoad')}
                title='Edit Load'
            />
            <DeleteButton navigation={navigation} />
        </View>
    ),
});

export default LoadsDetails;