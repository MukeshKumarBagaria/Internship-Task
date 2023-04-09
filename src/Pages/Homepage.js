import React, { useState } from 'react';
import RadioButtonQuestion from '../Components/RadioButtonQuestion';
import DistanceOptions from '../Assets/Data/DistanceOptions';
import { Button, Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Components/Navbar';
import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
    //state to store answer of question-1 and question-2
    const [selectedQ1, setSelectedQ1] = useState('');
    const [selectedQ2, setSelectedQ2] = useState('');


    //state to store is option selected or not based on that enabling/disabling next button
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleQ1Select = (option) => {

        setSelectedQ1(option);

        // Check if both selectedQ1 and selectedQ2 have values
        const isSubmitDisabled = selectedQ2 === "" || option === "";
        // Update the isSubmitDisabled state
        setIsSubmitDisabled(isSubmitDisabled);
    };

    const handleQ2Select = (option) => {
        setSelectedQ2(option);
         // Check if both selectedQ1 and selectedQ2 have values
         const isSubmitDisabled = selectedQ1 === "" || option === "";
         // Update the isSubmitDisabled state
         setIsSubmitDisabled(isSubmitDisabled);
    };

    const navigate = useNavigate();

    const handleSubmit = () => {
        // Check if both selectedQ1 and selectedQ2 have values
        if (selectedQ1 === "" || selectedQ2 === "") {
            setIsSubmitDisabled(false);
        }
        // logic to handle form submission based on selected options
        console.log('Selected options:', selectedQ1, selectedQ2);
        navigate("/mode-choice", {
            state: {
                selectedQ1,
                selectedQ2,
            },
        });

        // Update the isSubmitDisabled state
        setIsSubmitDisabled(isSubmitDisabled);
    };

    return (<>
        <NavBar />
        <Container className='text-center'>

            <Row className='justify-content-center'>
                <Col md={6} className='mb-4'>
                    <RadioButtonQuestion
                        question="What is your most frequently used means of travel from your home to work location?"
                        options={[
                            'Bus',
                            'Metro',
                            'Own Two-wheeler',
                            'Own Car',
                            'Walk / Bicycle',
                            'Auto',
                            'App based ride hailing cab services including Ola / Uber'
                        ]}
                        onSelect={handleQ1Select}
                    />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={6} className='mb-4'>
                    <RadioButtonQuestion
                        question="What is the total distance between your home and workplace?"
                        options={DistanceOptions}
                        onSelect={handleQ2Select}
                    />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={3}>
                    {isSubmitDisabled ? (
                        <Button disabled>Next</Button>
                    ) : (
                        <Button onClick={handleSubmit}>Next</Button>
                    )}
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default HomePage;
