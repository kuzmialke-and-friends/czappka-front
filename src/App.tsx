import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "./Component";
import { Subject, SubjectProps } from "./Subject";

interface SubjectResponse {
  metadata: {
    personalityType: string;
  };
}

interface SubjectsResponse {
  dataset: Record<string, SubjectResponse>;
}

const extractSubjectProps = ({ dataset }: SubjectsResponse): SubjectProps[] => {
  return Object.entries(dataset).map(
    ([
      name,
      {
        metadata: { personalityType },
      },
    ]) => {
      return { name, personalityType };
    }
  );
};

function App() {
  const names = ["Krzysiek", "Krzysiu", "Krzysztof", "Krzychui", "Aleksiei"];
  const [nameIndex, setNameIndex] = useState(0);
  const chooseName = () => {
    const index = nameIndex < names.length - 1 ? nameIndex + 1 : 0;

    setNameIndex(index);
  };
  const [subjectProps, setSubjectProps] = useState<SubjectProps[]>([]);

  useEffect(() => {
    const fetchSubjectData = async () => {
      const response = await fetch(
        "http://localhost:3000/datasets/ghost?limit=2"
      );

      const subjectResponse = await response.json();

      setSubjectProps(extractSubjectProps(subjectResponse));
    };

    fetchSubjectData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component name={names[nameIndex]} />
        {subjectProps.map((props) => (
          <Subject {...props} />
        ))}
        <button onClick={chooseName}> Wybierz Krzycha </button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
