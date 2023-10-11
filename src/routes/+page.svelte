<script>
    import HexagonCell from '$lib/HexagonCell.svelte';
	let size_field = 5;
	let num_mines = 5;
	let field = Array(size_field).fill(null);
	for (let i = 0; i < size_field; i++) {
		field[i] = Array(size_field).fill(null);
	}

	// fill field with placeholder objects
	for (let i = 0; i < size_field; i++) {
		for (let j = 0; j < size_field; j++) {
			field[i][j] = { state: 'hidden', content: 0 };
		}
	}
	for (let i = 0; i < num_mines; i++) {
		let x = Math.floor(Math.random() * size_field);
		let y = Math.floor(Math.random() * size_field);

		// go back if there is already a mine at this position
		if (field[x][y].content === 'mine') {
			i--;
			continue;
		}
		field[x][y] = { state: 'hidden', content: 'mine' };
	}
</script>

<div class="field">
	{#each field as row, x}
		<div class="row">
			{#each row as cell, y}
                <HexagonCell content={cell.content} x={x} y={y} bind:state={cell.state}/>
			{/each}
		</div>
	{/each}
</div>

<style>
	.field {
		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
		flex-direction: row;
		margin-bottom: -28px;
	}
	.row:nth-child(odd) {
		margin-left: 51px;
	}
</style>
