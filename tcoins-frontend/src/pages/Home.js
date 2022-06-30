import React from 'react';
import MultiActionAreaCard from '../components/MultiActionAreaCard';

function Home() {

    return (
        <div className="App">

            <div className="Card">
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
            </div>

            <div className="Card">
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
                <MultiActionAreaCard className="CardItem"></MultiActionAreaCard>
            </div>

        </div>
    )
}
/*API: https://tcoinsapp.herokuapp.com/api/tcoins*/
export default Home;