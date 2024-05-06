type SearchInputtypes = {
    onSubmit?: () => void;
    placeholder: string;
    className?: string;
};

const SearchInput = (porps: SearchInputtypes) => {
    const { onSubmit, placeholder, className } = porps;
  return (
    <>
      <form className="flex w-full" onSubmit={onSubmit}>
        <input
          className={`w-full border-2 rounded-md shadow-md text-base outline-blue-600 pl-3 border-gray-500 p-2 ${className}`}
          type="text"
          placeholder={placeholder}
        />
        <i className='bx bx-search text-3xl text-gray-500 -ml-10 h-full mt-1'></i>
      </form>
    </>
  );
};

export default SearchInput;
