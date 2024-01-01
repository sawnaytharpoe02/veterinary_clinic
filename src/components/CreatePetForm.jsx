import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PetSchema } from "../lib/validations/petSchema";
import { useDispatch } from "react-redux";
import { addPet } from "../store/actions";
import { statuses, breeds } from "./constants/option";

const CreatePetForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PetSchema),
  });

  const dispatch = useDispatch();

  const submitData = (data) => {
    dispatch(addPet(data));
    closeModal(false);
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="grid gap-x-4 gap-y-3 mb-6 md:grid-cols-2">
        {/* ID */}
        <div className="text-start">
          <label htmlFor="ID" className="block mb-2 text-sm text-gray-900">
            ID
          </label>
          <input
            type="text"
            id="ID"
            name="id"
            {...register("id")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6"
            placeholder="G-000124"></input>
          <p className="text-red-600 text-xs mt-1">{errors.id?.message}</p>
        </div>

        {/* Status */}
        <div className="text-start">
          <label htmlFor="status" className="block mb-2 text-sm text-gray-900 ">
            Status
          </label>
          <select
            id="status"
            name="status"
            {...register("status")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6 ">
            {statuses.map((status) => (
              <option key={status.key} value={status.value}>
                {status.key}
              </option>
            ))}
          </select>
          <p className="text-red-600 text-xs mt-1">{errors.status?.message}</p>
        </div>

        {/* Pet Name */}
        <div className="text-start">
          <label htmlFor="petName" className="block mb-2 text-sm text-gray-900">
            Pet Name
          </label>
          <input
            type="text"
            id="petName"
            {...register("petName")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6"
            placeholder="Zedio"></input>
          <p className="text-red-600 text-xs mt-1">{errors.petName?.message}</p>
        </div>

        {/* Pawrent */}
        <div className="text-start">
          <label htmlFor="pawrent" className="block mb-2 text-sm text-gray-900">
            Pawrent
          </label>
          <input
            type="text"
            id="pawrent"
            {...register("pawrent")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6"
            placeholder="John"></input>
          <p className="text-red-600 text-xs mt-1">{errors.pawrent?.message}</p>
        </div>

        {/* Gender */}
        <div className="text-start">
          <label htmlFor="gender" className="block mb-2 text-sm text-gray-900">
            Gender
          </label>
          <div className="flex">
            <div className="flex items-center me-4">
              <input
                id="male"
                type="radio"
                value="Male"
                name="gender"
                {...register("gender")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"></input>
              <label
                htmlFor="male"
                className="ms-2 text-sm font-medium text-gray-900">
                Male
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="female"
                type="radio"
                value="Female"
                name="gender"
                {...register("gender")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"></input>
              <label
                htmlFor="female"
                className="ms-2 text-sm font-medium text-gray-900">
                Female
              </label>
            </div>
          </div>
          <p className="text-red-600 text-xs mt-1">{errors.gender?.message}</p>
        </div>

        {/* Breed */}
        <div className="text-start">
          <label htmlFor="breed" className="block mb-2 text-sm text-gray-900">
            Breed
          </label>
          <select
            id="breed"
            name="breed"
            {...register("breed")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6 ">
            {breeds.map((breed) => (
              <option key={breed.key} value={breed.value}>
                {breed.key}
              </option>
            ))}
          </select>
          <p className="text-red-600 text-xs mt-1">{errors.breed?.message}</p>
        </div>

        {/* Date of Birth */}
        <div className="text-start">
          <label htmlFor="dob" className="block mb-2 text-sm text-gray-900">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            {...register("dob")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6"
            placeholder="Select date"></input>
          <p className="text-red-600 text-xs mt-1">{errors.dob?.message}</p>
        </div>

        {/* Phone */}
        <div className="text-start">
          <label htmlFor="phone" className="block mb-2 text-sm text-gray-900">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            {...register("phone")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6 "
            placeholder="09 123 456 789"></input>
          <p className="text-red-600 text-xs mt-1">{errors.phone?.message}</p>
        </div>

        {/* Postal code */}
        <div className="text-start">
          <label
            htmlFor="postalCode"
            className="block mb-2 text-sm text-gray-900">
            Postal Code
          </label>
          <input
            type="number"
            id="postalCode"
            name="postalCode"
            {...register("postalCode")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6"
            placeholder="11011"></input>
          <p className="text-red-600 text-xs mt-1">
            {errors.postalCode?.message}
          </p>
        </div>

        {/* Address */}
        <div className="text-start">
          <label
            htmlFor="address"
            className="block mb-2 text-sm text-gray-900 ">
            Address
          </label>
          <input
            type="text"
            id="adddress"
            name="address"
            {...register("address")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6"
            placeholder="145. 6th Street, Insein, Yangon"></input>
          <p className="text-red-600 text-xs mt-1">{errors.address?.message}</p>
        </div>

        <div className="text-end">
          <button
            type="submit"
            className="w-36 py-2 mb-2 text-sm font-medium text-white focus:outline-none bg-primary rounded-md border first:focus:z-10">
            Save
          </button>
        </div>

        <div className="text-start">
          <button
            onClick={() => closeModal(false)}
            type="button"
            className="w-36 py-2 mb-2 text-sm font-medium text-neutral-800 focus:outline-none bg-white rounded-lg border border-neutral-400 focus:z-10">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePetForm;
