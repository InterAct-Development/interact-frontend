import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Body } from "../layout/Body";
import { apiRequest } from "../helpers/Requests";
import { STRAPI_URL, QUERY_ALL_STRAPI } from "../helpers/Endpoints";
import { Card } from "@mui/material";

const Home: NextPage = () => {
  const [answers, setAnswers] = useState<any[]>([]);
  const [question, setQuestion] = useState({
    core_question_1: "",
  });

  useEffect(() => {
    apiRequest(STRAPI_URL + "/api/pre-test-questionnaires" + QUERY_ALL_STRAPI, {
      method: "GET",
    }).then((res: Response) => {
      if (res.status === 200) {
        res.json().then((attributes) => {
          const questionnaire = attributes["data"]["0"]["attributes"];

          setQuestion(questionnaire);
          setAnswers(questionnaire["core_answer_1"]);
        });
      }
    });
  }, []);

  const answersMap = answers.map((ans, i) => {
    return (
      <div key={i} style={{ marginBottom: "20px" }}>
        <Card>
          <div style={{ padding: "0 15px" }}>
            <h4>{ans.answer}</h4>
            <p>{ans.answer_description}</p>
          </div>
        </Card>
      </div>
    );
  });

  return (
    <>
      <Body>
        <h1>{question.core_question_1}</h1>
        <>{answersMap}</>
      </Body>
    </>
  );
};

export default Home;
