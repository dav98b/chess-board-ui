import { Component, OnInit } from '@angular/core';
import { Mapping } from './square-mapping/mapping';
import { SquareMappingService } from './square-mapping/square-mapping.service';
import { Square } from './square-mapping/square';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	squares: Square[];

	constructor(private _mappingService: SquareMappingService) {
	}

	ngOnInit(): void {
		this.squares = this._mappingService.sortSquares(Mapping.BER_LEF);
	}

	retrieveColor(rank: number, file: number): string {
		return this.isSquareWhite(rank, file) ? "white" : "black";
	}

	private isSquareWhite(rank: number, file: number): boolean {
		const rankAndFileEven: boolean = rank % 2 == 0 && file % 2 == 0;
		const rankAndFileOdd: boolean = rank % 2 == 1 && file % 2 == 1;
		return rankAndFileEven || rankAndFileOdd;
	}

	onSquareClick(square: Square) {
		console.log(square.name);
	}

}
