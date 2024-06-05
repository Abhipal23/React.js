

function  Button({color,bgColor="red",onClick}){

    return(
        <>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-1"
                    style={{backgroundColor: bgColor}}
                    onClick={onClick}

            >
                {color}
            </button>
        </>

    )
}
export default Button
