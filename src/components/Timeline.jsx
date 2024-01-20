import Reveal from "./Reveal";

const Timeline = () => {
  return (
    <body className="antialiased font-sans bg-primary py-[90px]">
      <div>
        <Reveal>
          <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
            Timeline
          </h1>
        </Reveal>
      </div>
      <div className=" mx-auto sm:px-8">
        <div className="lg:py-10">
          <div className="my-5 flex sm:flex-row flex-col align-middle items-center">
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <select className="h-full rounded-l border block appearance-none w-full bg-primary border-secondary text-secondary py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-primary focus:border-secondary">
                  <option>DAY 1</option>
                  <option>DAY 2</option>
                  <option>DAY 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-primary border-secondary text-secondary py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-primary focus:border-secondary">
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="block relative">
              <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-secondary"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
                </svg>
              </span>
              <input
                placeholder="Search"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-secondary border-b block pl-8 pr-6 py-2 w-full bg-primary text-sm placeholder-secondary text-secondary focus:bg-primary focus:placeholder-secondary focus:text-secondary focus:outline-none"
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal ">
                  <thead className=" border-2 rounded-xl border-secondary ">
                    <tr>
                      <th className="px-5 py-3 border bg-primary border-secondary text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-5 py-3 border border-secondary bg-primary text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-5 py-3 border border-secondary bg-primary text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Scheduled at
                      </th>
                      <th className="px-5 py-3 border border-secondary bg-primary text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Sample data - Replace with your actual data */}
                    <tr>
                      <td className="px-5 py-5 border border-secondary bg-primary text-sm">
                        {/* ... User data */}
                      </td>
                      <td className="px-5 py-5 border border-secondary bg-primary text-sm">
                        {/* ... Role data */}
                      </td>
                      <td className="px-5 py-5 border border-secondary bg-primary text-sm">
                        {/* ... Created at data */}
                      </td>
                      <td className="px-5 py-5 border border-secondary bg-primary text-sm">
                        {/* ... Status data */}
                      </td>
                    </tr>
                    {/* Repeat the above row structure for each user data */}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-primary border border-secondary flex flex-col xs:flex-row items-center xs:justify-between">
                  <span className="text-xs xs:text-sm text-white">
                    To Be Announced..
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-primary border border-secondary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    <button className="text-sm bg-primary border border-secondary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Timeline;
