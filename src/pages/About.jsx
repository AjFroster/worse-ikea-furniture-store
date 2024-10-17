import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Complicated
            </div>
          </div>
        </div>
      </div>
      <h4 class="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        About the Project
      </h4>
      <p class="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        <strong>WorseThanIkea™</strong> is a lighthearted web app that takes the
        frustrations of self-assembled furniture to a humorous extreme. As a{" "}
        <strong>full-stack developer with 3+ years of experience</strong>, I
        built this project to highlight my technical capabilities, creativity,
        and ability to design engaging user experiences.
      </p>

      <p class="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        This app was developed using:
      </p>
      <ul class="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        <li>
          <strong>React</strong> for building interactive and dynamic user
          interfaces.
        </li>
        <li>
          <strong>Redux</strong> for smooth global state management.
        </li>
        <li>
          <strong>React Query</strong> for efficient data fetching and syncing
          with server-side state.
        </li>
        <li>
          <strong>React Router</strong> to ensure seamless navigation across
          pages.
        </li>
        <li>
          <strong>DaisyUI and Tailwind CSS</strong> for a responsive and quirky
          design, handling all UI components with a consistent and playful
          aesthetic.
        </li>
      </ul>

      <h4 class="mt-6 text-lg leading-8 max-w-2xl mx-auto">Key Features</h4>
      <ul class="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        <li>
          <strong>Product Search</strong>: Quickly find the perfect (or
          perfectly frustrating) furniture item to assemble.
        </li>
        <li>
          <strong>User Authentication</strong>:
          <ul>
            <li>
              <strong>Demo User Login</strong>: Easily explore the app using a
              built-in demo user.
            </li>
            <li>
              <strong>Custom User Creation</strong>: Register new users to
              personalize the experience.
            </li>
          </ul>
        </li>
        <li>
          <strong>Cart Management</strong>: Add and view items in the cart to
          prepare for your assembly adventure.
        </li>
        <li>
          <strong>Dummy Order History</strong>: Browse fake order data to
          imagine what could go wrong next.
        </li>
        <li>
          <strong>Login and Logout</strong>: Smooth authentication flows for
          both demo and registered users.
        </li>
      </ul>

      <p class="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        This project is both a fun concept and a showcase of real-world
        development skills, blending modern web practices with a dash of humor.
        From robust authentication flows to seamless product management,{" "}
        <strong>WorseThanIkea™</strong> is a reminder that even in frustrating
        tasks, there’s always room for laughter and great code.
      </p>

      {/* <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        WorseThanIkea™ is a playful furniture shop web app designed to capture
        the humor of frustrating self-assembly. The project embraces the chaos
        of missing screws, confusing instructions, and excessive parts—taking
        the “IKEA experience” to a whole new level. As a full-stack developer
        with 3+ years of experience, I built this project to showcase both
        technical expertise and creativity. The app leverages modern web
        development tools, including: React for building a dynamic and
        interactive UI. Redux for managing state across components. React Query
        to handle efficient data fetching and server-state management. React
        Router for seamless page navigation. All UI elements were styled using a
        combination of DaisyUI and Tailwind CSS, ensuring a clean yet quirky
        design to complement the project’s humorous concept.
      </p> */}
    </>
  );
};
export default About;
