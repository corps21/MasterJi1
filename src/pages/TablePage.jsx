import { useState } from "react";
import { Header, Input, Button } from "../components";

export default function TablePage() {
  const [query, setQuery] = useState("");
  const clickHandler = () => {
    setQuery("");
  };

  return (
    <div className="bg-[#E2BBE9] w-full flex items-center flex-col pb-[10rem]">
      <Header className="text-[#444B79]" />
      <div className="bg-white w-[76.5rem] rounded-[1.125rem] px-[3rem] py-[2rem]">
        <div>
          <h3 className="text-[2.5rem] font-bold text-[#313131]">Batches</h3>
          <p className="text-[1.25rem] text-[#4B4747] ">
            Create learner&apos;s batch and share information at the same time.
          </p>
        </div>
        <div className="pt-[2rem] flex space-x-4">
          <Input
            value={query}
            placeholder="Search by Title (alt+k or cmd+k)"
            className="placeholder:text-[1rem] placeholder:text-[#C8C7C7] px-[1rem] py-[.75rem] w-[20.75rem] border-2 border-[#BEBEBE] outline-none rounded-[4px] text-[1.25rem]"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            value="Search"
            className="bg-[#6C6BAF] text-[1.125rem] text-white font-semibold px-[2rem] rounded-[4px]"
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
}
