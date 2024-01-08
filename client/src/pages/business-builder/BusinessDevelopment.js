import React, { useState } from 'react'
import "../../styles/businessbuilder.css"
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import BuilderNavigation from '../../components/BuilderNavigation';
import { EmptyStruggles, EmptyValues, EmptySpecifications, EmptyProducts, AddMotivation, AddProduct, AddSpecification, AddStruggle, AddValue, DeleteMotivation, DeleteProduct, DeleteSpecification, DeleteStruggle, DeleteValue, EmptyMotivations, SelectMotivations, SelectProducts, SelectSpecifications, SelectStruggles, SelectValues, UpdateMotivation, UpdateProduct, UpdateSpecification, UpdateStruggle, UpdateValue } from '../../store/actions/businessActions';

const BusinessDevelopment = (props) => {

    const [selectedElementType, setSelectedElementType] = useState("Info");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleArea = (element) => {
        setSelectedElementType(element)
        handlePopulation(element)
        switch (element) {
            case "Motivation":
                setElementDescription("Ask ChatGPT (or any research tool) for the motivations that drive your specified group of customers to pursue their topic of interest.")
                break;
            case "Struggle":
                setElementDescription("What struggles, challenges, problems, and pain-points are your specified group of customers facing in their pursuit of achieving their motivations?")
                break;
            case "Value":
                setElementDescription("Ask ChatGPT (or any research tool) for the values of your specified group of customers.")
                break;
            case "Specification":
                setElementDescription("Choose the demographics and psychographics you prefer, strategically.")
                break;
            default:
                break;
        }
        setSelectedIndex(-1);
    }

    const [selectedElementData, setSelectedElementData] = useState({});

    const handleElementClicked = (title, desc, index) => {
        if (selectedIndex !== -1) {
            setTitle("");
            setDescription("");
            setSelectedIndex(-1)
            console.log(index);
        } else {


            setTitle(title);
            setDescription(desc);
            setSelectedIndex(index)
            console.log(index);
        }
    }


    const handleObjectModified = (element, data) => {
        if (element === "title") {
            setTitle(data)
        } else {
            setDescription(data)
        }
        updateElement(element, data)

    }

    const addElement = (e) => {

        e.preventDefault()

        const selected_data_length = props.businessState.selected_data === undefined ? 0 : props.businessState.selected_data.length;

        if (selected_data_length < 20 && title.length > 0) {

            switch (selectedElementType) {
                case "Motivation":
                    props.addMotivation({ title: title, description: description })
                    handlePopulation(selectedElementType);
                    setSelectedIndex(-1)
                    break;
                case "Struggle":
                    props.addStruggle({ title: title, description: description })
                    handlePopulation(selectedElementType);
                    setSelectedIndex(-1)
                    break;
                case "Value":
                    props.addValue({ title: title, description: description })
                    handlePopulation(selectedElementType);
                    setSelectedIndex(-1)
                    break;
                case "Specification":
                    props.addSpecification({ title: title, description: description })
                    handlePopulation(selectedElementType);
                    setSelectedIndex(-1)
                    break;
                case "Product":
                    props.addProduct({ title: title, description: description })
                    handlePopulation(selectedElementType);
                    setSelectedIndex(-1)
                    break;
                default:
                    break;

            }
        } else if (selected_data_length < 20) {
            toast.warn("You can only add up 20 items per list.")
        }



    }

    const emptyElements = () => {
        switch (selectedElementType) {
            case "Motivation":
                props.emptyMotivations()
                setSelectedIndex(-1)
                break;
            case "Struggle":
                props.emptyStruggles()
                setSelectedIndex(-1)
                break;
            case "Value":
                props.emptyValues()
                setSelectedIndex(-1)
                break;
            case "Specification":
                props.emptySpecifications()
                setSelectedIndex(-1)
                break;
            case "Product":
                props.emptyProducts()
                setSelectedIndex(-1)
                break;

            default:
                break;
        }
    }

    const updateElement = (element, data) => {
        if (selectedIndex !== -1) {


            switch (selectedElementType) {
                case "Motivation":
                    props.updateMotivation({ package: { title: (element == "title" ? data : title), description: (element == "description" ? data : description) }, index: selectedIndex })
                    props.selectMotivations()

                    break;
                case "Struggle":
                    props.updateStruggle({ package: { title: (element == "title" ? data : title), description: (element == "description" ? data : description) }, index: selectedIndex })
                    props.selectStruggles()

                    break;
                case "Value":
                    props.updateValue({ package: { title: (element == "title" ? data : title), description: (element == "description" ? data : description) }, index: selectedIndex })
                    props.selectValues()

                    break;
                case "Specification":
                    props.updateSpecification({ package: { title: (element == "title" ? data : title), description: (element == "description" ? data : description) }, index: selectedIndex })
                    props.selectSpecifications()

                    break;
                case "Product":
                    props.updateProduct({ package: { title: (element == "title" ? data : title), description: (element == "description" ? data : description) }, index: selectedIndex })
                    props.selectProducts()

                    break;
                default:
                    break;
            }

        }
    }

    const removeElement = () => {
        switch (selectedElementType) {
            case "Motivation":
                props.removeMotivation(selectedIndex)
                props.selectMotivations()
                setSelectedIndex(-1)
                break;
            case "Struggle":
                props.removeStruggle(selectedIndex)
                props.selectStruggles()
                setSelectedIndex(-1)
                break;
            case "Value":
                props.removeValue(selectedIndex)
                props.selectValues()
                setSelectedIndex(-1)
                break;
            case "Specification":
                props.removeSpecification(selectedIndex)
                props.selectSpecifications()
                setSelectedIndex(-1)
                break;
            case "Product":
                props.removeProduct(selectedIndex)
                props.selectProducts();
                setSelectedIndex(-1)
                break;
            default:
                break;

        }
    }


    const handlePopulation = (element) => {
        switch (element) {
            case "Motivation":
                props.selectMotivations()
                setSelectedIndex(-1)
                break;
            case "Struggle":
                props.selectStruggles()
                setSelectedIndex(-1)
                break;
            case "Value":
                props.selectValues()
                setSelectedIndex(-1)
                break;
            case "Specification":
                props.selectSpecifications()
                setSelectedIndex(-1)
                break;
            case "Product":
                props.selectProducts()
                setSelectedIndex(-1)
                break;
            default:
                break;

        }

    }

    const [elementDescription, setElementDescription] = useState("")

    return (
        <div className='business-builder'>
            <BuilderNavigation page="business_development" />
            <h3>{props.businessState.initial_customer} interested in {props.businessSate.chosen_niche}</h3>
            <div className='builder-body'>


                <div className='areas'>
                    <div className='tool' onClick={() => handleArea("Info")}>
                        Goals and Tips
                    </div>
                    <div className='area' onClick={() => handleArea("Specification")}>
                        <h4>
                            1.  Focusing Your Niche
                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Motivation")}>
                        <h4>
                            2.    Customer Motivations
                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Struggle")}>
                        <h4>
                            3.   Customer Struggles

                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Value")}>
                        <h4>
                            4.    Customer Values
                        </h4>
                    </div>


                </div>
                <div className='area-view'>

                    {

                        selectedElementType === "Info" ? <div className='tips'>
                            <h3>
                                Tip: You need to use ChatGPT, iask.ai, or your favorite research tool to achieve the below marketing research goals. <br /><br />
                                1. Get the general motivations and struggles of the category of people purchasing products in your niche.<br /><br />
                                2. Research  the demographic and psychographic landscape of your market with The MBTI and The Enneagram.<br /><br />
                                3. Use the most profitable Demographic and Psychographic factors in pinning down your Ideal Customers.<br /><br />
                                4. Add the general struggles, motivations, and values of the psychographic group you chose. <br /><br />
                                5. Based on the information provided (and hopefully you've read the book), come up with ideas for products that suit your target customers' unique needs.
                                <br /><br />
                            </h3>
                        </div> :
                            <form className='editor' onSubmit={(e) => addElement(e)}>

                                <div className='element'>
                                    <h4>{elementDescription}</h4>
                                    <input maxlength="100" type="text" placeholder={selectedElementType + " Title"} value={title} onChange={(e) => handleObjectModified("title", e.target.value)} onPaste={(e) => handleObjectModified("title", e.target.value)} />
                                    <textarea maxlength="1000" placeholder={selectedElementType + " Description"} value={description} onChange={(e) => handleObjectModified("desc", e.target.value)} onPaste={(e) => handleObjectModified("desc", e.target.value)}>{description}</textarea>
                                </div>
                                <div className="buttons">
                                    <button className='element-btn' type="submit" onSubmit={(e) => addElement(e)}> ADD {selectedElementType}</button>
                                    <button className='element-btn' onClick={() => removeElement()}> REMOVE {selectedElementType} </button>
                                    <button className='element-btn' onClick={() => emptyElements()}> EMPTY LIST</button>
                                </div>
                            </form>
                    }

                    {
                        selectedElementType !== "Info" ?
                            <div className='listed-elements-container'>
                                <div className='listed-elements'>
                                    {
                                        props.businessState.selected_data?.map((e, i) => {
                                            return (
                                                <div className='listed-element' style={{ backgroundColor: i == selectedIndex ? "#A01A1F" : "#212121" }} onClick={() => handleElementClicked(e.title, e.description, i)} key={"id_" + i}>
                                                    <h4>{i + 1 + ". " + e.title}</h4>
                                                </div>
                                            )
                                        })}
                                </div> </div> : null
                    }


                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {

    return {
        businessState: state.business
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        selectMotivations: () => dispatch(SelectMotivations()),
        selectStruggles: () => dispatch(SelectStruggles()),
        selectValues: () => dispatch(SelectValues()),
        selectProducts: () => dispatch(SelectProducts()),
        selectSpecifications: () => dispatch(SelectSpecifications()),

        emptyMotivations: () => dispatch(EmptyMotivations()),
        emptyStruggles: () => dispatch(EmptyStruggles()),
        emptyValues: () => dispatch(EmptyValues()),
        emptyProducts: () => dispatch(EmptyProducts()),
        emptySpecifications: () => dispatch(EmptySpecifications()),

        addMotivation: (val) => dispatch(AddMotivation(val)),
        removeMotivation: (index) => dispatch(DeleteMotivation(index)),
        updateMotivation: (obj) => dispatch(UpdateMotivation(obj)),

        addStruggle: (val) => dispatch(AddStruggle(val)),
        removeStruggle: (index) => dispatch(DeleteStruggle(index)),
        updateStruggle: (obj) => dispatch(UpdateStruggle(obj)),

        addValue: (val) => dispatch(AddValue(val)),
        removeValue: (index) => dispatch(DeleteValue(index)),
        updateValue: (obj) => dispatch(UpdateValue(obj)),

        addSpecification: (val) => dispatch(AddSpecification(val)),
        removeSpecification: (index) => dispatch(DeleteSpecification(index)),
        updateSpecification: (obj) => dispatch(UpdateSpecification(obj)),

        addProduct: (val) => dispatch(AddProduct(val)),
        removeProduct: (index) => dispatch(DeleteProduct(index)),
        updateProduct: (obj) => dispatch(UpdateProduct(obj)),


    }
}


export default connect(mapStateToProps, mapActionsToProps)(BusinessDevelopment)