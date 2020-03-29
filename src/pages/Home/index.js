import React from 'react';
import Header from '../../components/Header'
import BarSocial from '../../components/BarSocial'
function Home(){
    return(
        <div className="home"
            style={{
                display:"Flex",
                justifyContent:"center",
                paddingTop:"10vh",
                paddingBottom:"38vh",
                position:"relative"}}>
            <Header/>
            <BarSocial/>
        </div>
        
    );
}
export default Home;