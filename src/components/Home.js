import React from 'react'
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section 
            title="Model S" 
            description="Order Online with Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />

            <Section 
            title="Model 3" 
            description="Order Online with Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />

            <Section
            title="Model X" 
            description="Order Online with Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />

            <Section
            title="Model Y" 
            description="Order Online with Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />

            <Section 
            title='Low Cost Solar Panels'
            description='Money-back guarantee'
            backgroundImg='solar-panel.jpg'
            leftBtnText='Order now'
            rightBtnText='Learn more'
            />

            <Section 
            title='Solar for New Roofs'
            description='Solar Roof costs less than a new roof plus solar panels'
            backgroundImg='solar-roof.jpg'
            leftBtnText='Order now'
            rightBtnText='Learn more'
            />

            <Section 
            title='Accessories'
            description=''
            backgroundImg='accessories.jpg'
            leftBtnText='Shop now'
            
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`