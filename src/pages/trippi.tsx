import * as React from 'react';
import Layout from '../components/layout';
//import {Fragment, useState, useEffect} from 'react';

interface TrippiCaseStudyProps extends Partial<React.PropsWithChildren<React.ReactHTMLElement<HTMLDivElement>>> {
   
};

const TrippiCaseStudy:React.FC<TrippiCaseStudyProps> = ({children, ...props}) => {
    return <Layout>
        <h1>Coming Soon</h1>
    </Layout>
}

export default TrippiCaseStudy;
