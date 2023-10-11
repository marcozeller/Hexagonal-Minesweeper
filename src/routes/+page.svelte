<script>
	let size_field = 5;
    let field = Array(size_field).fill(Array(size_field).fill({}));
</script>

<div class="field">
{#each field as row, i}
	<div class="row">
    {#each row as cell, j}
		<div class="hexagon"> {i}, {j}</div>
    {/each}
	</div>
{/each}
</div>

<style>
    .field {
        display: flex;
        flex-direction: column;}
    .row {
        display: flex;
        flex-direction: row;
        margin-bottom: -28px;
    }
    .row:nth-child(odd){
        margin-left: 51px;
    }
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
</style>
