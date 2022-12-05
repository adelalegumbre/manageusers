import axios from 'axios';
import React from 'react';

export const fetchToken = async () => {
  const resp = await axios.get(
    'https://www.universal-tutorial.com/api/getaccesstoken',
    {
      headers: {
        Accept: 'application/json',
        'api-token':
          'iOiq-JX9BWUPPbsPzOcHAdDWGoRTQZ691ymXBJmo4lCqrjxQCw12URa4L95VUCss9es',
        'user-email': 'adelalegumbre@gmail.com',
      },
    }
  );
  return resp.data.auth_token;
};
