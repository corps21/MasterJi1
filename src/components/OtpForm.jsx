import Input from "./Input";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

function OtpForm() {
  const statusOptions = Object.freeze({
    pending: "pending",
    success: "success",
    failed: "failed",
  });

  const [status, setStatus] = useState(statusOptions.pending);
  const [btnText, setBtnText] = useState("Verify Account");

  const submitHandler = (e) => {
    e.preventDefault();
    let result = "";

    //blurs all inputs when form is submitted
    inputGroup?.current.map((input) => {
      input.blur();
    })

    for (const key in numbers) {
      result += numbers[key];
    }

    if (result === "1234") setStatus(statusOptions.success);
    else setStatus(statusOptions.failed);
  };

  const [numbers, setNumbers] = useState({});

  const inputs = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  const inputGroup = useRef([]);

  useEffect(() => {
    if (status === statusOptions.success) setBtnText("Verified");
    else if (status === statusOptions.failed) setBtnText("Verification Failed");
  }, [status, statusOptions]);

  return (
    <div className="w-[47.25rem] h-[32.125rem] bg-white rounded-[18px] mt-[5rem]">
      <div className="text-center space-y-2">
        <h3 className="text-[2.5rem] font-bold mt-[2rem]">
          Mobile Phone Verification
        </h3>
        <p className="text-[1.5rem] w-[80%] mx-auto text-[#BFBFBF]">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>
      </div>
      <form
        className="mt-[2.25rem] flex flex-col items-center"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="h-[6.25rem] flex space-x-4">
          {inputs.map((obj) => {
            return (
              <Input
                key={obj.id}
                type="number"
                value={numbers[obj.id]}
                ref={(el) => (inputGroup.current[obj.id] = el)}
                onChange={(e) => {
                  setStatus(() => statusOptions.pending);

                  setNumbers((prev) => {
                    let inputValue = e.target.value;
                    // in case a value is present in input remove all previous digits and takes latest digit as input
                    if (numbers[obj.id]) {
                      inputValue = e.target.value.at(-1);
                    }
                    return { ...prev, [obj.id]: inputValue };
                  });
                  // when a value is added in input, it transfers the focus to next input element
                  if (e.target.value) inputGroup.current[obj.id + 1]?.focus();
                  // when an value is removed from input, it transfers the focus to previous input element
                  else inputGroup.current[obj.id - 1]?.focus();
                }}
                className={`h-full bg-[#DBE2EF] rounded-[0.75rem] w-[5.625rem] outline-[#112D4E] border-2 text-[3rem] text-center
                    ${
                      status === statusOptions.success
                        ? "border-[#23CF9B]"
                        : status === statusOptions.failed
                        ? "border-[#EB2D5B]"
                        : null
                    }
                  `}
              />
            );
          })}
        </div>

        <Button
          value={btnText}
          className={`text-[1.5rem] text-white bg-[#112D4E] font-normal text-center py-[1rem] rounded-lg w-[26rem] mt-[1.5rem] ${
            status === statusOptions.success
              ? "bg-[#23CF9B]"
              : status === statusOptions.failed
              ? "bg-[#EB2D5B]"
              : null
          }`}
        />
      </form>

      <p className="text-center text-[1.5rem] text-[#BFBFBF] mt-[1.5rem]">
        Didn&apos;t receive code?{" "}
        <span className="text-[#112D4E] cursor-pointer">Resend</span>
      </p>
    </div>
  );
}

export default OtpForm;
