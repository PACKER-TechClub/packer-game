import { useState } from "react";

export default function({ OdaiList }) {
    const [odai, setOdai] = useState(null);

    const selectOdai = () => {
        const index = Math.floor(Math.random() * OdaiList.length);
        setOdai(OdaiList[index]);
    }

    return (
        <>
            <button onClick={selectOdai}>お題を選ぶ</button>
            <div>
                {odai &&
                    <>
                        <h2>お題は</h2><h1>{odai}</h1>
                    </>}
            </div>
        </>
    )
}