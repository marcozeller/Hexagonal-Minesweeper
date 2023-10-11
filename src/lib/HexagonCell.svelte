<script lang="ts">
	export let content: string | number;
	export let state: string;
	export let x: number;
	export let y: number;

    const clicked_on = () => {
        console.log(`clicked on ${x}, ${y}`);
        state = "open";
    }
</script>

{#if state == "hidden"}
    <div class="hexagon hidden" on:click={clicked_on}></div>
{:else if state == "open" && content == "mine"}
    <div class="hexagon red">{content}</div>
{:else if state == "open"}
    <div class="hexagon open">{content}</div>
{/if}
    

<style>
	.hexagon {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;

		margin: 1px;
		transition: 2s;

		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		height: 110px;
		width: 100px;
	}
    .hidden {
        background: #111;
    }
    .red {
        background: #500;
    }
    .open {
		background: #555;
    }
	.hexagon.hidden:hover {
		background: #333;
	}
</style>
