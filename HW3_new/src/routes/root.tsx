export default function Root() {
  return (
              <nav className='fixed top-0 w-full bg-gray-800 p-4 flex justify-right'>
                <a href={`/main`} className="px-3">Home</a>
                <a href={`/list`} className="px-3">List</a>
                <a href={`/population`} className="px-3">Population</a>
                <a href={`/custom`} className="px-3" >Languages</a>
              </nav>
  );
}