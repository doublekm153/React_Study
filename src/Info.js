import { useState, useEffect } from "react";

const Info = () => {
    const [name, setname] = useState("");
    const [nickname, setnickname] = useState("");
    useEffect(() => {
        console.log("effect");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
        };
    }, [name]);

    const onChangeName = (e) => {
        setname(e.target.value);
    };

    const onChangeNickname = (e) => {
        setnickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
