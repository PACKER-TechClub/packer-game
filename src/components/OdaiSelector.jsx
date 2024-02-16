import { useState } from "react";

export default function ({ OdaiList }) {
  const [odai, setOdai] = useState(null);

  const selectOdai = () => {
    const index = Math.floor(Math.random() * OdaiList.length);
    setOdai(OdaiList[index]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={selectOdai}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out my-4"
      >
        お題を選ぶ
      </button>
      <div className="mt-5">
        {odai && (
          <>
            <h2 className="text-lg text-gray-700">お題は</h2>
            <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
              {odai}
            </h1>
          </>
        )}
      </div>
    </div>
  );
}
