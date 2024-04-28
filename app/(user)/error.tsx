"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="h-screen grid place-content-center text-6xl">
			<h2>Something went wrong!</h2>
			{error && <p className="text-red-500">{error.message}</p>}
			<button
				className="my-4 p-4 rounded-xl bg-red-400 text-white font-medium"
				onClick={reset}
			>
				Try again
			</button>
		</div>
	);
}
