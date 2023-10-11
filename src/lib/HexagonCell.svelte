<script>
    export let content;
    export let state;
    export let x;
    export let y;

</script>

<div class="hexagon">{x}, {y} {content}</div>

<style>
	.hexagon {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;

		background: #111;
		margin: 1px;
		transition: 2s;

		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		height: 110px;
		width: 100px;
	}
    .hexagon:hover {
        background: #555;
    }

</style>