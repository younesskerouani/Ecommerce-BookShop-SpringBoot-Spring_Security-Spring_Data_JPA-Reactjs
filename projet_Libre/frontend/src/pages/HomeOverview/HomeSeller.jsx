import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/sellerpannel/widgetSm/WidgetSm";
import WidgetLg from "../../components/sellerpannel/widgetLg/WidgetLg";

import React from 'react'
import styled from "styled-components";

const Home = styled.div`
margin-top: 20px;
    flex: 4;
`;

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;  
`;

const HomeSeller = () => {
  return (
    <Home>
        <FeaturedInfo/>
        <HomeWidgets>
            <WidgetSm/>
            <WidgetLg/>
        </HomeWidgets>
    </Home>
  )
}

export default HomeSeller;
