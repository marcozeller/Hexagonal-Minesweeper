<script>
	let size_field = 5;
    let field = Array(size_field).fill(Array(size_field).fill({}));
</script>

<div class="field">
{#each field as row, i}
	<div class="row">
    {#each row as cell, j}
		<div class="hexagon pointy"> {i}, {j}</div>
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
    .row:nth-child(even){
    }
	.hexagon {
        display: flex;
        justify-content: center;
        align-items: center;
		color: #fff;

		background: #111;
		margin: 1px;
		transition: 2s;
	}
	.hexagon.flat {
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		height: 100px;
		width: 110px;
	}
	.hexagon.pointy {
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		height: 110px;
		width: 100px;
	}
</style>
