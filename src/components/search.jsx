function Search() {
  

  return (
    <>
        <div className="p-4 sm:ml-64">
     
    <div className="grid grid-cols-1 gap-4 mb-4">
       
      <div className="flex items-center justify-center rounded bg-gray-10 h-24">
         <form className="flex items-center">
   
  <div className="relative w-full">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     
    </div>
    <input
      type="text"
      id="simple-search"
      className="bg-gray-30 border border-green-800 text-gray-900 text-sm  block w-full pl-10 p-2.5 "
      placeholder="Search..."
      required=""
    />
  </div>
  <button
    type="submit"
    className="p-2.5 ml-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-black-700 hover:bg-green-500 focus:ring-green-300"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
    
  </button>
</form>
  </div>
       
     </div>
  
</div>
    </>
  )
}

export default Search;