import { Link } from "react-router"

export default function Err({ error, resetErrorBoundary }) {
    return (
        <section className="bg-white dark:bg-gray-900 flex flex-col justify-center items-center min-h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-5xl tracking-tight font-extrabold lg:text-7xl text-blue-600 dark:text-blue-500">Something went wrong!</h1>
                    <p className="mb-4 text-lg tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{error.message}</p>
                    <button
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        onClick={resetErrorBoundary}
                    >
                        Try again
                    </button>
                    <Link to="/" className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}
