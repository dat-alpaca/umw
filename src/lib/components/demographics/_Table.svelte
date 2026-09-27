<script lang="ts">
	import { onMount } from "svelte"
    import { base } from "$app/paths"
    import Note from '$lib/components/Note.svelte';

    type Demographics = Record<string, number>

    interface DemographicsEntry {
        year: number,
        scholarship: string,
        demographics: Demographics 
    }

    const filepath = `${base}/demographics.json`
    let { year = 2026, scholarship = "ug-ns" }: { year?: number, scholarship?: string } = $props();
    let loading = $state(true);
    let error = $state<string | null>(null);

    // First load:
    let data = $state<DemographicsEntry[]>([]);
    onMount(async () => {
        try {
            const response = await fetch(filepath);
            if (!response.ok)
                throw new Error(`Failed to load ${filepath}`)
            data = await response.json()
        } catch(err: any) {
            error = err.message;
        } finally {
            loading = false;
        }
    })

    // Data processing:
    let candidateTotal = $derived(() => {
        const result: Record<string, number> = {}
        for (const entry of data) {
            const totalForScholarship = Object.values(entry.demographics).reduce((lhs, rhs) => lhs + rhs, 0)
            result[entry.scholarship] = (result[entry.scholarship] || 0) + totalForScholarship;
        }

        return result;
    })

    let candidateTotalPerCountry = $derived((country: string) => {
        let count = 0; 
        for (const entry of data) {
            if (entry.scholarship !== scholarship)
                continue
            count += entry.demographics[country];
        }

        return count;
    })

    // Table:
    let currentEntry = $derived(() => {
        return data.find(entry => entry.year === year && entry.scholarship === scholarship)
    })

    let currentTotalCandidates = $derived(() => {
        let entry = currentEntry()
        if (!entry)
            return 0;

        return Object.values(entry.demographics).reduce((lhs, rhs) => lhs + rhs, 0)
    })

    let tableData = $derived(() => {
        const entry = currentEntry();
        if (!entry)
            return [];
        
        const currentYearTotalCandidates = currentTotalCandidates()
        const overallTotal = candidateTotal()[scholarship] || 1

        const sortedCountries = Object.entries(entry.demographics).sort(([,a], [,b]) => b - a)

        return sortedCountries.map(([country, count]) => {
            const countryTotal = candidateTotalPerCountry(country)

            const percentageLocal = currentYearTotalCandidates > 0 ? (count / currentYearTotalCandidates) * 100 : 0
            const percentageTotal = overallTotal > 0 ? (countryTotal / overallTotal) * 100 : 0

            return {
                country: country.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                candidatesLocal: count,
                candidatesTotal: candidateTotalPerCountry(country),
                percentageLocal: percentageLocal.toFixed(2),
                percentageTotal: percentageTotal.toFixed(2)
            }
        })
    })
</script>

<div class="table-container">
    {#if loading}
        <p>Loading data...</p>
    {:else if error}
        <p class="table-error">Error: {error}</p>

    {:else}
    <Note>
    Amount of candidates ({year}): {currentTotalCandidates()} [Total: {candidateTotal()[scholarship]}]
    <br>
    The total percentage is calculated using all the UG/NS data available.
    </Note>

    <table>
        <thead>
            <tr>
                <th>Country</th>
                <th>Candidates ({year})</th>
                <th>Candidates (Total)</th>
                <th>Percentage ({year})</th>
                <th>Percentage (Total)</th>
            </tr>
        </thead>

        <tbody>
            {#each tableData() as row}
            <tr>
                <td>{row.country}</td>
                <td>{row.candidatesLocal}</td>
                <td>{row.candidatesTotal}</td>
                <td>{row.percentageLocal}</td>
                <td>{row.percentageTotal}</td>
            </tr>
            {/each}
        </tbody>
    </table>
    {/if}
</div>