import hashset from '../assets/HashSet.png'



function Card({name,img,text="ham hai bhai",click}){
    return(
        <>
 <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={img}
          alt="Random"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-2 text-sm">
           {text}
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=> window.open(click,"_blank")}>
            Learn More
          </button>
        </div>
      </div>
    </div>

        </>
    )
}

export default Card