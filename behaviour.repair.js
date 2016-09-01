require('behaviour3js')
// Creates a new class inheriting from Action
var Repair = b3.Class(b3.Action);

// Remember to set the name of the node. 
Repair.prototype.name = 'Repair';

// Sets the parameters variable to tell editor who they are
Repair.prototype.parameters = {'milliseconds': 0};

// Override the initialize method, remember to call this method on super
Repair.prototype.__Action_initialize = Repair.prototype.initialize;
Repair.prototype.initialize = function(settings) {
    settings = settings || {};

    this.__Action_initialize();
    this.endTime = settings.milliseconds || 0;
}

// Override the open method, so it can store the time when the node was
// open    
Repair.prototype.open = function(tick) {
    var startTime = (new Date()).getTime();
    tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
}

// Override the tick method
Repair.prototype.tick = function(tick) {
    var currTime = (new Date()).getTime();
    var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
            
	// find closest structure with less than max hits
	// Exclude walls because they have way too many max hits and would keep
	// our repairers busy forever. We have to find a solution for that later.
	var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
		filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
	});

	// if we find one
	if (structure != undefined) {
		if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
			// move towards it
			creep.moveTo(structure);
		}
	}
	else{
		//Nothing to repair..
		return b3.FAILURE;
	}
	
	if(tick.target.carry.energy > 0){
		return b3.RUNNING;
	}
	else{
		return b3.SUCCESS;
	}
}

module.exports = Repair;