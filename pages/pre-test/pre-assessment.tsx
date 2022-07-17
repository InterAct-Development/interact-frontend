import type { NextPage } from 'next';
import { useLocalizedFetch } from '../../helpers/hooks/LocalizedFetch';
import { QUERY_ALL_STRAPI, STRAPI_URL } from '../../helpers/Endpoints';

const PreAssessment: NextPage = () => {
    const [pageData] = useLocalizedFetch(
        [
            STRAPI_URL + '/api/pretest-questionnaire-page',
            {
                method: 'GET',
                params: QUERY_ALL_STRAPI,
            },
        ],
        []
    );

    /// comes in as null
    /// we want -> if not null gra as d sb data.attributes

    return <></>;
};

export default PreAssessment;
