const SimpleCard = () => {
  return (
    <div className="border-1 border-gray-400 rounded-2xl w-1/4 flex flex-col gap-5 p-4 m-auto">
        <div>
            <h1 className="text-3xl font-bold">This is the Heading</h1>
        </div>
        <div>
            <p className="text-lg">Home page card description</p>
        </div>
        <div>
            <button className="bg-blue-500 px-4 py-2 text-white rounded-2xl hover:bg-blue-200 hover:text-black">Button</button>
        </div>
    </div>
  )
}

export default SimpleCard
