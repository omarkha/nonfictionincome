import React, { useState } from 'react'
import "../../styles/businessbuilder.css"
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import BuilderNavigation from '../../components/BuilderNavigation';
import { AddMotivation, AddProduct, AddSpecification, AddStruggle, AddValue, DeleteMotivation, DeleteProduct, DeleteSpecification, DeleteStruggle, DeleteValue, SelectMotivations, SelectProducts, SelectSpecifications, SelectStruggles, SelectValues, UpdateMotivation, UpdateProduct, UpdateSpecification, UpdateStruggle, UpdateValue } from '../../store/actions/businessActions';

const BusinessDevelopment = (props) => {

    const [motivations, setMotivations] = useState([]);
    const [struggles, setStruggles] = useState([]);
    const [values, setValues] = useState([]);
    const [specifications, setSpecifications] = useState([]);
    const [products, setProducts] = useState([]);

    const [selectedData, setSelectedData] = useState([]);
    const [selectedElementType, setSelectedElementType] = useState("Info");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleArea = (element) => {
        setSelectedElementType(element)
        handlePopulation(element)
        setSelectedIndex(-1);
    }

    const [selectedElementData, setSelectedElementData] = useState({});

    const handleElementClicked = (title, desc, index) => {
        setTitle(title);
        setDescription(desc);
        setSelectedIndex(index)
        console.log(index);
    }

    const addElement = () => {

        switch (selectedElementType) {
            case "Motivation":
                props.addMotivation({ title: title, description: description })
                handlePopulation(selectedElementType);
                break;
            case "Struggle":
                props.addStruggle({ title: title, description: description })
                handlePopulation(selectedElementType);
                break;
            case "Value":
                props.addValue({ title: title, description: description })
                handlePopulation(selectedElementType);
                break;
            case "Specification":
                props.addSpecification({ title: title, description: description })
                handlePopulation(selectedElementType);
                break;
            case "Product Idea":
                props.addProduct({ title: title, description: description })
                handlePopulation(selectedElementType);
                break;
            default:
                break;

        }

    }

    const updateElement = () => {
        switch (selectedElementType) {
            case "Motivation":
                props.updateMotivation({ package: { title: title, description: description }, index: selectedIndex })
                props.selectMotivations()
                break;
            case "Struggle":
                props.updateStruggle({ package: { title: title, description: description }, index: selectedIndex })
                props.selectStruggles()
                break;
            case "Value":
                props.updateValue({ package: { title: title, description: description }, index: selectedIndex })
                props.selectValues()
                break;
            case "Specification":
                props.updateSpecification({ package: { title: title, description: description }, index: selectedIndex })
                props.selectSpecifications()
                break;
            case "Product Idea":
                props.updateProduct({ package: { title: title, description: description }, index: selectedIndex })
                props.selectProducts()
                break;
            default:
                break;


        }
    }

    const removeElement = () => {
        switch (selectedElementType) {
            case "Motivation":
                props.removeMotivation(selectedIndex)
                props.selectMotivations()
                break;
            case "Struggle":
                props.removeStruggle(selectedIndex)
                props.selectStruggles()
                break;
            case "Value":
                props.removeValue(selectedIndex)
                props.selectValues()
                break;
            case "Specification":
                props.removeSpecification(selectedIndex)
                props.selectSpecifications()
                break;
            case "Product Idea":
                props.removeProduct(selectedIndex)
                props.selectProducts();
                break;
            default:
                break;

        }
    }


    const handlePopulation = (element) => {
        switch (element) {
            case "Motivation":
                props.selectMotivations()
                break;
            case "Struggle":
                props.selectStruggles()
                break;
            case "Value":
                props.selectValues()
                break;
            case "Specification":
                props.selectSpecifications()
                break;
            case "Product Idea":
                props.selectProducts()
                break;
            default:
                break;

        }

    }


    return (
        <div className='business-builder'>
            <BuilderNavigation page="business_development" />

            <div className='builder-body'>


                <div className='areas'>
                    <div className='tool' onClick={() => handleArea("Info")}>
                        Goals and Tips
                    </div>
                    <div className='area' onClick={() => handleArea("Motivation")}>
                        <h4>
                            1.    Customer Motivations
                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Struggle")}>
                        <h4>
                            2.   Customer Struggles

                        </h4>
                    </div> <div className='area' onClick={() => handleArea("Value")}>
                        <h4>
                            3.    Customer Values
                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Specification")}>
                        <h4>
                            4.  Focusing Your Niche
                        </h4>
                    </div>
                    <div className='area' onClick={() => handleArea("Product Idea")}>
                        <h4>
                            5.  Creating Valuable Products
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
                            <div className='editor'>

                                <div className='element'>
                                    <h4>{selectedElementType}</h4>
                                    <input type="text" placeholder={selectedElementType + " Title"} value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <textarea placeholder={selectedElementType + " Description"} value={description} onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                                </div>
                                <button className='element-btn' onClick={() => addElement()}> ADD {selectedElementType}</button>
                                <button className='element-btn' onClick={() => updateElement()}> UPDATE {selectedElementType}</button>
                                <button className='element-btn' onClick={() => removeElement()}> REMOVE {selectedElementType}</button>
                            </div>
                    }


                    <div className='listed-elements'> {
                        props.businessState.selected_data.length === 0 ? props.businessState.selected_data.map((e, i) => {
                            return (
                                <div className='listed-element' style={{ backgroundColor: i == selectedIndex ? "#A01A1F" : "#212121" }} onClick={() => handleElementClicked(e.title, e.description, i)} key={"id_" + i}>
                                    <h4>{i + 1 + ". " + e.title}</h4>
                                </div>
                            )
                        }) : ""}
                    </div>



                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        businessState: state
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        selectMotivations: () => dispatch(SelectMotivations()),
        selectStruggles: () => dispatch(SelectStruggles()),
        selectValues: () => dispatch(SelectValues()),
        selectProducts: () => dispatch(SelectProducts()),
        selectSpecifications: () => dispatch(SelectSpecifications()),

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