import React from "react";
import { Link, useNavigate, useLocation } from "react-router";

const NotFound = ({
  code = "404",
  title = "Page not found",
  description = "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.",
  homeTo = "/",
  showAttemptedPath = true,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    // Check if there is internal router history to go back to
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(homeTo, { replace: true });
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-950">
      <div className="text-center max-w-md">
        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
          {code}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          {title}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {showAttemptedPath && (
          <p className="mt-3 text-xs font-mono text-gray-500 bg-gray-100 dark:bg-gray-900 dark:text-gray-400 py-1.5 px-3 rounded-md inline-block">
            {location.pathname}
          </p>
        )}

        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            to={homeTo}
            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            Go back home
          </Link>
          <button
            type="button"
            onClick={handleGoBack}
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            &larr; Previous page
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
