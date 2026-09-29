import type { Choice, GameResult } from './types';

const choices: Choice[] = ['rock', 'paper', 'scissors'];

export function getHouseChoice(): Choice {
	const index = Math.floor(Math.random() * choices.length);

	return choices[index];
}

export function getGameResult(player: Choice, house: Choice): GameResult {
	if (player === house) {
		return 'draw';
	}

	if (
		(player === 'rock' && house === 'scissors') ||
		(player === 'paper' && house === 'rock') ||
		(player === 'scissors' && house === 'paper')
	) {
		return 'win';
	}

	return 'lose';
}
