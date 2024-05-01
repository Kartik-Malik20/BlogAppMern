import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-4 w-full">
      <h1 className="text-center my-7 font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="h-32 w-32 self-center cursor-pointer shadow-xl overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full border-8 border-gray-300 object-cover"
          />
        </div>
        <div>
          <Label value="Username" />
          <TextInput
            type="text"
            id="username"
            placeholder=""
            defaultValue={currentUser.username}
          />
        </div>
        <div>
          <Label value="Email" />
          <TextInput
            type="email"
            id="email"
            placeholder=""
            defaultValue={currentUser.email}
          />
        </div>
        <div>
          <Label value="Password" />
          <TextInput
            type="password"
            id="password"
            placeholder="Change Password?"
            required
          />
        </div>
        <Button type="submit" gradientDuoTone='purpleToBlue' className="uppercase">Update</Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account?</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
