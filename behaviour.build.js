require('behaviour3js')
// Creates a new class inheriting from Action
var Build = b3.Class(b3.Action);

// Remember to set the name of the node. 
Build.prototype.name = 'Build';

// Sets the parameters variable to tell editor who they are
Build.prototype.parameters = {'milliseconds': 0};

// Override the initialize method, remember to call this method on super
Build.prototype.__Action_initialize = Build.prototype.initialize;
Build.prototype.initialize = function(settings) {
    settings = settings || {};

    this.__Action_initialize();
    this.endTime = settings.milliseconds || 0;
}

// Override the open method, so it can store the time when the node was
// open    
Build.prototype.open = function(tick) {
    var startTime = (new Date()).getTime();
    tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
}

// Override the tick method
Build.prototype.tick = function(tick) {
    var currTime = (new Date()).getTime();
    var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
            
	// find closest constructionSite
	var constructionSite = tick.target.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
	// if one is found
	if (constructionSite != undefined) {	
		// try to build, if the constructionSite is not in range
		if (tick.target.build(constructionSite) == ERR_NOT_IN_RANGE) {
			// move towards the constructionSite
			tick.target.moveTo(constructionSite);
		}
		
		if(tick.target.carry.energy > 0){
			return b3.RUNNING;
		}
		else{
			return b3.SUCCESS;
		}
	}
	else{
		return b3.FAILURE;
	}
}

module.exports = Build;