import Image from "next/image";
import drag from "../assets/drag.png";
import user from "../assets/user.png";
import notebook from "../assets/notebook.png";
import { useMyContext } from "../context/Context";
const SortByField = () => {
  const { state, handleState } = useMyContext();
  return (
    <>
      {/* <div>
        <div className="font-semibold mb-2">Sort By</div>
      </div> */}

      <div className="flex justify-start items-center gap-5 w-full">
        <div className="flex justify-start items-center gap-2 w-[30%]">
          <div>
            <Image src={drag} alt="" width={15} height={15} />
          </div>
          <div>
            <Image src={user} alt="" width={15} height={15} />
          </div>
          <div>Client Name</div>
        </div>
        <div className="w-[65%] flex justify-between cursor-pointer ">
          <div className="flex justify-start items-center gap-5">
            <div
              className={`${
                state.sortBy.clientName === "asc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, clientName: "asc" },
                })
              }
            >
              ↑ A-Z
            </div>
            <div
              className={`${
                state.sortBy.clientName === "desc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, clientName: "desc" },
                })
              }
            >
              ↓ Z-A
            </div>
          </div>

          {state.sortBy.clientName !== "" && (
            <div
              className="cursor-pointer"
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, clientName: "" },
                })
              }
            >
              X
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-start items-center gap-5 w-full">
        <div className="flex justify-start items-center gap-2 w-[30%]">
          <div>
            <Image src={drag} alt="" width={15} height={15} />
          </div>
          <div>
            <Image src={notebook} alt="" width={15} height={15} />
          </div>
          <div>Created At</div>
        </div>
        <div className="w-[65%] flex justify-between cursor-pointer">
          <div className="flex justify-start items-center gap-5 ">
            <div
              className={`${
                state.sortBy.createdAt === "asc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, createdAt: "asc" },
                })
              }
            >
              ↑ Newest to oldest
            </div>
            <div
              className={`${
                state.sortBy.createdAt === "desc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, createdAt: "desc" },
                })
              }
            >
              ↓ Oldest to Newest
            </div>
          </div>

          {state.sortBy.createdAt !== "" && (
            <div
              className="cursor-pointer"
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, createdAt: "" },
                })
              }
            >
              X
            </div>
          )}
        </div>
      </div>
      <hr className="border-gray-200 " />
      <div className="flex justify-start items-center gap-5 w-full ">
        <div className="flex justify-start items-center gap-2 w-[30%]">
          <div>
            <Image src={notebook} alt="" width={15} height={15} />
          </div>
          <div className="text-gray-500">Updated At</div>
        </div>

        <div className="flex justify-between  w-[65%] cursor-pointer">
          <div className="flex justify-start items-center gap-5">
            <div
              className={`${
                state.sortBy.updatedAt === "asc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, updatedAt: "asc" },
                })
              }
            >
              ↑ Newest to oldest
            </div>
            <div
              className={`${
                state.sortBy.updatedAt === "desc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, updatedAt: "desc" },
                })
              }
            >
              ↓ Oldest to Newest
            </div>
          </div>
          <div>
            {state.sortBy.updatedAt !== "" && (
              <div
                className="cursor-pointer"
                onClick={() =>
                  handleState({
                    sortBy: { ...state.sortBy, updatedAt: "" },
                  })
                }
              >
                X
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-5 w-full">
        <div className="flex justify-start items-center gap-2 w-[30%]">
          <div>
            <Image src={user} alt="" width={15} height={15} />
          </div>
          <div className="text-gray-500">Client ID</div>
        </div>

        <div className="flex justify-between w-[65%] cursor-pointer">
          <div className="flex justify-start items-center gap-5 ">
            <div
              className={`${
                state.sortBy.clientId === "asc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, clientId: "asc" },
                })
              }
            >
              ↑ A-Z
            </div>
            <div
              className={`${
                state.sortBy.clientId === "desc"
                  ? "px-2 py-1 bg-blue-100 "
                  : "px-2 py-1 bg-pink-100 "
              }`}
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, clientId: "desc" },
                })
              }
            >
              ↓ Z-A
            </div>
          </div>

          {state.sortBy.clientId !== "" && (
            <div
              className="cursor-pointer"
              onClick={() =>
                handleState({
                  sortBy: { ...state.sortBy, clientId: "" },
                })
              }
            >
              X
            </div>
          )}
        </div>
      </div>
      <hr className="border-gray-200 " />
    </>
  );
};
export default SortByField;
