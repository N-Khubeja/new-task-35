import { useState } from "react"

interface IuseCountProps {
    init?:number
}


const useCount = ({init = 0}: IuseCountProps = {}) => {
    const [count,setcount] = useState(init)

    const increment = () => setcount((prev) => prev++)
    const decrement = () => setcount((prev) => prev--)

  return {count,increment,decrement}
}

export default useCount