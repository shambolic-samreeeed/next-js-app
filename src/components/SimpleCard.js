import Button from "./Button"

const SimpleCard = () => {
  return (
    <div className="border-1 border-gray-400 rounded-2xl w-1/4 flex flex-col gap-5 p-4 m-auto">
        <div>
            <h1 className="text-3xl font-bold">This is the Heading</h1>
        </div>
        <div>
            <p className="text-lg">Home page card description</p>
        </div>
        <div className="flex gap-2">
            <Button text='Save' className='bg-green-400'/>
            <Button text='Edit' className='bg-blue-400'/>
            <Button text='Delete'className='bg-red-400'/>
        </div>
    </div>
  )
}

export default SimpleCard
