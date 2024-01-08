import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { connect } from "react-redux"
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    subhead: {
        fontSize: 29,
        textAlign: "left",
        fontWeight: "bold",
        marginVertical: 21,
    },
    title: {
        fontSize: 55,
        fontWeight: "bold",
        marginVertical: 34,
        textAlign: "center"
    },
    header: {
        fontSize: 34,
        fontWeight: "bold",
        marginVertical: 34,
        textAlign: "left"
    },
    listItemTitle: {
        fontWeight: "bold",
        margin: 21,
    }
});

// Create Document Component
const PDFFile = (props) => (
    <PDFViewer>
        <Document>
            <Page size="A4" style={styles.page}>
                <View stlye={styles.section}>
                    <Text style={styles.title}>
                        {props.businessSate.business_name ? props.businessSate.business_name : "Business Blueprint"}
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subhead}>Niche</Text>
                    <Text>{props.businessState.chosen_niche}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subhead}>Target Custiner</Text>
                    <Text>{props.businessState.final_customer}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subhead}>Mission Statement</Text>
                    <Text>{props.businessState.final_mission_statement}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subhead}>Unique Selling Proposition</Text>
                    <Text>{props.businessState.final_usp}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subhead}>First Product</Text>
                    <Text>{props.businessState.final_product}</Text>
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Customer Values</Text>
                </View>
                <View style={styles.section}>
                    {props.businessState.values?.map((e, i) => {
                        return (
                            <View>
                                <Text style={styles.listItemTitle}>{e.title}</Text>
                                <Text style={styles.listeItemDesc}>{e.description}</Text>
                            </View>
                        )
                    })

                    }
                </View>
            </Page>
        </Document >
    </PDFViewer >

);

const mapStateToProps = (state) => {
    return {
        businessState: state.business,
    }
}

const mapActionsToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapActionsToProps)(PDFFile);