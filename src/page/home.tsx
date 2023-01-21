import React from 'react';

import Layout from '../component/organisms/layout';
import Calendar from '../component/molecule/calendar';
import Loader from '../component/atom/loader';

const Home: React.FC = (): JSX.Element => {

  return (
    <Layout isIdolslist={true}>
      
        <div>
          <Loader />
          <div><Calendar /></div>
          
        </div>
      
    </Layout>
  );
};

export default Home;