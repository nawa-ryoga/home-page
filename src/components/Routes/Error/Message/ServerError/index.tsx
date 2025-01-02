type Props = {
	requestedUrl: string;
};

export default function ServerError({ requestedUrl }: Props) {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-center">An server error on</p>
			<p className="font-bold text-2xl text-center">{requestedUrl}</p>
		</div>
	);
}
