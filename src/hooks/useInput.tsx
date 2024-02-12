import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from "react";

const useInput = (init:string): [string, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<string>>?] => {
  const [value, setValue] = useState(init);
  const handler = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  },[]);
  return [value, handler, setValue];
}

export default useInput;