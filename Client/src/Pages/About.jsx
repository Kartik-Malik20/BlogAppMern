import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center my-8">
        <div>
          <h1 className="text-3xl font-semibold my-7">
            About{" "}
            <span className="pl-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white">
              PostA
            </span>
            rena
          </h1>
          <div className="text-md text-gray-500 dark:text-white flex flex-col gap-6">
            <div>
              <p>
                Welcome to PostArena, where ideas meet their audience and
                conversations spark innovation. At PostArena, we believe in the
                power of words to inform, inspire, and ignite change. Our
                platform is dedicated to bringing together diverse perspectives
                and insightful content on a wide range of topics, from the
                latest trends and breaking news to in-depth analysis and
                thought-provoking discussions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-7">Our Mission</h2>
              <p>
                Our mission is to create a dynamic space where readers and
                writers can connect, share, and grow. We strive to provide a
                welcoming environment for exploring new ideas, engaging in
                meaningful dialogue, and discovering fresh viewpoints. By
                fostering a community of thinkers, creators, and learners, we
                aim to cultivate a culture of curiosity and continuous learning.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-7">What We Offer</h2>
              <ol className=" space-y-1 list-disc list-inside">
                <li>
                  <span className="font-bold">Insightful Articles:</span> Stay
                  updated with well-researched articles covering various
                  subjects, including technology, lifestyle, health, business,
                  and more.
                </li>
                <li>
                  <span className="font-bold">Engaging Discussions:</span> Join
                  conversations on trending topics and share your opinions with
                  a community that values thoughtful discourse.
                </li>
                <li>
                  <span className="font-bold">Diverse Perspectives:</span>{" "}
                  Explore content from a wide array of voices, ensuring a rich
                  and multifaceted view of the world around us.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-7">Our Values</h2>
              <ol className=" space-y-1 list-disc list-inside">
                <li>
                  <span className="font-bold">Inclusivity:</span> We embrace
                  diversity and aim to represent a wide range of voices and
                  perspectives.
                </li>
                <li>
                  <span className="font-bold">Respect:</span> We foster a
                  respectful and supportive environment for all community
                  members.
                </li>
                <li>
                  <span className="font-bold">Integrity:</span> We are committed
                  to providing accurate, reliable, and trustworthy content.
                </li>
                <li>
                  <span className="font-bold">Curiosity:</span> We encourage a
                  love of learning and a desire to explore new ideas.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-7">Join Us</h2>
              <p>
                Whether you're here to read, write, or engage in stimulating
                discussions, PostArena is the place for you. Dive into our
                content, share your thoughts, and become a part of our growing
                community. Together, let's explore the endless possibilities
                that come from connecting through words.
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold my-7">
            Thank you for being a part of{" "}
            <span className="pl-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white">
              PostA
            </span>
            rena. Let's create, share, and grow together.
          </h2>
        </div>
      </div>
    </div>
  );
}
