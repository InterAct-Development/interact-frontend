import React, { useState, useEffect, useContext } from 'react';
import { QUERY_ALL_STRAPI, STRAPI_URL } from '../Endpoints';
import { LangContext } from '../LanguageProvider';
import { apiRequest } from '../Requests';

export function useLocalizedFetch(
  [url, options]: Parameters<typeof apiRequest>,
  dependency: any[]
): [any | undefined, Boolean, any] {
  const [locale] = useContext(LangContext);

  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    // Todo cleanup
    if (!options.params) options.params = {};
    options.params.locale = locale;

    apiRequest(url, options)
      .then((res: Response) => {
        if (res.status === 200) {
          res.json().then(({ data }) => {
            setData(data);
          });
        }
      })
      .catch((error) => setErr(error))
      .finally(() => setLoading(false));
  }, [...dependency, locale]);

  return [data, loading, err];
}
