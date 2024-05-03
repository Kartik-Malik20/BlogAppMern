import React from "react";
import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col-reverse sm:flex-row p-3 border-double border-teal-500 border-8 rounded-tl-xl rounded-bl-none rounded-tr-none rounded-br-xl justify-evenly items-center text-center">
      <div className="flex-1 justify-center flex flex-col p-8">
        <h2>Want to find anwers to your queries?</h2>
        <p className="text-gray-500 my-2">Check out this AI engine!</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none rounded-br-xl"
        >
          <a
            href="https://claude.ai/chats"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </Button>
      </div>
      <div className="p-8 flex-1 flex justify-center">
        <img
          className="rounded-3xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmFZKdrX4an1EpGpccXsGbvPF30V3pxWJcg&s"
        />
      </div>
    </div>
  );
}
