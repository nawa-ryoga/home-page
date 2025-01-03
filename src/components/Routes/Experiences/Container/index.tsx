import { useEffect, useState } from "react";
import FeedList from "../FeedList";
import FeedItem from "../FeedItem";
import FeedYear from "../FeedYear";
import FeedMonth from "../FeedMonth";
import Fallback from "../Fallback";

import type { SocialIcon } from "../../../../lib/cms-client";
import type { GroupedPerYear } from "../../../../pages/api/experiences";

type ApiResponse = {
	rss: GroupedPerYear[];
	socials: SocialIcon[];
};

export default function ExperienceContainer() {
	const [data, setData] = useState<ApiResponse | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/experiences");
				if (!response.ok) {
					throw new Error(`Failed to fetch: ${response.status}`);
				}
				const result: ApiResponse = await response.json();
				setData(result);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return (
		<Fallback>
			<p>Loading...</p>
		</Fallback>
	);
	if (error) return (
		<Fallback>
			<p>Error: {error}</p>
		</Fallback>
	);

	if (!data) return (
		<Fallback>
			<p>No data available</p>
		</Fallback>
	);

	const { rss, socials } = data;

	return (
		<div className="secondIn opacity-0">
			{rss.map((groupedByYear) => (
				<FeedYear year={groupedByYear.year} key={groupedByYear.year}>
					{groupedByYear.months.map((groupedByMonth) => (
						<FeedMonth
							key={`${groupedByYear.year}-${groupedByMonth.month}`}
							month={groupedByMonth.month}
						>
							<FeedList>
								{groupedByMonth.items.map((item) => (
									<FeedItem key={item.title} feed={item} favicon={socials} />
								))}
							</FeedList>
						</FeedMonth>
					))}
				</FeedYear>
			))}
		</div>
	);
}
