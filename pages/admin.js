import config from '../cms/config';

import { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init( { config } );
    })();
  }, []);

  return <div />;
}

export default Admin;