import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import Modal from "../../components/Modal";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  getPets,
  selectPet,
  searchPet,
  filterStatus,
  filterBreed,
  setLimitRows,
} from "../../store/actions";
import { statuses, breeds } from "../../components/constants/option";

const PetsList = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [openActions, setOpenActions] = useState(null);
  const [limit, setLimit] = useState(3);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedBreed, setSelectedBreed] = useState("all");
  const pets = useSelector((state) => {
    return state.pets.pets;
  });

  const filteredPets = useMemo(() => {
    return pets
      .filter(
        (pet) => selectedStatus === "all" || pet.status === selectedStatus
      )
      .filter((pet) => selectedBreed === "all" || pet.breed === selectedBreed)
      .filter(
        (pet) =>
          searchTerm === "" ||
          Object.values(pet).some((value) =>
            value.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
          )
      );
  }, [pets, selectedStatus, selectedBreed, searchTerm]);

  const toggleActions = (index) => {
    if (openActions === index) {
      setOpenActions(null);
    } else {
      setOpenActions(index);
    }
  };

  const handleDelete = (id) => {
    setIdToDelete(id);
    setConfirmDialog(true);
    setOpenActions(null);
  };

  const handleEdit = (id) => {
    setModal(true);
    setModalType("edit");
    dispatch(selectPet(id));
    setOpenActions(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchPet(e.target.value));
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    dispatch(filterStatus(e.target.value));
  };

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
    dispatch(filterBreed(e.target.value));
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    dispatch(setLimitRows(e.target.value));
  }

  useEffect(() => {
    dispatch(getPets());
  }, []);

  return (
    <div className="bg-white m-5 rounded-md p-6 mb-60">
      <p className="text-xl  font-medium text-primary pb-6">Patient Lists</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center border px-4 border-gray-300 rounded-xl">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="search table"
            className="text-xs ps-0 pe-4 py-2.5 outline-none border-none focus:ring-0"
          />
          <img src="/search.png" alt="search icon" />
        </div>
        <button
          onClick={() => {
            setModal(true);
            setModalType("add");
          }}
          className="bg-primary text-xs flex gap-2 justify-center items-center px-8 py-2.5 text-white rounded-xl">
          <img src="/add.png" alt="add icon" />
          Add new patient
        </button>
      </div>

      <div className="mb-10 mt-4 flex justify-between">
        <div className="flex gap-4">
          <select
            id="status"
            value={selectedStatus}
            onChange={handleStatusChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:border-gray-300 block w-[140px] py-2.5 px-4">
            <option value="all">All Status</option>
            {statuses.map((status) => (
              <option key={status.key} value={status.value}>
                {status.key}
              </option>
            ))}
          </select>

          <select
            id="breed"
            value={selectedBreed}
            onChange={handleBreedChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:border-gray-300 block w-[140px] py-2.5 px-4">
            <option value="all">All Breed</option>
            {breeds.map((breed) => (
              <option key={breed.key} value={breed.value}>
                {breed.key}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-xs text-gray-800">Rows per pages: </p>
          <select
            id="pagination"
            value={limit}
            onChange={handleLimitChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-xl focus:ring-0 focus:border-gray-300 block w-[70px] py-2.5 px-4">
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <div className="relative overflow-x-auto min-h-[600px] rounded-xl border bg-white">
          <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-sm text-primary border-b bg-white">
              <tr>
                <th scope="col" className="px-3 py-6 text-center">
                  No
                </th>
                <th scope="col" className="px-3 py-3">
                  ID
                </th>
                <th scope="row" className="px-3 py-3 whitespace-nowrap">
                  Pet Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th scope="col" className="px-3 py-3">
                  Pawrent
                </th>
                <th scope="col" className="px-3 py-3">
                  Breed
                </th>
                <th scope="col" className="px-3 py-3">
                  Gender
                </th>
                <th scope="row" className="px-3 py-3 whitespace-nowrap">
                  Date of Birth
                </th>
                <th scope="row" className="px-3 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="row" className="px-3 py-3 whitespace-nowrap">
                  Postal Code
                </th>
                <th scope="col" className="px-3 py-3">
                  Address
                </th>
                <th scope="col" className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filteredPets?.length !== 0 ? (
                filteredPets?.map((row, index) => (
                  <tr
                    key={row.id + index}
                    className="bg-white border-b text-xs text-neutral-900">
                    <td className="px-3 py-4 text-center">{index + 1}</td>
                    <td scope="row" className="px-3 py-4 whitespace-nowrap">
                      {row.id}
                    </td>
                    <td scope="row" className="px-3 py-4 whitespace-nowrap">
                      {row.petName ? row.petName : "N/A"}
                    </td>
                    <td className="px-3 py-4">
                      {row.status === "allergy" ? (
                        <img src="/allergy.png" />
                      ) : (
                        <img src="/picky eater.png" />
                      )}
                    </td>
                    <td className="px-3 py-4">
                      {row.pawrent ? row.pawrent : "N/A"}
                    </td>
                    <td scope="row" className="px-3 py-4 whitespace-nowrap">
                      {row.breed ? row.breed : "N/A"}
                    </td>
                    <td className="px-3 py-4">
                      {row.gender ? row.gender : "N/A"}
                    </td>
                    <td scope="row" className="px-3 py-4 whitespace-nowrap">
                      {row.dob}
                    </td>
                    <td className="px-3 py-4">
                      {row.phone ? row.phone : "N/A"}
                    </td>
                    <td className="px-3 py-4">
                      {row.postalCode ? row.postalCode : "N/A"}
                    </td>
                    <td scope="row" className="px-3 py-4 whitespace-nowrap">
                      {row.address ? row.address : "N/A"}
                    </td>
                    <td className="px-3 py-4">
                      <button
                        className="relative"
                        onClick={() => toggleActions(index)}>
                        <img src="/more.png" alt="more icon" width={18} />

                        {openActions === index && (
                          <div className="absolute z-70 top-5 right-2 divide-y bg-white divide-gray-100 rounded shadow border w-36">
                            <div>
                              <a
                                onClick={() => handleEdit(row.id)}
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <img src="/edit.png" alt="edit" />
                                <p className="text-xs">Edit</p>
                              </a>
                            </div>
                            <div>
                              <a
                                onClick={() => handleDelete(row.id)}
                                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <img src="/delete.png" alt="delete" />
                                <p className="text-xs">Delete</p>
                              </a>
                            </div>
                          </div>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="12"
                    className="w-full justify-center items-center py-24">
                    <div className="flex flex-col gap-2 items-center">
                      <img
                        src="/no-database.svg"
                        alt="no data"
                        width={55}
                        height={10}
                      />
                      <p className="text-neutral-800 mt-4 font-medium text-md">
                        Empty Data
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modal && (
        <Modal
          closeModal={setModal}
          title={modalType === "add" ? "Add New Patient" : "Update Patient"}
          subtitle={
            modalType === "add"
              ? "Enter new patient information below"
              : "Enter update patient information below"
          }
          type={modalType}
        />
      )}

      {confirmDialog && (
        <ConfirmDialog
          closeConfirmDialog={setConfirmDialog}
          idToDelete={idToDelete}
        />
      )}
    </div>
  );
};

export default PetsList;
