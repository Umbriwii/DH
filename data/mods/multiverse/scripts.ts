export const Scripts: {[k: string]: ModdedBattleScriptsData} = {
	init: function () {
		/*Template:
		this.modData('Learnsets', 'pokemon').learnset.move = ['8L1'];
		delete this.modData('Learnsets', 'pokemon').learnset.move;*/
		//Undexited Removal
		delete this.modData('Learnsets', 'venusaur').learnset.return;
		delete this.modData('Learnsets', 'clefable').learnset.return;
		delete this.modData('Learnsets', 'venomoth').learnset.return;
		delete this.modData('Learnsets', 'victreebel').learnset.return;
		delete this.modData('Learnsets', 'golem').learnset.return;
		delete this.modData('Learnsets', 'omastar').learnset.return;
		delete this.modData('Learnsets', 'articuno').learnset.return;
		delete this.modData('Learnsets', 'mew').learnset.return;
		delete this.modData('Learnsets', 'noctowl').learnset.return;
		delete this.modData('Learnsets', 'crobat').learnset.return;
		delete this.modData('Learnsets', 'jumpluff').learnset.return;
		delete this.modData('Learnsets', 'murkrow').learnset.return;
		delete this.modData('Learnsets', 'forretress').learnset.return;
		delete this.modData('Learnsets', 'houndoom').learnset.return;
		delete this.modData('Learnsets', 'magby').learnset.return;
		delete this.modData('Learnsets', 'entei').learnset.return;
		delete this.modData('Learnsets', 'breloom').learnset.return;
		delete this.modData('Learnsets', 'hariyama').learnset.return;
		delete this.modData('Learnsets', 'sableye').learnset.return;
		delete this.modData('Learnsets', 'mawile').learnset.return;
		delete this.modData('Learnsets', 'manectric').learnset.return;
		delete this.modData('Learnsets', 'flygon').learnset.return;
		delete this.modData('Learnsets', 'regice').learnset.return;
		
		delete this.modData('Learnsets', 'venomoth').learnset.refresh;
		delete this.modData('Learnsets', 'forretress').learnset.refresh;
		delete this.modData('Learnsets', 'breloom').learnset.refresh;
		delete this.modData('Learnsets', 'hariyama').learnset.refresh;
		delete this.modData('Learnsets', 'manectric').learnset.refresh;
		
		
		//Generation 1
		this.modData('Learnsets', 'venusaur').learnset.mysticalfire = ['8L1'];
		this.modData('Learnsets', 'venusaur').learnset.slackoff = ['8L1'];
		
		delete this.modData('Learnsets', 'clefable').learnset.moonblast;
		delete this.modData('Learnsets', 'clefable').learnset.teleport;
		delete this.modData('Learnsets', 'clefairy').learnset.moonblast;
		delete this.modData('Learnsets', 'clefairy').learnset.teleport;
		
		this.modData('Learnsets', 'victreebel').learnset.flytrap = ['8L1'];
		delete this.modData('Learnsets', 'victreebel').learnset.strengthsap;
		delete this.modData('Learnsets', 'weepinbell').learnset.strengthsap;
		delete this.modData('Learnsets', 'bellsprout').learnset.strengthsap;
		
		this.modData('Learnsets', 'golem').learnset.swordsdance = ['8L1'];
		
		this.modData('Learnsets', 'omastar').learnset.recover = ['8L1'];
		this.modData('Learnsets', 'omastar').learnset.flameburst = ['8L1'];
		this.modData('Learnsets', 'omastar').learnset.thunderburst = ['8L1'];
		this.modData('Learnsets', 'omastar').learnset.leafburst = ['8L1'];
		delete this.modData('Learnsets', 'omastar').learnset.shellsmash;
		delete this.modData('Learnsets', 'omanyte').learnset.shellsmash;
		
		this.modData('Learnsets', 'articuno').learnset.focusblast = ['8L1'];
		this.modData('Learnsets', 'articuno').learnset.calmmind = ['8L1'];
		this.modData('Learnsets', 'articuno').learnset.taunt = ['8L1'];
		
		delete this.modData('Learnsets', 'mew').learnset.dragondance;
		delete this.modData('Learnsets', 'mew').learnset.icebeam;
		delete this.modData('Learnsets', 'mew').learnset.spikes;
		delete this.modData('Learnsets', 'mew').learnset.swordsdance;
		delete this.modData('Learnsets', 'mew').learnset.trick;
		
		
		//Generation 2
		this.modData('Learnsets', 'noctowl').learnset.flashcannon = ['8L1'];
		this.modData('Learnsets', 'noctowl').learnset.steelbeam = ['8L1'];
		this.modData('Learnsets', 'noctowl').learnset.metalsound = ['8L1'];
		
		this.modData('Learnsets', 'jumpluff').learnset.defog = ['8L1'];
		this.modData('Learnsets', 'jumpluff').learnset.heavyflip = ['8L1'];
		
		this.modData('Learnsets', 'murkrow').learnset.leafburst = ['8L1'];
		this.modData('Learnsets', 'murkrow').learnset.workup = ['8L1'];
		delete this.modData('Learnsets', 'murkrow').learnset.defog;
		
		this.modData('Learnsets', 'houndoom').learnset.huntdown = ['8L1'];
		delete this.modData('Learnsets', 'houndoom').learnset.nastyplot;
		delete this.modData('Learnsets', 'houndour').learnset.nastyplot;
		
		this.modData('Learnsets', 'magby').learnset.drainpunch = ['8L1'];
		
		this.modData('Learnsets', 'entei').learnset.leafburst = ['8L1'];
		delete this.modData('Learnsets', 'entei').learnset.ironhead;
		delete this.modData('Learnsets', 'entei').learnset.stompingtantrum;
		
		
		//Generation 3
		this.modData('Learnsets', 'breloom').learnset.lowswept = ['8L1'];
		delete this.modData('Learnsets', 'breloom').learnset.spore;
		
		this.modData('Learnsets', 'hariyama').learnset.ironhead = ['8L1'];
		this.modData('Learnsets', 'hariyama').learnset.drainpunch = ['8L1'];
		
		this.modData('Learnsets', 'mawile').learnset.naturesmadness = ['8L1'];
		
		delete this.modData('Learnsets', 'flygon').learnset.defog;
		
		this.modData('Learnsets', 'regice').learnset.overcharge = ['8L1'];
		this.modData('Learnsets', 'regice').learnset.flameburst = ['8L1'];
		delete this.modData('Learnsets', 'regice').learnset.rockpolish;
	},
	teambuilderConfig: {
		// for micrometas to only show custom tiers
		excludeStandardTiers: true,
		// only to specify the order of custom tiers
		customTiers: ['MV'],
	},
};