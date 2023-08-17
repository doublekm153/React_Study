import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        //데이터 배열.
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "눈" },
        { id: 4, text: "바람" },
    ]);

    const [inputText, setInputText] = useState(""); //텍스트를 입력할 수 있는 input의 상태.
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            // concat을 사용하여 배열에 추가. concat 은 새로운 배열을 만들어 주는 함수.
            id: nextId, // nextId 값을 id로 설정하고
            text: inputText, //입력한 값을 화면에 렌더링.
        });
        setNextId(nextId + 1); // nextId 값에 1을 더해준다.
        setNames(nextNames); // names 값을 업데이트한다.
        setInputText(""); // inputText를 비운다.
    };
    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        // filter 함수를 사용하여 특정 id를 가진 객체를 배열에서 제거한다.
        setNames(nextNames);
    };
    const namesList = names.map((name) => (
        // map 함수를 사용하여 JSX로 변환.
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample;
