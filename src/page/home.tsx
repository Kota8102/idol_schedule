import React from 'react';

import Layout from '../component/organisms/layout';
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