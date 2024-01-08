import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        gap: 0,
        paddingVertical: 55,
        paddingHorizontal: 47
    },
    section: {
        margin: 5,
        padding: 10,

    },
    subhead: {
        fontSize: 21,
        textAlign: "left",
        fontWeight: "bold",
        marginVertical: 13,
    },
    title: {
        fontSize: 34,
        fontWeight: "bolder",
        marginVertical: 21,
        textAlign: "center"
    },
    header: {
        fontSize: 21,
        fontWeight: "bolder",
        marginVertical: 21,
        textAlign: "left",
        textDecoration: "underline"
    },
    listItemTitle: {
        fontWeight: "bold",

        fontSize: 18,
    },
    listItemDesc: {
        fontSize: 13,
        margin: 13,
    }
});

// Create Document Component
const PDFFile = (props) => (

    <Document>
        <Page size="A4" style={styles.page}>
            <View stlye={styles.section}>
                <Text style={styles.title}>
                    {props.businessState.business_name ? props.businessState.business_name : "Business Blueprint"}
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subhead}>Niche</Text>
                <Text>{props.businessState.chosen_niche}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subhead}>Target Customer</Text>
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

        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>Customer Values</Text>
            </View>

            {props.businessState.values?.map((e, i) => {
                return (
                    <View style={styles.section}>
                        <Text style={styles.listItemTitle}>{e.title}</Text>
                        <Text style={styles.listItemDesc}>{e.description}</Text>
                    </View>
                )
            })

            }

        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>Customer Motivations</Text>
            </View>

            {props.businessState.motivations?.map((e, i) => {
                return (
                    <View style={styles.section}>
                        <Text style={styles.listItemTitle}>{e.title}</Text>
                        <Text style={styles.listItemDesc}>{e.description}</Text>
                    </View>
                )
            })

            }

        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>Customer Struggles</Text>
            </View>

            {props.businessState.struggles?.map((e, i) => {
                return (
                    <View style={styles.section}>
                        <Text style={styles.listItemTitle}>{e.title}</Text>
                        <Text style={styles.listItemDesc}>{e.description}</Text>
                    </View>
                )
            })

            }

        </Page>
    </Document >


);

export default PDFFile;