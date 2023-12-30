import React, { useEffect, useState } from 'react'
import "../../styles/gettingstarted.css"
import BuilderNavigation from '../../components/BuilderNavigation';
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import {
    AddInterest,
    AddCustomer,
    UpdateCustomer,
    UpdateInterest,
    DeleteCustomer,
    DeleteInterest,
    SelectInterests,
    SelectCustomers
} from '../../store/actions/businessActions';

const GettingStarted = (props) => {

    const evergreenNiches = [
        {
            name: "Health and Wellness",
            subniches: ["Weight loss", "Fitness", "Nutrition", "Mental health", "Alternative medicine", "and more"]
        },
        {
            name: "Personal Finance",
            subniches: ["Budgeting", "Investing", "Retirement planning", "Debt management", "Frugal living", "and more"]
        },
        {
            name: "Self-improvement",
            subniches: ["Productivity", "Motivation", "Goal setting", "Time management", "Building Self-confidence", "and more"]
        },
        {
            name: "Hobbies",
            subniches: ["Gardening", "Cooking", "Photography", "Painting", "Playing musical instruments", "Crafts", "and more"]
        },
        {
            name: "Relationships",
            subniches: ["Marriage advice", "Parenting tips", "Friendship building", "Dating tips", "and more"]
        },
        {
            name: "Home Improvement",
            subniches: ["DIY projects", "Interior design", "Organization", "Home maintenance", "Gardening", "and more"]
        },
        {
            name: "Beauty and Fashion",
            subniches: ["Makeup", "Skincare", "Haircare", "Fashion Design", "Fashion Styling", "Fashion Photography", "Accessories", "and more"]
        },
        {
            name: "Food and Cooking",
            subniches: ["DIY projects", "Interior design", "Organization", "Home maintenance", "Gardening", "and more"]
        },
        {
            name: "Travel and Adventure",
            subniches: ["Cuisine-Specific Subniches", "Ingredient-Specific Subniches", "Cooking Technique Subniches", "Special Diet Subniches", "Family Travel", "Equipment and Gadget Subniches", "and more"]
        },
        {
            name: "Parenting and Family",
            subniches: ["Parenting Styles and Approaches", "Child Development and Education", "Family Communication and Dynamics", "Parenting in the Digital Age", "and more"]
        },
    ];


    const [selectedData, setSelectedData] = useState([]);
    const [selectedElementType, setSelectedElementType] = useState("Info");
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleArea = (element) => {
        setSelectedElementType(element)
        handlePopulation(element)
        setSelectedIndex(-1);
    }

    const addElement = () => {

        switch (selectedElementType) {
            case "Interest":
                props.addInterest(title)
                props.selectInterests();
                break;
            case "Customer":
                props.addCustomer(title)
                props.selectCustomers()
                break;
            default:
                break;

        }

    }


    const [title, setTitle] = useState("");
    const handlePopulation = (element) => {
        switch (element) {
            case "Interest":
                props.selectInterests()
                break;
            case "Customer":
                props.selectCustomers()
                break;
            default:
                break;
        }
    }

    const handleElementClicked = () => {

    }

    return (
        <div className='getting-started'>
            <BuilderNavigation page="getting_started" />
            <div className='builder-body'>
                <div className='areas'>
                    <div className='tool' onClick={() => handleArea("Info")}>
                        Goals and Tips
                    </div>

                    <div className='area' onClick={() => handleArea("Interest")}>
                        <h4>
                            1. Listing Passions and Interests
                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Customer")}>
                        <h4>
                            2. Customers Spending Money
                        </h4>
                    </div>

                </div>
                <div className='area-view'>
                    {selectedElementType === "Info" ? <div className='info'> <div className='niches'>{
                        evergreenNiches.map((e, i) => {
                            return (

                                <div className='niche'>
                                    <h4>{e.name}</h4>
                                    <ul>
                                        {e.subniches.map(e => { return (<li>{e}</li>) })}</ul>
                                </div>
                            )
                        })
                    }</div ><div className='tips'>
                            <h3>


                                You need to use ChatGPT, iask.ai, or your favorite research tool to find out your Ideal Customer.<br /><br />
                                Tip: You can use the above list of Evergreen niches for inspiration.
                                <br /><br />
                                Goals:<br />
                                1. List your INTERESTS and PASSIONS and choose the one you're likely to enjoy pursuing the most.<br /><br />
                                2. Find out the categories of people SPENDING MONEY on products in your sub-niche. <br /><br />
                                3. Choose the category of customers who are serious buyers and the ones MOST LIKELY TO PURCHASE.
                            </h3>
                        </div> </div> : <div className='editor'>

                        <div className='element'>
                            <h4>{selectedElementType}</h4>
                            <input type="text" placeholder={selectedElementType + " Title"} value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <button className='element-btn' onClick={() => addElement()}> ADD {selectedElementType}</button>
                        <button className='element-btn' onClick={() => updateElement()}> UPDATE {selectedElementType}</button>
                        <button className='element-btn' onClick={() => removeElement()}> REMOVE {selectedElementType}</button>
                    </div>}

                    {

                        selectedElementType !== "Info" ?
                            <div className='listed-elements'>


                                {
                                    props.businessState.selected_data.map((e, i) => {
                                        return (
                                            <div className='listed-element' style={{ backgroundColor: i == selectedIndex ? "#A01A1F" : "#212121" }} onClick={() => handleElementClicked(e, i)} key={"id_" + i}>
                                                <h4>{i + 1 + ". " + e}</h4></div>
                                        )
                                    })

                                }
                            </div> : ""
                    }


                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        businessState: state
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        selectInterests: () => dispatch(SelectInterests()),
        selectCustomers: () => dispatch(SelectCustomers()),
        addInterest: (newInterest) => dispatch(AddInterest(newInterest)),
        removeInterest: (index) => dispatch(DeleteInterest(index)),
        updateInterest: (index) => dispatch(UpdateInterest(index)),
        addCustomer: (newCustomer) => dispatch(AddCustomer(newCustomer)),
        removeCustomer: (index) => dispatch(DeleteCustomer(index)),
        updateCustomer: (index) => dispatch(UpdateCustomer(index)),
    }
}


export default connect(mapStateToProps, mapActionsToProps)(GettingStarted)