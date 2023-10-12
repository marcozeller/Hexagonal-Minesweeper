<script lang="ts">
	import HexagonCell from '$lib/HexagonCell.svelte';
	let size_field: number = 8;
	let num_mines: number = 20;
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

	const get_neighbor_coordinates = (x: number, y: number) => {
		let neighbor_coordinates = [];
		// add cell to the left
		if (y > 0 && field[x][y - 1].content === 'mine') {
			neighbor_coordinates.push([x, y - 1]);
		}
		// add cell to the right
		if (y < size_field - 1 && field[x][y + 1].content === 'mine') {
			neighbor_coordinates.push([x, y + 1]);
		}
		// neighbors above and below differ for even and odd rows
		if (x % 2 == 0) {
			// for even rows, add cell above-left
			if (x > 0 && field[x - 1][y].content === 'mine') {
				neighbor_coordinates.push([x - 1, y]);
			}
			// for even rows, add cell above-right
			if (x > 0 && y < size_field - 1 && field[x - 1][y + 1].content === 'mine') {
				neighbor_coordinates.push([x - 1, y + 1]);
			}
			// for even rows, add cell below-left
			if (x < size_field - 1 && field[x + 1][y].content === 'mine') {
				neighbor_coordinates.push([x + 1, y]);
			}
			// for even rows, add cell below-right
			if (x < size_field - 1 && y < size_field - 1 && field[x + 1][y + 1].content === 'mine') {
				neighbor_coordinates.push([x + 1, y + 1]);
			}
		} else if (x % 2 == 1) {
			// for odd rows, add cell above-left
			if (x > 0 && y > 0 && field[x - 1][y - 1].content === 'mine') {
				neighbor_coordinates.push([x - 1, y - 1]);
			}
			// for odd rows, add cell above-right
			if (x > 0 && field[x - 1][y].content === 'mine') {
				neighbor_coordinates.push([x - 1, y]);
			}
			// for odd rows, add cell below-left
			if (x < size_field - 1 && y > 0 && field[x + 1][y - 1].content === 'mine') {
				neighbor_coordinates.push([x + 1, y - 1]);
			}
			// for odd rows, add cell below-right
			if (x < size_field - 1 && field[x + 1][y].content === 'mine') {
				neighbor_coordinates.push([x + 1, y]);
			}
		}
		return neighbor_coordinates;
	};

	// fill in numbers for none-mine cells
	for (let x = 0; x < size_field; x++) {
		for (let y = 0; y < size_field; y++) {
			if (field[x][y].content === 'mine') {
				continue;
			}
			let neighbor_coordinates = get_neighbor_coordinates(x, y);
			for (let i = 0; i < neighbor_coordinates.length; i++) {
				let [xi, yi] = neighbor_coordinates[i];
				if(field[xi][yi].content === 'mine'){
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
