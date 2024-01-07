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
    SelectCustomers,
    EmptyInterests,
    EmptyCustomers,
    AddFinalCustomer,
    SetInitialCustomer
} from '../../store/actions/businessActions';
import ConfirmationBox from '../../components/ConfirmationBox';

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

    const handleObjectModified = (element, data) => {


        if (element === "title") {
            if (!data || data === undefined || data === null) {
                setTitle("")
            } else {

                setTitle(data)
            }
        }
        updateElement(data)


    }

    const updateElement = (value) => {

        if (selectedIndex > -1) {


            switch (selectedElementType) {
                case "Interest":
                    props.updateInterest({ package: value, index: selectedIndex })
                    props.selectInterests();
                    break;
                case "Customer":
                    props.updateCustomer({ package: value, index: selectedIndex })
                    props.selectCustomers()
                    break;
                default:
                    break;

            }
        }
    }


    const emptyElements = () => {
        switch (selectedElementType) {
            case "Interest":
                props.emptyInterests()
                setSelectedIndex(-1)
                break;
            case "Customer":
                props.emptyCustomers()
                setSelectedIndex(-1)
                break;
            default:
                break;
        }
    }

    const addElement = (e) => {
        if (e !== "pass") { e.preventDefault() }


        if (title.length > 0 && title.length < 100) {


            switch (selectedElementType) {
                case "Interest":
                    props.addInterest(title)
                    props.selectInterests();
                    setSelectedIndex(-1)
                    break;
                case "Customer":
                    props.addCustomer(title)
                    props.selectCustomers()
                    setSelectedIndex(-1)
                    break;
                default:
                    break;

            }
            setTitle("")
        } else if (props.businessState.selected_data.length >= 20) {
            toast.warn("You can only add up 20 items per list.")
        }


    }



    const removeElement = () => {
        if (selectedIndex > -1) {


            switch (selectedElementType) {
                case "Interest":
                    props.removeInterest(selectedIndex)
                    props.selectInterests();
                    setSelectedIndex(-1)
                    break;
                case "Customer":
                    props.removeCustomer(selectedIndex)
                    props.selectCustomers()
                    setSelectedIndex(-1)
                    break;
                default:
                    break;

            }
        }
    }


    const [title, setTitle] = useState("");
    const handlePopulation = (element) => {
        switch (element) {
            case "Interest":
                props.selectInterests()
                setSelectedIndex(-1)
                break;
            case "Customer":
                props.selectCustomers()
                setSelectedIndex(-1)
                break;
            default:
                break;
        }
    }

    const handleElementClicked = (title, index) => {
        if (selectedIndex !== -1) {
            setTitle("");
            setSelectedIndex(-1)
            console.log(index);
        } else {
            setTitle(title);
            setSelectedIndex(index)
            console.log(index);
        }
    }



    const [showConfirmBox, setShowConfirmBox] = useState(false)

    const handleConfirmed = (val) => {
        if (val === true) {
            props.setInitialCustomer(title)

        }
        setShowConfirmBox(false)
    }


    return (
        <div className='getting-started'>
            {showConfirmBox ? <ConfirmationBox message={`You already have an initial customer chosen: ${props.businessState.initial_customer}. Are you sure you want to replace it?`} action="Replace" handleConfirmed={handleConfirmed} /> : null}
            <BuilderNavigation page="getting_started" />
            <div className='builder-body'>
                <div className='areas'>
                    <div className='tool' onClick={() => handleArea("Info")}>
                        Goals and Tips
                    </div>

                    <div className='area' onClick={() => handleArea("Interest")}>
                        <h4>
                            1. Your Passions and Interests
                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Customer")}>
                        <h4>
                            2. Customers Spending Money
                        </h4>
                    </div>

                </div>
                <div className='area-view'>
                    {selectedElementType === "Info" ?
                        <div className='tips'>
                            <h3>


                                You need to use ChatGPT, iask.ai, or your favorite research tool to find out your Ideal Customer.<br /><br />
                                Tip: You can use the above list of Evergreen niches for inspiration.
                                <br /><br />
                                Goals:<br />
                                1. List your INTERESTS and PASSIONS and choose the one you're likely to enjoy pursuing the most.<br /><br />
                                2. Find out the categories of people SPENDING MONEY on products in your sub-niche. <br /><br />
                                3. Choose the category of customers who are serious buyers and the ones MOST LIKELY TO PURCHASE.
                            </h3>
                        </div> :
                        <div className='editor'>


                            <form className='element' onSubmit={(e) => addElement(e)} >
                                <h4>{selectedElementType}</h4>
                                <input maxlength="250" type="text" placeholder={selectedElementType + " Title"} value={title} onChange={(e) => handleObjectModified("title", e.target.value)} />
                            </form>
                            <div className="buttons">


                                {selectedElementType === "Customer" && selectedIndex !== -1 ? <button className='element-btn choose-btn' onClick={() => setShowConfirmBox(true)}>Serve This Customer</button> : null}
                                <button className='element-btn' onClick={() => addElement("pass")}> ADD {selectedElementType}</button>

                                <button className='element-btn' onClick={() => removeElement()}> REMOVE {selectedElementType}</button>
                                <button className='element-btn' onClick={() => emptyElements()}> EMPTY LIST</button>
                            </div></div>
                    }

                    {

                        selectedElementType !== "Info" ?
                            <div className='listed-elements-container'>
                                <div className='listed-elements'>


                                    {
                                        props.businessState.selected_data?.map((e, i) => {
                                            return (
                                                <div className='listed-element' style={{ backgroundColor: i == selectedIndex ? "#A01A1F" : "#212121" }} onClick={() => handleElementClicked(e, i)} key={"id_" + i}>
                                                    <h4>{i + 1 + ". " + e}</h4></div>
                                            )
                                        })

                                    }
                                </div> </div> : ""
                    }


                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        businessState: state.business
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        emptyInterests: () => dispatch(EmptyInterests()),
        emptyCustomers: () => dispatch(EmptyCustomers()),
        selectInterests: () => dispatch(SelectInterests()),
        selectCustomers: () => dispatch(SelectCustomers()),
        addInterest: (newInterest) => dispatch(AddInterest(newInterest)),
        removeInterest: (index) => dispatch(DeleteInterest(index)),
        updateInterest: (index) => dispatch(UpdateInterest(index)),
        addCustomer: (newCustomer) => dispatch(AddCustomer(newCustomer)),
        removeCustomer: (ind) => dispatch(DeleteCustomer(ind)),
        updateCustomer: (index) => dispatch(UpdateCustomer(index)),
        addFinalCustomer: (val) => dispatch(AddFinalCustomer(val)),
        setInitialCustomer: (cus) => dispatch(SetInitialCustomer(cus))
    }
}


export default connect(mapStateToProps, mapActionsToProps)(GettingStarted)