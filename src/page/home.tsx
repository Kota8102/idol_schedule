import React from 'react';

import Layout from '../component/layout';
import Calendar from '../component/molecule/calendar';

const Home: React.FC = (): JSX.Element => {

  return (
    <Layout isIdolslist={true}>
      
        <div>
          <Calendar />
        </div>
      
    </Layout>
  );
};

export default Home;