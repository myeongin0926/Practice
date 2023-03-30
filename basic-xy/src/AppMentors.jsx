import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState(defaultPerson);

  const changeHandler = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const addHandler = () => {
    const current = prompt(`이름이 무엇인가요??`);
    const position = prompt(`포지션은 어디인가요?`);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name: current, title: position }],
    }));
  };
  const removeHandler = () => {
    const current = prompt(`누구를 삭제하고 싶나요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== current),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeHandler}>멘토의 이름을 바꾸기</button>
      <button onClick={addHandler}>멘토 추가하기</button>
      <button onClick={removeHandler}>멘토 삭제하기</button>
    </div>
  );
}

const defaultPerson = {
  name: "명인",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
