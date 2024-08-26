import { useState, useCallback, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export const App = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [numberToTrue, setNumberToTrue] = useState(false);
  const [specialCharsToTrue, setSpecialCharsToTrue] = useState(false);
  const [password, setPassword] = useState("");
  const [recursiveCall, setRecursiveCall] = useState(false);

  const successToast = () => toast.success("Copied to clipboard");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberToTrue) string += "0123456789";
    if (specialCharsToTrue) string += "!@#$%^&*()_+-=[]{}|<>/?";

    for (let i = 1; i <= passwordLength; i++) {
      let char = [Math.floor(Math.random() * string.length + 1)];
      password += string.charAt(char);
    }

    setPassword(password);
  }, [length, numberToTrue, specialCharsToTrue, setPassword, recursiveCall]);

  useEffect(() => {
    passwordGenerator();
  }, [
    passwordGenerator,
    passwordLength,
    numberToTrue,
    specialCharsToTrue,
    recursiveCall,
  ]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    successToast();
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(
      0,
      passwordRef.current?.value.length
    );
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [passwordRef]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-[90%] max-w-[600px] p-4 md:min-w-[400px]">
        <div className="flex flex-row gap-4">
          <input
            readOnly
            type="text"
            placeholder="some password"
            className="block w-full cursor-not-allowed rounded-lg border-2 border-gray-200 px-5 py-2.5 font-mono dark:border-[#a6adbb] dark:bg-inherit dark:text-gray-300 dark:placeholder-neutral-500 dark:focus:border-blue-300"
            value={password}
            ref={passwordRef}
          />
          <button
            className="btn btn-outline border-2 font-medium hover:bg-[#a6adbb] hover:text-black"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="divider"></div>
        <div className="mb-4 flex flex-row gap-4">
          <input
            type="range"
            min={8}
            max={70}
            className="range"
            value={passwordLength}
            name="range"
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <label
            htmlFor="range"
            className="text-nowrap font-medium text-neutral-500"
          >
            Length {passwordLength}
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text font-medium text-neutral-200">
              Include Numbers
            </span>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox-1"
              defaultChecked={numberToTrue}
              onChange={() => {
                setNumberToTrue((previousValue) => !previousValue);
              }}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-medium text-neutral-200">
              Include Special Characters
            </span>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox-2"
              defaultChecked={specialCharsToTrue}
              onChange={() => {
                setSpecialCharsToTrue((previousValue) => !previousValue);
              }}
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-outline mt-4 w-full border-2 font-medium hover:bg-[#a6adbb] hover:text-black"
            defaultChecked={recursiveCall}
            onClick={() => {
              setRecursiveCall((previousValue) => !previousValue);
            }}
          >
            Regenerate
          </button>
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: "#000",
            color: "#a6adbb",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
};
