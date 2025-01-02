type Props = {
	requestedUrl: string;
};

export default function NotFound({ requestedUrl }: Props) {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="font-bold text-2xl text-center">{requestedUrl}</p>
			<p className="text-center">is not found.</p>
		</div>
	);
}
