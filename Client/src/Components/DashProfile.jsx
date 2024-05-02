import { Alert, Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { app } from "../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../redux/user/userSlice";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const [imageFileUploading, setImageFileUploading] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploaded, setImageFileUploaded] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    // service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read;
    //       allow write : if
    //       request.resource.size < 2 * 1024 * 1024 &&
    //       request.resource.contentType.matches('image/.*')
    //     }
    //   }
    // }

    setImageFileUploaded(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploading(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image(file must be less than 2MB)"
        );
        setImageFileUploading(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploaded(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUploaded(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null)
    setUpdateUserSuccess(null)
    if (Object.keys(formData).length === 0) {
      setUpdateUserError('No changes made')
      return;
    }
    if (imageFileUploaded) {
      setUpdateUserError('Please wait for image to be uploaded')
      return;
    }
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message)
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("User's profile updated successfully")
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message)
    }
  };
  return (
    <div className="max-w-lg mx-auto p-4 w-full">
      <h1 className="text-center my-7 font-semibold text-3xl">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative h-32 w-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {imageFileUploading && (
            <CircularProgressbar
              value={imageFileUploading || 0}
              text={`${imageFileUploading}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62,152,199, ${imageFileUploading / 100})`,
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full border-8 border-gray-300 object-cover ${
              imageFileUploading && imageFileUploading < 100 && "opacity-60"
            }`}
          />
        </div>

        <div>
          <Label value="Username" />
          <TextInput
            type="text"
            id="username"
            placeholder=""
            defaultValue={currentUser.username}
            onChange={handleChange}
          />
        </div>
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        <div>
          <Label value="Email" />
          <TextInput
            type="email"
            id="email"
            placeholder=""
            defaultValue={currentUser.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Password" />
          <TextInput
            type="password"
            id="password"
            placeholder="Change Password?"
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          gradientDuoTone="purpleToBlue"
          className="uppercase"
        >
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account?</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
      {updateUserSuccess && (
        <Alert color='success' className="mt-5">{updateUserSuccess}</Alert>
      )}
      {updateUserError && (
        <Alert color='failure' className="mt-5">{updateUserError}</Alert>
      )}
    </div>
  );
}
