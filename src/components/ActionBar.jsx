import { BsDownload, BsScissors } from "react-icons/bs";

export const ActionBar = () =>{
    return <div>
        <button>
            <BsDownload />
            Download
        </button>
        <button>
            <BsScissors />
            Clip
        </button>
        
    </div>
}