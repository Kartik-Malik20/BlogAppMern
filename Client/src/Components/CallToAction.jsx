import React from "react";
import { Button } from 'flowbite-react'

export default function CallToAction() {
  return (
    <div className="flex flex-col-reverse sm:flex-row p-3 border-double border-teal-500 border-8 rounded-tl-xl rounded-bl-none rounded-tr-none rounded-br-xl justify-center items-center text-center">
        <div className="flex-1 justify-center flex flex-col">
            <h2>Want to find anwers to your queries?</h2>
            <p className="text-gray-500 my-2">
                Check out this AI engine!
            </p>
            <Button gradientDuoTone='purpleToPink' className="rounded-tl-xl rounded-bl-none rounded-br-xl">
                <a href="https://claude.ai/chats" target="_blank" rel="noopener noreferrer">Click Here</a>
            </Button>
        </div>
      <div className="p-7 flex-1">
        <img className="rounded-3xl"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
}
