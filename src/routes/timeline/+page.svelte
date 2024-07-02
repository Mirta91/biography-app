<script>
	import Timeline from '$lib/modules/timeline/Timeline.svelte';
	import TimelineItem from '$lib/modules/timeline/TimelineItem.svelte';
	import TimelineSeparator from '$lib/modules/timeline/TimelineSeparator.svelte';
	import TimelineDot from '$lib/modules/timeline/TimelineDot.svelte';
	import TimelineConnector from '$lib/modules/timeline/TimelineConnector.svelte';
	import TimelineContent from '$lib/modules/timeline/TimelineContent.svelte';
	import TimelineOppositeContent from '$lib/modules/timeline/TimelineOppositeContent.svelte';

	const colors = {
		first: '#7CD5E2',
		second: '#FEC048',
		third: '#DD84C1',
		forth: '#FB6958'
	};

	const items = [
		{
			year: '2013',
			title: 'Bachelor of Informatics',
			description: '@ Polytechnic of Zagreb',
			color: colors.first
		},
		{
			year: '2016',
			title: ' Master of Informatics',
			description: '@ Faculty of Organization and Informatics, University of Zagreb',
			color: colors.second
		},
		{
			year: '2016',
			title: 'Textum',
			description: 'Developer @ Textum',
			color: colors.third
		},
		{
			year: '2017',
			title: 'Moca Platform',
			description: 'Internship in a start-up in Barcelona',
			color: colors.forth
		},
		{
			year: '2017 - 2024',
			title: 'Infosit',
			description: 'Developer @ Infosit',
			color: colors.first
		}
	];
</script>

<Timeline
	position="alternate"
	style={`
  border-radius: 3%;
  padding: 1rem;
  `}
>
	{#each items as item}
		<TimelineItem>
			<TimelineOppositeContent slot="opposite-content">
				<p class="oposite-content-title">{item.year}</p>
			</TimelineOppositeContent>

			<TimelineSeparator>
				<TimelineDot style={`background-color: ${item.color}; border-color: #fff;`} />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<h3 class="content-title">{item.title}</h3>
				<p class="content-description">{item.description}</p>
			</TimelineContent>
		</TimelineItem>
	{/each}
</Timeline>

<style>
	.oposite-content-title {
		margin: 0;
		padding: 0;
	}
	.content-title {
		margin: 0;
		padding: 0;
	}

	.content-description {
		margin: 0;
		padding: 0;
		margin-top: 1rem;
		color: #d1d3dd;
		font-weight: lighter;
		padding: 0.5rem 0;
	}
</style>