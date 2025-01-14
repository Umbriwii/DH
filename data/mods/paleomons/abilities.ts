export const Abilities: {[abilityid: string]: ModdedAbilityData} = {

	bloodsuck: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['heal'] && move.category !== "Status") {
				this.debug('Bloodsuck boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},

		name: "Bloodsuck",
		shortDesc: "User's draining moves deal 1.3x damage.",
		desc: "The user's draining moves have their power multiplied by 1.3x.",
		rating: 3,
		num: -100,
	},

	carboniferous: {
		onModifyMovePriority: -5,
		onModifyMove(move, target) {
			if (move.type === "Bug" /*&& target.hasType("Fairy")*/) {
				(move as any).carboniferousBoosted = true;
			};
		},

		onSourceBasePowerPriority: 18,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fairy') {
				return this.chainModify(0.5);
			}
		},

		name: "Carboniferous",
		shortDesc: "User's Bug moves are super effective against Fairy-types; Fairy moves deal halved damage.",
		desc: "The user's Bug-type moves deal super effective damage against Fairy-types. Fairy-type moves targeting the user deal halved damage.",
		rating: 3,
		num: -101,
	},

	oozingtar: {
		onStart(source) {
			this.field.setTerrain('tarpit');
		},

		name: "Oozing Tar",
		shortDesc: "Automatically sets Tar Pit.",
		rating: 4,
		num: -102,
	},
	
	//
	//
	//
	//
	// Vanilla abilities start here
	//
	//
	//
	//

	mimicry: {
		inherit: true,
		condition: {
			onStart(pokemon) {
				let newType;
				switch (this.field.terrain) {
				case 'electricterrain':
					newType = 'Electric';
					break;
				case 'grassyterrain':
					newType = 'Grass';
					break;
				case 'mistyterrain':
					newType = 'Fairy';
					break;
				case 'psychicterrain':
					newType = 'Psychic';
					break;
				case 'tarpit':
					newType: 'Poison';
					break;
				}
				if (!newType || pokemon.getTypes().join() === newType || !pokemon.setType(newType)) return;
				this.add('-start', pokemon, 'typechange', newType, '[from] ability: Mimicry');
			},
		},
	},
};