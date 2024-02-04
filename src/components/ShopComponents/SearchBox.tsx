import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
    return (
        <div className='w-80 relative'>
            <p className='text-2xl absolute top-3 left-3 text-gray-600'>
                <CiSearch />
            </p>
            <input
                type="text"
                placeholder='Search Here...'
                className='w-full py-2 md:py-3 pl-10 border border-gray-200 rounded-lg focus:outline-gray-300'
            />
        </div>
    );
};

export default SearchBox;