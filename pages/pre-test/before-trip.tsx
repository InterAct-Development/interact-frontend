import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { STRAPI_URL } from "../../helpers/Endpoints";
import { LangContext } from "../../helpers/LanguageProvider";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import { Body } from "../../layout/Body";

const BeforeTrip: NextPage = () => {
    const [locale, setLocale] = useContext(LangContext);


    interface PreTestQuestion {
        attributes: {
            title: string,
            question_answers: {
                data?: {
                    attributes: {
                        short_text: string,
                        long_text: string
                    }
                }[]
            }
        }
    }


    const { data } = useQuery(["pre-test", locale], () => fetch(STRAPI_URL + `/api/pre-questions?locale=${locale}&populate[question_answers]=*`).then(res =>
        res.json() as any
    ))

    return <Body>
        {((data ? data.data : []) || []).map((question: PreTestQuestion) => (<>
            <h3>{question.attributes.title}</h3>
            {
                question.attributes.question_answers.data?.map(({ attributes: answer }) => (<Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{answer.short_text}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {answer.long_text}
                        </Typography>
                    </AccordionDetails>
                </Accordion>))
            }
        </>))}
    </Body>;
};

export default BeforeTrip;
