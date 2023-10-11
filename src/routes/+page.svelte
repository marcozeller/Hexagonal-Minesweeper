<script>
	import HexagonCell from '$lib/HexagonCell.svelte';
	let size_field = 8;
	let num_mines = 5;
	let field = Array(size_field).fill(null);
	for (let i = 0; i < size_field; i++) {
		field[i] = Array(size_field).fill(null);
	}

	// fill field with placeholder objects
	for (let x = 0; x < size_field; x++) {
		for (let y = 0; y < size_field; y++) {
			field[x][y] = { state: 'hidden', content: 0 };
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
	// fill in numbers for none-mine cells
	for (let x = 0; x < size_field; x++) {
		for (let y = 0; y < size_field; y++) {
			if (field[x][y].content === 'mine') {
				continue;
			}
			// check cell to the left for mine
			if (y > 0 && field[x][y - 1].content === 'mine') {
				field[x][y].content++;
			}
			// check cell to the right for mine
			if (y < size_field - 1 && field[x][y + 1].content === 'mine') {
				field[x][y].content++;
			}
			// neighbors above and below differ for even and odd rows
			if (x % 2 == 0) {
				// for even rows, check cell above-left for mine
				if (x > 0 && field[x - 1][y].content === 'mine') {
					field[x][y].content++;
				}
				// for even rows, check cell above-right for mine
				if (x > 0 && y < size_field - 1 && field[x - 1][y + 1].content === 'mine') {
					field[x][y].content++;
				}
				// for even rows, check cell below-left for mine
				if (x < size_field - 1 && field[x + 1][y].content === 'mine') {
					field[x][y].content++;
				}
				// for even rows, check cell below-right for mine
				if (x < size_field - 1 && y < size_field - 1 && field[x + 1][y + 1].content === 'mine') {
					field[x][y].content++;
				}
			} else if (x % 2 == 1) {
				// for odd rows, check cell above-left for mine
				if (x > 0 && y > 0 && field[x - 1][y - 1].content === 'mine') {
					field[x][y].content++;
				}
				// for odd rows, check cell above-right for mine
				if (x > 0 && field[x - 1][y].content === 'mine') {
					field[x][y].content++;
				}
				// for odd rows, check cell below-left for mine
				if (x < size_field - 1 && y > 0 && field[x + 1][y-1].content === 'mine') {
					field[x][y].content++;
				}
				// for odd rows, check cell below-right for mine
				if (x < size_field - 1 && field[x + 1][y].content === 'mine') {
					field[x][y].content++;
				}
			}
		}
	}
</script>

<div class="field">
	{#each field as row, x}
		<div class="row">
			{#each row as cell, y}
				<HexagonCell content={cell.content} {x} {y} bind:state={cell.state} />
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
