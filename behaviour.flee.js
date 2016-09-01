require('behaviour3js')
// Creates a new class inheriting from Action
var Flee = b3.Class(b3.Action);

// Remember to set the name of the node. 
Flee.prototype.name = 'Flee';

// Sets the parameters variable to tell editor who they are
Flee.prototype.parameters = {'milliseconds': 0};

// Override the initialize method, remember to call this method on super
Flee.prototype.__Action_initialize = Flee.prototype.initialize;
Flee.prototype.initialize = function(settings) {
    settings = settings || {};

    this.__Action_initialize();
    this.endTime = settings.milliseconds || 0;
}

// Override the open method, so it can store the time when the node was
// open    
Flee.prototype.open = function(tick) {
    var startTime = (new Date()).getTime();
    tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
}

// Override the tick method
Flee.prototype.tick = function(tick) {
    var currTime = (new Date()).getTime();
    var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
    
    var source = Game.getObjectById(tick.target.memory.sourceID);
    console.log("Fleeing...");
    var harvestResult = tick.target.harvest(source);
    if(tick.target.carry.energy >= tick.target.carryCapacity){
            return b3.SUCCESS;
    }
    else if(harvestResult == ERR_NOT_IN_RANGE){
        tick.target.moveTo(source);
        return b3.RUNNING;
    }
    else if(harvestResult == OK){
        
        return b3.RUNNING;
    }
    console.log(tick.target.name+": Flee failed..");
    return b3.FAILURE;
}

module.exports = Flee;