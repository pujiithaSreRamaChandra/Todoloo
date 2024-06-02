import React from 'react';
import Section1 from './Section1';

const Home = () => {
    return (
        <div className='home'>
            <div className="section1">
                <Section1></Section1>
            </div>
        </div>
        /*npx json-server --watch data/db.json --port 8000 */


    );
};

export default Home;
